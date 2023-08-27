
/*  Paquetes instalados: -g nodemon, express, express-handlebars, body-parser, mysql2
    Agregado al archivo "package.json" la línea --> "start": "nodemon index"
    
    Proyecto "Node_base"
    Desarrollo de Aplicaciones Informáticas - 5to Informática
    
    Docentes: Nicolás Facón, Martín Rivas
    
    Revisión 1 - Año 2021
*/
//Cargo librerías instaladas y necesarias
const express = require('express'); //Para el manejo del servidor Web
const exphbs  = require('express-handlebars'); //Para el manejo de los HTML
const bodyParser = require('body-parser'); //Para el manejo de los strings JSON
const MySQL = require('./modulos/mysql'); //Añado el archivo mysql.js presente en la carpeta módulos

const session = require('express-session'); //Para usar variables de sesión
const app = express(); //Inicializo express para el manejo de las peticiones

app.use(express.static('public')); //Expongo al lado cliente la carpeta "public"

app.use(bodyParser.urlencoded({ extended: false })); //Inicializo el parser JSON
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'})); //Inicializo Handlebars. Utilizo como base el layout "Main".
app.set('view engine', 'handlebars'); //Inicializo Handlebars

const Listen_Port = 3000; //Puerto por el que estoy ejecutando la página Web

app.listen(Listen_Port, function() {
    console.log('Servidor NodeJS corriendo en http://localhost:' + Listen_Port + '/');
});

app.use(session({secret: '123456', resave: true, saveUninitialized: true}));
/*
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
*/

app.get('/', function(req, res)
{
    //Petición GET con URL = "/", lease, página principal.
    console.log(req.query); //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('login', null); //Renderizo página "login" sin pasar ningún objeto a Handlebars
});

app.get('/login', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('home', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});



app.put('/login', async function(req, res) {
    //Petición PUT con URL = "/login"
    console.log("Soy un pedido PUT", req.body); //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método PUT
    //Consulto en la bdd de la existencia del usuario
    let respuesta = await MySQL.realizarQuery(`SELECT * FROM Username WHERE nombre = "${req.body.user}" AND contraseña = "${req.body.pass}"`);
    //Chequeo el largo del vector a ver si tiene datos
    if (respuesta.length > 0) {
        //Armo un objeto para responder
        req.session.usuario= req.body.user;
        req.session.id_usuario= respuesta[0].id_usuario;
        let prueba= (`SELECT * FROM Puntaje WHERE id_usuario = "${req.session.id_usuario}"`);
        if (prueba.length==0){
            await MySQL.realizarQuery(`INSERT INTO Puntaje (puntos, id_usuario) VALUES (0, "${req.session.id_usuario}")`);
        }
        res.send({validar: true});    
    }
    else{
        res.send({validar: false});    
    }
        
});
app.delete('/login', function(req, res) {
    //Petición DELETE con URL = "/login"
    console.log("Soy un pedido DELETE", req.body); //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método DELETE
    res.send(null);
});


//Cambiar la info
app.get('/regist', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('regist', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});


//eviar la info
app.post('/regist', async function(req, res)
{
    //Petición POST con URL = "/login"
    console.log("Soy un pedido POST", req.body); 
    /*let newUser= new Usuario(req.body.dni,req.body.nombre,req.body.usuario,req.body.contraseña)
    users.push(newUser)*/
    
    //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método POST
    //res.render('home', { mensaje: "Hola mundo!", usuario: req.body.usuario}); //Renderizo página "home" enviando un objeto de 2 parámetros a Handlebars
  
    //console.log(usuarios);
    let nombre=req.body.usuarioId;
    let contraseña=req.body.password;
    await MySQL.realizarQuery(`INSERT INTO Username (nombre, contraseña) VALUES ("${nombre}", "${contraseña}")`);
    let consulta= await MySQL.realizarQuery(`SELECT id_usuario FROM Username WHERE nombre= "${nombre}"`);
    req.session.usuario = nombre;
    req.session.id_usuario= consulta[0].id_usuario;
    await MySQL.realizarQuery(`INSERT INTO Puntaje (puntos, id_usuario) VALUES (0, "${req.session.id_usuario}")`);
    res.render('home', {nombre: nombre}); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});
   

app.post('/login',async function(req, res)
{
    console.log("Soy un pedido POST", req.body);
    console.log(await MySQL.realizarQuery("SELECT * FROM Username"))
    res.render ('home',null)
    }
)

app.post('/admin',async function(req, res)
{
    console.log("Soy un pedido POST", req.body);
    res.render ('admin',null)
    }
)
app.get('/repaso', function(req, res)
{ console.log(req.query); 
       res.render('repaso', null);
        
});
app.get('/dificultad', function(req, res)
{ console.log(req.query); 
       res.render('dificultad', null);
        
});

