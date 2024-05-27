const express = require('express');
const app = express();

const routes = require('./routes/index');

app.use('/', routes);

app.get('/', (req, res) => {
  res.send(`

      <h1><center>TALLER PARCIAL</center></h1>
      <p><strong>Ejercicios de taller parcial + 5 endo points productos + 5 endospoints automoviles  </strong
      <ul>
          <li><a href="/productos"> Ejericicio 1 </a></li>
          <li><a href="/productos/"> Ejercicio 2</a></li>
          <li><a href="/automoviles"> Ejercicio 3</a></li>
          <li><a href="productos/productos-mayor-10000"> Ejercicio 4</a></li>
          <li><a href="productos/productos-con-iva"> Ejercicio 5</a></li>
      </ul>
      <br>
      <strong>Solo hasta el ejercicio 5, lo otro es ingresado por el usuario en la ruta </strong
  `);
});
//---------
const port = 3001;
// CORRE EN EL PUERTO 3001
app.listen(port, () => {
  console.log(`Servidor corriendo  en //http://localhost:${port}`);
});
