document.addEventListener("DOMContentLoaded", function() {
    // Loader
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 2000);

    // AOS Initialization
    AOS.init();

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });

    // Pricing Toggle
    const basicPrice = document.getElementById('basic-price');
    const proPrice = document.getElementById('pro-price');
    const enterprisePrice = document.getElementById('enterprise-price');
    const togglePlan = document.getElementById('toggle-plan');
    const planLabel = document.getElementById('plan-label');

    togglePlan.addEventListener('change', function() {
        if (this.checked) {
            basicPrice.textContent = "$100/year";
            proPrice.textContent = "$200/year";
            enterprisePrice.textContent = "$500/year";
            planLabel.textContent = "Annually";
        } else {
            basicPrice.textContent = "$10/month";
            proPrice.textContent = "$20/month";
            enterprisePrice.textContent = "$50/month";
            planLabel.textContent = "Monthly";
        }
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        this.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
});

