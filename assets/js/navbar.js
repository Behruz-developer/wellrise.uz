document.addEventListener('DOMContentLoaded', function() {
    const navHeight = document.querySelector('.nav').offsetHeight;
    const links = document.querySelectorAll('.nav_link');
    const navList = document.querySelector('.nav_list');
    const openBtn = document.querySelector('.open_btn');
    const closeBtn = document.querySelector('.close_btn');

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;
        const offsetPosition = targetPosition - navHeight - 30;

        window.scroll({
            top: offsetPosition,
            behavior: 'smooth'
        });

        if (window.innerWidth < 1200) {
            navList.style.transform = "translateX(-110%)"; 
        }
    }

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    openBtn.addEventListener('click', function() {
        navList.style.transform = "translateX(0)"; 
    });

    closeBtn.addEventListener('click', function() {
        navList.style.transform = "translateX(-110%)"; 
    });

    window.onscroll = function() {
        var nav = document.querySelector('.nav');
        if (window.pageYOffset > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1200) {
            navList.style.transform = ""; 
        }
        else {
            navList.style.transform = "translateX(-110%)";
        }
    });
});

