document.addEventListener('DOMContentLoaded', function() {
  var selectorBox = document.querySelector('.selector_box');
  var globeIcon = document.querySelector('.globe'); // Globe iconni tanlash
  var languageOptions = document.getElementById("languageOptions");

  // Selector box va globe icon uchun event listener qo'shish
  selectorBox.addEventListener('click', function(event) {
    toggleDropdown(event);  // Eventni toggleDropdown funksiyasiga uzatish
  });

  globeIcon.addEventListener('click', function(event) {
    toggleDropdown(event);  // Eventni toggleDropdown funksiyasiga uzatish
  });

  function toggleDropdown(event) {
    event.stopPropagation(); // Boshqa elementlarga voqea tarqalishini to'xtatish
    if (languageOptions.style.display === "none" || !languageOptions.style.display) {
      languageOptions.style.display = "block";
      document.addEventListener('click', closeDropdownOnOutsideClick, true);
    } else {
      languageOptions.style.display = "none";
      document.removeEventListener('click', closeDropdownOnOutsideClick, true);
    }
  }

  function selectLanguage(language) {
    var selected = document.querySelector(".selected");
    var options = document.querySelectorAll(".option");

    // Tanlangan tilni yangilash
    var currentLanguage = selected.textContent;
    selected.textContent = language;

    // Barcha variantlarni ko'rsatish va tanlangan tilni almashtirish
    options.forEach(option => {
        if (option.textContent === language) {
            option.textContent = currentLanguage;
        }
    });

    toggleDropdown();  
  }

  function closeDropdownOnOutsideClick(event) {
    if (!selectorBox.contains(event.target) && !globeIcon.contains(event.target)) {
      languageOptions.style.display = 'none';
      document.removeEventListener('click', closeDropdownOnOutsideClick, true);
    }
  }
});
