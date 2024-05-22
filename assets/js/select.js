document.addEventListener('DOMContentLoaded', function() {
  var selectorBox = document.querySelector('.selector_box');
  var languageOptions = document.getElementById("languageOptions");

  selectorBox.addEventListener('click', toggleDropdown);

  function toggleDropdown(event) {
    event.stopPropagation();
    languageOptions.style.display = (languageOptions.style.display === "block") ? "none" : "block";
    document.addEventListener('click', closeDropdownOnOutsideClick, true);
  }

  var options = document.querySelectorAll(".option");
  options.forEach(function(option) {
    option.addEventListener('click', function() {
      selectLanguage(this.textContent);
    });
  });

  function selectLanguage(newLanguage) {
    var selected = document.querySelector(".selected");
    var currentLanguage = selected.textContent;
    selected.textContent = newLanguage; // Yangi tanlangan tilni asosiy til o'rniga qo'yish

    options.forEach(option => {
      if (option.textContent === newLanguage) {
        option.textContent = currentLanguage; // Avvalgi tanlangan tilni ro'yxatga qo'shish
      }
    });

    languageOptions.style.display = "none"; // Dropdownni yopish
    document.removeEventListener('click', closeDropdownOnOutsideClick, true); // Voqealarni tinglashni tozalash
  }

  function closeDropdownOnOutsideClick(event) {
    if (!selectorBox.contains(event.target)) {
      languageOptions.style.display = 'none';
      document.removeEventListener('click', closeDropdownOnOutsideClick, true);
    }
  }
});
