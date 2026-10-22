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

    const shaderStartTime = performance.now() * 0.001;
    let mouseNorm = { x: 0.35, y: 0.62 };

    if (macroEnv) {
        macroEnv.addEventListener('mousemove', (e) => {
            mouseNorm.x = e.clientX / window.innerWidth;
            mouseNorm.y = e.clientY / window.innerHeight;
        }, { passive: true });

        macroEnv.addEventListener('touchmove', (e) => {
            if (!e.touches || !e.touches.length) return;
            const t = e.touches[0];
            mouseNorm.x = t.clientX / window.innerWidth;
            mouseNorm.y = t.clientY / window.innerHeight;
        }, { passive: true });

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
    // PURE VOLUMETRIC ARGON GAS & VAPOR PLUME ENGINE (v9 Zero-Ripple Edition)
    // Pure pre-baked sprite blits on a 640x360 buffer (zero ripples, zero paths)
    // =========================================================================
    const canvas = document.getElementById('argon-puddle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d', { alpha: true });
        if (ctx) {
            let cw = 640;
            let ch = 360;

            function resizeCanvas() {
                const vw = canvas.clientWidth || window.innerWidth;
                const vh = canvas.clientHeight || window.innerHeight;
                const scale = Math.min(1.0, 640 / Math.max(vw, vh, 1));
                cw = Math.max(320, Math.floor(vw * scale));
                ch = Math.max(180, Math.floor(vh * scale));
                if (canvas.width !== cw || canvas.height !== ch) {
                    canvas.width = cw;
                    canvas.height = ch;
                }
            }
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            // Pre-bake 4 soft radial gas cloud sprites once at startup (zero per-frame gradient allocation!)
            function createGasSprite(r, g, b) {
                const s = document.createElement('canvas');
                s.width = 128;
                s.height = 128;
                const sctx = s.getContext('2d');
                const grad = sctx.createRadialGradient(64, 64, 2, 64, 64, 62);
                grad.addColorStop(0.0, `rgba(${r}, ${g}, ${b}, 0.55)`);
                grad.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, 0.26)`);
                grad.addColorStop(0.70, `rgba(${r}, ${g}, ${b}, 0.07)`);
                grad.addColorStop(1.0, `rgba(${r}, ${g}, ${b}, 0.0)`);
                sctx.fillStyle = grad;
                sctx.fillRect(0, 0, 128, 128);
                return s;
            }

            const gasSprites = [
                createGasSprite(255, 183, 3),   // 0: Molten Amber Gold (#FFB703)
                createGasSprite(0, 229, 255),   // 1: Electric Petrol Cyan (#00E5FF)
                createGasSprite(0, 255, 136),   // 2: Bioluminescent Mint (#00FF88)
                createGasSprite(255, 0, 119)    // 3: Radioactive Wristband Pink (#FF0077)
            ];

            // Map normalized image coordinates (3840x2278 = 1.6857 aspect, background-size: contain) to canvas pixels
            function imgToCanvas(ix, iy) {
                const screenAspect = cw / Math.max(ch, 1);
                const imgAspect = 1.6857;
                let drawW = cw;
                let drawH = ch;
                if (screenAspect > imgAspect) {
                    drawH = ch;
                    drawW = ch * imgAspect;
                } else {
                    drawW = cw;
                    drawH = cw / imgAspect;
                }
                const offsetX = (cw - drawW) * 0.5;
                const offsetY = (ch - drawH) * 0.5;
                return {
                    x: offsetX + ix * drawW,
                    y: offsetY + iy * drawH,
                    scale: drawW / 960
                };
            }

            // Initialize 28 briskly billowing Argon gas plumes & rising vapor wisps
            const NUM_PLUMES = 28;
            const plumes = [];

            function resetPlume(p, randomizeAge = false) {
                // Spawn along the iridescent yellow-to-magenta puddle slick & around the submerged fingertips
                const zone = Math.random();
                if (zone < 0.52) {
                    // Main bright yellow pool streaming briskly right toward the gloved hand
                    p.ix = 0.24 + Math.random() * 0.14;
                    p.iy = 0.56 + (Math.random() - 0.5) * 0.08;
                    p.vx = 0.065 + Math.random() * 0.065;
                    p.vy = -0.025 - Math.random() * 0.038; // visible rising vapor curl
                    p.spriteIdx = Math.random() < 0.6 ? 0 : 1; // Amber & Cyan core
                } else if (zone < 0.82) {
                    // Fingertip nexus & cyan/magenta swirl zone
                    p.ix = 0.40 + Math.random() * 0.16;
                    p.iy = 0.55 + (Math.random() - 0.5) * 0.10;
                    p.vx = 0.032 + (Math.random() - 0.30) * 0.055;
                    p.vy = -0.042 - Math.random() * 0.052; // brisk rising Argon mist past the hand
                    p.spriteIdx = Math.random() < 0.55 ? 1 : (Math.random() < 0.5 ? 2 : 3);
                } else {
                    // Foreground lower amber-cyan crescent mist
                    p.ix = 0.28 + Math.random() * 0.28;
                    p.iy = 0.64 + (Math.random() - 0.5) * 0.07;
                    p.vx = 0.025 + (Math.random() - 0.25) * 0.048;
                    p.vy = -0.020 - Math.random() * 0.032;
                    p.spriteIdx = Math.random() < 0.5 ? 0 : 2;
                }

                p.life = 1.6 + Math.random() * 1.8;
                p.age = randomizeAge ? Math.random() * p.life : 0.0;
                p.rx = 60 + Math.random() * 88;   // Horizontal cloud spread
                p.ry = 22 + Math.random() * 38;   // Vertical perspective-flattened mist height
                p.phase = Math.random() * Math.PI * 2;
                p.swirlFreq = 2.4 + Math.random() * 2.2;
                p.maxAlpha = 0.26 + Math.random() * 0.28;
                return p;
            }

            for (let i = 0; i < NUM_PLUMES; i++) {
                plumes.push(resetPlume({}, true));
            }

            let lastTimeSec = performance.now() * 0.001;

            function renderGas(nowMs) {
                requestAnimationFrame(renderGas);

                if (document.hidden) return;
                const modalEl = document.getElementById('archive-modal');
                if (modalEl && modalEl.classList.contains('active')) return;

                const nowSec = nowMs * 0.001;
                const dt = Math.min(0.05, Math.max(0.001, nowSec - lastTimeSec));
                lastTimeSec = nowSec;
                const elapsed = nowSec - shaderStartTime;

                ctx.clearRect(0, 0, cw, ch);
                ctx.globalCompositeOperation = 'lighter';

                // 1. Render billowing, curling Argon gas clouds & rising vapor wisps
                for (let i = 0; i < NUM_PLUMES; i++) {
                    const p = plumes[i];
                    p.age += dt;
                    if (p.age >= p.life) {
                        resetPlume(p, false);
                    }

                    const progress = p.age / p.life;
                    // Smooth fade-in and long vapor fade-out
                    const fadeIn = Math.min(1.0, progress * 3.5);
                    const fadeOut = 1.0 - Math.pow(progress, 1.5);
                    const alpha = fadeIn * fadeOut * p.maxAlpha;

                    // Active sinusoidal curl & mouse wake breeze
                    const waveX = Math.sin(elapsed * p.swirlFreq + p.phase) * 0.024;
                    const waveY = Math.cos(elapsed * (p.swirlFreq * 0.8) + p.phase) * 0.016;
                    p.ix += (p.vx + waveX) * dt;
                    p.iy += (p.vy + waveY) * dt;

                    // Subtle mouse interaction: cursor parts and swirls nearby Argon gas
                    const dxM = p.ix - mouseNorm.x;
                    const dyM = p.iy - mouseNorm.y;
                    const distM2 = dxM * dxM + dyM * dyM;
                    if (distM2 < 0.032 && distM2 > 0.00001) {
                        const push = (0.032 - distM2) * 1.35 * dt;
                        p.ix += (dxM / Math.sqrt(distM2)) * push;
                        p.iy += (dyM / Math.sqrt(distM2)) * push * 0.6;
                    }

                    const pt = imgToCanvas(p.ix, p.iy);
                    // Clouds expand and rise as they evaporate
                    const growth = 0.80 + progress * 0.75;
                    const w = p.rx * growth * pt.scale * 2.0;
                    const h = (p.ry + progress * 28.0) * growth * pt.scale * 2.0;

                    ctx.globalAlpha = alpha;
                    ctx.drawImage(gasSprites[p.spriteIdx], pt.x - w * 0.5, pt.y - h * 0.5, w, h);
                }

                ctx.globalAlpha = 1.0;
            }

            requestAnimationFrame(renderGas);
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