app.get('/facil', async function(req, res)
{ console.log(req.query); 
    let consulta = await MySQL.realizarQuery(`SELECT * FROM Preguntas WHERE nivel= "facil"`);
    let pregfacil= Math.ceil(Math.random()*consulta.length)-1;
    let consulta2= await MySQL.realizarQuery(`SELECT * FROM Respuestas INNER JOIN Preguntas ON Respuestas.id_pregunta = Preguntas.id_pregunta WHERE Respuestas.id_pregunta = ${consulta[pregfacil].id_pregunta}`);
    let correcta= ""
    let numCorrecta= 0
    for (let i=0; i<consulta2.length; i++) {
        if (consulta2[i].es_correcta==true){
            correcta= consulta2[i].respuesta;
            numCorrecta= i+1;
        }
    }
    res.render('facil', {NumCorrecta: numCorrecta, Correcta: correcta, Pregunta: consulta[pregfacil].pregunta, Opcion1:consulta2[0].respuesta, Opcion2:consulta2[1].respuesta, Opcion3:consulta2[2].respuesta});
        
});

app.put('/facil', async function(req, res) {
    console.log("Soy un pedido PUT /facil"); 
    if (req.body.elegido == req.body.correcto) {
        await MySQL.realizarQuery(`UPDATE Puntaje SET puntos= puntos+1 WHERE id_usuario="${req.session.id_usuario}"`);
        res.send({chequeo: true});
    } else {
        res.send({chequeo: false});
    }
});

app.get('/medio', async function(req, res)
{ console.log(req.query); 
    let consulta = await MySQL.realizarQuery(`SELECT * FROM Preguntas WHERE nivel= "media"`);
    let pregfacil= Math.ceil(Math.random()*consulta.length)-1;
    let consulta2= await MySQL.realizarQuery(`SELECT * FROM Respuestas INNER JOIN Preguntas ON Respuestas.id_pregunta = Preguntas.id_pregunta WHERE Respuestas.id_pregunta = ${consulta[pregfacil].id_pregunta}`);
    let correcta= ""
    let numCorrecta= 0
    for (let i=0; i<consulta2.length; i++) {
        if (consulta2[i].es_correcta==true){
            correcta= consulta2[i].respuesta;
            numCorrecta= i+1;
        }
    }
    res.render('medio', {NumCorrecta: numCorrecta, Correcta: correcta, Pregunta: consulta[pregfacil].pregunta, Opcion1:consulta2[0].respuesta, Opcion2:consulta2[1].respuesta, Opcion3:consulta2[2].respuesta});
        
});

app.put('/medio', async function(req, res) {
    console.log("Soy un pedido PUT /medio"); 
    if (req.body.elegido == req.body.correcto) {
        await MySQL.realizarQuery(`UPDATE Puntaje SET puntos= puntos+2 WHERE id_usuario="${req.session.id_usuario}"`);
        res.send({chequeo: true});
    } else {
        res.send({chequeo: false});
    }
});

app.get('/dificil', async function(req, res)
{ console.log(req.query); 
    let consulta = await MySQL.realizarQuery(`SELECT * FROM Preguntas WHERE nivel= "dificil"`);
    let pregfacil= Math.ceil(Math.random()*consulta.length)-1;
    let consulta2= await MySQL.realizarQuery(`SELECT * FROM Respuestas INNER JOIN Preguntas ON Respuestas.id_pregunta = Preguntas.id_pregunta WHERE Respuestas.id_pregunta = ${consulta[pregfacil].id_pregunta}`);
    let correcta= ""
    let numCorrecta= 0
    for (let i=0; i<consulta2.length; i++) {
        if (consulta2[i].es_correcta==true){
            correcta= consulta2[i].respuesta;
            numCorrecta= i+1;
        }
    }
    res.render('dificil', {NumCorrecta: numCorrecta, Correcta: correcta, Pregunta: consulta[pregfacil].pregunta, Opcion1:consulta2[0].respuesta, Opcion2:consulta2[1].respuesta, Opcion3:consulta2[2].respuesta});
        
});

app.put('/dificil', async function(req, res) {
    console.log("Soy un pedido PUT /dificil"); 
    if (req.body.elegido == req.body.correcto) {
        await MySQL.realizarQuery(`UPDATE Puntaje SET puntos= puntos+3 WHERE id_usuario="${req.session.id_usuario}"`);
        res.send({chequeo: true});
    } else {
        res.send({chequeo: false});
    }
});

