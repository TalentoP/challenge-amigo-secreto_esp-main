let amigos = [];

function agregarAmigo() {

    let amigo = document.querySelector('#amigo');

    if (amigo.value.trim() === '') {
        alert("Por favor ingrese un nombre");
    } else {
        amigos.push(amigo.value);
    }
    amigo.value = '';

}