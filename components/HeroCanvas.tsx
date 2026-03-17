'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // ── Renderer ──────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene & Camera ────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, W / H, 0.1, 1000);
    camera.position.z = 35;

    // ── Particles (neural network nodes) ─────────────────────────────
    const COUNT = 120;
    const posArr = new Float32Array(COUNT * 3);
    const vel: { x: number; y: number }[] = [];

    for (let i = 0; i < COUNT; i++) {
      posArr[i * 3] = (Math.random() - 0.5) * 60;
      posArr[i * 3 + 1] = (Math.random() - 0.5) * 35;
      posArr[i * 3 + 2] = (Math.random() - 0.5) * 15;
      vel.push({
        x: (Math.random() - 0.5) * 0.018,
        y: (Math.random() - 0.5) * 0.012,
      });
    }

    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', new THREE.BufferAttribute(posArr.slice(), 3));

    const ptMat = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.22,
      transparent: true,
      opacity: 0.85,
    });
    const points = new THREE.Points(ptGeo, ptMat);
    scene.add(points);

    // ── Connection lines ──────────────────────────────────────────────
    const MAX_LINES = COUNT * COUNT;
    const linePos = new Float32Array(MAX_LINES * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
    lineGeo.setDrawRange(0, 0);

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.18,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // ── Floating wireframe geometries ─────────────────────────────────
    // Torus (top-right)
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(6, 0.6, 8, 60),
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.25 })
    );
    torus.position.set(18, 8, -8);
    scene.add(torus);

    // Octahedron (bottom-left)
    const octa = new THREE.Mesh(
      new THREE.OctahedronGeometry(4, 0),
      new THREE.MeshBasicMaterial({ color: 0x10b981, wireframe: true, transparent: true, opacity: 0.3 })
    );
    octa.position.set(-20, -10, -5);
    scene.add(octa);

    // Icosahedron (floating center-left)
    const ico = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.5, 1),
      new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.35 })
    );
    ico.position.set(-10, 6, 5);
    scene.add(ico);

    // Small torus knot (center-right)
    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(2.5, 0.5, 80, 10),
      new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true, transparent: true, opacity: 0.2 })
    );
    knot.position.set(12, -8, -3);
    scene.add(knot);

    // ── Mouse parallax ────────────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── Animation loop ────────────────────────────────────────────────
    let raf: number;
    const MAX_DIST = 14;
    const currentPos = posArr.slice();

    const animate = () => {
      raf = requestAnimationFrame(animate);

      // Move particles
      for (let i = 0; i < COUNT; i++) {
        currentPos[i * 3] += vel[i].x;
        currentPos[i * 3 + 1] += vel[i].y;
        if (Math.abs(currentPos[i * 3]) > 30) vel[i].x *= -1;
        if (Math.abs(currentPos[i * 3 + 1]) > 18) vel[i].y *= -1;
      }
      (ptGeo.attributes.position as THREE.BufferAttribute).array.set(currentPos);
      ptGeo.attributes.position.needsUpdate = true;

      // Update connection lines
      let idx = 0;
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = currentPos[i * 3] - currentPos[j * 3];
          const dy = currentPos[i * 3 + 1] - currentPos[j * 3 + 1];
          const dz = currentPos[i * 3 + 2] - currentPos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < MAX_DIST) {
            linePos[idx++] = currentPos[i * 3];
            linePos[idx++] = currentPos[i * 3 + 1];
            linePos[idx++] = currentPos[i * 3 + 2];
            linePos[idx++] = currentPos[j * 3];
            linePos[idx++] = currentPos[j * 3 + 1];
            linePos[idx++] = currentPos[j * 3 + 2];
          }
        }
      }
      lineGeo.setDrawRange(0, idx / 3);
      (lineGeo.attributes.position as THREE.BufferAttribute).array.set(linePos);
      lineGeo.attributes.position.needsUpdate = true;

      // Rotate geometries
      torus.rotation.x += 0.004;
      torus.rotation.y += 0.003;
      octa.rotation.x += 0.005;
      octa.rotation.y += 0.007;
      ico.rotation.y += 0.008;
      ico.rotation.z += 0.003;
      knot.rotation.x += 0.006;
      knot.rotation.y += 0.004;

      // Camera parallax
      camera.position.x += (mouse.x * 4 - camera.position.x) * 0.04;
      camera.position.y += (mouse.y * 2.5 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // ── Resize handler ────────────────────────────────────────────────
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
