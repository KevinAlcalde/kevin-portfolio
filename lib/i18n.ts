export type Lang = 'es' | 'en' | 'pt' | 'de';

export const COUNTRY_TO_LANG: Record<string, Lang> = {
  // Spanish-speaking
  AR:'es', ES:'es', MX:'es', CO:'es', CL:'es', PE:'es', VE:'es', EC:'es',
  BO:'es', PY:'es', UY:'es', CR:'es', PA:'es', DO:'es', GT:'es', HN:'es',
  SV:'es', NI:'es', CU:'es', PR:'es',
  // Portuguese
  BR:'pt', PT:'pt', MZ:'pt', AO:'pt',
  // German
  DE:'de', AT:'de',
  // English (default for everything else, set below)
};

export function countryToLang(code: string): Lang {
  return COUNTRY_TO_LANG[code?.toUpperCase()] ?? 'en';
}

export interface Translations {
  // Nav
  nav_about: string; nav_skills: string; nav_projects: string;
  nav_exp: string; nav_achievements: string; nav_contact: string;
  // Hero
  hero_roles: string[];
  hero_line1: string; hero_line2: string; hero_line3: string;
  hero_cta_projects: string; hero_cta_contact: string;
  hero_stat_languages: string; hero_scroll: string;
  // About
  sec_about: string;
  about_bio1: string; about_bio2: string; about_bio3: string;
  about_loc: string; about_status: string;
  about_lang_title: string; about_edu_title: string;
  // Skills
  sec_skills: string; skills_sub: string;
  cat_frontend: string; cat_backend: string; cat_blockchain: string;
  cat_hardware: string; cat_cloud: string; cat_ai: string;
  cat_design: string; cat_mgmt: string;
  // Projects
  sec_projects: string; projects_sub: string;
  p_cloudfarm: string; p_mullder: string; p_greenconn: string;
  p_bunker: string; p_upfirmware: string; p_scara: string;
  p_openwifi: string; p_canopiis: string; p_aquagened: string;
  p_ethkipu: string; p_signal: string;
  // GitHub
  sec_github: string;
  // Experience
  sec_exp: string;
  // Achievements
  sec_ach: string; ach_courses: string;
  // Contact
  sec_contact: string; contact_desc: string; contact_cta: string;
  contact_footer1: string; contact_footer2: string;
  // Widget
  w_scanning: string; w_lost: string;
}

