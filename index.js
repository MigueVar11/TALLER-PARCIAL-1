const express  = require('express');
const app      = express();
const port     = 3001;

app.get('/', (req, res) => {
  res.send(`

      <h1><center>TALLER PARCIAL</center></h1>
      <p><strong>Ejercicios de taller parcial + 5 endo points productos + 5 endospoints automoviles  </strong
      <ul>
          <li><a href="/productos"> Ejericicio 1 </a></li>
          <li><a href="/productos/:categoria"> Ejercicio 2</a></li>
          <li><a href="/automoviles"> Ejercicio 3</a></li>
          <li><a href="/productos-mayor-10000"> Ejercicio 4</a></li>
          <li><a href="/productos-con-iva"> Ejercicio 5</a></li>
      </ul>
      <br>
      <strong>Solo hasta el ejercicio 5, lo otro es ingresado por el usuario en la ruta </strong
  `);
});
// CREACION DE PRODUCTOS 15
const utiles = [
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
// CREACION DE AUTOMOVILES
const automoviles = [
  {
    id: 1,
    marca: "Toyota",
    cilindraje: 2000,
    precio : 120000000,
    tipo: "Híbrido",
    linea: "Corolla",
    color: "Negro",
    placa: "ABC123"
  },
  {
    id: 2,
    marca: "Honda",
    cilindraje: 1600,
    precio : 70000000,
    tipo: "Electrico",
    linea: "Civic",
    color: "Blanco",
    placa: "DEF456"
  },
  {
    id: 3,
    marca: "Mazda",
    cilindraje: 1600,
    precio : 90000000,
    tipo: "Híbrido",
    linea: "Model S",
    color: "Rojo",
    placa: "GHI789"
  },
  {
    id: 4,
    marca: "Ford",
    cilindraje: 2500,
    precio : 55000000,
    tipo: "Híbrido",
    linea: "Escape",
    color: "Azul",
    placa: "JKL012"
  },
  {
    id: 5,
    marca: "Nissan",
    cilindraje: 2200,
    precio : 66000000,
    tipo: "Electrico",
    linea: "Sentra",
    color: "Negro",
    placa: "MNO345"
  },
  {
    id: 6,
    marca: "Chevrolet",
    cilindraje: 2300,
    precio : 43000000,
    tipo: "Electrico",
    linea: "Malibu",
    color: "Rojo",
    placa: "PQR678"
  },
  {
    id: 7,
    marca: "BMW",
    cilindraje: 3000,
    precio : 145000000,
    tipo: "Híbrido",
    linea: "Serie 3",
    color: "Negro",
    placa: "STU901"
  },
  {
    id: 8,
    marca: "Audi",
    cilindraje: 2800,
    precio : 13000000,
    tipo: "Híbrido",
    linea: "A4",
    color: "Blanco",
    placa: "VWX234"
  },
  {
    id: 9,
    marca: "Mercedes-Benz",
    cilindraje: 2700,
    precio : 66000000,
    tipo: "Híbrido",
    linea: "Clase C",
    color: "Gris",
    placa: "YZA567"
  },
  {
    id: 10,
    marca: "Volvo",
    cilindraje: 2400,
    precio : 89000000,
    tipo: "Electrico",
    linea: "XC60",
    color: "Negro",
    placa: "BCD890"
  },
  {
    id: 11,
    marca: "Hyundai",
    cilindraje: 2100,
    precio : 58000000,
    tipo: "Híbrido",
    linea: "Elantra",
    color: "Blanco",
    placa: "EFG123"
  },
  {
    id: 12,
    marca: "Kia",
    cilindraje: 1900,
    precio : 129000000,
    tipo: "Híbrido",
    linea: "Sportage",
    color: "Azul",
    placa: "HIJ456"
  },
  {
    id: 13,
    marca: "Lexus",
    cilindraje: 2600,
    precio : 180000000,
    tipo: "Híbrido",
    linea: "RX",
    color: "Blanco",
    placa: "KLM789"
  },
  {
    id: 14,
    marca: "Mazda",
    cilindraje: 2000,
    precio : 43000000,
    tipo: "Electrico",
    linea: "Mazda3",
    color: "Gris",
    placa: "NOP012"
  },
  {
    id: 15,
    marca: "Renault",
    cilindraje: 1600,
    precio : 38000000,
    tipo: "Híbrido",
    linea: "Sandero",
    color: "Verde",
    placa: "QRS345"
  }
];

//1 LISTA DE TODOS LOS PRODUCTOS
app.get('/productos', (req, res) =>{
res.json(utiles);
} );

//2 SOLICITE CATEGORIA POR END POINTS
app.get('/productos/:categoria', (req, res) => {
  const categoria = req.params.categoria;
  const productosPorCategoria = utiles.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase());
  res.json(productosPorCategoria);
});

//3 LISTA DE TODOS LOS AUTOMOVILES
app.get('/automoviles', (req, res) =>{
  res.json(automoviles);
  } );

  // 4  ENDPONINT QUE LISTE PRODUCTO MAYOR A 10000
app.get('/productos-mayor-10000', (req, res) => {
  const productosMayor10000 = utiles.filter(producto => producto.valor > 10000);

  // Enviar respuesta
  res.json(productosMayor10000);
});

