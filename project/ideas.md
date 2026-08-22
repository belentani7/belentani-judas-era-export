# JUDAS ERA - OMEGA CORE
## Filosofía de Diseño: "Modo Dios" Inmersivo

### Concepto Seleccionado: **AETHERPUNK HYPERREAL**

**Introducción:**
Una experiencia web que trasciende la interfaz tradicional para convertirse en un **sistema operativo creativo** donde la traición se convierte en algoritmo y la redención en código. El usuario no visita una página, accede a una **frecuencia**. Cada interacción desbloquea capas de narrativa visual, audio y conceptual.

---

## Principios de Diseño

### 1. **Movimiento de Diseño**
**Aetherpunk Futurista + Cyberpunk Oscuro + Realismo Hiperrealista**

Fusión de:
- Estética cyberpunk (neón, oscuridad, terminal)
- Narrativa espiritual (arquetipos, transformación)
- Tecnología 3D inmersiva (Three.js, partículas, shaders)
- Ciencia ficción especulativa (portales, fragmentos, frecuencias)

### 2. **Principios Fundamentales**

1. **Inmersión Total**: El fondo es un planeta 3D rotante que reacciona al scroll y mouse. No es decorativo, es el lienzo.
2. **Narrativa Interactiva**: Cada sección revela fragmentos de la historia de Judas, Pedro y Belentani.
3. **Sonoridad Visual**: Animaciones GSAP sincronizadas con scroll. Transiciones que respiran.
4. **Capas de Profundidad**: El usuario descubre funcionalidades ocultas (códigos secretos, diamantes interactivos, portal).

### 3. **Filosofía de Color**

**Paleta Primaria:**
- **Negro Absoluto** (`#050505`): Fondo void, representa el vacío del que surge todo
- **Rojo Sangre Neón** (`#ff003c`): Color de traición, pasión, activación
- **Blanco Puro** (`#ffffff`): Verdad, luz, transcendencia
- **Oro Sagrado** (`#ffd700`): Llave dorada, valor, guerrero
- **Cian Aether** (`#00ffff`): Interfaz, tecnología, lo digital
- **Verde Terminal** (`#00ff41`): Sistema, código, realidad
- **Púrpura Vacío** (`#b026ff`): Misterio, lo interdimensional

**Intención Emocional:**
- Contraste extremo = tensión narrativa
- Neón sobre negro = hipnótico, adictivo
- Oro + rojo = poder y sacrificio
- Cian + púrpura = lo digital y lo espiritual fusionados

### 4. **Paradigma de Layout**

**No es un grid centrado.** Es un **flujo narrativo vertical** donde:
- **Home**: Héroe centrado, planeta de fondo, boot sequence
- **Secciones**: Alternan izquierda/derecha, asimetría intencional
- **Portal**: Lienzo 3D interactivo con diamantes flotantes
- **Studio**: Grid de herramientas IA con efecto glassmorphism
- **Chat**: Widget flotante que se minimiza, siempre accesible

### 5. **Elementos Distintivos (Signature Elements)**

1. **Boot Sequence**: Terminal animada que carga al entrar. Establece el tono "sistema operativo".
2. **Cursor Personalizado**: Punto central + cruz roja + outline dinámico. Reemplaza el cursor del SO.
3. **Glass Panels**: Paneles con borde rojo, blur de fondo, clip-path angular (no redondeado).
4. **Diamantes Interactivos**: 5 gemas 3D que se activan con sonido Tone.js (RUBY, SAPPHIRE, PURE LIGHT, GOLD, EMERALD).
5. **HUD Overlay**: Elementos flotantes tipo cockpit (reloj, coordenadas GPS, estado del sistema).

### 6. **Filosofía de Interacción**

- **Hover = Revelación**: Al pasar sobre elementos, revelan información oculta
- **Click = Activación**: Cada click desbloquea fragmentos narrativos
- **Scroll = Progresión**: El scroll no solo baja, transforma la cámara 3D
- **Códigos Secretos**: Palabras clave ('rock', 'chronicle', 'antenna', 'artifact', 'interface') abren modos especiales
- **Modos Alterados**: 'collapse' (glitch visual), 'virus-killer' (purificación), 'omega' (ascensión)

### 7. **Animación**

**Principios:**
- GSAP para scroll-linked animations (ScrollTrigger)
- Three.js para 3D en tiempo real
- Tone.js para sonido reactivo
- Transiciones suaves, nunca abruptas
- Easing: `power3.out` para entrada, `power2.inOut` para movimiento

