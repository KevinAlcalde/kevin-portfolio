'use client';

/**
 * Full-screen WebGL fragment shader — FBM domain-warping (Inigo Quilez technique).
 * Creates a dark, flowing mathematical landscape as the site background.
 * Very much in the spirit of acko.net's visual philosophy.
 */

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const VERT = /* glsl */ `
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const FRAG = /* glsl */ `
precision highp float;

uniform float uTime;
uniform vec2  uResolution;
uniform vec2  uMouse;

// ── Value noise ──────────────────────────────────
float hash(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a,b,f.x), mix(c,d,f.x), f.y);
}

// ── Fractal Brownian Motion ──────────────────────
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 7; i++) {
    v += a * vnoise(p);
    p  = rot * p;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  float t  = uTime * 0.08;

  // Subtle mouse influence
  vec2 mouse = uMouse / uResolution;
  vec2 toM   = uv - mouse;
  float mDist = length(toM);
  uv += (toM / (mDist + 0.4)) * 0.012;

  // ── Domain-warped FBM (Quilez 2003) ──────────────
  vec2 q = vec2(
    fbm(uv + t * 0.5),
    fbm(uv + vec2(5.2, 1.3))
  );

  vec2 r = vec2(
    fbm(uv + 4.0 * q + vec2(1.7 + t * 0.15, 9.2)),
    fbm(uv + 4.0 * q + vec2(8.3 + t * 0.13,  2.8))
  );

  float f = fbm(uv + 4.0 * r + t * 0.05);

  // ── Military dark palette ────────────────────────
  // Base: near-black with olive-khaki undertone
  vec3 col = mix(
    vec3(0.030, 0.032, 0.028),   // tactical black (slight olive)
    vec3(0.048, 0.052, 0.030),   // dark olive
    clamp(f * 2.0, 0.0, 1.0)
  );
  col = mix(col,
    vec3(0.065, 0.075, 0.035),   // army green mid
    clamp(f * f * 5.0, 0.0, 1.0)
  );
  col = mix(col,
    vec3(0.085, 0.095, 0.042),   // olive highlight
    clamp(pow(f, 4.0) * 9.0, 0.0, 1.0)
  );

  // Khaki/gold wisps at detail areas
  float wisps = vnoise(uv * 4.5 + t * 0.4 + r.x * 2.0);
  col += vec3(0.030, 0.026, 0.006) * pow(clamp(wisps, 0.0, 1.0), 3.0) * 1.6;

  // Field brown undertones at warp peaks
  float peaks = clamp((f - 0.55) * 5.0, 0.0, 1.0);
  col += vec3(0.025, 0.018, 0.008) * peaks;

  // Vignette
  float vig = 1.0 - 0.55 * dot(uv - 0.5, uv - 0.5) * 2.8;
  col *= clamp(vig, 0.0, 1.0);

  gl_FragColor = vec4(col, 1.0);
}
`;

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // ── Renderer ───────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // cap for perf
    renderer.setSize(W, H);
    mount.appendChild(renderer.domElement);

    // ── Orthographic full-screen setup ────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geo    = new THREE.PlaneGeometry(2, 2);
    const mat    = new THREE.ShaderMaterial({
      vertexShader:   VERT,
      fragmentShader: FRAG,
      uniforms: {
        uTime:       { value: 0 },
        uResolution: { value: new THREE.Vector2(W, H) },
        uMouse:      { value: new THREE.Vector2(W / 2, H / 2) },
      },
      depthWrite: false,
      depthTest:  false,
    });
    scene.add(new THREE.Mesh(geo, mat));

    // ── Mouse ──────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      mat.uniforms.uMouse.value.set(e.clientX, H - e.clientY);
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── Resize ─────────────────────────────────────
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      mat.uniforms.uResolution.value.set(w, h);
    };
    window.addEventListener('resize', onResize);

    // ── Loop ───────────────────────────────────────
    let raf: number;
    const clock = new THREE.Clock();
    const tick = () => {
      raf = requestAnimationFrame(tick);
      mat.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
      mat.dispose();
      geo.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