const es: Translations = {
  nav_about:'sobre', nav_skills:'habilidades', nav_projects:'proyectos',
  nav_exp:'exp', nav_achievements:'logros', nav_contact:'contacto',

  hero_roles:['Electronics_Engineer','Blockchain_Dev','IoT_Architect','Startup_Founder','Full_Stack_Dev','AI_&_Data_Sci'],
  hero_line1:'Ing. Electrónica UTN + Lic. IA Siglo 21',
  hero_line2:'Firmware → Smart Contracts → WebGL',
  hero_line3:'5 startups · NASA 2do lugar · YLAI 2024',
  hero_cta_projects:'[ PROYECTOS ]', hero_cta_contact:'[ CONTACTO ]',
  hero_stat_languages:'IDIOMAS', hero_scroll:'SCROLL_DOWN',

  sec_about:'Sobre mí',
  about_bio1:'Soy <hi>Kevin Alejandro Alcalde</hi>, ingeniero electrónico (UTN Mendoza, 4to año) y estudiante de Licenciatura en IA & Robótica (Siglo 21).',
  about_bio2:'Me muevo entre hardware y software: diseño firmware para ESP8266, controlo robots SCARA con G-code, escribo smart contracts en Solidity y construyo workflows de IA con n8n + OpenAI. Mi hilo conductor es la <green>tecnología sostenible</green>.',
  about_bio3:'Presidente de JCI Mendoza 2023, 2do lugar NASA Space Apps 2019 y seleccionado por el <text>Departamento de Estado de EE.UU.</text> para el programa <hi>YLAI 2024</hi>.',
  about_loc:'Maipú, Mendoza · ARG', about_status:'DISPONIBLE',
  about_lang_title:'Idiomas', about_edu_title:'Educación',

  sec_skills:'Stack Técnico', skills_sub:'De firmware embebido a dApps en Ethereum.',
  cat_frontend:'Frontend & 3D', cat_backend:'Backend & Automatización',
  cat_blockchain:'Blockchain & Web3', cat_hardware:'Hardware & IoT',
  cat_cloud:'Cloud & DevOps', cat_ai:'IA & Datos',
  cat_design:'Diseño & Producto', cat_mgmt:'Gestión',

  sec_projects:'Proyectos', projects_sub:'Startups, repos open-source, hardware y blockchain.',
  p_cloudfarm:'Forraje verde hidropónico con IoT. Control de temperatura, humedad y microaspersión. Reducción 50–70% del consumo hídrico.',
  p_mullder:'Trazabilidad de residuos orgánicos en Ethereum. Smart contracts para accountability ambiental on-chain.',
  p_greenconn:'Plataforma directa productor→consumidor de frutas y verduras en Mendoza. Delivery semanal, bolsones personalizados.',
  p_bunker:'Evolution API + n8n + OpenAI Whisper + GPT-4o-mini + PostgreSQL + Redis en Docker. Asistente de voz IA para WhatsApp.',
  p_upfirmware:'Sistema de OTA para dispositivos IoT sin exponer puertos del router. Arquitectura segura para updates en campo.',
  p_scara:'Control de robot SCARA via G-code y Arduino. Cinemática directa e inversa, control de servos y steppers.',
  p_openwifi:'Monitoreo de dispositivos WiFi con tracking de IPs y MACs. Analytics de conectividad para redes locales.',
  p_canopiis:'Hidroponia agrícola con oráculos Chainlink para datos ambientales on-chain. Agricultura de precisión descentralizada.',
  p_aquagened:'Tecnología educativa en purificación de agua y sistemas acuáticos. Presentado a startup accelerators internacionales.',
  p_ethkipu:'Bootcamp Ethereum Kipu LATAM. Contratos inteligentes, DeFi básico y exploración de protocolos Layer 2.',
  p_signal:'2do puesto provincial · NASA Space Apps Challenge. Equipo "Avengers of Earth". Análisis de señales satelitales para monitoreo ambiental.',

  sec_github:'GitHub',
  sec_exp:'Experiencia',
  sec_ach:'Logros', ach_courses:'Cursos & Certificaciones',

  sec_contact:'Contacto',
  contact_desc:'Busco oportunidades en ingeniería electrónica, desarrollo web/Web3 o proyectos de impacto. También abierto a colaboraciones, mentoring y open-source.',
  contact_cta:'Escribime →',
  contact_footer1:'Kevin Alejandro Alcalde · Maipú, Mendoza, Argentina',
  contact_footer2:'Next.js · Three.js · WebGL · GLSL',

  w_scanning:'ESCANEANDO…', w_lost:'SEÑAL PERDIDA',
};

