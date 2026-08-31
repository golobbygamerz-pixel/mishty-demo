(function() {
    'use strict';

    // ===== PORTFOLIO DATA =====
    const portfolioItems = [
        { id: 1, category: 'bride', label: 'Bride', emoji: '👰' },
        { id: 2, category: 'party', label: 'Party', emoji: '🎉' },
        { id: 3, category: 'engagement', label: 'Engagement', emoji: '💍' },
        { id: 4, category: 'editorial', label: 'Editorial', emoji: '📸' },
        { id: 5, category: 'bride', label: 'Bride', emoji: '👰' },
        { id: 6, category: 'party', label: 'Party', emoji: '✨' },
        { id: 7, category: 'engagement', label: 'Engagement', emoji: '💖' },
        { id: 8, category: 'editorial', label: 'Editorial', emoji: '🌟' },
        { id: 9, category: 'bride', label: 'Bride', emoji: '🌹' },
        { id: 10, category: 'party', label: 'Party', emoji: '🥂' },
        { id: 11, category: 'engagement', label: 'Engagement', emoji: '💎' },
        { id: 12, category: 'editorial', label: 'Editorial', emoji: '🎭' },
    ];

    const portfolioGrid = document.getElementById('portfolioGrid');

    function renderPortfolio(filter = 'all') {
        const filtered = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);
        portfolioGrid.innerHTML = filtered.map(item => `
            <div class="portfolio-item" data-category="${item.category}">
                <div style="background: linear-gradient(135deg, #2a221e, #1a1412); width:100%; height:100%; display:flex; align-items:center; justify-content:center; font-size:3.5rem; color:#d4af37; opacity:0.5;">${item.emoji}</div>
                <div class="tag">${item.label}</div>
                <div class="overlay"><span>View Look</span></div>
            </div>
        `).join('');
    }
    renderPortfolio('all');

    // ===== FILTER PILLS =====
    document.querySelectorAll('.filter-pills .pill').forEach(pill => {
        pill.addEventListener('click', function() {
            document.querySelectorAll('.filter-pills .pill').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            renderPortfolio(filter);
        });
    });

    // ===== INSTAGRAM GRID (mock) =====
    const igGrid = document.getElementById('instagramGrid');
    const igPosts = ['🌸', '✨', '💄', '👑', '💋', '🌹'];
    igGrid.innerHTML = igPosts.map(emoji => `
        <div class="ig-item">
            <div style="font-size:3.5rem; opacity:0.6;">${emoji}</div>
            <div class="ig-icon"><i class="fab fa-instagram"></i></div>
        </div>
    `).join('');

    // ===== COUNT-UP STATS =====
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    let counted = false;

    function animateCounts() {
        if (counted) return;
        const rect = statNumbers[0]?.closest('.stats-bar')?.getBoundingClientRect();
        if (!rect) return;
        if (rect.top < window.innerHeight - 60) {
            counted = true;
            statNumbers.forEach(el => {
                const target = parseInt(el.dataset.count, 10);
                let current = 0;
                const step = Math.max(1, Math.floor(target / 50));
                const interval = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(interval);
                    }
                    el.textContent = current + (target === 450 || target === 422 ? '+' : '');
                }, 25);
            });
        }
    }

    // ===== BACK TO TOP =====
    const backTop = document.getElementById('backTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            backTop.classList.add('visible');
        } else {
            backTop.classList.remove('visible');
        }
        animateCounts();
    });
    backTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== TESTIMONIAL AUTO-SCROLL =====
    const carousel = document.getElementById('testimonialCarousel');
    let scrollInterval;

    function startAutoScroll() {
        scrollInterval = setInterval(() => {
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: 340, behavior: 'smooth' });
            }
        }, 4000);
    }

    carousel.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    carousel.addEventListener('mouseleave', startAutoScroll);
    startAutoScroll();

    // ===== FORM SUBMIT =====
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('✨ Thank you, Mishty will reach out within 24 hours! ✨');
        this.reset();
    });

    // ===== INITIAL COUNT CHECK =====
    setTimeout(animateCounts, 400);

})();