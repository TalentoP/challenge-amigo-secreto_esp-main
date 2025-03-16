let amigos = [];

function agregarAmigo() {

    let amigo = document.querySelector('#amigo');

    if (amigo.value.trim() === '') {
        alert("Por favor ingrese un nombre");
    } else {
        amigos.push(amigo.value);
        mostrarAmigos()
    }
    amigo.value = '';

}

function mostrarAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';

    for (let amigo of amigos) {
        let elem = document.createElement('li');
        elem.textContent = amigo;
        listaAmigos.appendChild(elem);
    }
}