app.get('/puntaje', async function(req, res)
{
    console.log("soy un pedido GET /puntaje");
    consulta = await MySQL.realizarQuery(`SELECT * FROM Puntaje ORDER BY puntos DESC LIMIT 3`);
    let vector = [];
    for (let i=0; i<consulta.length; i++) {
        let consulta2= await MySQL.realizarQuery(`SELECT nombre FROM Username INNER JOIN Puntaje ON Username.id_usuario=Puntaje.id_usuario WHERE Username.id_usuario = ${consulta[i].id_usuario}`);
        vector.push(consulta2[0].nombre);
    }
    res.render('puntaje', {nombreUser1: vector[0], nombreUser2: vector[1], nombreUser3: vector[2], puntuacion1: consulta[0].puntos, puntuacion2: consulta[1].puntos, puntuacion3: consulta[2].puntos}); 
});

/*NUEV COD*/

 /** LOGIN */
 /*
 app.get('/agregarpreg', function(req, res)
 {
     console.log("Soy un pedido GET /agregarpreg holaaaaaaaaaaaaaaaa", req.query); 
     res.render('agregarpreg', null); 
 });

 app.get('/editarpreg', function(req, res)
 {
     console.log("Soy un pedido GET /editarpreg", req.query); 
     res.render('editarpreg', null);
 });
 app.get('/eliminarpreg', function(req, res)
 {
     console.log("Soy un pedido GET /eliminarpreg", req.query); 
     res.render('eliminarpreg', null);
 });


 app.post('/eliminarpreg', async function(req, res)
 {  
    console.log("Soy un pedido POST /eliminarpreg", req.query); 
    let idd = req.body.idPregunta; 
    await MySQL.realizarQuery(`INSERT INTO Preguntas WHERE Id_pregunta = ${idd};`);
    res.send('eliminarpreg', null);
 });

 app.post('/agregarpreg', async function(req, res)
 {  
    /*console.log("Soy un pedido POST /agregarpreg", req.query); 
    let preg = req.body.preg; 
    let dif = req.body.dif;
    let op1 = req.body.op1;
    let op2 = req.body.op2;
    let op3 = req.body.op3;
    await MySQL.realizarQuery(`INSERT INTO Preguntas (pregunta, nivel) WHERE Id_pregunta = ${idd};`);
    res.send({});
    //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    let pregunta = req.query.agregarPregunta;
    let nivel = req.query.nivel;
    let correcta = req.query.correcta;
    let opcion1 = req.query.opcion1;
    let opcion2 = req.query.opcion2;
    function isEmpty(value) {
        return value === undefined || value === null || value === "";
    }
    if(isEmpty(pregunta) || isEmpty(correcta) || isEmpty(opcion1) || isEmpty(opcion2)){
        console.log("Completa todos los campos")
    } else{
        await MySQL.realizarQuery(`INSERT INTO Preguntas(pregunta, nivel) VALUES ("${pregunta}", "${nivel}"`);
        let idpreguntanueva=await MySQL.realizarQuery(`SELECT id_pregunta FROM Preguntas WHERE pregunta = ("${pregunta}")`)
        console.log(idpreguntanueva[0].id_pregunta)
        let esCorrecta = req.query.correcta === "true" ? 1 : 0;
        console.log("Es correcta: "+ esCorrecta);
        /*await MySQL.realizarQuery(`INSERT INTO Respuestas(id_pregunta, respuesta, es_correcta) VALUES ("${idpreguntanueva[0].id_pregunta}", "${req.query.correcta}", ${esCorrecta})`);
        await MySQL.realizarQuery(`INSERT INTO Respuestas(id_pregunta, respuesta, es_correcta) VALUES ("${idpreguntanueva[0].id_pregunta}", "${req.query.opcion1}", ${esCorrecta})`);
        await MySQL.realizarQuery(`INSERT INTO Respuestas(id_pregunta, respuesta, es_correcta) VALUES ("${idpreguntanueva[0].id_pregunta}", "${req.query.opcion2}", ${esCorrecta})`);
        console.log(await MySQL.realizarQuery("SELECT * FROM Respuestas"))
        }
    res.send({});
 });



 app.get('/admin', function(req, res)
 {
     console.log("Soy un pedido GET /admin", req.query); 
     res.render('admin', null); 
 }); */

 /*NUEV COD*/

 /** AGREGAR PREGUNTA */
app.get('/agregarpreg', function(req, res)
{
    console.log("Soy un pedido GET /agregarpreg", req.query); 
    res.render('agregarpreg', null); 
});

app.get('/editarpreg', function(req, res)
{
    console.log("Soy un pedido GET /editarpreg", req.query); 
    res.render('editarpreg', null); 
});

