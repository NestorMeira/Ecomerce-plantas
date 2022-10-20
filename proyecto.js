const contenedorProductos=document.getElementById("contenedor-productos");
const contenedorCarrito= document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito= document.getElementById('contadorCarrito')
const precioTotal= document.getElementById('precioTotal')
let carrito=[];

document.addEventListener('DOMContentLoaded', ()=> {
   if (sessionStorage.getItem('carrito')) {
      carrito= JSON.parse(sessionStorage.getItem('carrito'))
      actualizarCarrito()
   }})

botonVaciar.addEventListener('click', ()=>{
   carrito.length=0
   actualizarCarrito()
})

productos.forEach((producto)=>{
        const div=document.createElement('div')
        div.classList.add('producto')
        div.innerHTML=`
        <img src= ${producto.foto} alt="">
        <h4>${producto.nombre}</h4>
        <p><strong> $ ${producto.precio}</strong></p>
        <button class="boton-agregar" id="agregar${producto.id}">Comprar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)

   const boton=document.getElementById(`agregar${producto.id}`)
   boton.addEventListener('click', ()=>{
    agregarAlCarrito(producto.id)
    Swal.fire({
      title: producto.nombre,
      text: 'agregado al carrito',
      imageUrl: producto.foto,
      imageWidth: 160,
      imageHeight: 150,    
});
})
})
   
const agregarAlCarrito =(productoNuevo)=>{
   const existe= carrito.some(prod => prod.id === productoNuevo)

   if(existe){
      const prod =carrito.map (prod =>{
         if(prod.id === productoNuevo){
            prod.cantidad++
         }
      })
   }else{
   const item= productos.find((prod) => prod.id === productoNuevo)
   carrito.push(item)
   }
actualizarCarrito()
}

const eliminarDelCarrito=(productoNuevo)=>{
   const item =carrito.find((prod) => prod.id === productoNuevo)
   const indice = carrito.indexOf(item)
   carrito.splice(indice, 1 )
   actualizarCarrito()
}

const actualizarCarrito= ()=>{
   contenedorCarrito.innerHTML= ""
   carrito.forEach((prod) =>{
      const div= document.createElement('div')
      div.className=('productoEnCarrito')
      div.innerHTML=`
      <p>${prod.nombre}</p>
      <p>${prod.precio}</p>
      <p>Cantidad: <span id='cantidad'>${prod.cantidad}</span></p>
      <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
      ` 
      contenedorCarrito.appendChild(div)
     
      sessionStorage.setItem('carrito' ,JSON.stringify(carrito))
   })
   contadorCarrito.innerText= carrito.length
   precioTotal.innerText= carrito.reduce((acc, prod) => acc +prod.precio * prod.cantidad  ,0)
}

const cactus = document.getElementById('cactus')
const contenedorCactus= document.getElementById('contenedor-cactus')
cactus.onclick=()=>{
   contenedorProductos.innerHTML=''
   contenedorSuculenta.innerHTML=''
   contenedorExterior.innerHTML=''
   contenedorInterior.innerHTML=''
  const resultado1= productos.filter(  e => e.categoria== 'cactus')
  resultado1.forEach((producto)=>{
   const div=document.createElement('div')
   div.classList.add('producto')
   div.innerHTML=`
   <img src= ${producto.foto} alt="">
   <h4>${producto.nombre}</h4>
   <p><strong> $ ${producto.precio}</strong></p>
   <button class="boton-agregar" id="agregar${producto.id}">Comprar <i class="fas fa-shopping-cart"></i></button>
   `
   contenedorCactus.appendChild(div)

const boton=document.getElementById(`agregar${producto.id}`)
boton.addEventListener('click', ()=>{
agregarAlCarrito(producto.id)
Swal.fire({
 title: producto.nombre,
 text: 'agregado al carrito',
 imageUrl: producto.foto,
 imageWidth: 160,
 imageHeight: 150,
});
})
})
}

const suculenta = document.getElementById('suculenta')
const contenedorSuculenta= document.getElementById('contenedor-suculenta')
suculenta.onclick=()=>{
   contenedorProductos.innerHTML=''
   contenedorCactus.innerHTML=''
   contenedorExterior.innerHTML=''
   contenedorInterior.innerHTML=''
   const resultado2= productos.filter(  e => e.categoria== 'suculenta')
   resultado2.forEach((producto)=>{
   const div=document.createElement('div')
   div.classList.add('producto')
   div.innerHTML=`
   <img src= ${producto.foto} alt="">
   <h4>${producto.nombre}</h4>
   <p><strong> $ ${producto.precio}</strong></p>
   <button class="boton-agregar" id="agregar${producto.id}">Comprar <i class="fas fa-shopping-cart"></i></button>
   `
   contenedorSuculenta.appendChild(div)
 
const boton=document.getElementById(`agregar${producto.id}`)
boton.addEventListener('click', ()=>{
agregarAlCarrito(producto.id)
Swal.fire({
 title: producto.nombre,
 text: 'agregado al carrito',
 imageUrl: producto.foto,
 imageWidth: 160,
 imageHeight: 150,
});
})
})
}

const interior = document.getElementById('interior')
const contenedorInterior= document.getElementById('contenedor-interior')
interior.onclick=()=>{
   contenedorProductos.innerHTML=''
   contenedorSuculenta.innerHTML=''
   contenedorCactus.innerHTML=''
   contenedorExterior.innerHTML=''
  const resultado3= productos.filter(  e => e.categoria== 'interior')
  resultado3.forEach((producto)=>{
   const div=document.createElement('div')
   div.classList.add('producto')
   div.innerHTML=`
   <img src= ${producto.foto} alt="">
   <h4>${producto.nombre}</h4>
   <p><strong> $ ${producto.precio}</strong></p>
   <button class="boton-agregar" id="agregar${producto.id}">Comprar <i class="fas fa-shopping-cart"></i></button>
   `
   contenedorInterior.appendChild(div)

const boton=document.getElementById(`agregar${producto.id}`)
boton.addEventListener('click', ()=>{
agregarAlCarrito(producto.id)
Swal.fire({
 title: producto.nombre,
 text: 'agregado al carrito',
 imageUrl: producto.foto,
 imageWidth: 160,
 imageHeight: 150,
});
})
})
}

const exterior = document.getElementById('exterior')
const contenedorExterior= document.getElementById('contenedor-exterior')
exterior.onclick=()=>{
   contenedorProductos.innerHTML=''
   contenedorSuculenta.innerHTML=''
   contenedorCactus.innerHTML=''
   contenedorInterior.innerHTML=''
  const resultado1= productos.filter(  e => e.categoria== 'exterior')
  resultado1.forEach((producto)=>{
   const div=document.createElement('div')
   div.classList.add('producto')
   div.innerHTML=`
   <img src= ${producto.foto} alt="">
   <h4>${producto.nombre}</h4>
   <p><strong> $ ${producto.precio}</strong></p>
   <button class="boton-agregar" id="agregar${producto.id}">Comprar <i class="fas fa-shopping-cart"></i></button>
   `
   contenedorExterior.appendChild(div)

const boton=document.getElementById(`agregar${producto.id}`)
boton.addEventListener('click', ()=>{
agregarAlCarrito(producto.id)
Swal.fire({
 title: producto.nombre,
 text: 'agregado al carrito',
 imageUrl: producto.foto,
 imageWidth: 160,
 imageHeight: 150,
});
})
})
}

