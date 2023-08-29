const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')
btnCart.addEventListener('click' , () => {
    containerCartProducts.classList.toggle('hidden-cart')

})
document.addEventListener('DOMContentLoaded', () => {
    const botonesCarrito = document.querySelectorAll('.boton-carrito');
    const listaProductos = document.querySelector('.lista-productos');
    const totalElemento = document.querySelector('.total');
    let total = 0;

    botonesCarrito.forEach(boton => {
        boton.addEventListener('click', () => {
            const producto = boton.parentElement.querySelector('p').textContent;
            const precio = parseFloat(producto.split('$')[1]);
            
            const productoHTML = `<li>${producto}</li>`;
            listaProductos.innerHTML += productoHTML;
            
            total += precio;
            totalElemento.textContent = total.toFixed(2);
        });
    });
});
