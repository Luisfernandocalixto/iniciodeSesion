let mostrar = document.getElementById("mostrar");
let contraseña = document.getElementById("contraseña");

mostrar.addEventListener("click", function () {
    if (contraseña.type === 'password') {
        contraseña.type = 'text'
        mostrar.textContent = 'Ocultar'
        
    } else {
        contraseña.type = 'password'
        mostrar.textContent = 'Mostrar'
    
    }

});