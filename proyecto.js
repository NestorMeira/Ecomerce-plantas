const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

let carrito = JSON.parse(sessionStorage.getItem("carro")) || [];

const local = () => {
  sessionStorage.setItem("carro", JSON.stringify(carrito));
}

botonVaciar.addEventListener('click', () => {
  carrito.length = 0;
  actualizarCarrito();
});

productos.forEach((producto) => {
  const div = document.createElement('div');
  div.classList.add('producto');
  div.innerHTML = `
    <img src="${producto.foto}" alt="">
    <h4>${producto.nombre}</h4>
    <p><strong> $ ${producto.precio}</strong></p>
    <button class="boton-agregar" id="agregar${producto.id}">Comprar <i class="fas fa-shopping-cart"></i></button>
  `;
  contenedorProductos.appendChild(div);

  const boton = document.getElementById(`agregar${producto.id}`);
  boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id);
    Swal.fire({
      title: producto.nombre,
      text: 'agregado al carrito',
      imageUrl: producto.foto,
      imageWidth: 160,
      imageHeight: 150,
    });

  });
});

const agregarAlCarrito = (productoNuevo) => {
  const existe = carrito.some(prod => prod.id === productoNuevo);

  if (existe) {
    carrito = carrito.map(prod => {
      if (prod.id === productoNuevo) {
        prod.cantidad++;
      }
      return prod;
    });
  } else {
    const item = productos.find(prod => prod.id === productoNuevo);
    if (item) {
      carrito.push({ ...item, cantidad: 1 });
    }
  }
  actualizarCarrito();
  local();

};

const eliminarDelCarrito = (productoNuevo) => {
  const item = carrito.find(prod => prod.id === productoNuevo);
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  actualizarCarrito();
};

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach((prod) => {
    const div = document.createElement('div');
    div.className = ('productoEnCarrito');
    div.innerHTML = `
      <p>${prod.nombre}</p>
      <p>${prod.precio}</p>
      <p>Cantidad: <span id='cantidad'>${prod.cantidad}</span></p>
      <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `;
    contenedorCarrito.appendChild(div);
  });
  contador()
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
};

const contador = () => {
  const carritoLength = carrito.length;
  sessionStorage.setItem("carritoLength", JSON.stringify(carritoLength));
  contadorCarrito.innerText = JSON.parse(sessionStorage.getItem("carritoLength"));
}

const cactus = document.getElementById('cactus');
const suculenta = document.getElementById('suculenta');
const interior = document.getElementById('interior');
const exterior = document.getElementById('exterior');

cactus.addEventListener('click', () => {
  cargarProductos('cactus');
});

suculenta.addEventListener('click', () => {
  cargarProductos('suculenta');
});

interior.addEventListener('click', () => {
  cargarProductos('interior');
});

exterior.addEventListener('click', () => {
  cargarProductos('exterior');
});

const cargarProductos = (categoria) => {
  contenedorProductos.innerHTML = '';
  productos.forEach((producto) => {
    if (producto.categoria === categoria) {
      const div = document.createElement('div');
      div.classList.add('producto');
      div.innerHTML = `
          <img src="${producto.foto}" alt="">
          <h4>${producto.nombre}</h4>
          <p><strong>$ ${producto.precio}</strong></p>
          <button class="boton-agregar" id="agregar${producto.id}">Comprar <i class="fas fa-shopping-cart"></i></button>
      `;
      contenedorProductos.appendChild(div);

      const boton = document.getElementById(`agregar${producto.id}`);
      boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
        Swal.fire({
          title: producto.nombre,
          text: 'agregado al carrito',
          imageUrl: producto.foto,
          imageWidth: 160,
          imageHeight: 150,
        });
      });
    }
  });
};






// Al cargar la página, asegúrate de actualizar el carrito
actualizarCarrito();
