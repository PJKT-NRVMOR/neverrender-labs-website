/* NeverRender Labs // Ne-10 Interactive Brass & Borosilicate Orbital Orrery (2 + 8 Electron Site Map) */
(function () {
    'use strict';

    var NODES = [
        /* Inner Shell (n = 1 // 2 Core Twin-Universe Electrons) */
        {
            id: 'area-33',
            code: 'Ne-01',
            shell: 'INNER SHELL (n=1)',
            label: 'AREA 33',
            title: 'Area 33 // Rindersin, Nevada',
            desc: 'The Rinder-Files proving ground: 4 playable episodes, Granny Theft Jax, Russian Blair d\'Etat & free Drive Sweep.',
            href: 'area-33/',
            ring: 0,
            angle: 0.4,
            speed: 0.34,
            color: '#FF5522',
            glow: 'rgba(255, 85, 34, 0.85)',
            radius: 7.5
        },
        {
            id: 'club-19',
            code: 'Ne-02',
            shell: 'INNER SHELL (n=1)',
            label: 'CLUB 19',
            title: 'Club 19 // Keystone Labs (RinderWins)',
            desc: 'Velvet-rope vault of zero-sin first-pass victories: Jax\'s Keystone Win ("7 Seconds to Heavom") + 3 open-source prompts.',
            href: 'club-19/',
            ring: 0,
            angle: 3.54,
            speed: 0.34,
            color: '#00FF88',
            glow: 'rgba(0, 255, 136, 0.85)',
            radius: 7.5
        },
        /* Outer Shell (n = 2 // 8 Full-Octet Studio Wing Electrons) */
        {
            id: 'in-the-works',
            code: 'Ne-03',
            shell: 'OUTER SHELL (n=2)',
            label: 'IN THE WORKS',
            title: 'In The Works // Outpost Cruise Night Devblog',
            desc: 'Streaming debut 9:16 music video "We Are What You See" + lossless audio deck, 4x5 Aurora plates & parallax audits.',
            href: 'in-the-works.html',
            ring: 1,
            angle: 0.9,
            speed: 0.24,
            color: '#FF6B2B',
            glow: 'rgba(255, 107, 43, 0.85)',
            radius: 6.5
        },
        {
            id: 'rendersins',
            code: 'Ne-04',
            shell: 'OUTER SHELL (n=2)',
            label: 'RENDERSINS',
            title: 'RenderSins *ding!* // Hall of Shame & Fixes',
            desc: 'Every generative cinema physics crime caught on camera with interactive zero-KB Web Audio *ding!* counter.',
            href: 'rendersins.html',
            ring: 1,
            angle: 4.05,
            speed: 0.24,
            color: '#FF3B30',
            glow: 'rgba(255, 59, 48, 0.85)',
            radius: 6.5
        },
        {
            id: 'front-desk',
            code: 'Ne-05',
            shell: 'OUTER SHELL (n=2)',
            label: 'FRONT DESK',
            title: '24/7 Autonomous AI Front Desk',
            desc: 'Sovereign reception prototype, live voice routing, and zero-agency-lag client intake architecture.',
            href: 'front-desk.html',
            ring: 2,
            angle: 1.9,
            speed: 0.19,
            color: '#2CE5F6',
            glow: 'rgba(44, 229, 246, 0.88)',
            radius: 6.5
        },
        {
            id: 'tech-logs',
            code: 'Ne-06',
            shell: 'OUTER SHELL (n=2)',
            label: 'TECH LOGS',
            title: 'Tech Logs // Architecture & Deep Audits',
            desc: 'Tiny Hyperion 6800U engineering logs, Streamable-HTTP MCP swarms, and verified forensic reports.',
            href: 'tech-logs.html',
            ring: 2,
            angle: 5.05,
            speed: 0.19,
            color: '#67E8F9',
            glow: 'rgba(103, 232, 249, 0.82)',
            radius: 6.0
        },
        {
            id: 'neon-benchmark',
            code: 'Ne-07',
            shell: 'OUTER SHELL (n=2)',
            label: 'NEON LAB',
            title: 'Gemini 4 Neon Extra Physics Benchmark (Parts 1 & 2)',
            desc: 'Part 2 (5m 54s Red Trilemma, 1052N Anamorphic, ACES 1.3 & 6800U VCN Bus) + Part 1 (2m 47s) Python-verified proofs.',
            href: 'neon-physics-benchmark-pt2.html',
            ring: 3,
            angle: 0.25,
            speed: 0.145,
            color: '#FFB347',
            glow: 'rgba(255, 179, 71, 0.85)',
            radius: 6.2
        },
        {
            id: 'characters',
            code: 'Ne-08',
            shell: 'OUTER SHELL (n=2)',
            label: 'CHARACTERS',
            title: 'Character Archives // Anthropolis Roster',
            desc: 'Jax Unit 0, Blue Team Beau, DJ Churn, and the visual lore sheets anchoring the NeverRender universe.',
            href: 'characters.html',
            ring: 3,
            angle: 3.35,
            speed: 0.145,
            color: '#C88A3B',
            glow: 'rgba(200, 138, 59, 0.85)',
            radius: 6.0
        },
        {
            id: 'still-edits',
            code: 'Ne-09',
            shell: 'OUTER SHELL (n=2)',
            label: 'STILL EDITS',
            title: 'Still Edits // Color Science & Grading Vault',
            desc: 'C2PA-signed photographic plates, custom LUTs, and tactile film-emulation grading studies.',
            href: 'still-edits.html',
            ring: 4,
            angle: 2.45,
            speed: 0.115,
            color: '#38BDF8',
            glow: 'rgba(56, 189, 248, 0.82)',
            radius: 5.8
        },
        {
            id: 'resume',
            code: 'Ne-10',
            shell: 'OUTER SHELL (n=2)',
            label: 'RESUME',
            title: 'Matthew Cole Wyatt // Executive Resume',
            desc: 'Full technical systems architect dossier, print-ready layout, and direct studio contact channels.',
            href: 'resume.html',
            ring: 4,
            angle: 5.6,
            speed: 0.115,
            color: '#E09F5A',
            glow: 'rgba(224, 159, 90, 0.85)',
            radius: 5.8
        }
    ];

    var RINGS = [
        { rxRatio: 0.19, ryRatio: 0.30, label: 'n=1' },
        { rxRatio: 0.27, ryRatio: 0.44, label: 'n=2a' },
        { rxRatio: 0.34, ryRatio: 0.58, label: 'n=2b' },
        { rxRatio: 0.41, ryRatio: 0.72, label: 'n=2c' },
        { rxRatio: 0.47, ryRatio: 0.85, label: 'n=2d' }
    ];

    function initOrrery() {
        var stage = document.getElementById('ne-orrery-stage');
        var canvas = document.getElementById('ne-orrery-canvas');
        if (!stage || !canvas) return;

        var ctx = canvas.getContext('2d');
        if (!ctx) return;

        var macroEnv = document.getElementById('macro-env');
        var readoutCode = document.getElementById('ne-readout-code');
        var readoutTitle = document.getElementById('ne-readout-title');
        var readoutDesc = document.getElementById('ne-readout-desc');
        var readoutLink = document.getElementById('ne-readout-link');
        var readoutDot = document.getElementById('ne-readout-dot');
        var pillStrip = document.getElementById('ne-orrery-pills');
        var pauseBtn = document.getElementById('ne-orrery-pause');
        var tooltipEl = document.getElementById('ne-orrery-tooltip');

        var width = 700;
        var height = 280;
        var dpr = Math.min(window.devicePixelRatio || 1, 2);

        var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var isPaused = !!reducedMotion;
        var isInView = true;
        var hoveredIdx = -1;
        var selectedIdx = 0; /* Default highlight: Area 33 */
        var currentSpeedMult = 1.0;
        var pulseTime = 0;
        var lastTs = 0;

        /* Subtle static petrol stardust coordinates */
        var stars = [];
        for (var s = 0; s < 42; s++) {
            stars.push({
                x: ((s * 73 + 19) % 100) / 100,
                y: ((s * 41 + 31) % 100) / 100,
                r: (s % 3 === 0) ? 1.3 : 0.85,
                a: 0.14 + ((s * 17) % 30) / 100
            });
        }

        /* Build interactive 10-node quick-select pill bar */
        var pillButtons = [];
        if (pillStrip) {
            pillStrip.innerHTML = '';
            NODES.forEach(function (node, idx) {
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'ne-pill-btn';
                btn.setAttribute('data-node-idx', String(idx));
                btn.innerHTML =
                    '<span class="ne-pill-dot" style="background:' + node.color + ';box-shadow:0 0 8px ' + node.glow + ';"></span>' +
                    '<span>' + node.label + '</span>';
                btn.addEventListener('mouseenter', function () {
                    hoveredIdx = idx;
                    selectedIdx = idx;
                    syncReadout(idx);
                });
                btn.addEventListener('mouseleave', function () {
                    if (hoveredIdx === idx) hoveredIdx = -1;
                });
                btn.addEventListener('click', function () {
                    if (selectedIdx === idx) {
                        window.location.href = node.href;
                    } else {
                        selectedIdx = idx;
                        syncReadout(idx);
                    }
                });
                pillStrip.appendChild(btn);
                pillButtons.push(btn);
            });
        }

        function syncReadout(idx) {
            var node = NODES[idx] || NODES[0];
            if (readoutCode) readoutCode.textContent = node.code + ' // ' + node.shell;
            if (readoutTitle) readoutTitle.textContent = node.title;
            if (readoutDesc) readoutDesc.textContent = node.desc;
            if (readoutLink) {
                readoutLink.href = node.href;
                readoutLink.textContent = '[ENTER ' + node.label + ' ->]';
            }
            if (readoutDot) {
                readoutDot.style.background = node.color;
                readoutDot.style.boxShadow = '0 0 12px ' + node.glow;
            }
            pillButtons.forEach(function (b, i) {
                b.classList.toggle('active', i === idx);
            });
        }

        syncReadout(selectedIdx);

        if (pauseBtn) {
            pauseBtn.textContent = isPaused ? '[▶ RESUME ORBIT]' : '[⏸ FREEZE ORBIT]';
            pauseBtn.addEventListener('click', function () {
                isPaused = !isPaused;
                pauseBtn.textContent = isPaused ? '[▶ RESUME ORBIT]' : '[⏸ FREEZE ORBIT]';
            });
        }

        function resize() {
            var rect = stage.getBoundingClientRect();
            width = Math.max(300, Math.floor(rect.width));
            height = width < 520 ? 250 : 290;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
        }
        resize();
        window.addEventListener('resize', resize);

        function getNodeScreenPos(node) {
            var cx = width * 0.5;
            var cy = height * 0.52;
            var ring = RINGS[node.ring];
            var rx = width * ring.rxRatio;
            var ry = (height * 0.44) * ring.ryRatio;
            var x = cx + Math.cos(node.angle) * rx;
            var y = cy + Math.sin(node.angle) * ry;
            /* Depth scale: sin(angle) = -1 is far back, +1 is front */
            var depth = (Math.sin(node.angle) + 1) * 0.5;
            return { x: x, y: y, depth: depth, rx: rx, ry: ry };
        }

        function findHitNode(px, py, hitRadius) {
            var best = -1;
            var bestDist = hitRadius;
            for (var i = 0; i < NODES.length; i++) {
                var pos = getNodeScreenPos(NODES[i]);
                var dx = px - pos.x;
                var dy = py - pos.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < bestDist) {
                    bestDist = dist;
                    best = i;
                }
            }
            return best;
        }

        function updateTooltip(idx) {
            if (!tooltipEl) return;
            if (idx < 0) {
                tooltipEl.classList.remove('visible');
                return;
            }
            var node = NODES[idx];
            var pos = getNodeScreenPos(node);
            tooltipEl.innerHTML =
                '<span class="ne-tt-dot" style="background:' + node.color + ';"></span>' +
                '<strong>' + node.label + '</strong>' +
                '<span class="ne-tt-hint">CLICK</span>';
            var tx = Math.max(70, Math.min(width - 70, pos.x));
            var ty = Math.max(30, pos.y - 24);
            tooltipEl.style.left = tx + 'px';
            tooltipEl.style.top = ty + 'px';
            tooltipEl.classList.add('visible');
        }

        canvas.addEventListener('mousemove', function (e) {
            var rect = canvas.getBoundingClientRect();
            var mx = e.clientX - rect.left;
            var my = e.clientY - rect.top;
            var hit = findHitNode(mx, my, 28);
            hoveredIdx = hit;
            canvas.style.cursor = hit >= 0 ? 'pointer' : 'default';
            if (hit >= 0) {
                selectedIdx = hit;
                syncReadout(hit);
            }
            updateTooltip(hit);
        });

        canvas.addEventListener('mouseleave', function () {
            hoveredIdx = -1;
            canvas.style.cursor = 'default';
            updateTooltip(-1);
        });

        canvas.addEventListener('click', function (e) {
            var rect = canvas.getBoundingClientRect();
            var mx = e.clientX - rect.left;
            var my = e.clientY - rect.top;
            var hit = findHitNode(mx, my, 32);
            if (hit >= 0) {
                /* On touch-like coarse pointers, first tap selects; second tap navigates */
                var isTouch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
                if (isTouch && selectedIdx !== hit) {
                    selectedIdx = hit;
                    syncReadout(hit);
                    updateTooltip(hit);
                } else {
                    window.location.href = NODES[hit].href;
                }
            }
        });

        if (typeof IntersectionObserver !== 'undefined') {
            var io = new IntersectionObserver(function (entries) {
                isInView = !!(entries[0] && entries[0].isIntersecting);
            }, { threshold: 0.05 });
            io.observe(stage);
        }

        function draw(ts) {
            window.requestAnimationFrame(draw);

            var inPuddle = !!(macroEnv && macroEnv.classList.contains('puddle-mode'));
            if (inPuddle || !isInView) {
                lastTs = ts;
                return;
            }

            var dt = lastTs ? Math.min(0.05, (ts - lastTs) / 1000) : 0.016;
            lastTs = ts;
            pulseTime += dt;

            /* Smooth bullet-time slowdown when hovering a node or pill */
            var targetMult = isPaused ? 0.0 : (hoveredIdx >= 0 ? 0.12 : 1.0);
            currentSpeedMult += (targetMult - currentSpeedMult) * Math.min(1, dt * 6.5);

            for (var i = 0; i < NODES.length; i++) {
                NODES[i].angle += NODES[i].speed * dt * currentSpeedMult;
            }

            var isLight = !!(macroEnv && macroEnv.classList.contains('argon-light')) ||
                document.body.classList.contains('argon-light');

            ctx.save();
            ctx.scale(dpr, dpr);
            ctx.clearRect(0, 0, width, height);

            var cx = width * 0.5;
            var cy = height * 0.52;

            /* 1. Ambient petrol-slate or daylight blueprint radial wash */
            var bgGrad = ctx.createRadialGradient(cx, cy, 8, cx, cy, width * 0.55);
            if (isLight) {
                bgGrad.addColorStop(0, 'rgba(232, 69, 30, 0.09)');
                bgGrad.addColorStop(0.35, 'rgba(14, 116, 144, 0.06)');
                bgGrad.addColorStop(1, 'rgba(248, 250, 252, 0.0)');
            } else {
                bgGrad.addColorStop(0, 'rgba(232, 69, 30, 0.17)');
                bgGrad.addColorStop(0.28, 'rgba(44, 229, 246, 0.10)');
                bgGrad.addColorStop(0.68, 'rgba(11, 34, 45, 0.25)');
                bgGrad.addColorStop(1, 'rgba(6, 9, 14, 0.0)');
            }
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, width, height);

            /* Subtle ambient dust specks */
            for (var s = 0; s < stars.length; s++) {
                var st = stars[s];
                ctx.beginPath();
                ctx.arc(st.x * width, st.y * height, st.r, 0, Math.PI * 2);
                ctx.fillStyle = isLight
                    ? 'rgba(15, 23, 42, ' + (st.a * 0.35) + ')'
                    : 'rgba(103, 232, 249, ' + st.a + ')';
                ctx.fill();
            }

            /* 2. Concentric tilted brass & cyan orbital tracks */
            var activeRing = (hoveredIdx >= 0 ? NODES[hoveredIdx].ring : NODES[selectedIdx].ring);
            for (var r = 0; r < RINGS.length; r++) {
                var ring = RINGS[r];
                var rx = width * ring.rxRatio;
                var ry = (height * 0.44) * ring.ryRatio;
                var isRingActive = (r === activeRing);
                ctx.beginPath();
                ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
                if (isLight) {
                    ctx.strokeStyle = isRingActive
                        ? 'rgba(234, 88, 12, 0.62)'
                        : (r === 0 ? 'rgba(14, 116, 144, 0.32)' : 'rgba(100, 116, 139, 0.24)');
                } else {
                    ctx.strokeStyle = isRingActive
                        ? 'rgba(255, 107, 43, 0.65)'
                        : (r === 0 ? 'rgba(200, 138, 59, 0.38)' : 'rgba(44, 229, 246, 0.18)');
                }
                ctx.lineWidth = isRingActive ? 1.6 : 1.0;
                ctx.stroke();
            }

            /* Compute all node screen coordinates & sort back-to-front */
            var sorted = NODES.map(function (node, idx) {
                var pos = getNodeScreenPos(node);
                return { node: node, idx: idx, x: pos.x, y: pos.y, depth: pos.depth };
            }).sort(function (a, b) { return a.depth - b.depth; });

            function drawElectron(item) {
                var node = item.node;
                var isHov = (item.idx === hoveredIdx);
                var isSel = (item.idx === selectedIdx);
                var scale = 0.78 + item.depth * 0.42;
                var rad = node.radius * scale * (isHov ? 1.85 : (isSel ? 1.38 : 1.0));

                /* Outer borosilicate halo */
                var haloRad = rad * (isHov ? 3.2 : (isSel ? 2.5 : 1.9));
                var halo = ctx.createRadialGradient(item.x, item.y, rad * 0.2, item.x, item.y, haloRad);
                halo.addColorStop(0, node.glow);
                halo.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = halo;
                ctx.beginPath();
                ctx.arc(item.x, item.y, haloRad, 0, Math.PI * 2);
                ctx.fill();

                /* Brass/glass selection reticle ring when active */
                if (isHov || isSel) {
                    ctx.beginPath();
                    ctx.arc(item.x, item.y, rad + 5.5, 0, Math.PI * 2);
                    ctx.strokeStyle = isLight ? '#0F172A' : '#FFB48A';
                    ctx.lineWidth = 1.25;
                    ctx.stroke();
                }

                /* Solid orb with specular borosilicate glass highlight */
                var orbGrad = ctx.createRadialGradient(
                    item.x - rad * 0.32,
                    item.y - rad * 0.32,
                    rad * 0.12,
                    item.x,
                    item.y,
                    rad
                );
                orbGrad.addColorStop(0, '#FFFFFF');
                orbGrad.addColorStop(0.35, node.color);
                orbGrad.addColorStop(1, isLight ? '#1E293B' : '#081822');
                ctx.fillStyle = orbGrad;
                ctx.beginPath();
                ctx.arc(item.x, item.y, rad, 0, Math.PI * 2);
                ctx.fill();

                /* Crisp compact label beside selected/hovered orb or foreground inner-shell orbs */
                if (isHov || isSel || (width >= 560 && item.depth > 0.78)) {
                    ctx.font = '700 ' + (isHov || isSel ? '10.5px' : '9px') + ' "Space Mono", monospace';
                    ctx.textAlign = 'center';
                    ctx.fillStyle = isLight
                        ? (isHov || isSel ? '#0F172A' : 'rgba(15, 23, 42, 0.72)')
                        : (isHov || isSel ? '#FFFFFF' : 'rgba(226, 246, 252, 0.72)');
                    ctx.fillText(node.label, item.x, item.y + rad + 13);
                }
            }

            /* 3A. Draw far-side electrons BEHIND nucleus */
            for (var b = 0; b < sorted.length; b++) {
                if (sorted[b].depth < 0.5) drawElectron(sorted[b]);
            }

            /* 3B. Draw Central Ne-10 Brass & Borosilicate Plasma Nucleus */
            var pulse = 1 + Math.sin(pulseTime * 2.2) * 0.045;
            var nucR = (width < 500 ? 18 : 22) * pulse;

            /* Outer Ne-10 vermilion bloom */
            var nucBloom = ctx.createRadialGradient(cx, cy, nucR * 0.25, cx, cy, nucR * 3.4);
            nucBloom.addColorStop(0, 'rgba(255, 180, 138, 0.85)');
            nucBloom.addColorStop(0.28, 'rgba(232, 69, 30, 0.55)');
            nucBloom.addColorStop(0.58, 'rgba(44, 229, 246, 0.20)');
            nucBloom.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = nucBloom;
            ctx.beginPath();
            ctx.arc(cx, cy, nucR * 3.4, 0, Math.PI * 2);
            ctx.fill();

            /* Machined brass outer bezel around nucleus */
            ctx.beginPath();
            ctx.arc(cx, cy, nucR + 4, 0, Math.PI * 2);
            ctx.strokeStyle = isLight ? 'rgba(180, 83, 9, 0.75)' : 'rgba(200, 138, 59, 0.82)';
            ctx.lineWidth = 1.6;
            ctx.stroke();

            /* Glowing Ne-10 core sphere */
            var coreGrad = ctx.createRadialGradient(
                cx - nucR * 0.3,
                cy - nucR * 0.3,
                nucR * 0.1,
                cx,
                cy,
                nucR
            );
            coreGrad.addColorStop(0, '#FFF5EE');
            coreGrad.addColorStop(0.38, '#FF6B2B');
            coreGrad.addColorStop(0.75, '#E8451E');
            coreGrad.addColorStop(1, '#102E3C');
            ctx.fillStyle = coreGrad;
            ctx.beginPath();
            ctx.arc(cx, cy, nucR, 0, Math.PI * 2);
            ctx.fill();

            /* Crisp "Ne 10" nucleus stamp */
            ctx.fillStyle = '#FFFFFF';
            ctx.font = '700 11px "Space Mono", monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('Ne', cx - 3, cy + 1);
            ctx.font = '700 7.5px "Space Mono", monospace';
            ctx.fillText('10', cx + 9, cy - 5);
            ctx.textBaseline = 'alphabetic';

            /* 3C. Draw near-side electrons IN FRONT of nucleus */
            for (var f = 0; f < sorted.length; f++) {
                if (sorted[f].depth >= 0.5) drawElectron(sorted[f]);
            }

            /* Keep floating tooltip glued to moving hovered orb */
            if (hoveredIdx >= 0) {
                updateTooltip(hoveredIdx);
            }

            ctx.restore();
        }

        window.requestAnimationFrame(draw);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initOrrery);
    } else {
        initOrrery();
    }
})();
