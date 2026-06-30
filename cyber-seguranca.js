(() => {
    const overlay   = document.getElementById('intro-overlay');
    const canvas    = document.getElementById('intro-canvas');
    const ctx       = canvas.getContext('2d');
    const tLines    = document.getElementById('t-lines');
    const heading   = document.getElementById('intro-heading');
    const glitchBar = document.getElementById('intro-glitch-bar');

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    /* ---- Matrix rain ---- */
    const cols  = Math.floor(canvas.width / 16);
    const drops = Array(cols).fill(1);
    const chars = 'アイウエオカキクケコABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/|:;';
    let matrixAlpha = 1;

    function drawMatrix() {
        ctx.fillStyle = `rgba(0,0,0,${0.06 + (1 - matrixAlpha) * 0.2})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = '14px Courier New';
        for (let i = 0; i < drops.length; i++) {
            const ch = chars[Math.floor(Math.random() * chars.length)];
            const bright = Math.random() > 0.92;
            ctx.fillStyle = bright
                ? `rgba(200,255,210,${matrixAlpha})`
                : `rgba(0,200,60,${matrixAlpha * 0.7})`;
            ctx.fillText(ch, i * 16, drops[i] * 16);
            if (drops[i] * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    const matrixTimer = setInterval(drawMatrix, 40);

    /* ---- Terminal lines ---- */
    const lines = [
        { text: '> INICIANDO MÓDULO: CYBER SEGURANÇA', delay: 200 },
        { text: '> Conectando ao servidor seguro...', delay: 700 },
        { text: '  [✓] TLS 1.3 ativo — conexão criptografada', delay: 1150, cls: 'dim' },
        { text: '> Escaneando vulnerabilidades do sistema...', delay: 1600 },
        { text: '  [!] CVE-2024-0001 — Severity: CRITICAL', delay: 2050, cls: 'red' },
        { text: '  [!] CVE-2024-0882 — Severity: HIGH', delay: 2350, cls: 'red' },
        { text: '  [✓] CVE-2023-4422 — Patched', delay: 2600, cls: 'dim' },
        { text: '> Executando análise de rede...', delay: 3100 },
        { text: '  Firewall: ATIVO    IDS: ONLINE    VPN: ON', delay: 3500, cls: 'cyan' },
        { text: '> Verificando integridade dos dados...', delay: 4000 },
        { text: '  Hash SHA-256: a3f1...c9b2  [OK]', delay: 4400, cls: 'dim' },
        { text: '> Tentativa de acesso detectada: 187.32.xx.xx', delay: 4900, cls: 'yellow' },
        { text: '  [BLOQUEADO] Regra 0x4F2 — IP na blacklist', delay: 5300, cls: 'red' },
        { text: '> Autenticação multifator validada', delay: 5800, cls: 'cyan' },
        { text: '> Carregando conteúdo classificado...', delay: 6300 },
        { text: '  [██████████] 100% — ACESSO AUTORIZADO', delay: 6800, cls: 'cyan' },
    ];

    lines.forEach(({ text, delay, cls }) => {
        setTimeout(() => {
            const d = document.createElement('div');
            d.className = 't-line show' + (cls ? ` t-${cls}` : '');
            d.textContent = text;
            tLines.appendChild(d);
        }, delay);
    });

    /* ---- Glitch bars ---- */
    function fireGlitch() {
        const top = Math.random() * canvas.height * 0.8;
        const h   = 15 + Math.random() * 60;
        const tx  = (Math.random() - 0.5) * 28;
        glitchBar.style.cssText = `
            position:absolute; left:0; width:100%;
            top:${top}px; height:${h}px;
            background: rgba(255,0,60,0.16);
            transform: translateX(${tx}px);
            mix-blend-mode: screen;
            z-index:4; pointer-events:none; opacity:1;
        `;
        const slice = ctx.getImageData(0, top, canvas.width, h);
        ctx.save();
        ctx.globalAlpha = 0.55;
        ctx.putImageData(slice, tx, top);
        ctx.restore();
        setTimeout(() => { glitchBar.style.opacity = '0'; }, 80 + Math.random() * 100);
    }

    /* ---- Reveal title ---- */
    let glitchInterval;

    function startGlitchPhase() {
        let count = 0;
        glitchInterval = setInterval(() => {
            fireGlitch();
            if (Math.random() > 0.5) fireGlitch();
            count++;
            if (count >= 22) {
                clearInterval(glitchInterval);
                showTitle();
            }
        }, 160);
    }

    function showTitle() {
        matrixAlpha = 0.12;
        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        heading.style.opacity    = '1';
        heading.style.transition = 'clip-path 2s steps(28, end)';
        heading.style.clipPath   = 'inset(0 0% 0 0)';

        let gc = 0;
        const gi = setInterval(() => {
            heading.classList.add('glitch');
            setTimeout(() => heading.classList.remove('glitch'), 80);
            gc++;
            if (gc >= 7) clearInterval(gi);
        }, 380);

        setTimeout(dismissIntro, 3800);
    }

    setTimeout(startGlitchPhase, 7500);

    /* ---- Dismiss ---- */
    function dismissIntro() {
        clearInterval(matrixTimer);
        clearInterval(glitchInterval);
        overlay.classList.add('fade-out');

        document.body.classList.add('conteudo-visivel');
        setTimeout(() => {
            overlay.remove();
            document.body.classList.add('conteudo-animado');
        }, 800);
    }

    overlay.addEventListener('click', dismissIntro);

    window.addEventListener('resize', () => {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    });



    const logo       = document.querySelector('.logo-reduzida');
    const chaseLayer = document.getElementById('robo-chase-layer');
    const chaseTrack = document.querySelector('.robo-chase-track');
    const chaseVirus  = document.querySelector('.robo-chase-virus');
    const chaseRobot  = document.querySelector('.robo-chase-robot');
    const chaseZap    = document.querySelector('.robo-chase-zap');

    let chaseEmAndamento = false;

    function dispararPerseguicao() {
        if (chaseEmAndamento) return;
        chaseEmAndamento = true;

        const topoAleatorio = 25 + Math.random() * 50; // entre 25% e 75% da altura
        chaseTrack.style.setProperty('--chase-top', `${topoAleatorio}%`);
        chaseTrack.style.setProperty('--chase-dur', '4.2s');

        chaseLayer.classList.add('ativo');

        [chaseVirus, chaseRobot].forEach(el => {
            el.classList.remove('correndo');
        });
        chaseZap.classList.remove('zap-ativo');
        void chaseVirus.offsetWidth;
        void chaseRobot.offsetWidth;

        chaseVirus.classList.add('correndo');
        chaseRobot.classList.add('correndo');
        setTimeout(() => {
            chaseZap.style.left = '92%';
            chaseZap.classList.add('zap-ativo');
        }, 3500);

        setTimeout(() => {
            chaseLayer.classList.remove('ativo');
            chaseEmAndamento = false;
        }, 4400);
    }

    if (logo) {
        logo.addEventListener('click', dispararPerseguicao);
    }
})();
