// const express = require('express');
// const app = express();
// const port = 3000;
// const engine = require('express-handlebars');

// // Middleware
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));

// // Request
// // Mandar info en formato Json
// app.use(express.json());

// app.post('/register', (req, res) => {
//   const { pedido, solicitado } = req.body;
//   res.send(
//     `El pedido de ${pedido} es solicitado por ${solicitado}`
//   );
// });
        
// // PARAMS
// app.get('/pedido/:abc', (req, res) => {
//   res.send(`El pedido es Hamburguesa ${req.params.abc}`);
// });

// // QUERY
// app.get('/seach', (req, res) => {
//   if (req.query.tipo == 'sencilla')
//     res.send(`El pedido es Hamburguesa sencilla`);
//   else
//     res.send("Es otro tipo de Hamburguesa");
// });

// // devolver imagen
// app.get('/doble', (req, res) => {
//   res.sendFile(`./doble.jpeg`, {
//     root: __dirname
//   });
// });

// // Devolver paginas

// // Rutas
// // Creacion de varias rutas
// app.get('/', (req, res) => {
//   res.send('Bienvenidos');
// });

// app.get('/dashboard', (req, res) => {
//   res.send('Bienvenido Dashboard');
// });

// // RUTA NOT FOUND
// app.use((req, res) => {
//   res.send("404-Not found");
// });

// // UTILUZAR MOTOR DE PLANTILLAS
// app.engine('handlebars', engine);

// // Extension de las paginas
// app.set('view engine', 'handlebars');

// // Ubicacion de directorio views
// app.set('views', './views');

// app.get('/hamburguesa/vegana', (req, res) => {
//   res.render('home');
// });

// app.listen(port);
// console.log('Enlazado al puerto 3000')


//* Creacion de un web server en Express*/

// Invocar la libreria de express
const express = require("express"); //CommonJS

//? Crear una instancia
const app = express();
const port = 3000;
app.use(express.json());

//? Peticiones
// Ruta publica
app.get("/entrada", (req, res) => {
	res.send("Entrada al local");
});

// Crear un middleware
app.use((req, res, next) => {
	const { email, password } = req.body;

	if (email === "patitojuan@gmail.com" && password == "12345") {
		next();
	} else {
		res.send("Usuario no registrado");
	}
});


//Ruta privada
app.get("/pedido", (req, res) => {
	res.send("Landing page");
});

app.get("/dashboard", (req, res) => {
	res.send("Bienvenido Usuario -- LISTO PARA PAPEAR?");
});





//? Salida
app.listen(3000);
console.log("Server ejecutandose en el puerto 3000");

