document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect for terminal
    const terminalText = [
        "SYSTEM ONLINE // NEVERRENDER LABS MASTER COMPENDIUM (OCT 2026)...",
        "LIGNITE ARGON SLOUGH: 8K SUPER-RES WEBGL FLUID STAGE ONLINE...",
        "GOOGLE LABS FLOW: RETRO-TERM 80 COMMUNITY GALLERY FEATURED...",
        "COLOR MATRIX v3.0: LIGNITE PETROL TEAL // ELECTRIC CYAN // RADIOACTIVE WRISTBAND MAGENTA...",
        "AUDIO ARCHITECTURE: YOUTUBE MUSIC VERIFIED // LIDO DI ANTHROPOLIS MASTERED...",
        "HARDWARE TELEMETRY: AMD RYZEN 7 6800U 4-THREAD 0.99MS ENVELOPE...",
        "DIRECTOR-ENGINEER AGENTIC ORCHESTRATION: SYSTEM CEMENTED."
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 50;
    const typewriterEl = document.getElementById('typewriter');

    const macroEnv = document.getElementById('macro-env');
    const viewport = document.getElementById('main-viewport');
    const puddleBreachBtn = document.getElementById('puddle-breach-btn');
    const returnToPuddleBtn = document.getElementById('return-to-puddle');

    function type() {
        if (!typewriterEl) return;
        // Skip DOM mutations while the terminal is hidden in puddle-mode
        if (macroEnv && macroEnv.classList.contains('puddle-mode')) {
            setTimeout(type, 600);
            return;
        }
        const currentText = terminalText[textIndex];
        
        if (isDeleting) {
            typewriterEl.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 20;
        } else {
            typewriterEl.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = Math.random() * 50 + 50;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % terminalText.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000);

    // Allow ?hud=1 query param to open directly with viewport visible if returning from subpages
    if (window.location.search.includes('hud=1') && macroEnv) {
        macroEnv.classList.remove('puddle-mode');
    }

    if (macroEnv) {
        // Clicking anywhere on the puddle in puddle-mode opens the Reception Viewport immediately
        macroEnv.addEventListener('click', (e) => {
            if (e.target.closest('#main-viewport') || e.target.closest('#archive-modal') || e.target.closest('#return-to-puddle')) {
                return;
            }
            if (macroEnv.classList.contains('puddle-mode')) {
                macroEnv.classList.remove('puddle-mode');
            }
        });
    }

    if (puddleBreachBtn && macroEnv) {
        puddleBreachBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            macroEnv.classList.remove('puddle-mode');
        });
    }

    if (returnToPuddleBtn && macroEnv) {
        returnToPuddleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (viewport) viewport.style.transform = '';
            macroEnv.classList.add('puddle-mode');
        });
    }

    // =========================================================================
    // DEEPMIND-STYLE WEBGL LIQUID REFRACTION & VISCOUS RIPPLE SHADER (v13)
    // Goldilocks v12 Motion + Horizon Neon-Line Ripple Fade + Anchored Gloved Hand
    // =========================================================================
    const canvas = document.getElementById('argon-puddle-canvas');
    if (canvas) {
        const gl = canvas.getContext('webgl', {
            alpha: false,
            antialias: false,
            depth: false,
            stencil: false,
            preserveDrawingBuffer: false,
            powerPreference: 'high-performance'
        }) || canvas.getContext('experimental-webgl');

        if (gl) {
            // Simulation grid dimensions (16:9 aspect, ultra-smooth bilinear normal map)
            const SIM_W = 256;
            const SIM_H = 144;
            const SIM_SIZE = SIM_W * SIM_H;

            let hCurr = new Float32Array(SIM_SIZE);
            let hPrev = new Float32Array(SIM_SIZE);
            let hSmooth = new Float32Array(SIM_SIZE);
            const waveTexData = new Uint8Array(SIM_SIZE * 4);

            // Smoothstep helper for CPU-side horizon fade
            function cpuSmoothstep(edge0, edge1, x) {
                const t = Math.max(0.0, Math.min(1.0, (x - edge0) / (edge1 - edge0)));
                return t * t * (3.0 - 2.0 * t);
            }

            // Deposit a smooth Gaussian ripple impulse at normalized (nx, ny) in [0..1]
            function dropRipple(nx, ny, radiusCells, strength) {
                // Fade out ripple impulses as they approach the horizontal neon line (y = 0.445) and end above it
                const horizonWeight = cpuSmoothstep(0.442, 0.525, ny);
                if (horizonWeight <= 0.001) return;
                const effStrength = strength * horizonWeight;

                const cx = nx * SIM_W;
                const cy = ny * SIM_H;
                const r = Math.max(2, radiusCells);
                const r2 = r * r;
                const x0 = Math.max(2, Math.floor(cx - r));
                const x1 = Math.min(SIM_W - 3, Math.ceil(cx + r));
                const y0 = Math.max(2, Math.floor(cy - r));
                const y1 = Math.min(SIM_H - 3, Math.ceil(cy + r));
                const invSigma2 = 2.6 / r2;

                for (let y = y0; y <= y1; y++) {
                    const dy = y - cy;
                    const dy2 = dy * dy;
                    const rowOffset = y * SIM_W;
                    for (let x = x0; x <= x1; x++) {
                        const dx = x - cx;
                        const d2 = dx * dx + dy2;
                        if (d2 < r2) {
                            const falloff = Math.exp(-d2 * invSigma2) * (1.0 - d2 / r2);
                            const idx = rowOffset + x;
                            hCurr[idx] = Math.max(-1.1, Math.min(1.1, hCurr[idx] + effStrength * falloff));
                        }
                    }
                }
            }

            // Continuous mouse & touch wake tracking with segment interpolation
            let lastPointerX = -1;
            let lastPointerY = -1;
            let lastPointerTime = 0;

            function handlePointerMove(clientX, clientY) {
                const vw = window.innerWidth || 1;
                const vh = window.innerHeight || 1;
                const nx = Math.max(0.01, Math.min(0.99, clientX / vw));
                const ny = Math.max(0.01, Math.min(0.99, clientY / vh));
                const now = performance.now();

                if (lastPointerX < 0 || (now - lastPointerTime) > 180) {
                    dropRipple(nx, ny, 10.5, 0.14);
                } else {
                    const dx = nx - lastPointerX;
                    const dy = ny - lastPointerY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist > 0.0008) {
                        // Goldilocks wake intensity (~60% of v10)
                        const speedBoost = Math.min(1.0, dist * 15.0);
                        const strength = 0.095 + speedBoost * 0.18;
                        const radius = 9.5 + speedBoost * 4.5;
                        const steps = Math.min(12, Math.max(1, Math.ceil(dist * 85)));
                        for (let s = 1; s <= steps; s++) {
                            const t = s / steps;
                            dropRipple(
                                lastPointerX + dx * t,
                                lastPointerY + dy * t,
                                radius,
                                strength / Math.sqrt(steps)
                            );
                        }
                    }
                }
                lastPointerX = nx;
                lastPointerY = ny;
                lastPointerTime = now;
            }

            window.addEventListener('mousemove', (e) => {
                handlePointerMove(e.clientX, e.clientY);
            }, { passive: true });

            window.addEventListener('touchmove', (e) => {
                if (e.touches && e.touches.length > 0) {
                    handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
                }
            }, { passive: true });

            window.addEventListener('mousedown', (e) => {
                const nx = e.clientX / (window.innerWidth || 1);
                const ny = e.clientY / (window.innerHeight || 1);
                dropRipple(nx, ny, 14.5, 0.36);
            }, { passive: true });

            // Advance the 2D viscous wave equation and pack normal gradients (nx, ny, height) into waveTexData
            function stepWaveSimulation(elapsedSec) {
                // Ambient heartbeat ripple in the puddle just off the fingertips
                if (Math.random() < 0.07) {
                    const fingerX = 0.455 + (Math.random() - 0.5) * 0.06;
                    const fingerY = 0.595 + (Math.random() - 0.5) * 0.03;
                    dropRipple(fingerX, fingerY, 8.5, 0.06 * Math.sin(elapsedSec * 2.1));
                }

                // 1. True isotropic 9-tap Laplacian wave propagation with shoreline attenuation at the horizontal neon line (y = 0.445)
                const baseDamping = 0.975;
                for (let y = 1; y < SIM_H - 1; y++) {
                    const ny = y / SIM_H;
                    // Waves travelling upward fade smoothly between y=0.535 and y=0.445, ending completely at y=0.445
                    const horizonFade = cpuSmoothstep(0.442, 0.535, ny);
                    const rowDamping = baseDamping * (0.72 + 0.28 * horizonFade);

                    const row = y * SIM_W;
                    const rowUp = row - SIM_W;
                    const rowDn = row + SIM_W;
                    for (let x = 1; x < SIM_W - 1; x++) {
                        const idx = row + x;
                        if (horizonFade <= 0.001) {
                            hPrev[idx] = 0.0;
                            continue;
                        }
                        const ortho = hCurr[idx - 1] + hCurr[idx + 1] + hCurr[rowUp + x] + hCurr[rowDn + x];
                        const diag = hCurr[rowUp + x - 1] + hCurr[rowUp + x + 1] + hCurr[rowDn + x - 1] + hCurr[rowDn + x + 1];
                        const avg = ortho * 0.20 + diag * 0.05;
                        let next = (avg * 2.0 - hPrev[idx]) * rowDamping;
                        if (Math.abs(next) < 0.00006) next = 0.0;
                        hPrev[idx] = next;
                    }
                }

                // Swap hCurr and hPrev so hCurr holds the newest wave heights
                const tmp = hCurr;
                hCurr = hPrev;
                hPrev = tmp;

                // 2. Single-pass spatial smoothing into hSmooth + crisp gradient extraction
                for (let y = 1; y < SIM_H - 1; y++) {
                    const row = y * SIM_W;
                    const rowUp = row - SIM_W;
                    const rowDn = row + SIM_W;
                    for (let x = 1; x < SIM_W - 1; x++) {
                        const idx = row + x;
                        hSmooth[idx] = hCurr[idx] * 0.42 +
                            (hCurr[idx - 1] + hCurr[idx + 1] + hCurr[rowUp + x] + hCurr[rowDn + x]) * 0.105 +
                            (hCurr[rowUp + x - 1] + hCurr[rowUp + x + 1] + hCurr[rowDn + x - 1] + hCurr[rowDn + x + 1]) * 0.04;
                    }
                }

                for (let y = 1; y < SIM_H - 1; y++) {
                    const row = y * SIM_W;
                    const rowUp = row - SIM_W;
                    const rowDn = row + SIM_W;
                    for (let x = 1; x < SIM_W - 1; x++) {
                        const idx = row + x;
                        const dx = (hSmooth[idx + 1] - hSmooth[idx - 1]) * 2.35;
                        const dy = (hSmooth[rowDn + x] - hSmooth[rowUp + x]) * 2.35;
                        const hVal = hSmooth[idx];

                        const pIdx = idx * 4;
                        waveTexData[pIdx]     = Math.max(0, Math.min(255, Math.round(128 + dx * 127)));
                        waveTexData[pIdx + 1] = Math.max(0, Math.min(255, Math.round(128 + dy * 127)));
                        waveTexData[pIdx + 2] = Math.max(0, Math.min(255, Math.round(128 + hVal * 127)));
                        waveTexData[pIdx + 3] = 255;
                    }
                }
            }

            // Compile WebGL Shaders
            const vsSource = `
                attribute vec2 a_pos;
                varying vec2 v_uv;
                void main() {
                    v_uv = vec2(a_pos.x * 0.5 + 0.5, 0.5 - a_pos.y * 0.5);
                    gl_Position = vec4(a_pos, 0.0, 1.0);
                }
            `;

            const fsSource = `
                precision highp float;
                varying vec2 v_uv;
                uniform sampler2D u_bgTex;
                uniform sampler2D u_waveTex;
                uniform vec2 u_resolution;
                uniform float u_time;

                // Distance from point p to line segment a-b
                float sdSegment(vec2 p, vec2 a, vec2 b) {
                    vec2 pa = p - a;
                    vec2 ba = b - a;
                    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
                    return length(pa - ba * h);
                }

                // Combined water mask:
                // 1) Fades smoothly to 0.0 right at the horizontal neon line (y = 0.445)
                // 2) Anchors the entire gloved hand, fingers, thumb, wristband, and sleeve at 0.0
                float getWaterMask(vec2 uv) {
                    // Fade out ripple approaching the horizontal neon line at y = 0.445 and end completely there
                    float puddleWeight = smoothstep(0.445, 0.535, uv.y);

                    // Multi-capsule SDF hugging the sleeve, red wristband, leather palm, thumb, and submerged fingertips
                    float dSleeve = sdSegment(uv, vec2(0.590, 0.420), vec2(0.840, 0.000)) - 0.095;
                    float dPalm   = sdSegment(uv, vec2(0.525, 0.505), vec2(0.605, 0.415)) - 0.052;
                    float dIndex  = sdSegment(uv, vec2(0.462, 0.553), vec2(0.535, 0.485)) - 0.024;
                    float dMiddle = sdSegment(uv, vec2(0.495, 0.562), vec2(0.535, 0.500)) - 0.023;
                    float dThumb  = sdSegment(uv, vec2(0.568, 0.573), vec2(0.602, 0.475)) - 0.025;

                    float dHand = min(min(dSleeve, dPalm), min(min(dIndex, dMiddle), dThumb));
                    float handMask = smoothstep(0.0, 0.026, dHand);

                    return puddleWeight * handMask;
                }

                void main() {
                    // Sample smoothed wave normal & height from simulation texture
                    vec4 wave = texture2D(u_waveTex, v_uv);
                    vec2 normal = (wave.rg - vec2(128.0 / 255.0)) * 2.0;

                    // Map screen v_uv to background-size: contain coordinates (1.6857 aspect ratio)
                    float screenAspect = u_resolution.x / max(u_resolution.y, 1.0);
                    float imgAspect = 1.685689;
                    vec2 scale = vec2(1.0);
                    if (screenAspect > imgAspect) {
                        scale.x = screenAspect / imgAspect;
                    } else {
                        scale.y = imgAspect / screenAspect;
                    }
                    vec2 imgUV = (v_uv - 0.5) * scale + 0.5;

                    // Black letterbox outside the contained image bounds
                    if (imgUV.x < 0.0 || imgUV.x > 1.0 || imgUV.y < 0.0 || imgUV.y > 1.0) {
                        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
                        return;
                    }

                    // Compute water mask (0.0 above the horizontal neon line and 0.0 on the gloved hand)
                    float waterMask = getWaterMask(imgUV);

                    // Organic idle liquid breathing across the iridescent oil slick
                    vec2 ambientRipple = vec2(
                        sin(imgUV.y * 26.0 + u_time * 1.25 + imgUV.x * 8.0),
                        cos(imgUV.x * 20.0 - u_time * 1.00 + imgUV.y * 12.0)
                    ) * 0.00085 * waterMask;

                    // Rich, hypnotic v12 liquid-mercury displacement scaled strictly by waterMask
                    vec2 rawDisp = normal * vec2(0.034, 0.046) * waterMask + ambientRipple;

                    // Prevent ripples right next to the fingers from sampling pixels out of the anchored black leather glove
                    float targetMask = getWaterMask(clamp(imgUV + rawDisp, 0.001, 0.999));
                    float safeMask = waterMask * smoothstep(0.0, 0.35, targetMask);
                    vec2 disp = rawDisp * smoothstep(0.0, 0.35, targetMask);

                    // Chromatic prism split on wave slopes
                    vec2 uvR = clamp(imgUV + disp * 1.06, 0.001, 0.999);
                    vec2 uvG = clamp(imgUV + disp * 1.00, 0.001, 0.999);
                    vec2 uvB = clamp(imgUV + disp * 0.94, 0.001, 0.999);

                    float r = texture2D(u_bgTex, uvR).r;
                    float g = texture2D(u_bgTex, uvG).g;
                    float b = texture2D(u_bgTex, uvB).b;
                    vec3 color = vec3(r, g, b);

                    // Iridescent cyan / molten-amber / wristband-magenta specular caustic rim (strictly inside waterMask)
                    float slopeMag = length(normal);
                    vec2 lightDir = normalize(vec2(-0.45, -0.75));
                    float spec = max(0.0, dot(normal, lightDir));
                    float rimHighlight = (pow(spec, 2.3) * 0.20 + slopeMag * 0.065) * safeMask;

                    vec3 iridescentTint = mix(
                        vec3(0.0, 0.898, 1.0),
                        vec3(1.0, 0.718, 0.012),
                        clamp(normal.x * 2.5 + 0.5, 0.0, 1.0)
                    );
                    iridescentTint = mix(
                        iridescentTint,
                        vec3(1.0, 0.0, 0.467),
                        clamp(normal.y * 2.5 + 0.5, 0.0, 1.0) * 0.45
                    );

                    color += iridescentTint * rimHighlight;
                    color += vec3(0.85, 0.96, 1.0) * pow(spec, 4.2) * 0.13 * safeMask;

                    gl_FragColor = vec4(color, 1.0);
                }
            `;

            function compileShader(type, source) {
                const s = gl.createShader(type);
                gl.shaderSource(s, source);
                gl.compileShader(s);
                if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
                    console.error('Shader compile error:', gl.getShaderInfoLog(s));
                    gl.deleteShader(s);
                    return null;
                }
                return s;
            }

            const vs = compileShader(gl.VERTEX_SHADER, vsSource);
            const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
            const prog = gl.createProgram();
            gl.attachShader(prog, vs);
            gl.attachShader(prog, fs);
            gl.linkProgram(prog);

            if (gl.getProgramParameter(prog, gl.LINK_STATUS)) {
                gl.useProgram(prog);

                // Fullscreen quad
                const quadBuf = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
                gl.bufferData(
                    gl.ARRAY_BUFFER,
                    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                    gl.STATIC_DRAW
                );

                const aPosLoc = gl.getAttribLocation(prog, 'a_pos');
                gl.enableVertexAttribArray(aPosLoc);
                gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);

                const uBgTexLoc = gl.getUniformLocation(prog, 'u_bgTex');
                const uWaveTexLoc = gl.getUniformLocation(prog, 'u_waveTex');
                const uResLoc = gl.getUniformLocation(prog, 'u_resolution');
                const uTimeLoc = gl.getUniformLocation(prog, 'u_time');

                // Create Texture 0: Background Puddle Master Image
                const bgTex = gl.createTexture();
                gl.activeTexture(gl.TEXTURE0);
                gl.bindTexture(gl.TEXTURE_2D, bgTex);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([6, 9, 14, 255]));

                let bgLoaded = false;
                const hdImg = new Image();
                hdImg.onload = () => {
                    try {
                        gl.activeTexture(gl.TEXTURE0);
                        gl.bindTexture(gl.TEXTURE_2D, bgTex);
                        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, hdImg);
                        bgLoaded = true;
                        canvas.style.opacity = '1';
                    } catch (err) {
                        console.warn('WebGL texImage2D fallback:', err);
                    }

                    // Upgrade to 4K master plate silently in the background when served over HTTP/HTTPS
                    if (window.location.protocol !== 'file:') {
                        const img4k = new Image();
                        img4k.onload = () => {
                            gl.activeTexture(gl.TEXTURE0);
                            gl.bindTexture(gl.TEXTURE_2D, bgTex);
                            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img4k);
                        };
                        img4k.src = 'WEBSITE_MEDIA/lignite-argon-puddle-v2-4k.jpg';
                    }
                };

                if (window.location.protocol === 'file:') {
                    const inlineScript = document.createElement('script');
                    inlineScript.src = 'WEBSITE_MEDIA/puddle-plate-inline.js';
                    inlineScript.onload = () => {
                        if (window.__PUDDLE_HD_DATA_URI) {
                            hdImg.src = window.__PUDDLE_HD_DATA_URI;
                        }
                    };
                    document.head.appendChild(inlineScript);
                } else {
                    hdImg.src = 'WEBSITE_MEDIA/lignite-argon-puddle-v2-hd.jpg?v=8';
                }

                // Create Texture 1: Wave Normal & Height Map
                for (let i = 0; i < SIM_SIZE * 4; i += 4) {
                    waveTexData[i] = 128;
                    waveTexData[i + 1] = 128;
                    waveTexData[i + 2] = 128;
                    waveTexData[i + 3] = 255;
                }
                const waveTex = gl.createTexture();
                gl.activeTexture(gl.TEXTURE1);
                gl.bindTexture(gl.TEXTURE_2D, waveTex);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, SIM_W, SIM_H, 0, gl.RGBA, gl.UNSIGNED_BYTE, waveTexData);

                gl.uniform1i(uBgTexLoc, 0);
                gl.uniform1i(uWaveTexLoc, 1);

                function resizeGL() {
                    const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
                    const w = Math.max(1, Math.floor((canvas.clientWidth || window.innerWidth) * dpr));
                    const h = Math.max(1, Math.floor((canvas.clientHeight || window.innerHeight) * dpr));
                    if (canvas.width !== w || canvas.height !== h) {
                        canvas.width = w;
                        canvas.height = h;
                        gl.viewport(0, 0, w, h);
                    }
                }
                window.addEventListener('resize', resizeGL);
                resizeGL();

                // Seed a welcoming ripple in the puddle just off the submerged gloved fingertips on load
                dropRipple(0.455, 0.595, 13.5, 0.32);

                const startTime = performance.now() * 0.001;

                function renderLoop(nowMs) {
                    requestAnimationFrame(renderLoop);
                    if (document.hidden || !bgLoaded) return;
                    const modalEl = document.getElementById('archive-modal');
                    if (modalEl && modalEl.classList.contains('active')) return;

                    const elapsed = nowMs * 0.001 - startTime;
                    stepWaveSimulation(elapsed);

                    gl.activeTexture(gl.TEXTURE1);
                    gl.bindTexture(gl.TEXTURE_2D, waveTex);
                    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, SIM_W, SIM_H, gl.RGBA, gl.UNSIGNED_BYTE, waveTexData);

                    gl.uniform2f(uResLoc, canvas.width, canvas.height);
                    gl.uniform1f(uTimeLoc, elapsed);

                    gl.drawArrays(gl.TRIANGLES, 0, 6);
                }

                requestAnimationFrame(renderLoop);
            }
        }
    }

    // Video Modal Logic
    const viewArchivesBtn = document.getElementById('view-archives');
    const archiveModal = document.getElementById('archive-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const launchVideo = document.getElementById('launch-video');
    const ytPlayer = document.getElementById('youtube-player');
    const playlistBtns = document.querySelectorAll('.playlist-btn');

    const modalBackdrop = archiveModal ? archiveModal.querySelector('.modal-backdrop') : null;

    const stopPlayback = () => {
        if (archiveModal) archiveModal.classList.remove('active');
        if (launchVideo) launchVideo.pause();
        if (ytPlayer) ytPlayer.src = '';
    };

    if (viewArchivesBtn && archiveModal) {
        viewArchivesBtn.addEventListener('click', () => {
            archiveModal.classList.add('active');
            const activeBtn = document.querySelector('.playlist-btn.active');
            if (activeBtn) {
                const src = activeBtn.getAttribute('data-src');
                if (ytPlayer) {
                    ytPlayer.src = src;
                    ytPlayer.style.display = 'block';
                }
                if (launchVideo) {
                    launchVideo.pause();
                    launchVideo.style.display = 'none';
                }
            }
        });
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', stopPlayback);
    if (modalBackdrop) modalBackdrop.addEventListener('click', stopPlayback);

    playlistBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            playlistBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const newSrc = btn.getAttribute('data-src');
            if (ytPlayer) {
                ytPlayer.src = newSrc;
                ytPlayer.style.display = 'block';
            }
            if (launchVideo) {
                launchVideo.pause();
                launchVideo.style.display = 'none';
            }
        });
    });

    // Contact Logic
    const contactBtn = document.getElementById('contact-creator');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            window.location.href = "mailto:creator@renderwithoutcode.com";
        });
    }
});