app.get('/admin', function(req, res)
{
    console.log("Soy un pedido GET /admin", req.query); 
    res.render('admin', null); 
});


app.post('/agregarpreg', async function(req, res)
{
    console.log("Soy un pedido POST/agregarpreg asdadasdasdasdsa", req.query); 
    let pregunta = req.body.agregarpregunta;
    let nivel = req.body.nivel;
    let correcta = req.body.correcta;
    let opcion1 = req.body.opcion1;
    let opcion2 = req.body.opcion2;
    function isEmpty(value) {
        return value === undefined || value === null || value === "";
    }
    if (isEmpty(pregunta) || isEmpty(correcta) || isEmpty(opcion1) || isEmpty(opcion2)){
        console.log("Completa todos los campos");
        res.send({validar: false, nivel: "incorrecto"})
    } else {
        if(nivel != "facil" || nivel != "media" || nivel != "dificil") {
            res.send ({validar: true, nivel: "incorrecto"});
        } else{
             console.log(pregunta);
             console.log(nivel);
            await MySQL.realizarQuery(`INSERT INTO Preguntas(pregunta, nivel) VALUES ("${pregunta}", "${nivel}")`);
            let idpreguntanueva=await MySQL.realizarQuery(`SELECT id_pregunta FROM Preguntas WHERE pregunta = "${pregunta}"`)
            console.log(idpreguntanueva[0].id_pregunta)
            let esCorrecta = req.body.correcta === "true" ? 1 : 0;
            await MySQL.realizarQuery(`INSERT INTO Respuestas(id_pregunta, respuesta, es_correcta) VALUES ("${idpreguntanueva[0].id_pregunta}", "${req.body.correcta}", true)`);
            await MySQL.realizarQuery(`INSERT INTO Respuestas(id_pregunta, respuesta, es_correcta) VALUES ("${idpreguntanueva[0].id_pregunta}", "${req.body.opcion1}", false)`);
            await MySQL.realizarQuery(`INSERT INTO Respuestas(id_pregunta, respuesta, es_correcta) VALUES ("${idpreguntanueva[0].id_pregunta}", "${req.body.opcion2}", false)`);
            res.send({validar: true, nivel: "correcto"});
            }
    }
});



// Muestra la pregunta
app.post('/mostrarpregunta',async function(req, res){
   let id_pregunta = req.body.id_pregunta;
   console.log("Soy un pedido POST/mostrarpregunta", req.body); 
   if(id_pregunta == ""){
       console.log("Completa todos los campos")
       res.send({validar: false}); 
   } else{
       let pregunta = await MySQL.realizarQuery(`SELECT * FROM Preguntas WHERE id_pregunta = ${req.body.id_pregunta};`)
       console.log(pregunta);
       res.send({validar: true, pregunta: pregunta}); 
   }
});

// Modificar
app.post('/editarpreg', async function(req, res)
{
    function isEmpty(value) {
        return value === undefined || value === null || value === "";
    }
    console.log("entre a editar preg");
   let id_pregunta = req.body.id_pregunta;
   let pregunta = req.body.pregunta;
   console.log("Soy un pedido POST/editarpreg", req.body);
   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaabababsbndfkljsdfgdfsgsdfgsdgasfsd");
   console.log(id_pregunta);
   console.log(pregunta);
   if(isEmpty(id_pregunta) || id_pregunta==0 || isEmpty(pregunta)){
       console.log("Completa todos los campos")
       res.send({validar: false});
   } else{
       await MySQL.realizarQuery(`UPDATE Preguntas SET pregunta = '${pregunta}'  WHERE id_pregunta = ${id_pregunta};`);
       console.log(await MySQL.realizarQuery(`SELECT * FROM Preguntas WHERE id_pregunta = ${id_pregunta};`))
       res.send({validar: true});
   }   
});

//ELIMINAR
app.get('/eliminarpreg', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET /eliminarpreg", req.query); 
    res.render('eliminarpreg', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});


app.post('/eliminarpreg', async function(req, res)
{  
    console.log("Soy un pedido POST /eliminarpreg", req.query); 
    let idd = req.body.idPregunta; 
    console.log(idd)
    let consulta = await MySQL.realizarQuery(`SELECT id_pregunta FROM Preguntas WHERE id_pregunta = ${idd}`);
    if (consulta.length>0) {
        await MySQL.realizarQuery(`DELETE FROM Respuestas WHERE id_pregunta = ${idd}`);
        await MySQL.realizarQuery(`DELETE FROM Preguntas WHERE id_pregunta = ${idd}`);
        res.send({validar: true});
    } else {
        res.send({validar: false});
    }
});








