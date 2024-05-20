document.addEventListener('DOMContentLoaded', function() {
    const navHeight = document.querySelector('.nav').offsetHeight;
    const links = document.querySelectorAll('.nav_link');

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;
        const offsetPosition = targetPosition - navHeight - 30; // Navbar balandligi va 30px bo'sh joy qo'shiladi

        window.scroll({
            top: offsetPosition,
            behavior: 'smooth'
        });
        if(window.innerWidth < 1200){
            navList.style.transform = "translateX(-110%)";
        }
    }

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Navbar rangini o'zgartirish va mobil menyuni yopish uchun qo'shimcha kodlar
    const openBtn = document.querySelector('.open_btn');
    const closeBtn = document.querySelector('.close_btn');
    const navList = document.querySelector('.nav_list');

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
});
