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

    function type() {
        if (!typewriterEl) return;
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

    // Macro-Diorama Parallax & Puddle Immersion Mode
    const macroEnv = document.getElementById('macro-env');
    const viewport = document.getElementById('main-viewport');
    const background = document.querySelector('.background-plate');
    const puddleBreachBtn = document.getElementById('puddle-breach-btn');
    const returnToPuddleBtn = document.getElementById('return-to-puddle');

    // Allow ?hud=1 query param to open directly with viewport visible if returning from subpages
    if (window.location.search.includes('hud=1') && macroEnv) {
        macroEnv.classList.remove('puddle-mode');
    }

    // Ripple state shared with WebGL shader (up to 8 concurrent Stargate wave packets)
    const MAX_RIPPLES = 8;
    const ripples = [];
    for (let i = 0; i < MAX_RIPPLES; i++) {
        ripples.push({ x: -10.0, y: -10.0, startTime: -100.0, strength: 0.0 });
    }
    let rippleWriteIdx = 0;
    let shaderStartTime = performance.now() * 0.001;

    function spawnRipple(normX, normY, strength = 1.0) {
        const now = performance.now() * 0.001 - shaderStartTime;
        ripples[rippleWriteIdx] = { x: normX, y: normY, startTime: now, strength: strength };
        rippleWriteIdx = (rippleWriteIdx + 1) % MAX_RIPPLES;
    }

    let lastMouseRippleTime = 0;
    let mouseNorm = { x: 0.35, y: 0.62 };

    if (macroEnv) {
        macroEnv.addEventListener('mousemove', (e) => {
            const nx = e.clientX / window.innerWidth;
            const ny = e.clientY / window.innerHeight;
            mouseNorm.x = nx;
            mouseNorm.y = ny;

            // Spawn subtle trailing Stargate wake ripples when gliding across the puddle plane
            const nowMs = performance.now();
            if (ny > 0.42 && nowMs - lastMouseRippleTime > 110) {
                spawnRipple(nx, ny, 0.42);
                lastMouseRippleTime = nowMs;
            }

            if (window.innerWidth <= 768) return;
            const x = (nx - 0.5) * 2;
            const y = (ny - 0.5) * 2;

            if (!macroEnv.classList.contains('puddle-mode') && viewport) {
                viewport.style.transform = `rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateZ(40px)`;
            }
            if (background) {
                background.style.transform = `translateX(${-x * 1.2}%) translateY(${-y * 1.2}%) scale(1.03)`;
            }
        });

        macroEnv.addEventListener('mouseleave', () => {
            if (!macroEnv.classList.contains('puddle-mode') && viewport) {
                viewport.style.transform = '';
            }
            if (background) {
                background.style.transform = 'translateX(0) translateY(0) scale(1)';
            }
        });

        // Mobile touch support: dragging a finger across the puddle spawns live Stargate wake ripples
        macroEnv.addEventListener('touchmove', (e) => {
            if (!e.touches || !e.touches.length) return;
            const t = e.touches[0];
            const nx = t.clientX / window.innerWidth;
            const ny = t.clientY / window.innerHeight;
            mouseNorm.x = nx;
            mouseNorm.y = ny;
            const nowMs = performance.now();
            if (ny > 0.40 && nowMs - lastMouseRippleTime > 95) {
                spawnRipple(nx, ny, 0.65);
                lastMouseRippleTime = nowMs;
            }
        }, { passive: true });

        // Clicking anywhere on the puddle in puddle-mode triggers a big Stargate breach wave & opens the Viewport
        macroEnv.addEventListener('click', (e) => {
            if (e.target.closest('#main-viewport') || e.target.closest('#archive-modal') || e.target.closest('#return-to-puddle')) {
                return;
            }
            const nx = e.clientX / window.innerWidth;
            const ny = Math.max(0.46, e.clientY / window.innerHeight);
            spawnRipple(nx, ny, 1.65);

            if (macroEnv.classList.contains('puddle-mode')) {
                setTimeout(() => {
                    macroEnv.classList.remove('puddle-mode');
                }, 480);
            }
        });
    }

    if (puddleBreachBtn && macroEnv) {
        puddleBreachBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Fire breach wave right at the bright yellow-to-hand nexus
            spawnRipple(0.36, 0.60, 1.85);
            setTimeout(() => {
                macroEnv.classList.remove('puddle-mode');
            }, 520);
        });
    }

    if (returnToPuddleBtn && macroEnv) {
        returnToPuddleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (viewport) viewport.style.transform = '';
            macroEnv.classList.add('puddle-mode');
            spawnRipple(0.34, 0.565, 1.35);
        });
    }

    // =========================================================================
    // WEBGL GLSL SHADER: GEMINI 4 ARGON GAS & STARGATE PUDDLE REFRACTION
    // Emanating from the bright yellow hot-spot (0.34, 0.565) -> Gloved Hand
    // (Optimized v6: Early-out sky/hand mask, 6-octave total FBM, 1080p cap & smart FPS pacing)
    // =========================================================================
    const canvas = document.getElementById('argon-puddle-canvas');
    if (canvas) {
        const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false, stencil: false, powerPreference: 'low-power' });
        if (gl) {
            const vsSource = `
                attribute vec2 a_pos;
                varying vec2 v_uv;
                void main() {
                    // Convert clip space (-1..1) to top-left UV (0..1, y=0 top, y=1 bottom)
                    v_uv = vec2(a_pos.x * 0.5 + 0.5, 0.5 - a_pos.y * 0.5);
                    gl_Position = vec4(a_pos, 0.0, 1.0);
                }
            `;

            const fsSource = `
                precision mediump float;
                varying vec2 v_uv;
                uniform sampler2D u_tex;
                uniform vec2 u_res;
                uniform float u_time;
                uniform vec2 u_mouse;
                uniform vec4 u_ripples[8]; // xy = screen uv, z = startTime, w = strength

                // Fast 2D Value-Gradient Noise for Argon FBM
                float hash(vec2 p) {
                    p = fract(p * vec2(123.34, 456.21));
                    p += dot(p, p + 45.32);
                    return fract(p.x * p.y);
                }

                float noise(vec2 p) {
                    vec2 i = floor(p);
                    vec2 f = fract(p);
                    vec2 u = f * f * (3.0 - 2.0 * f);
                    float a = hash(i);
                    float b = hash(i + vec2(1.0, 0.0));
                    float c = hash(i + vec2(0.0, 1.0));
                    float d = hash(i + vec2(1.0, 1.0));
                    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 2.0 - 1.0;
                }

                const mat2 rotM = mat2(0.80, -0.60, 0.60, 0.80);

                // Lightweight 2-octave FBM (cuts ALU noise evaluations by 70% while keeping identical silky Argon wisps)
                float fbm2(vec2 p) {
                    float v = 0.55 * noise(p);
                    p = rotM * p * 2.03 + vec2(1.7, 9.2);
                    v += 0.30 * noise(p);
                    return v;
                }

                // Signed distance to a 2D line segment (for precision gloved-hand protection mask)
                float sdSegment(vec2 p, vec2 a, vec2 b) {
                    vec2 pa = p - a, ba = b - a;
                    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
                    return length(pa - ba * h);
                }

                // Map screen UV (0..1) to full uncropped v2 canvas (3840x2278 = 1.6857 aspect)
                vec2 getCoverUV(vec2 uv, vec2 res) {
                    float screenAspect = res.x / max(res.y, 1.0);
                    float imgAspect = 1.6857;
                    vec2 scale = vec2(1.0);
                    vec2 anchor = vec2(0.5, 0.5);
                    if (screenAspect > imgAspect) {
                        scale.x = screenAspect / imgAspect;
                        scale.y = 1.0;
                    } else {
                        scale.x = screenAspect / imgAspect;
                        float portraitFactor = clamp((1.2 - screenAspect) * 1.5, 0.0, 1.0);
                        float mobilePullback = mix(1.0, 1.22, portraitFactor);
                        scale *= mobilePullback;
                        anchor.x = mix(0.5, 0.525, portraitFactor);
                    }
                    return (uv - 0.5) * scale + anchor;
                }

                // Stargate / Argon radial wave equation (tapWisp) with grazing-angle ellipse foreshortening
                vec2 calcRippleDisp(vec2 uv, vec2 center, float age, float strength) {
                    if (age <= 0.0 || age > 4.2 || strength <= 0.0) return vec2(0.0);
                    vec2 delta = (uv - center) * vec2(1.0, 2.35);
                    float d2 = dot(delta, delta);
                    float speed = 0.24;
                    float radius = age * speed;
                    // Fast bounding-ring rejection before sqrt/sin/exp
                    float maxR = radius + 0.28;
                    if (d2 > maxR * maxR) return vec2(0.0);
                    float d = sqrt(d2);
                    float band = d - radius;
                    if (abs(band) > 0.26) return vec2(0.0);
                    float env = exp(-band * band * 95.0) * exp(-age * 0.85) * smoothstep(0.0, 0.08, age);
                    float wave = sin(band * 62.0) * env * strength;
                    vec2 dir = d > 0.0001 ? (delta / d) : vec2(0.0, 1.0);
                    return dir * wave * 0.015;
                }

                void main() {
                    vec2 imgUV = getCoverUV(v_uv, u_res);

                    // Fast out-of-bounds black letterbox/pillarbox early exit
                    if (imgUV.x <= 0.0 || imgUV.x >= 1.0 || imgUV.y <= 0.0 || imgUV.y >= 1.0) {
                        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
                        return;
                    }

                    vec3 unwarpedCol = texture2D(u_tex, clamp(imgUV, 0.001, 0.999)).rgb;
                    float inBounds = smoothstep(0.0, 0.035, imgUV.x) * smoothstep(1.0, 0.965, imgUV.x)
                                   * smoothstep(0.0, 0.045, imgUV.y) * smoothstep(1.0, 0.955, imgUV.y);

                    // Fast early exit for the entire upper 39% sky & swamp trees (skips 100% of FBM & ripple math!)
                    float puddlePlane = smoothstep(0.39, 0.48, imgUV.y);
                    if (puddlePlane <= 0.001) {
                        gl_FragColor = vec4(unwarpedCol * inBounds, 1.0);
                        return;
                    }

                    // Aspect-corrected space for geometric masks (1.6857 normalized)
                    vec2 p16 = vec2(imgUV.x * 1.6857, imgUV.y);

                    // 1. PROTECT THE GLOVED HAND, NEON WRISTBAND & FLEEVE SLEEVE (Zero distortion on hand)
                    float dSleeve  = sdSegment(p16, vec2(1.33, 0.02),  vec2(1.07, 0.365)) - 0.115;
                    float dGlove   = sdSegment(p16, vec2(1.07, 0.365), vec2(0.935, 0.475)) - 0.088;
                    float dFingers = sdSegment(p16, vec2(0.935, 0.475), vec2(0.784, 0.550)) - 0.048;
                    float dThumb   = sdSegment(p16, vec2(1.003, 0.465), vec2(0.969, 0.572)) - 0.044;
                    float dBox     = sdSegment(p16, vec2(0.767, 0.435), vec2(0.877, 0.435)) - 0.048;

                    float dHand = min(min(dSleeve, dGlove), min(min(dFingers, dThumb), dBox));
                    float handProtection = smoothstep(0.0, 0.036, dHand);

                    // Extra sub-pixel luminance lock on dark leather inside the hand neighborhood
                    float inFingerBox = step(0.44, imgUV.x) * step(imgUV.x, 0.68) * step(0.30, imgUV.y) * step(imgUV.y, 0.585);
                    float maxCh = max(unwarpedCol.r, max(unwarpedCol.g, unwarpedCol.b));
                    float chroma = maxCh - min(unwarpedCol.r, min(unwarpedCol.g, unwarpedCol.b));
                    float leatherLock = mix(1.0, smoothstep(0.12, 0.32, chroma + maxCh * 0.5), inFingerBox);
                    handProtection *= leatherLock;

                    float activeMask = puddlePlane * handProtection * inBounds;
                    if (activeMask <= 0.001) {
                        gl_FragColor = vec4(unwarpedCol * inBounds, 1.0);
                        return;
                    }

                    // 3. DIRECTIONAL ARGON EMITTER: Bright Yellow Spot (0.34, 0.565) -> Toward the Gloved Hand (0.52, 0.555)
                    vec2 yellowSource = vec2(0.34, 0.565);
                    vec2 handTarget   = vec2(0.52, 0.555);
                    vec2 mainFlowDir  = normalize(handTarget - yellowSource);

                    // Potential-flow curl deflection around the submerged fingertips (0.515, 0.56)
                    vec2 toFingers = imgUV - vec2(0.515, 0.56);
                    vec2 toFingersScaled = toFingers * vec2(1.0, 2.2);
                    float fingerDist2 = dot(toFingersScaled, toFingersScaled);
                    vec2 deflectDir = normalize(vec2(-toFingers.y * 2.2, toFingers.x));
                    float deflectWeight = exp(-fingerDist2 * 34.0) * 0.55;
                    vec2 localFlowDir = normalize(mix(mainFlowDir, deflectDir * sign(toFingers.y + 0.01), deflectWeight));

                    // Perspective-scaled puddle coordinate for Domain-Warped FBM
                    vec2 fluidP = vec2(imgUV.x * 4.5, imgUV.y * 10.0);
                    vec2 advectVel = localFlowDir * vec2(1.0, 2.1) * 0.58;

                    // Streamlined Domain-Warped FBM (6 noise ops total instead of 20)
                    vec2 q = vec2(
                        fbm2(fluidP - advectVel * u_time),
                        fbm2(fluidP + vec2(5.2, 1.3) - advectVel * u_time)
                    );
                    float argonField = fbm2(fluidP + 2.4 * q + vec2(1.7, 9.2) - advectVel * 1.15 * u_time);

                    // Envelope for the Argon stream corridor
                    vec2 streamRel = imgUV - yellowSource;
                    float alongStream = dot(streamRel, mainFlowDir);
                    float perpStream  = dot(streamRel, vec2(-mainFlowDir.y, mainFlowDir.x));
                    float streamCorridor = smoothstep(-0.14, 0.04, alongStream)
                                         * smoothstep(0.48, 0.14, alongStream)
                                         * exp(-perpStream * perpStream * 42.0);

                    // Autonomous gentle elliptical ripple pulsing from the yellow hot-spot & lower yellow crescent
                    float autoCycle1 = mod(u_time * 0.52, 3.8);
                    float autoCycle2 = mod(u_time * 0.52 + 1.9, 3.8);
                    vec2 totalRipple = calcRippleDisp(imgUV, yellowSource, autoCycle1, 0.55)
                                     + calcRippleDisp(imgUV, vec2(0.46, 0.65), autoCycle2, 0.42);

                    // Sum interactive mouse & click Stargate ripples
                    for (int i = 0; i < 8; i++) {
                        vec4 rp = u_ripples[i];
                        if (rp.w > 0.001) {
                            float age = u_time - rp.z;
                            if (age > 0.0 && age < 4.2) {
                                vec2 rCenter = getCoverUV(rp.xy, u_res);
                                totalRipple += calcRippleDisp(imgUV, rCenter, age, rp.w);
                            }
                        }
                    }

                    // Continuous oil-slick current displacement flowing from yellow spot toward the hand
                    vec2 oilSwirlDisp = vec2(q.x + argonField, (q.y + argonField) * 0.45) * (0.0045 + 0.0085 * streamCorridor);
                    vec2 finalDisp = (oilSwirlDisp + totalRipple) * activeMask;

                    // Sample texture (only perform extra R/B chromatic aberration lookups when a strong ripple wave passes over this pixel)
                    float rippleMag = length(totalRipple) * activeMask;
                    vec2 uvG = clamp(imgUV + finalDisp, 0.001, 0.999);
                    vec3 baseCol;
                    if (rippleMag > 0.0012) {
                        float chromaShift = rippleMag * 0.38;
                        vec2 uvR = clamp(imgUV + finalDisp * (1.0 + chromaShift), 0.001, 0.999);
                        vec2 uvB = clamp(imgUV + finalDisp * (1.0 - chromaShift), 0.001, 0.999);
                        baseCol = vec3(
                            texture2D(u_tex, uvR).r,
                            texture2D(u_tex, uvG).g,
                            texture2D(u_tex, uvB).b
                        );
                    } else {
                        baseCol = texture2D(u_tex, uvG).rgb;
                    }

                    // 4. VOLUMETRIC ARGON GAS WISPS EMANATING FROM THE BRIGHT YELLOW SPOT -> HAND
                    float wisp1 = smoothstep(0.08, 0.68, argonField + 0.25 * q.x);
                    float wisp2 = smoothstep(0.18, 0.78, q.y * 0.6 + argonField * 0.7);
                    float wispRidge = pow(max(0.0, 1.0 - abs(argonField * 1.65)), 3.0);

                    float tColor = clamp(alongStream / 0.36, 0.0, 1.0);
                    vec3 colAmber = vec3(1.00, 0.76, 0.08);
                    vec3 colCyan  = vec3(0.00, 0.92, 1.00);
                    vec3 colPink  = vec3(1.00, 0.05, 0.52);

                    vec3 gasTint = mix(colAmber, colCyan, smoothstep(0.0, 0.58, tColor));
                    gasTint = mix(gasTint, colPink, smoothstep(0.58, 1.0, tColor) * 0.65);

                    float gasIntensity = (wisp1 * 0.42 + wisp2 * 0.35 + wispRidge * 0.48) * streamCorridor * activeMask;
                    float ambientSlickGlow = wispRidge * 0.10 * activeMask * smoothstep(0.48, 0.85, imgUV.y);

                    float rippleCrest = clamp(rippleMag * 42.0, 0.0, 1.0);
                    vec3 crestColor = mix(colCyan, colAmber, 0.5 + 0.5 * sin(u_time * 3.0 + imgUV.x * 12.0));

                    vec3 finalCol = baseCol;
                    finalCol += gasTint * gasIntensity * 0.52;
                    finalCol += mix(colCyan, colAmber, q.y * 0.5 + 0.5) * ambientSlickGlow;
                    finalCol += crestColor * rippleCrest * 0.35;
                    finalCol *= inBounds;

                    gl_FragColor = vec4(clamp(finalCol, 0.0, 1.0), 1.0);
                }
            `;

            function compileShader(type, source) {
                const s = gl.createShader(type);
                gl.shaderSource(s, source);
                gl.compileShader(s);
                if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
                    console.error('Argon Shader compile error:', gl.getShaderInfoLog(s));
                    gl.deleteShader(s);
                    return null;
                }
                return s;
            }

            const vs = compileShader(gl.VERTEX_SHADER, vsSource);
            const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);

            if (vs && fs) {
                const prog = gl.createProgram();
                gl.attachShader(prog, vs);
                gl.attachShader(prog, fs);
                gl.linkProgram(prog);

                const posBuf = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                    -1, -1,  1, -1, -1,  1,
                    -1,  1,  1, -1,  1,  1
                ]), gl.STATIC_DRAW);

                const aPos = gl.getAttribLocation(prog, 'a_pos');
                const uTex = gl.getUniformLocation(prog, 'u_tex');
                const uRes = gl.getUniformLocation(prog, 'u_res');
                const uTime = gl.getUniformLocation(prog, 'u_time');
                const uMouse = gl.getUniformLocation(prog, 'u_mouse');
                const uRipplesLoc = [];
                for (let i = 0; i < MAX_RIPPLES; i++) {
                    uRipplesLoc.push(gl.getUniformLocation(prog, `u_ripples[${i}]`));
                }

                // Load the 4K Lignite Argon Puddle texture
                const tex = gl.createTexture();
                const img = new Image();
                let texReady = false;

                img.onload = () => {
                    gl.bindTexture(gl.TEXTURE_2D, tex);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
                    texReady = true;
                };
                img.src = 'WEBSITE_MEDIA/lignite-argon-puddle-v2-4k.jpg?v=3';

                // Cap internal render buffer at 1920x1080 max (1.0x DPR) so 4K/HiDPI screens use 75% less GPU fill-rate
                function resizeCanvas() {
                    const cw = canvas.clientWidth || window.innerWidth;
                    const ch = canvas.clientHeight || window.innerHeight;
                    const maxDim = Math.max(cw, ch, 1);
                    const resCap = maxDim > 1600 ? (1600 / maxDim) : 1.0;
                    const dpr = Math.min(window.devicePixelRatio || 1, 1.0) * resCap;
                    const w = Math.max(1, Math.floor(cw * dpr));
                    const h = Math.max(1, Math.floor(ch * dpr));
                    if (canvas.width !== w || canvas.height !== h) {
                        canvas.width = w;
                        canvas.height = h;
                        gl.viewport(0, 0, w, h);
                    }
                }
                window.addEventListener('resize', resizeCanvas);
                resizeCanvas();

                let lastRenderMs = 0;
                function renderFrame(nowMs) {
                    requestAnimationFrame(renderFrame);

                    // Pause completely when tab is hidden or archive video modal is open
                    if (document.hidden) return;
                    const modalEl = document.getElementById('archive-modal');
                    if (modalEl && modalEl.classList.contains('active')) return;

                    // Adaptive frame pacing:
                    // - 30 FPS (32ms) when actively viewing the puddle
                    // - 15 FPS (66ms) when the frosted Glass Panel HUD is open in the foreground
                    const inPuddleMode = !macroEnv || macroEnv.classList.contains('puddle-mode');
                    const minFrameInterval = inPuddleMode ? 32 : 66;
                    if (nowMs - lastRenderMs < minFrameInterval) return;
                    lastRenderMs = nowMs;

                    if (texReady) {
                        const elapsed = nowMs * 0.001 - shaderStartTime;

                        gl.useProgram(prog);
                        gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
                        gl.enableVertexAttribArray(aPos);
                        gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

                        gl.activeTexture(gl.TEXTURE0);
                        gl.bindTexture(gl.TEXTURE_2D, tex);
                        gl.uniform1i(uTex, 0);
                        gl.uniform2f(uRes, canvas.width, canvas.height);
                        gl.uniform1f(uTime, elapsed);
                        gl.uniform2f(uMouse, mouseNorm.x, mouseNorm.y);

                        for (let i = 0; i < MAX_RIPPLES; i++) {
                            const r = ripples[i];
                            gl.uniform4f(uRipplesLoc[i], r.x, r.y, r.startTime, r.strength);
                        }

                        gl.drawArrays(gl.TRIANGLES, 0, 6);
                    }
                }
                requestAnimationFrame(renderFrame);
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