const en: Translations = {
  nav_about:'about', nav_skills:'skills', nav_projects:'projects',
  nav_exp:'exp', nav_achievements:'achieve', nav_contact:'contact',

  hero_roles:['Electronics_Engineer','Blockchain_Dev','IoT_Architect','Startup_Founder','Full_Stack_Dev','AI_&_Data_Sci'],
  hero_line1:'Electronics Eng. UTN + AI & Robotics Degree Siglo 21',
  hero_line2:'Firmware → Smart Contracts → WebGL',
  hero_line3:'5 startups · NASA 2nd place · YLAI 2024',
  hero_cta_projects:'[ PROJECTS ]', hero_cta_contact:'[ CONTACT ]',
  hero_stat_languages:'LANGUAGES', hero_scroll:'SCROLL_DOWN',

  sec_about:'About me',
  about_bio1:'I\'m <hi>Kevin Alejandro Alcalde</hi>, electronics engineering student (UTN Mendoza, 4th year) and AI & Robotics undergraduate (Siglo 21).',
  about_bio2:'I work across hardware and software: I design firmware for ESP8266, control SCARA robots with G-code, write smart contracts in Solidity, and build AI workflows with n8n + OpenAI. My throughline is <green>sustainable technology</green>.',
  about_bio3:'President of JCI Mendoza 2023, 2nd place NASA Space Apps 2019, and selected by the <text>U.S. Department of State</text> for the <hi>YLAI 2024</hi> program.',
  about_loc:'Maipú, Mendoza · ARG', about_status:'AVAILABLE',
  about_lang_title:'Languages', about_edu_title:'Education',

  sec_skills:'Tech Stack', skills_sub:'From embedded firmware to Ethereum dApps.',
  cat_frontend:'Frontend & 3D', cat_backend:'Backend & Automation',
  cat_blockchain:'Blockchain & Web3', cat_hardware:'Hardware & IoT',
  cat_cloud:'Cloud & DevOps', cat_ai:'AI & Data',
  cat_design:'Design & Product', cat_mgmt:'Management',

  sec_projects:'Projects', projects_sub:'Startups, open-source repos, hardware and blockchain.',
  p_cloudfarm:'Hydroponic green fodder with IoT. Temperature, humidity and micro-sprinkler control. 50–70% reduction in water consumption.',
  p_mullder:'Organic waste traceability on Ethereum. Smart contracts for on-chain environmental accountability.',
  p_greenconn:'Direct producer→consumer platform for fruits and vegetables in Mendoza. Weekly delivery, custom baskets.',
  p_bunker:'Evolution API + n8n + OpenAI Whisper + GPT-4o-mini + PostgreSQL + Redis on Docker. AI voice assistant for WhatsApp.',
  p_upfirmware:'OTA system for IoT devices without exposing router ports. Secure field-update architecture.',
  p_scara:'SCARA robot control via G-code and Arduino. Forward/inverse kinematics, servo and stepper control.',
  p_openwifi:'WiFi device monitoring with IP/MAC tracking. Connectivity analytics for local networks.',
  p_canopiis:'Agricultural hydroponics with Chainlink oracles for on-chain environmental data. Decentralized precision farming.',
  p_aquagened:'Educational technology in water purification and aquatic systems. Pitched to international startup accelerators.',
  p_ethkipu:'Ethereum Kipu LATAM bootcamp. Smart contracts, basic DeFi and Layer 2 protocol exploration.',
  p_signal:'2nd place (provincial) · NASA Space Apps Challenge. "Avengers of Earth" team. Satellite signal analysis for environmental monitoring.',

  sec_github:'GitHub',
  sec_exp:'Experience',
  sec_ach:'Achievements', ach_courses:'Courses & Certifications',

  sec_contact:'Contact',
  contact_desc:'Looking for opportunities in electronics engineering, web/Web3 development or impact projects. Also open to collaborations, mentoring and open-source.',
  contact_cta:'Get in touch →',
  contact_footer1:'Kevin Alejandro Alcalde · Maipú, Mendoza, Argentina',
  contact_footer2:'Next.js · Three.js · WebGL · GLSL',

  w_scanning:'SCANNING…', w_lost:'SIGNAL LOST',
};

