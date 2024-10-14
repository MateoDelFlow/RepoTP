function RecuperarContraseña() {
    var email = document.getElementById("email").value;
    var isValid = true;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        document.getElementById("ErrorEmail").style.display = "none";
    } else {
        document.getElementById("ErrorEmail").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        alert("Se ha enviado un enlace de recuperación a tu correo electrónico.");
    }

    return isValid;
}

