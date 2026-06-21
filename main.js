document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect for terminal
    const terminalText = [
        "Awaiting instruction...",
        "Loading deep-lore ingestion...",
        "Accessing PRODUCTION MATRIX INVENTORY...",
        "System Status: READY FOR INSTRUCTION."
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 50;
    const typewriterEl = document.getElementById('typewriter');

    function type() {
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
            typeSpeed = 2000; // pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % terminalText.length;
            typeSpeed = 500; // pause before typing next
        }

        setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000); // initial start delay

    // Macro-Diorama Parallax Effect
    const viewport = document.getElementById('main-viewport');
    const background = document.querySelector('.background-plate');
    const container = document.querySelector('.macro-environment');

    container.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        // Rotate viewport slightly
        viewport.style.transform = `rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateZ(50px)`;
        
        // Shift background slightly opposite to emphasize depth
        background.style.transform = `translateX(${-x * 2}%) translateY(${-y * 2}%) scale(1.05)`;
    });

    container.addEventListener('mouseleave', () => {
        viewport.style.transform = `rotateX(0) rotateY(0) translateZ(0)`;
        background.style.transform = `translateX(0) translateY(0) scale(1)`;
    });

    // Disruptive Pop on Button click
    const initBtn = document.getElementById('init-sequence');
    initBtn.addEventListener('click', () => {
        // High Energy Flash inversion
        document.body.style.backgroundColor = '#00E5FF';
        setTimeout(() => {
            document.body.style.backgroundColor = '#050a0d';
        }, 150);
        
        const terminalHeader = document.querySelector('.terminal-header');
        terminalHeader.style.backgroundColor = '#FF6B6B';
        terminalHeader.style.color = '#fff';
        
        // Typewriter override
        typewriterEl.textContent = "SEQUENCE INITIALIZED. COMPILING ASSETS...";
        charIndex = typewriterEl.textContent.length;
        isDeleting = false;
        
        // Return terminal header color after 2s
        setTimeout(() => {
            terminalHeader.style.backgroundColor = 'rgba(18, 69, 89, 0.5)';
            terminalHeader.style.color = '#FF6B6B';
        }, 2000);
    });

    // Video Modal Logic
    const viewArchivesBtn = document.getElementById('view-archives');
    const archiveModal = document.getElementById('archive-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const launchVideo = document.getElementById('launch-video');

    viewArchivesBtn.addEventListener('click', () => {
        archiveModal.classList.add('active');
        launchVideo.play();
    });

    closeModalBtn.addEventListener('click', () => {
        archiveModal.classList.remove('active');
        launchVideo.pause();
    });
});
