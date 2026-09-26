document.addEventListener("DOMContentLoaded", function() {
    // Scroll Animation (Fade In)
    const fadeElements = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });

    // Contact Form Submit Handler
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            const name = document.getElementById('name').value;
            alert('ขอบคุณครับคุณ ' + name + '\nข้อความของคุณถูกส่งเรียบร้อยแล้ว (นี่เป็นเพียงการจำลอง)');
            contactForm.reset();
        });
    }
});