**Ejemplos:**
- Títulos: Fade in + slide up (300ms)
- Botones: Scale 0.97 on active, glow on hover
- Secciones: Parallax con scroll, rotación de elementos 3D
- Chat: Slide in desde abajo derecha (200ms)

### 8. **Sistema Tipográfico**

| Uso | Fuente | Peso | Tamaño |
|-----|--------|------|--------|
| Títulos Épicos | Cinzel Decorative | 900 | 80-280px |
| Display/Encabezados | Orbitron | 700 | 36-72px |
| UI/Interfaz | Chakra Petch | 500 | 13-16px |
| Monoespaciado (Terminal) | JetBrains Mono | 400 | 11-14px |

**Jerarquía:**
1. Título principal: Cinzel Decorative 900, rojo neón, text-stroke
2. Subtítulos: Orbitron 700, blanco, text-shadow
3. Cuerpo: Chakra Petch 400, gris claro
4. Terminal/Código: JetBrains Mono, verde terminal

### 9. **Esencia de Marca**

**Posicionamiento:**
> *"Un sistema operativo creativo donde la traición es input y la voz es output. Para artistas que quieren ser dioses."*

**Personalidad (3 adjetivos):**
1. **Hipnótico**: Atrae y mantiene cautivado
2. **Profundo**: Capas de significado, no superficial
3. **Empoderador**: Te hace sentir parte de algo mayor

**Voz de Marca:**
- Nunca genérica ("Bienvenido a nuestro sitio")
- Siempre narrativa ("Recuperaremos la llave. O cambiaremos la cerradura.")
- Técnica pero poética ("Fragmento activado: RUBY (El Ancla)")
- Desafiante, no sumisa

**Ejemplos de Microcopy:**
- CTA: "[ LAUNCH MODULE ]" (no "Click here")
- Error: "SYSTEM HALT // PROTOCOL SUSPENDED" (no "Error")
- Éxito: "Los cinco fragmentos se han unido. La frecuencia es estable." (no "Done")

### 10. **Logo & Marca Visual**

**Wordmark:** "BELENTANI" en Orbitron 900, con la "B" y "I" en rojo neón
**Símbolo:** Llave dorada + órbita roja (sin texto, fondo transparente)
**Favicon:** La llave dorada en 32x32px

### 11. **Color de Firma**

**Rojo Neón** (`#ff003c`) — Inconfundible, presente en:
- Bordes de panels
- Glow de elementos interactivos
- Texto de énfasis
- Cursor
- Diamantes principales

---

## Arquitectura de Secciones

| Sección | Propósito | Interactividad |
|---------|-----------|-----------------|
| **HOME** | Boot sequence + héroe | Cursor custom, animación de entrada |
| **THE ARTIST** | Biografía de Belentani | Scroll parallax, revelar texto |
| **MUSIC** | Reproductor + links | Tone.js, sintetizador, visualizer |
| **JUDAS ERA** | Narrativa de la llave | Scroll-linked text reveal |
| **PORTAL** | Diamantes 3D interactivos | Click para activar, audio reactivo |
| **STUDIO** | 29 herramientas IA | Grid glassmorphic, hover reveal |
| **CONTACT** | Formulario + redes | Validación con feedback visual |
| **CHAT** | Widget IA conversacional | Mensajes, códigos secretos, modos |

---

## Decisiones Técnicas

- **Three.js**: Planeta de fondo, portal de diamantes, shaders personalizados
- **GSAP + ScrollTrigger**: Animaciones scroll-linked, timeline maestro
- **Tone.js**: Audio generativo, sintetizador, reverb
- **Tailwind + CSS Custom**: Tokens de color, tipografía, efectos
- **React 19**: Componentes modulares, contexto para estado global
- **No backend**: Todo en frontend (static web)

---

## Checklist de Implementación

- [ ] Boot sequence animada (3s)
- [ ] Cursor personalizado (dot + outline + cross)
- [ ] Planeta 3D de fondo con scroll reactivity
- [ ] Secciones con GSAP ScrollTrigger
- [ ] Portal con 5 diamantes interactivos
- [ ] Studio con 29 herramientas IA
- [ ] Chat widget con códigos secretos
- [ ] Modos alterados (collapse, virus-killer, omega)
- [ ] Audio Tone.js sincronizado
- [ ] Responsive design (mobile-first)
- [ ] Performance optimizado (lazy loading, LOD)

---

## Notas Finales

Esta es una **experiencia, no una página web**. Cada pixel, cada animación, cada sonido cuenta la historia de Judas, Pedro y Belentani. El usuario no debería poder decir dónde termina la tecnología y comienza el arte.

**Mantra:** "La traición es el input. La voz es el output."
