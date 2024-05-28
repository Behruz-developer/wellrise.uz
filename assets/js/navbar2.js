// document.addEventListener("DOMContentLoaded", function () {
//     const navHeight = document.querySelector(".nav").offsetHeight;
    
//     // Sahifadagi barcha ichki bo'limlarga havolalar uchun eventListener qo'shamiz
//     document.querySelectorAll('.nav_link').forEach(link => {
//       link.addEventListener('click', function(event) {
//         const url = event.currentTarget.getAttribute('href');
//         const pageUrl = url.split('#')[0];
//         const hash = url.split('#')[1];
        
//         if (pageUrl && hash && pageUrl !== window.location.pathname) {
//           // Agar tashqi sahifaga va ichki bo'lim tanlangan bo'lsa
//           localStorage.setItem('scrollToHash', hash);
//           window.location.href = pageUrl; // Sahifani o'zgartirish
//           event.preventDefault();
//         }
//       });
//     });
  
//     // Sahifa yuklanganda, hash mavjudligini tekshirib, kerakli joyga scroll qilish
//     const hash = window.location.hash || localStorage.getItem('scrollToHash');
//     if (hash) {
//       const targetElement = document.querySelector(hash);
//       if (targetElement) {
//         const targetPosition = targetElement.offsetTop;
//         const offsetPosition = targetPosition - navHeight - 40;
  
//         window.scroll({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       }
//       localStorage.removeItem('scrollToHash'); // Endi bu qiymat kerak emas
//     }
//   });
  