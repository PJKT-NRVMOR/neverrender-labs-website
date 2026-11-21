/* NeverRender Labs // Unified Tuck-In Scroll Nav Header + Persistent Dark/Light Theme Dock */
(function () {
    'use strict';

    var STORAGE_KEY = 'nrl-theme-mode';
    var SCROLL_THRESHOLD = 110;
    var SUN_SVG = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>';
    var MOON_SVG = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>';
    var UP_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 15-6-6-6 6"></path></svg>';

    var scriptSrc = (document.currentScript && document.currentScript.getAttribute('src')) || '';
    var rootPrefix = scriptSrc.replace(/theme-fab\.js.*$/i, '');

    function readSavedTheme() {
        try {
            return window.localStorage.getItem(STORAGE_KEY);
        } catch (err) {
            return null;
        }
    }

    function writeSavedTheme(mode) {
        try {
            window.localStorage.setItem(STORAGE_KEY, mode);
        } catch (err) {
            /* Storage unavailable in strict privacy contexts */
        }
    }

    function ensureDockStyles() {
        if (document.getElementById('nrl-theme-dock-styles')) return;
        var style = document.createElement('style');
        style.id = 'nrl-theme-dock-styles';
        style.textContent = [
            '.nrl-scroll-dock {',
            '  position: fixed;',
            '  top: 0;',
            '  left: 0;',
            '  right: 0;',
            '  z-index: 95;',
            '  padding: max(6px, env(safe-area-inset-top)) 12px 6px 12px;',
            '  background: rgba(7, 22, 31, 0.92);',
            '  border-bottom: 1px solid rgba(44, 229, 246, 0.42);',
            '  box-shadow: 0 8px 24px rgba(3, 10, 16, 0.55);',
            '  -webkit-backdrop-filter: blur(14px);',
            '  backdrop-filter: blur(14px);',
            '  transform: translateY(-115%);',
            '  opacity: 0;',
            '  pointer-events: none;',
            '  transition: transform 0.24s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease, background-color 0.22s ease, border-color 0.22s ease;',
            '  font-family: "Space Mono", ui-monospace, SFMono-Regular, Consolas, monospace;',
            '}',
            '.nrl-scroll-dock.is-visible {',
            '  transform: translateY(0);',
            '  opacity: 1;',
            '  pointer-events: auto;',
            '}',
            '.nrl-scroll-dock.is-light {',
            '  background: rgba(255, 255, 255, 0.95);',
            '  border-bottom-color: #CBD5E1;',
            '  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.12);',
            '}',
            '.nrl-dock-inner {',
            '  max-width: 1180px;',
            '  margin: 0 auto;',
            '  display: flex;',
            '  align-items: center;',
            '  justify-content: space-between;',
            '  gap: 8px;',
            '  min-height: 36px;',
            '}',
            '.nrl-dock-nav {',
            '  display: flex;',
            '  align-items: center;',
            '  gap: 5px;',
            '  min-width: 0;',
            '  flex-wrap: nowrap;',
            '  overflow-x: auto;',
            '  scrollbar-width: none;',
            '}',
            '.nrl-dock-nav::-webkit-scrollbar { display: none; }',
            '.nrl-dock-link {',
            '  display: inline-flex;',
            '  align-items: center;',
            '  justify-content: center;',
            '  height: 34px;',
            '  padding: 0 10px;',
            '  border-radius: 5px;',
            '  border: 1px solid rgba(44, 229, 246, 0.28);',
            '  background: rgba(11, 34, 45, 0.72);',
            '  color: #D9F4FA;',
            '  text-decoration: none;',
            '  font-size: 0.68rem;',
            '  font-weight: 700;',
            '  letter-spacing: 0.06em;',
            '  text-transform: uppercase;',
            '  white-space: nowrap;',
            '  flex-shrink: 0;',
            '  transition: background-color 0.16s ease, border-color 0.16s ease, color 0.16s ease;',
            '  -webkit-tap-highlight-color: transparent;',
            '}',
            '.nrl-dock-link:hover {',
            '  border-color: #2CE5F6;',
            '  background: rgba(44, 229, 246, 0.16);',
            '  color: #FFFFFF;',
            '}',
            '.nrl-dock-link.is-brand {',
            '  border-color: rgba(255, 107, 43, 0.55);',
            '  color: #FF8C5A;',
            '}',
            '.nrl-dock-link.is-active {',
            '  border-color: #2CE5F6;',
            '  background: rgba(44, 229, 246, 0.2);',
            '  color: #FFFFFF;',
            '}',
            '.nrl-dock-link.is-club19 {',
            '  border-color: rgba(0, 255, 136, 0.45);',
            '  color: #86EFAC;',
            '}',
            '.nrl-dock-link.is-club19.is-active {',
            '  border-color: #00FF88;',
            '  background: rgba(0, 255, 136, 0.2);',
            '  color: #FFFFFF;',
            '}',
            '.nrl-scroll-dock.is-light .nrl-dock-link {',
            '  background: #F1F5F9;',
            '  border-color: #CBD5E1;',
            '  color: #1E293B;',
            '}',
            '.nrl-scroll-dock.is-light .nrl-dock-link:hover {',
            '  background: #E2E8F0;',
            '  border-color: #0F172A;',
            '  color: #0F172A;',
            '}',
            '.nrl-scroll-dock.is-light .nrl-dock-link.is-brand {',
            '  border-color: #EA580C;',
            '  color: #C2410C;',
            '  background: #FFF7ED;',
            '}',
            '.nrl-scroll-dock.is-light .nrl-dock-link.is-club19 {',
            '  border-color: #059669;',
            '  color: #047857;',
            '  background: #ECFDF5;',
            '}',
            '.nrl-scroll-dock.is-light .nrl-dock-link.is-active {',
            '  background: #0F172A;',
            '  border-color: #0F172A;',
            '  color: #FFFFFF;',
            '}',
            '.nrl-dock-actions {',
            '  display: flex;',
            '  align-items: center;',
            '  gap: 6px;',
            '  flex-shrink: 0;',
            '}',
            '.nrl-dock-top-btn,',
            '.nrl-dock-theme-btn {',
            '  display: inline-flex;',
            '  align-items: center;',
            '  justify-content: center;',
            '  height: 34px;',
            '  border-radius: 999px;',
            '  font-family: inherit;',
            '  font-size: 0.68rem;',
            '  font-weight: 700;',
            '  letter-spacing: 0.06em;',
            '  text-transform: uppercase;',
            '  cursor: pointer;',
            '  white-space: nowrap;',
            '  transition: transform 0.14s ease, background-color 0.18s ease, border-color 0.18s ease, color 0.18s ease;',
            '  -webkit-tap-highlight-color: transparent;',
            '  user-select: none;',
            '}',
            '.nrl-dock-top-btn {',
            '  width: 34px;',
            '  padding: 0;',
            '  border: 1px solid rgba(44, 229, 246, 0.35);',
            '  background: rgba(11, 34, 45, 0.78);',
            '  color: #2CE5F6;',
            '}',
            '.nrl-dock-top-btn:hover {',
            '  border-color: #2CE5F6;',
            '  background: rgba(44, 229, 246, 0.18);',
            '}',
            '.nrl-scroll-dock.is-light .nrl-dock-top-btn {',
            '  background: #F1F5F9;',
            '  border-color: #CBD5E1;',
            '  color: #0F172A;',
            '}',
            '.nrl-dock-theme-btn {',
            '  gap: 6px;',
            '  padding: 0 12px 0 10px;',
            '  border: 1.5px solid rgba(44, 229, 246, 0.72);',
            '  background: rgba(11, 34, 45, 0.92);',
            '  color: #F0FAFD;',
            '  box-shadow: 0 0 12px rgba(44, 229, 246, 0.18);',
            '}',
            '.nrl-dock-theme-btn .nrl-dock-icon {',
            '  display: inline-flex;',
            '  align-items: center;',
            '  color: #FFB347;',
            '  line-height: 0;',
            '}',
            '.nrl-dock-theme-btn:hover {',
            '  border-color: #FF6B2B;',
            '}',
            '.nrl-dock-theme-btn:active,',
            '.nrl-dock-top-btn:active {',
            '  transform: scale(0.94);',
            '}',
            '.nrl-scroll-dock.is-light .nrl-dock-theme-btn {',
            '  background: #0F172A;',
            '  border-color: #0F172A;',
            '  color: #FFFFFF;',
            '  box-shadow: none;',
            '}',
            '.nrl-scroll-dock.is-light .nrl-dock-theme-btn .nrl-dock-icon {',
            '  color: #38BDF8;',
            '}',
            '.nrl-scroll-dock.is-light .nrl-dock-theme-btn:hover {',
            '  background: #EA580C;',
            '  border-color: #EA580C;',
            '}',
            '.nrl-legacy-theme-btn {',
            '  display: inline-flex;',
            '  align-items: center;',
            '  gap: 6px;',
            '  height: 38px;',
            '  padding: 0 14px;',
            '  border-radius: 4px;',
            '  border: 1px solid rgba(44, 229, 246, 0.55);',
            '  background: rgba(11, 34, 45, 0.85);',
            '  color: #E2F6FC;',
            '  font-family: "Space Mono", ui-monospace, Consolas, monospace;',
            '  font-size: 0.74rem;',
            '  font-weight: 700;',
            '  letter-spacing: 0.06em;',
            '  text-transform: uppercase;',
            '  cursor: pointer;',
            '}',
            'body.argon-light .nrl-legacy-theme-btn {',
            '  background: #FFFFFF;',
            '  border-color: #0F172A;',
            '  color: #0F172A;',
            '}',
            '.nrl-dock-desktop-only { display: inline-flex; }',
            '.nrl-dock-label-short { display: none; }',
            '@media (max-width: 640px) {',
            '  .nrl-scroll-dock { padding: max(6px, env(safe-area-inset-top)) 8px 6px 8px; }',
            '  .nrl-dock-nav { gap: 4px; }',
            '  .nrl-dock-link { height: 34px; padding: 0 7px; font-size: 0.63rem; letter-spacing: 0.02em; }',
            '  .nrl-dock-desktop-only { display: none; }',
            '  .nrl-dock-label-full { display: none; }',
            '  .nrl-dock-label-short { display: inline; }',
            '  .nrl-dock-theme-btn { height: 34px; padding: 0 9px 0 8px; font-size: 0.64rem; gap: 5px; }',
            '}',
            '@media (max-width: 440px) {',
            '  .nrl-dock-top-btn { display: none; }',
            '}',
            '@media print {',
            '  .nrl-scroll-dock, .nrl-legacy-theme-btn { display: none !important; }',
            '}'
        ].join('\n');
        document.head.appendChild(style);
    }

    function detectSection() {
        var p = (window.location.pathname || '').toLowerCase();
        if (p.indexOf('/club-19') !== -1) return 'club19';
        if (p.indexOf('/area-33') !== -1) return 'area33';
        if (p.indexOf('in-the-works') !== -1) return 'works';
        if (p.indexOf('rendersins') !== -1) return 'sins';
        if (p.indexOf('tech-logs') !== -1 || p.indexOf('neon-physics') !== -1) return 'logs';
        if (p === '/' || p.endsWith('/index.html') || p.endsWith('/argon.html')) return 'home';
        return '';
    }

    function initThemeDock() {
        ensureDockStyles();

        var macroEnv = document.getElementById('macro-env');
        var backdropEl = !macroEnv ? document.querySelector('.macro-environment') : null;
        var headerToggleBtn = document.getElementById('toggle-argon-theme');
        var resumeToggleBtn = document.getElementById('btn-theme-toggle');
        var resumeThemeLabel = document.getElementById('theme-label');
        var isResumePage = !macroEnv && !backdropEl && !!resumeToggleBtn;

        if (!macroEnv && !backdropEl && !isResumePage) {
            return;
        }

        /* Build the tucked-in top scroll header bar */
        var active = detectSection();
        var dock = document.getElementById('nrl-scroll-dock');
        if (!dock) {
            dock = document.createElement('header');
            dock.id = 'nrl-scroll-dock';
            dock.className = 'nrl-scroll-dock';
            dock.setAttribute('aria-label', 'Quick Navigation and Theme Switcher');
            dock.innerHTML =
                '<div class="nrl-dock-inner">' +
                    '<nav class="nrl-dock-nav" aria-label="Site quick links">' +
                        '<a class="nrl-dock-link is-brand' + (active === 'home' ? ' is-active' : '') + '" href="' + rootPrefix + 'index.html?hud=1">NRL</a>' +
                        '<a class="nrl-dock-link' + (active === 'area33' ? ' is-active' : '') + '" href="' + rootPrefix + 'area-33/">' +
                            '<span class="nrl-dock-label-full">AREA 33</span><span class="nrl-dock-label-short">A-33</span>' +
                        '</a>' +
                        '<a class="nrl-dock-link is-club19' + (active === 'club19' ? ' is-active' : '') + '" href="' + rootPrefix + 'club-19/">' +
                            '<span class="nrl-dock-label-full">CLUB 19</span><span class="nrl-dock-label-short">C-19</span>' +
                        '</a>' +
                        '<a class="nrl-dock-link' + (active === 'works' ? ' is-active' : '') + '" href="' + rootPrefix + 'in-the-works.html">' +
                            '<span class="nrl-dock-label-full">IN THE WORKS</span><span class="nrl-dock-label-short">WORKS</span>' +
                        '</a>' +
                        '<a class="nrl-dock-link' + (active === 'sins' ? ' is-active' : '') + '" href="' + rootPrefix + 'rendersins.html">' +
                            '<span class="nrl-dock-label-full">RENDERSINS</span><span class="nrl-dock-label-short">SINS</span>' +
                        '</a>' +
                        '<a class="nrl-dock-link nrl-dock-desktop-only' + (active === 'logs' ? ' is-active' : '') + '" href="' + rootPrefix + 'tech-logs.html">TECH LOGS</a>' +
                    '</nav>' +
                    '<div class="nrl-dock-actions">' +
                        '<button type="button" class="nrl-dock-top-btn" id="nrl-dock-top-btn" title="Back to top" aria-label="Scroll back to top">' + UP_SVG + '</button>' +
                        '<button type="button" class="nrl-dock-theme-btn" id="nrl-dock-theme-btn"></button>' +
                    '</div>' +
                '</div>';
            document.body.appendChild(dock);
        }

        var dockThemeBtn = document.getElementById('nrl-dock-theme-btn');
        var dockTopBtn = document.getElementById('nrl-dock-top-btn');

        /* On legacy subpages without an inline header toggle, add a clean toggle button inside .header-nav too */
        var legacyHeaderBtn = null;
        if (!headerToggleBtn && !resumeToggleBtn) {
            var legacyNav = document.querySelector('.header-nav');
            if (legacyNav) {
                legacyHeaderBtn = document.createElement('button');
                legacyHeaderBtn.type = 'button';
                legacyHeaderBtn.className = 'nrl-legacy-theme-btn';
                legacyNav.appendChild(legacyHeaderBtn);
            }
        }

        function getCurrentIsLight() {
            if (isResumePage) {
                return document.body.classList.contains('light-theme');
            }
            if (macroEnv) {
                return macroEnv.classList.contains('argon-light');
            }
            return document.body.classList.contains('argon-light');
        }

        function syncDockVisibility() {
            var inPuddle = !!(macroEnv && macroEnv.classList.contains('puddle-mode'));
            var shouldShow = !inPuddle && window.scrollY > SCROLL_THRESHOLD;
            dock.classList.toggle('is-visible', shouldShow);
            document.body.classList.toggle('nrl-dock-visible', shouldShow);
        }

        function syncControls(isLight) {
            if (headerToggleBtn) {
                headerToggleBtn.textContent = isLight
                    ? '[\u2600 MODE: CORPORATE PAPER]'
                    : '[\u25D0 MODE: D-SUITE TEAL]';
            }
            if (resumeToggleBtn && resumeThemeLabel) {
                if (isLight) {
                    resumeThemeLabel.textContent = 'LIGHT // PAPER';
                    resumeThemeLabel.classList.remove('text-crt-magenta');
                    resumeThemeLabel.classList.add('text-amber-600');
                    resumeToggleBtn.classList.remove('bg-[#102E3C]', 'text-[#2CE5F6]');
                    resumeToggleBtn.classList.add('bg-white', 'text-slate-900', 'border-slate-300');
                } else {
                    resumeThemeLabel.textContent = 'D-SUITE // TEAL';
                    resumeThemeLabel.classList.add('text-crt-magenta');
                    resumeThemeLabel.classList.remove('text-amber-600');
                    resumeToggleBtn.classList.add('bg-[#102E3C]', 'text-[#2CE5F6]');
                    resumeToggleBtn.classList.remove('bg-white', 'text-slate-900', 'border-slate-300');
                }
            }
            if (legacyHeaderBtn) {
                legacyHeaderBtn.innerHTML = (isLight ? MOON_SVG : SUN_SVG) + '<span>' + (isLight ? 'DARK' : 'LIGHT') + '</span>';
                legacyHeaderBtn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
            }

            dock.classList.toggle('is-light', isLight);
            if (dockThemeBtn) {
                dockThemeBtn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
                dockThemeBtn.setAttribute(
                    'aria-label',
                    isLight ? 'Switch to Dark Mode (D-Suite Petrol)' : 'Switch to Light Mode (Daylight Paper)'
                );
                dockThemeBtn.title = isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode (Outdoor Daylight)';
                dockThemeBtn.innerHTML =
                    '<span class="nrl-dock-icon">' + (isLight ? MOON_SVG : SUN_SVG) + '</span>' +
                    '<span>' + (isLight ? 'DARK' : 'LIGHT') + '</span>';
            }
            syncDockVisibility();
        }

        var internalUpdate = false;

        function applyTheme(isLight, persist) {
            internalUpdate = true;
            if (isResumePage) {
                document.body.classList.toggle('light-theme', isLight);
            } else {
                if (macroEnv) macroEnv.classList.toggle('argon-light', isLight);
                if (backdropEl) backdropEl.classList.toggle('argon-light', isLight);
                document.body.classList.toggle('argon-light', isLight);
            }
            syncControls(isLight);
            if (persist) {
                writeSavedTheme(isLight ? 'light' : 'dark');
            }
            setTimeout(function () {
                internalUpdate = false;
            }, 0);
        }

        /* Restore persisted preference immediately on load */
        var saved = readSavedTheme();
        if (saved === 'light') {
            applyTheme(true, false);
        } else if (saved === 'dark') {
            applyTheme(false, false);
        } else {
            syncControls(getCurrentIsLight());
        }

        if (dockThemeBtn) {
            dockThemeBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                applyTheme(!getCurrentIsLight(), true);
            });
        }
        if (legacyHeaderBtn) {
            legacyHeaderBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                applyTheme(!getCurrentIsLight(), true);
            });
        }
        if (dockTopBtn) {
            dockTopBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        /* Throttled scroll listener for tuck-in header bar */
        var ticking = false;
        window.addEventListener('scroll', function () {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(function () {
                syncDockVisibility();
                ticking = false;
            });
        }, { passive: true });
        syncDockVisibility();

        /* Observe external toggles (header button, resume button, or puddle-mode transitions) */
        var observeTarget = macroEnv || document.body;
        if (typeof MutationObserver !== 'undefined' && observeTarget) {
            var observer = new MutationObserver(function () {
                if (internalUpdate) return;
                var isLight = getCurrentIsLight();
                if (macroEnv) {
                    document.body.classList.toggle('argon-light', isLight);
                }
                syncControls(isLight);
                writeSavedTheme(isLight ? 'light' : 'dark');
            });
            observer.observe(observeTarget, { attributes: true, attributeFilter: ['class'] });
        }

        /* Cross-tab sync */
        window.addEventListener('storage', function (e) {
            if (e.key === STORAGE_KEY && (e.newValue === 'light' || e.newValue === 'dark')) {
                applyTheme(e.newValue === 'light', false);
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeDock);
    } else {
        initThemeDock();
    }
})();
