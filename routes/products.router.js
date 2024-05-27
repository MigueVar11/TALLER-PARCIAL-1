const express = require('express');
const router = express.Router();

// CREACION DE PRODUCTOS 15
const productos = [
  {
    id: 1,
    nombre: "Camisa",
    valor: 25000,
    fechaVencimiento: "2024-12-31",
    categoria: "Ropa",
    descripcion: "Camisa de hombre azul rey"
  },
  {
    id: 2,
    nombre: "Portátil",
    valor: 800000,
    fechaVencimiento: "2025-06-30",
    categoria: "Electrónicos",
    descripcion: "Ordenador portátil con procesador Intel Core i3 y 4GB de RAM."
  },
  {
    id: 3,
    nombre: "Chocolate",
    valor: 3000,
    fechaVencimiento: "2024-08-15",
    categoria: "Alimentos",
    descripcion: "Chocolatina jet"
  },
  {
    id: 4,
    nombre: "Zapatos",
    valor: 150000,
    fechaVencimiento: "2024-10-31",
    categoria: "Ropa",
    descripcion: "Zapatos de cuero para hombre."
  },
  {
    id: 5,
    nombre: "Teléfono móvil",
    valor: 310000,
    fechaVencimiento: "2025-04-30",
    categoria: "Electrónicos",
    descripcion: "Teléfono iphone 13"
  },
  {
    id: 6,
    nombre: "Nevera mabe",
    valor: 900000,
    fechaVencimiento: "2024-09-30",
    categoria: "Electrodomésticos",
    descripcion: "Neveras mabe 12 lts gris"
  },
  {
    id: 7,
    nombre: "Libro",
    valor:12000,
    fechaVencimiento: "2025-12-31",
    categoria: "Libros",
    descripcion: "100 años de soledad"
  },
  {
    id: 8,
    nombre: "Gafas de sol",
    valor:8000,
    fechaVencimiento: "2021-07-15",
    categoria: "Accesorios",
    descripcion: "Gafas de sol para bicicleta"
  },
  {
    id: 9,
    nombre: "Leche",
    valor: 5000,
    fechaVencimiento: "2024-05-10",
    categoria: "Alimentos",
    descripcion: "Leche entera en envase de un litro."
  },
  {
    id: 10,
    nombre: "Silla de escritorio",
    valor: 410000,
    fechaVencimiento: "2024-11-30",
    categoria: "Muebles",
    descripcion: "Silla ergonómica ajustable para escritorio."
  },
  {
    id: 11,
    nombre: "Cepillo de dientes",
    valor: 2500,
    fechaVencimiento: "2024-06-30",
    categoria: "Cuidado personal",
    descripcion: "Cepillo de dientes con cerdas suaves."
  },
  {
    id: 12,
    nombre: "Gorra",
    valor: 35000,
    fechaVencimiento: "2024-09-15",
    categoria: "Ropa",
    descripcion: "Gorra adidas ."
  },
  {
    id: 13,
    nombre: "Teclado inalámbrico",
    valor: 1150000,
    fechaVencimiento: "2025-02-28",
    categoria: "Electrónicos",
    descripcion: "Teclado compacto con conexión Bluetooth."
  },
  {
    id: 14,
    nombre: "Morral",
    valor: 112000,
    fechaVencimiento: "2024-08-31",
    categoria: "Accesorios",
    descripcion: "Morral marca totto verde 15 lts"
  },
  {
    id: 15,
    nombre: "Papel de aluminio",
    valor: 6000,
    fechaVencimiento: "2027-07-01",
    categoria: "Hogar",
    descripcion: "Paquete 3 corta facil "
  }
];

//1 LISTA DE TODOS LOS PRODUCTOS
router.get('/', (_req, res) =>{
  res.json(productos);
  } );

  //2 SOLICITE CATEGORIA POR END POINTS
  router.get('/productos-categoria/:categoria', (req, res) => {
    const categoria = req.params.categoria;
    const productosPorCategoria = productos.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase());
    res.json(productosPorCategoria);
  });
// NO SE MUESTRAN EN EL SERVER
    // 4  ENDPONINT QUE LISTE PRODUCTO MAYOR A 10000
    router.get('/productos-mayor-10000', (_req, res) => {
  const productosMayor10000 = productos.filter(producto => producto.valor > 10000);

  // Enviar respuesta
  res.json(productosMayor10000);
});

// 5. PRODUCTOS CON IVA
router.get('/productos-con-iva', (_req, res) => {
  const productosConIVA = productos.map(producto => {
      const precioConIVA = producto.valor * 1.19; // Calcula el precio con el 19% de IVA
      return {
          ...producto,
          precio_ConIVA: precioConIVA.toFixed(2), // Redondea
          Iva: (precioConIVA - producto.valor).toFixed(2)
      };
  });
  res.json(productosConIVA);
});

//END POINT PRODUCTO : fecha menor de vencimiento de un producto

router.get('/producto-menor-fecha-vencimiento', (_req, res) => {
  let productoMenorFechaVencimiento = productos.reduce((menorFecha, producto) => {
      return (new Date(producto.fechaVencimiento) < new Date(menorFecha.fechaVencimiento)) ? producto : menorFecha;
  }, productos[0]);
  res.json(productoMenorFechaVencimiento);
});

// END POINT PRODUCTOS MENORES A 10000
router.get('/productos-10000', (_req, res) => {
  const productosMenor10000 = productos.filter(producto => producto.valor < 10000);


  res.json(productosMenor10000);
});

// END POINT PRODUCTOS VALOR MAS EL 20% UTILIDAD
router.get('/productos-con-utilidad', (req, res) => {

  const productosConUtilidad = productos.map(producto => {
      const nuevoPrecio = producto.valor * 1.20;// Calcular el nuevo valor de los productos agregando un 20% de utilidad
      return { ...producto, precioConUtilidad_del20: nuevoPrecio };
  });
  res.json(productosConUtilidad);
});

//END POINT PRODUCTO CON MAYOR FECHA DE VENCIMIENTO
router.get('/producto-mayor-fecha-vencimiento', (_req, res) => {
let productoMayorFechaVencimiento = productos.reduce((max, producto) => (producto.fechaVencimiento > max.fechaVencimiento) ? producto : max);

  res.json(productoMayorFechaVencimiento);
});

// END POINT DE PRODUCTO MAS CARO
router.get('/producto-mayor-precio', (_req, res) => {
  // Encontrar el producto con el mayor precio
  let productoMayorPrecio = productos[0];
  productos.forEach(producto => {
      if (producto.valor > productoMayorPrecio.valor) {
          productoMayorPrecio = producto;
      }
  });

  res.json(productoMayorPrecio);
});

module.exports = router;