const pt: Translations = {
  nav_about:'sobre', nav_skills:'habilidades', nav_projects:'projetos',
  nav_exp:'exp', nav_achievements:'conquistas', nav_contact:'contato',

  hero_roles:['Electronics_Engineer','Blockchain_Dev','IoT_Architect','Startup_Founder','Full_Stack_Dev','AI_&_Data_Sci'],
  hero_line1:'Eng. Eletrônica UTN + Lic. IA & Robótica Siglo 21',
  hero_line2:'Firmware → Smart Contracts → WebGL',
  hero_line3:'5 startups · NASA 2º lugar · YLAI 2024',
  hero_cta_projects:'[ PROJETOS ]', hero_cta_contact:'[ CONTATO ]',
  hero_stat_languages:'IDIOMAS', hero_scroll:'SCROLL_DOWN',

  sec_about:'Sobre mim',
  about_bio1:'Sou <hi>Kevin Alejandro Alcalde</hi>, estudante de engenharia eletrônica (UTN Mendoza, 4º ano) e graduando em IA & Robótica (Siglo 21).',
  about_bio2:'Trabalho entre hardware e software: projeto firmware para ESP8266, controlo robôs SCARA com G-code, escrevo smart contracts em Solidity e construo workflows de IA com n8n + OpenAI. Meu fio condutor é a <green>tecnologia sustentável</green>.',
  about_bio3:'Presidente da JCI Mendoza 2023, 2º lugar NASA Space Apps 2019, e selecionado pelo <text>Departamento de Estado dos EUA</text> para o programa <hi>YLAI 2024</hi>.',
  about_loc:'Maipú, Mendoza · ARG', about_status:'DISPONÍVEL',
  about_lang_title:'Idiomas', about_edu_title:'Educação',

  sec_skills:'Stack Técnico', skills_sub:'De firmware embarcado a dApps no Ethereum.',
  cat_frontend:'Frontend & 3D', cat_backend:'Backend & Automação',
  cat_blockchain:'Blockchain & Web3', cat_hardware:'Hardware & IoT',
  cat_cloud:'Cloud & DevOps', cat_ai:'IA & Dados',
  cat_design:'Design & Produto', cat_mgmt:'Gestão',

  sec_projects:'Projetos', projects_sub:'Startups, repos open-source, hardware e blockchain.',
  p_cloudfarm:'Forragem hidropônica verde com IoT. Controle de temperatura, umidade e microaspersão. Redução de 50–70% no consumo de água.',
  p_mullder:'Rastreabilidade de resíduos orgânicos no Ethereum. Smart contracts para responsabilidade ambiental on-chain.',
  p_greenconn:'Plataforma direta produtor→consumidor de frutas e verduras em Mendoza. Entrega semanal, cestas personalizadas.',
  p_bunker:'Evolution API + n8n + OpenAI Whisper + GPT-4o-mini + PostgreSQL + Redis no Docker. Assistente de voz IA para WhatsApp.',
  p_upfirmware:'Sistema OTA para dispositivos IoT sem expor portas do roteador. Arquitetura segura para atualizações em campo.',
  p_scara:'Controle de robô SCARA via G-code e Arduino. Cinemática direta e inversa, controle de servos e steppers.',
  p_openwifi:'Monitoramento de dispositivos WiFi com rastreamento de IPs e MACs. Analytics de conectividade para redes locais.',
  p_canopiis:'Hidroponia agrícola com oráculos Chainlink para dados ambientais on-chain. Agricultura de precisão descentralizada.',
  p_aquagened:'Tecnologia educacional em purificação de água e sistemas aquáticos. Apresentado a aceleradoras internacionais.',
  p_ethkipu:'Bootcamp Ethereum Kipu LATAM. Smart contracts, DeFi básico e exploração de protocolos Layer 2.',
  p_signal:'2º lugar (provincial) · NASA Space Apps Challenge. Equipe "Avengers of Earth". Análise de sinais satelitais para monitoramento ambiental.',

  sec_github:'GitHub',
  sec_exp:'Experiência',
  sec_ach:'Conquistas', ach_courses:'Cursos & Certificações',

  sec_contact:'Contato',
  contact_desc:'Procuro oportunidades em engenharia eletrônica, desenvolvimento web/Web3 ou projetos de impacto. Aberto a colaborações, mentoring e open-source.',
  contact_cta:'Entre em contato →',
  contact_footer1:'Kevin Alejandro Alcalde · Maipú, Mendoza, Argentina',
  contact_footer2:'Next.js · Three.js · WebGL · GLSL',

  w_scanning:'ESCANEANDO…', w_lost:'SINAL PERDIDO',
};

