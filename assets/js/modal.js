document.addEventListener('DOMContentLoaded', function() {
    // Elementlarni tanlash
    var modal = document.getElementById("myModal");
    var btn = document.querySelector(".form_link");
    var span = document.getElementsByClassName("close")[0];

    // Havola bosilganda modal oynani ochish
    btn.onclick = function() {
        modal.style.display = "flex";
    }

    // Yopish tugmasi bosilganda modal oynani yopish
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Foydalanuvchi modal oynadan tashqariga bosganda, uni yopish
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