// 5. PRODUCTOS CON IVA
app.get('/productos-con-iva', (req, res) => {
  const productosConIVA = utiles.map(producto => {
      const precioConIVA = producto.valor * 1.19; // Calcula el precio con el 19% de IVA
      return {
          ...producto,
          precio_ConIVA: precioConIVA.toFixed(2), // Redondea
          Iva: (precioConIVA - producto.valor).toFixed(2)
      };
  });
  res.json(productosConIVA);
});

// 6. MARCA POR VEHICULO
app.get('/automoviles/:marca', (req, res) => {
  const marcaBuscada = req.params.marca;
  const vehiculosMarca = automoviles.filter(automoviles => automoviles.marca === marcaBuscada);
  if (vehiculosMarca.length > 0) {
      res.json(vehiculosMarca);
  } else {
      res.status(404).json({ message: `No se encontraron vehículos de la marca '${marcaBuscada}'` });
  }
});

// 7. CALCULAR IMPUESTOS VEHICULARES
// Función para calcular el impuesto vehicular
function calcularImpuesto(tipo, costo) {
  if (tipo === "Híbrido") {
      if (costo <= 50000000) {
          return costo * 0.01;
      } else if (costo <= 100000000) {
          return costo * 0.015;
      } else if (costo <= 150000000) {
          return costo * 0.025;
      } else {
          return costo * 0.035;
      }
  } else if (tipo === "Electrico") {
      return costo * 0.01;
  } else {
      return 0;
  }
}
//GET PARA IMPUESTOS VEHICULARES
app.get('/vehiculos-impuestos', (req, res) => {
  const vehiculosConImpuesto = automoviles.map(vehiculo => {
      const impuesto = calcularImpuesto(vehiculo.tipo, vehiculo.precio);
      return {
          ...vehiculo,
          impuesto: impuesto
      };
  });
  res.json(vehiculosConImpuesto);
});

//-------CREAR 5 END POINTS VEHICULO Y 5 END POINTS PARA PRODUCTO

// END POINT CARRO MOSTRAR LOS CARROS HIBRIDOS
app.get('/carros-hibridos', (req, res) => {
  const carrosHibridos = automoviles.filter(carro => carro.tipo === 'Híbrido');
  res.json(carrosHibridos);
});

// END POINT CARRO MOSTRAR LOS CARROS ELECTRICOS
app.get('/carros-electricos', (req, res) => {
  const carrosElectricos = automoviles.filter(carro => carro.tipo === 'Electrico');

  res.json(carrosElectricos);
});
//END POINT COLOR DEL VEHICULO
app.get('/vehiculos-color/:color', (req, res) => {
  const colorBuscado = req.params.color;
const vehiculosPorColor = automoviles.filter(vehiculo => vehiculo.color.toLowerCase() === colorBuscado.toLowerCase());

  res.json(vehiculosPorColor);
});

//END POINT CARRO POR CILINDRAJE
app.get('/vehiculos-cilindraje/:cilindraje', (req, res) => {
  const cilindrajeBuscado = parseInt(req.params.cilindraje);
  const vehiculosPorCilindraje = automoviles.filter(vehiculo => vehiculo.cilindraje === cilindrajeBuscado);

res.json(vehiculosPorCilindraje);
})
//END POINT CARRO CON EL PRECIO MAS ALTO
app.get('/carro-precio-alto', (req, res) => {
  let carroPrecioMasAlto =automoviles.reduce((max, carro) => (carro.precio > max.precio) ? carro : max);

  res.json(carroPrecioMasAlto);
});
// END POINT DE PRODUCTO MAS CARO
app.get('/producto-mayor-precio', (req, res) => {
  // Encontrar el producto con el mayor precio
  let productoMayorPrecio = utiles[0];
  utiles.forEach(producto => {
      if (producto.valor > productoMayorPrecio.valor) {
          productoMayorPrecio = producto;
      }
  });

  res.json(productoMayorPrecio);
});

//END POINT PRODUCTO : fecha menor de vencimiento de un producto

app.get('/producto-menor-fecha-vencimiento', (req, res) => {
  let productoMenorFechaVencimiento = utiles.reduce((menorFecha, producto) => {
      return (new Date(producto.fechaVencimiento) < new Date(menorFecha.fechaVencimiento)) ? producto : menorFecha;
  }, utiles[0]);
  res.json(productoMenorFechaVencimiento);
});

// END POINT PRODUCTOS MENORES A 10000
app.get('/productos-10000', (req, res) => {
  const productosMenor10000 = utiles.filter(producto => producto.valor < 10000);


  res.json(productosMenor10000);
});

// END POINT PRODUCTOS VALOR MAS EL 20% UTILIDAD
app.get('/productos-con-utilidad', (req, res) => {

  const productosConUtilidad = utiles.map(producto => {
      const nuevoPrecio = producto.valor * 1.20;// Calcular el nuevo valor de los productos agregando un 20% de utilidad
      return { ...producto, precioConUtilidad_del20: nuevoPrecio };
  });
  res.json(productosConUtilidad);
});

//END POINT PRODUCTO CON MAYOR FECHA DE VENCIMIENTO
app.get('/producto-mayor-fecha-vencimiento', (req, res) => {
let productoMayorFechaVencimiento = utiles.reduce((max, producto) => (producto.fechaVencimiento > max.fechaVencimiento) ? producto : max);

  res.json(productoMayorFechaVencimiento);
});

// CORRE EN EL PUERTO 3001
app.listen(port, () => {
  console.log(`Servidor corriendo  en //http://localhost:${port}`);
});

