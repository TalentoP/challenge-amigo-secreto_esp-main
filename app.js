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

function sortearAmigo() {
    let amigoSorteadoHtml = document.querySelector('#resultado');
    let claseResultado = document.querySelector('.result-list');
    if(amigos.length > 0){
        let randomIndex = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[randomIndex];

        //Lo obtuve de la clase style.css
        //Busqué como cambiar los colores del HTML ayudandome con "inspeccionar elemento y el uso de IA"
        claseResultado.style.color = '#05DF05';
        amigoSorteadoHtml.textContent = amigoSorteado;

        //Se elimina un amigo debido a que así funciona normalmente el juego de amigo secreto
        amigos.splice(randomIndex, 1);
        mostrarAmigos();
    } else {
        // puse un color rojo generico
        claseResultado.style.color = 'red';
        amigoSorteadoHtml.textContent = 'No hay amigos para sortear';
    }
}

function mostrarAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');

    listaAmigos.innerHTML = '';

    for (let amigo of amigos) {
        let amigoHtml = document.createElement('li');
        amigoHtml.textContent = amigo;
        listaAmigos.appendChild(amigoHtml);
    }
}