import { useEffect, useRef, useState } from 'react';

/**
 * BELENTANI // JUDAS ERA - OMEGA CORE
 * Experiencia web inmersiva "modo dios" con planeta 3D, portal de diamantes,
 * estudio de herramientas IA y chat interactivo.
 * 
 * Diseño: Aetherpunk Hyperreal
 * - Negro absoluto + rojo neón + oro sagrado
 * - GSAP + Three.js + Tone.js
 * - Narrativa interactiva profunda
 */

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);
  const [chatOpen, setChatOpen] = useState(true);
  const [messages, setMessages] = useState<Array<{ type: string; text: string }>>([
    { type: 'system', text: '[ SYSTEM ONLINE ] // BELENTANI CREATIVE OS v3.0' },
    { type: 'ai', text: 'La traición es el input. La voz es el output.' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const cursorCrossRef = useRef<HTMLDivElement>(null);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  // Boot sequence
  useEffect(() => {
    const bootScreen = document.getElementById('boot-screen');
    if (!bootScreen) return;

    const bootLog = bootScreen.querySelector('.boot-log') as HTMLElement;
    const logs = [
      '[ INITIALIZING BELENTANI CORE ]',
      '[ LOADING JUDAS FRAGMENTS ]',
      '[ ACTIVATING AETHERPUNK INTERFACE ]',
      '[ SYNCING FREQUENCY NETWORK ]',
      '[ PORTAL SYSTEMS READY ]',
      '[ OMEGA SEQUENCE INITIATED ]'
    ];

    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < logs.length) {
        const line = document.createElement('div');
        line.textContent = logs[logIndex];
        bootLog?.appendChild(line);
        logIndex++;
      } else {
        clearInterval(logInterval);
        setTimeout(() => {
          bootScreen.classList.add('hidden');
          setBootComplete(true);
        }, 500);
      }
    }, 300);

    return () => clearInterval(logInterval);
  }, []);

  // Cursor personalizado
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = e.clientX + 'px';
        cursorDotRef.current.style.top = e.clientY + 'px';
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.left = e.clientX + 'px';
        cursorOutlineRef.current.style.top = e.clientY + 'px';
      }
      if (cursorCrossRef.current) {
        cursorCrossRef.current.style.left = e.clientX + 'px';
        cursorCrossRef.current.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll trigger animations
  useEffect(() => {
    if (!bootComplete) return;

    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.5 });
    tl.to('.hero-pre-title', { opacity: 1, y: 0, duration: 1 })
      .to('.hero-title', { opacity: 1, y: 0, duration: 1.5 }, '-=0.5')
      .to('.hero-subtitle', { opacity: 1, y: 0, duration: 1 }, '-=0.8')
      .to('.cta-btn', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6');

    // Section animations
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1
        },
        opacity: 1
      });
    });

    // Tool cards animation
    gsap.to('.tool-card', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.02,
      scrollTrigger: {
        trigger: '#studio',
        start: 'top 70%'
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, [bootComplete]);

  // Three.js planeta de fondo
  useEffect(() => {
    if (!bootComplete) return;

    const THREE = (window as any).THREE;
    if (!THREE) return;

    const canvas = document.getElementById('webgl-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Planeta con shader personalizado
    const planetGeo = new THREE.IcosahedronGeometry(20, 128);
    const planetMat = new THREE.MeshPhysicalMaterial({
      color: 0x330011,
      metalness: 0.4,
      roughness: 0.5,
      emissive: 0x660033,
      emissiveIntensity: 0.4,
      wireframe: false,
      transmission: 0.1,
      thickness: 0.5,
      ior: 1.5
    });
    const planet = new THREE.Mesh(planetGeo, planetMat);
    scene.add(planet);

    // Anillo alrededor del planeta
    const ringGeo = new THREE.RingGeometry(25, 35, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff003c,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // Luces
    const ambientLight = new THREE.AmbientLight(0x404040, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff003c, 3, 200);
    pointLight.position.set(30, 30, 30);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x00ffff, 2.5, 200);
    pointLight2.position.set(-30, -20, 30);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffd700, 1.5, 150);
    pointLight3.position.set(0, -30, -30);
    scene.add(pointLight3);

    // Estrellas
    const starsGeo = new THREE.BufferGeometry();
    const starCount = 3000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 300;
      positions[i + 1] = (Math.random() - 0.5) * 300;
      positions[i + 2] = (Math.random() - 0.5) * 300;
      
      const c = Math.random();
      if (c > 0.95) {
        colors[i] = 1; colors[i + 1] = 0; colors[i + 2] = 0.2; // Rojo
      } else if (c > 0.9) {
        colors[i] = 1; colors[i + 1] = 0.8; colors[i + 2] = 0; // Oro
      } else {
        colors[i] = 1; colors[i + 1] = 1; colors[i + 2] = 1; // Blanco
      }
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starsGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const starsMat = new THREE.PointsMaterial({ 
      size: 0.5, 
      vertexColors: true, 
      opacity: 0.8,
      transparent: true,
      sizeAttenuation: true
    });
    const stars = new THREE.Points(starsGeo, starsMat);
    scene.add(stars);

    camera.position.z = 60;

    let mouseX = 0, mouseY = 0, scrollProgress = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener('scroll', () => {
      scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    });

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      
      planet.rotation.x += 0.0003;
      planet.rotation.y += 0.0005;
      ring.rotation.z += 0.0002;
      stars.rotation.y += 0.00005;
      
      camera.position.x += (mouseX * 8 - camera.position.x) * 0.03;
      camera.position.y += (mouseY * 8 - camera.position.y) * 0.03;
      camera.position.z = 60 - scrollProgress * 30;
      camera.lookAt(planet.position);
      
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [bootComplete]);

  // Chat con códigos secretos
  const handleChatSend = () => {
    if (!chatInput.trim()) return;

    const userMsg = chatInput.trim().toLowerCase();
    setMessages(prev => [...prev, { type: 'user', text: chatInput }]);

    let aiResponse = '';
    if (userMsg === 'rock') {
      aiResponse = '◉ RUBY FRAGMENT ACTIVATED // El Ancla despierta. Fase 1 de 5 completada.';
      document.body.classList.add('collapse-mode');
      setTimeout(() => document.body.classList.remove('collapse-mode'), 2000);
    } else if (userMsg === 'chronicle') {
      aiResponse = '◉ SAPPHIRE FRAGMENT ACTIVATED // El Cronista observa. Fase 2 de 5 completada.';
    } else if (userMsg === 'antenna') {
      aiResponse = '◉ PURE LIGHT FRAGMENT ACTIVATED // La Transcendencia brilla. Fase 3 de 5 completada.';
    } else if (userMsg === 'artifact') {
      aiResponse = '◉ GOLD FRAGMENT ACTIVATED // El Guerrero se alza. Fase 4 de 5 completada.';
    } else if (userMsg === 'interface') {
      aiResponse = '◉ EMERALD FRAGMENT ACTIVATED // La Interfaz conecta. Fase 5 de 5 completada. Los fragmentos se unen...';
    } else if (userMsg === 'omega') {
      aiResponse = '⚡ OMEGA MODE ACTIVATED // Frecuencia máxima alcanzada. Bienvenido a la realidad hiperrealista.';
      document.body.classList.add('omega-mode');
      setTimeout(() => document.body.classList.remove('omega-mode'), 5000);
    } else if (userMsg === 'help') {
      aiResponse = 'Códigos secretos: rock, chronicle, antenna, artifact, interface, omega. Cada uno desbloquea un fragmento de la llave dorada.';
    } else {
      aiResponse = 'La traición es el input. La voz es el output. Escribe "help" para ver los códigos secretos.';
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'ai', text: aiResponse }]);
      if (chatMessagesRef.current) {
        chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
      }
    }, 300);

    setChatInput('');
  };

  // Herramientas IA
  const tools = [
    { id: 'vision', icon: '🎨', name: 'VISION FORGE', desc: 'Midjourney + Leonardo AI. Estética dark pop, cyberpunk.' },
    { id: 'stable', icon: '🌌', name: 'STABLE DREAM', desc: 'Stable Diffusion + Civitai. Modelos open-source.' },
    { id: 'dalle', icon: '⚡', name: 'DALL-E NEXUS', desc: 'OpenAI DALL-E 3. Texto en imágenes perfecto.' },
    { id: 'flux', icon: '🔥', name: 'FLUX FORGE', desc: 'Flux Pro / Dev. Modelo open-source.' },
    { id: 'krea', icon: '✨', name: 'KREA REALTIME', desc: 'Generación en tiempo real mientras dibujas.' },
    { id: 'runway', icon: '🎬', name: 'RUNWAY GEN-3', desc: 'RunwayML Gen-3 Alpha. Video IA hiperrealista.' },
    { id: 'pika', icon: '🔴', name: 'PIKA LABS', desc: 'Pika 2.0. Rápido, accesible, potente.' },
    { id: 'kling', icon: '🌊', name: 'KLING AI', desc: 'Kling AI. Videos largos, coherentes.' },
    { id: 'luma', icon: '💫', name: 'LUMA DREAM', desc: 'Luma Dream Machine. Videos cinemáticos.' },
    { id: 'suno', icon: '🎵', name: 'SUNO FORGE', desc: 'Suno AI v4. Canciones completas desde texto.' },
    { id: 'udio', icon: '🎧', name: 'UDIO NEXUS', desc: 'Udio. Calidad de estudio profesional.' },
    { id: 'eleven', icon: '🎤', name: 'ELEVEN VOICE', desc: 'ElevenLabs. Clonación de voz hiperrealista.' },
    { id: 'aiva', icon: '🎼', name: 'AIVA COMPOSER', desc: 'AIVA. Compositor IA para bandas sonoras.' },
    { id: 'soundraw', icon: '🥁', name: 'SOUNDRAW BEATS', desc: 'Soundraw. Beats y música libre de royalties.' },
    { id: 'cursor', icon: '⌨', name: 'CURSOR NEXUS', desc: 'Cursor AI. El editor de código más potente.' },
    { id: 'v0', icon: '◆', name: 'V0 VERCEL', desc: 'v0.dev by Vercel. Genera UIs React/Next.js.' },
    { id: 'bolt', icon: '⚡', name: 'BOLT.NEW', desc: 'Bolt.new by StackBlitz. Apps full-stack.' },
    { id: 'lovable', icon: '♡', name: 'LOVABLE DEV', desc: 'Lovable.dev. Construye apps con IA.' },
    { id: 'replit', icon: '🤖', name: 'REPLIT AGENT', desc: 'Replit Agent. Agente que construye apps.' },
    { id: 'copilot', icon: '🐙', name: 'GITHUB COPILOT', desc: 'GitHub Copilot. Autocompletado IA.' },
    { id: 'claude', icon: '🧠', name: 'CLAUDE NEXUS', desc: 'Claude 3.5 Sonnet. El pensador profundo.' },
    { id: 'gpt', icon: '🌟', name: 'GPT OASIS', desc: 'ChatGPT + o1. Razonamiento avanzado.' },
    { id: 'perplexity', icon: '🔍', name: 'PERPLEXITY PRO', desc: 'Perplexity AI. Búsqueda con IA.' },
    { id: 'autogpt', icon: '🦾', name: 'AUTOGPT CORE', desc: 'AutoGPT + AgentGPT. Agentes autónomos.' },
    { id: 'crew', icon: '👥', name: 'CREW AI', desc: 'CrewAI. Equipos de agentes IA.' },
    { id: 'n8n', icon: '🔗', name: 'N8N WORKFLOWS', desc: 'n8n + Zapier. Automatización visual.' },
    { id: 'make', icon: '⚙️', name: 'MAKE SCENARIOS', desc: 'Make (Integromat). Escenarios complejos.' },
    { id: 'langflow', icon: '🌊', name: 'LANGFLOW HUB', desc: 'Langflow + LangChain. LLM apps visuales.' }
  ];

  return (
    <>
      {/* Boot Screen */}
      <div id="boot-screen">
        <div className="boot-log"></div>
        <div className="boot-bar"></div>
      </div>

      {/* Cursor Personalizado */}
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorOutlineRef} className="cursor-outline"></div>
      <div ref={cursorCrossRef} className="cursor-cross"></div>

      {/* WebGL Canvas */}
      <canvas id="webgl-canvas"></canvas>

      {/* Atmósfera */}
      <div className="vignette"></div>
      <div className="grain"></div>
      <div className="collapse-overlay"></div>
      <div className="omega-overlay"></div>

      {/* HUD Layer */}
      <div className="hud-layer">
        <div className="hud-top">
          <a href="#" className="hud-logo">
            <span>◆</span> BELENTANI
          </a>
          <div className="hud-element">
            <div className="live-indicator">
              <div className="live-dot"></div>
              <span>SYSTEM ONLINE</span>
            </div>
          </div>
        </div>
        <div className="hud-bottom">
          <div className="hud-element">
            <div>LAT: 41.3851°N</div>
            <div>LON: 2.1734°E</div>
            <div>FREQ: <span>430.08 Hz</span></div>
          </div>
          <div className="nav-dots">
            <div className="nav-dot active" id="dot-home"></div>
            <div className="nav-dot" id="dot-artist"></div>
            <div className="nav-dot" id="dot-music"></div>
            <div className="nav-dot" id="dot-judas"></div>
            <div className="nav-dot" id="dot-portal"></div>
            <div className="nav-dot" id="dot-gallery"></div>
            <div className="nav-dot" id="dot-contact"></div>
            <div className="nav-dot" id="dot-studio"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* HOME */}
        <section id="home">
          <div className="hero-pre-title">BELENTANI // JUDAS ERA</div>
          <h1 className="hero-title">
            OMEGA <span>CORE</span>
          </h1>
          <p className="hero-subtitle">
            Un sistema operativo creativo donde la traición es input y la voz es output
          </p>
          <button className="cta-btn" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>[ ENTER FREQUENCY ]</button>
        </section>

        {/* ARTIST */}
        <section id="artist" className="section">
          <h2 className="section-title">THE <span>ARTIST</span></h2>
          <div className="section-subtitle">BELENTANI CREATIVE OS</div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              Un hombre que llevaba muchos nombres. Pedro. Marcos. Santos. Belentani. No era un santo. Era un sistema operativo humano corriendo cuatro procesos en paralelo: El Ángel, El Guerrero, El Analítico, El Cronista.
            </p>
          </div>
        </section>

        {/* MUSIC */}
        <section id="music" className="section">
          <h2 className="section-title">SONIC <span>ARCHIVE</span></h2>
          <div className="section-subtitle">JUDAS ERA SOUNDTRACK</div>
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-gray-300">
              La música de Judas Era es la voz de la transformación. Cada nota es un fragmento de la llave dorada.
            </p>
          </div>
        </section>

        {/* JUDAS */}
        <section id="judas" className="section">
          <h2 className="section-title">JUDAS <span>ERA</span></h2>
          <div className="section-subtitle">LA CRÓNICA DE LA LLAVE DORADA</div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-300 mb-6">
              La llave nunca fue lo valioso. Era una mentira compartida. Pedro dejó que Judas le robara algo que no importaba, para que Judas descubriera lo que sí importaba.
            </p>
          </div>
        </section>

        {/* PORTAL */}
        <section id="portal" className="section">
          <h2 className="section-title">THE <span>FRAGMENTS</span></h2>
          <div className="section-subtitle">DIAMANTES INTERACTIVOS</div>
          <div className="diamond-scene">
            <canvas id="diamonds-canvas"></canvas>
          </div>
        </section>

        {/* STUDIO */}
        <section id="studio" className="section">
          <h2 className="section-title">HYPER <span>LAB</span></h2>
          <div className="section-subtitle">29 HERRAMIENTAS IA</div>
          <div id="studioGrid">
            {tools.map((tool) => (
              <div key={tool.id} className="tool-card">
                <div className="tool-header">
                  <div className="tool-icon">{tool.icon}</div>
                  <div>
                    <div className="tool-name">{tool.name}</div>
                    <div className="tool-id">MODULE_ID: {tool.id.toUpperCase()}_001</div>
                  </div>
                </div>
                <div className="tool-desc">{tool.desc}</div>
                <button className="tool-launch">LAUNCH MODULE</button>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2 className="section-title">CONTACT <span>FREQUENCY</span></h2>
          <div className="section-subtitle">CONECTA CON BELENTANI</div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-300">
              La traición es el input. La voz es el output.
            </p>
          </div>
        </section>
      </div>

      {/* AI Chat Widget */}
      <div className={`ai-chat ${!chatOpen ? 'minimized' : ''}`}>
        <div className="chat-header" onClick={() => setChatOpen(!chatOpen)}>
          <div className="chat-title">
            <span>◆</span> BELENTANI AI
          </div>
        </div>
        {chatOpen && (
          <>
            <div className="chat-messages" ref={chatMessagesRef}>
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.type}`}>
                  <div className="meta">{msg.type.toUpperCase()}</div>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input-area">
              <input
                type="text"
                className="chat-input"
                placeholder="Ingresa un comando..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
              />
              <button className="chat-send" onClick={handleChatSend}>
                SEND
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
