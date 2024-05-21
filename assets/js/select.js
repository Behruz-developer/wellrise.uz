function toggleDropdown() {
  var languageOptions = document.getElementById("languageOptions");
  if (languageOptions.style.display === "none") {
      languageOptions.style.display = "block";
      document.addEventListener('click', closeDropdownOnOutsideClick);
  } else {
      languageOptions.style.display = "none";
      document.removeEventListener('click', closeDropdownOnOutsideClick);
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
  var languageSelector = document.querySelector('.language-selector');
  if (!languageSelector.contains(event.target)) {
      var languageOptions = document.getElementById("languageOptions");
      languageOptions.style.display = 'none';
      document.removeEventListener('click', closeDropdownOnOutsideClick);
  }
}