const de: Translations = {
  nav_about:'über mich', nav_skills:'skills', nav_projects:'projekte',
  nav_exp:'erfahrung', nav_achievements:'erfolge', nav_contact:'kontakt',

  hero_roles:['Electronics_Engineer','Blockchain_Dev','IoT_Architect','Startup_Founder','Full_Stack_Dev','AI_&_Data_Sci'],
  hero_line1:'Elektrotechnik UTN + Studium KI & Robotik Siglo 21',
  hero_line2:'Firmware → Smart Contracts → WebGL',
  hero_line3:'5 Startups · NASA 2. Platz · YLAI 2024',
  hero_cta_projects:'[ PROJEKTE ]', hero_cta_contact:'[ KONTAKT ]',
  hero_stat_languages:'SPRACHEN', hero_scroll:'SCROLL_DOWN',

  sec_about:'Über mich',
  about_bio1:'Ich bin <hi>Kevin Alejandro Alcalde</hi>, Elektrotechnik-Student (UTN Mendoza, 4. Jahr) und Bachelor-Student in KI & Robotik (Siglo 21).',
  about_bio2:'Ich bewege mich zwischen Hardware und Software: Ich entwickle Firmware für ESP8266, steuere SCARA-Roboter mit G-code, schreibe Smart Contracts in Solidity und baue KI-Workflows mit n8n + OpenAI. Mein roter Faden ist <green>nachhaltige Technologie</green>.',
  about_bio3:'Präsident von JCI Mendoza 2023, 2. Platz NASA Space Apps 2019, ausgewählt vom <text>US-Außenministerium</text> für das <hi>YLAI 2024</hi> Programm.',
  about_loc:'Maipú, Mendoza · ARG', about_status:'VERFÜGBAR',
  about_lang_title:'Sprachen', about_edu_title:'Ausbildung',

  sec_skills:'Tech Stack', skills_sub:'Von eingebetteter Firmware zu Ethereum-dApps.',
  cat_frontend:'Frontend & 3D', cat_backend:'Backend & Automatisierung',
  cat_blockchain:'Blockchain & Web3', cat_hardware:'Hardware & IoT',
  cat_cloud:'Cloud & DevOps', cat_ai:'KI & Daten',
  cat_design:'Design & Produkt', cat_mgmt:'Management',

  sec_projects:'Projekte', projects_sub:'Startups, Open-Source-Repos, Hardware und Blockchain.',
  p_cloudfarm:'Hydroponisches Grünfutter mit IoT. Temperatur-, Feuchtigkeits- und Mikro-Sprühsteuerung. 50–70% Reduktion des Wasserverbrauchs.',
  p_mullder:'Rückverfolgbarkeit organischer Abfälle auf Ethereum. Smart Contracts für On-Chain-Umweltverantwortung.',
  p_greenconn:'Direktplattform Erzeuger→Verbraucher für Obst und Gemüse in Mendoza. Wöchentliche Lieferung, individuelle Körbe.',
  p_bunker:'Evolution API + n8n + OpenAI Whisper + GPT-4o-mini + PostgreSQL + Redis in Docker. KI-Sprachassistent für WhatsApp.',
  p_upfirmware:'OTA-System für IoT-Geräte ohne Router-Port-Exposition. Sichere Architektur für Feld-Updates.',
  p_scara:'SCARA-Robotersteuerung via G-code und Arduino. Vorwärts-/Rückwärtskinematik, Servo- und Schrittmotorsteuerung.',
  p_openwifi:'WiFi-Geräteüberwachung mit IP/MAC-Tracking. Konnektivitätsanalyse für lokale Netzwerke.',
  p_canopiis:'Landwirtschaftliche Hydroponik mit Chainlink-Orakeln für On-Chain-Umweltdaten. Dezentrale Präzisionslandwirtschaft.',
  p_aquagened:'Bildungstechnologie in Wasseraufbereitung und Wassersystemen. Bei internationalen Startup-Acceleratoren präsentiert.',
  p_ethkipu:'Ethereum Kipu LATAM Bootcamp. Smart Contracts, DeFi-Grundlagen und Layer-2-Protokollerkundung.',
  p_signal:'2. Platz (Provinz) · NASA Space Apps Challenge. Team "Avengers of Earth". Satellitensignalanalyse für Umweltmonitoring.',

  sec_github:'GitHub',
  sec_exp:'Erfahrung',
  sec_ach:'Erfolge', ach_courses:'Kurse & Zertifikate',

  sec_contact:'Kontakt',
  contact_desc:'Ich suche Möglichkeiten in Elektrotechnik, Web/Web3-Entwicklung oder Impact-Projekten. Offen für Zusammenarbeit, Mentoring und Open-Source.',
  contact_cta:'Schreib mir →',
  contact_footer1:'Kevin Alejandro Alcalde · Maipú, Mendoza, Argentinien',
  contact_footer2:'Next.js · Three.js · WebGL · GLSL',

  w_scanning:'SCANNEN…', w_lost:'SIGNAL VERLOREN',
};

export const TRANSLATIONS: Record<Lang, Translations> = { es, en, pt, de };
