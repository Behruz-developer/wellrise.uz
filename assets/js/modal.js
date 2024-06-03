document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var form = document.getElementById("myForm");
    var span = document.getElementsByClassName("close")[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (form.checkValidity()) {
            modal.style.opacity = 1;
            modal.style.visibility = "visible"; 
            setTimeout(function() {
                var fadeEffect = setInterval(function() {
                    if (!modal.style.opacity) {
                        modal.style.opacity = 1;
                    }
                    if (modal.style.opacity > 0) {
                        modal.style.opacity -= 0.1;
                    } else {
                        clearInterval(fadeEffect);
                        modal.style.visibility = "hidden"; 
                    }
                }, 100); 
            }, 3000);
        } else {
            alert("Formani to'liq to'ldiring!"); 
        }
    });

    span.onclick = function() {
        modal.style.opacity = 0;
        modal.style.visibility = "hidden";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.opacity = 0;
            modal.style.visibility = "hidden";
        }
    }
});
