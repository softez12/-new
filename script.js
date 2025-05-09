
document.addEventListener('DOMContentLoaded', function() {

    const supportButton = document.querySelector('header nav ul li:first-child a');
    supportButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.open', '_blank');
    });


    const downloadHeaderButton = document.querySelector('header nav ul li:last-child a');
    downloadHeaderButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = '/download';
    });


    const downloadHeroButton = document.querySelector('.download-btn-hero');
    if (downloadHeroButton) {
        downloadHeroButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '/download';
        });
    }


    const learnMoreButton = document.querySelector('.learn-more-btn');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#features').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }


    const downloadLargeButton = document.querySelector('.download-btn-large');
    if (downloadLargeButton) {
        downloadLargeButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '/download';
        });
    }


    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href === '#') {
                // Заменяем заглушки на реальные ссылки
                switch(this.textContent.trim()) {
                    case 'Политика конфиденциальности':
                        window.location.href = '/privacy-policy';
                        break;
                    case 'Условия обслуживания':
                        window.location.href = '/terms-of-service';
                        break;
                    case 'Правила использования':
                        window.location.href = '/usage-rules';
                        break;
                }
            } else {
                window.location.href = href;
            }
        });
    });


    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').classList.contains('fa-telegram')
                ? 'https://t.me/yourclient'
                : 'https://discord.gg/yourclient';
            window.open(platform, '_blank');
        });
    });


    createFireflies();
});


function createFireflies() {
    const firefliesContainer = document.querySelector('.fireflies');
    if (!firefliesContainer) return;

    const numberOfFireflies = 20;

    for (let i = 0; i < numberOfFireflies; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';


        const posX = Math.random() * 100;
        const posY = Math.random() * 100;


        const size = Math.random() * 5 + 3;


        const duration = Math.random() * 10 + 5;


        const delay = Math.random() * 5;

        firefly.style.left = `${posX}%`;
        firefly.style.top = `${posY}%`;
        firefly.style.width = `${size}px`;
        firefly.style.height = `${size}px`;
        firefly.style.animationDuration = `${duration}s`;
        firefly.style.animationDelay = `${delay}s`;

        firefliesContainer.appendChild(firefly);
    }
}