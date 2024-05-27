const express = require('express');
const router = express.Router()

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



//3 LISTA DE TODOS LOS AUTOMOVILES
router.get('/', (req, res) =>{
  res.json(automoviles);
  } );

// 6. MARCA POR VEHICULO
router.get('/vehiculo-marca/:marca', (req, res) => {
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
router.get('/vehiculos-impuestos', (_req, res) => {
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
router.get('/carros-hibridos', (_req, res) => {
  const carrosHibridos = automoviles.filter(carro => carro.tipo === 'Híbrido');
  res.json(carrosHibridos);
});

// END POINT CARRO MOSTRAR LOS CARROS ELECTRICOS
router.get('/carros-electricos', (req, res) => {
  const carrosElectricos = automoviles.filter(carro => carro.tipo === 'Electrico');

  res.json(carrosElectricos);
});
//END POINT COLOR DEL VEHICULO
router.get('/vehiculos-color/:color', (req, res) => {
  const colorBuscado = req.params.color;
const vehiculosPorColor = automoviles.filter(vehiculo => vehiculo.color.toLowerCase() === colorBuscado.toLowerCase());

  res.json(vehiculosPorColor);
});

//END POINT CARRO POR CILINDRAJE
router.get('/vehiculos-cilindraje/:cilindraje', (req, res) => {
  const cilindrajeBuscado = parseInt(req.params.cilindraje);
  const vehiculosPorCilindraje = automoviles.filter(vehiculo => vehiculo.cilindraje === cilindrajeBuscado);

res.json(vehiculosPorCilindraje);
})
//END POINT CARRO CON EL PRECIO MAS ALTO
router.get('/carro-precio-alto', (req, res) => {
  let carroPrecioMasAlto =automoviles.reduce((max, carro) => (carro.precio > max.precio) ? carro : max);

  res.json(carroPrecioMasAlto);
});

module.exports = router;
