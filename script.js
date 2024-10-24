let indice = 0;

const imagenes = document.querySelectorAll('.imagenes .imagen-con-texto');
const totalImagenes = imagenes.length;

document.getElementById('siguiente').addEventListener('click', () => {
    imagenes[indice].classList.remove('activo');
    indice = (indice + 1) % totalImagenes;
    imagenes[indice].classList.add('activo');
    actualizarCarrusel();
});

document.getElementById('anterior').addEventListener('click', () => {
    imagenes[indice].classList.remove('activo');
    indice = (indice - 1 + totalImagenes) % totalImagenes;
    imagenes[indice].classList.add('activo');
    actualizarCarrusel();
});

function actualizarCarrusel() {
    const desplazamiento = -indice * 100;
    document.querySelector('.imagenes').style.transform = `translateX(${desplazamiento}%)`;
}
