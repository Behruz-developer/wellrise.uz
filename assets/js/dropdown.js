document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown_toggle');

    function closeAllDropdowns(except) {
        dropdowns.forEach(function(dropdown) {
            var dropdownContent = dropdown.nextElementSibling;
            if (dropdownContent !== except) {
                dropdownContent.style.display = 'none';
            }
        });
    }

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === 'flex') {
                dropdownContent.style.display = 'none';
            } else {
                closeAllDropdowns(dropdownContent);
                dropdownContent.style.display = 'flex';
            }
            event.stopPropagation(); // Boshqa elementlarni hodisalarini to'xtatish
        });
    });

    window.addEventListener('click', function() {
        closeAllDropdowns();
    });
});

  