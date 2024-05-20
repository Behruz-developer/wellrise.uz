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
    selected.textContent = language;
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
  