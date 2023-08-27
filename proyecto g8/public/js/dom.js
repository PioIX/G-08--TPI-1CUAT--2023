async function putJSON(data) {
    //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

    try {
      const response = await fetch("/login", {
        method: "PUT", // or 'POST'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      //En result obtengo la respuesta
      const result = await response.json();
      console.log("Success:", result);

      if (result.validar == false) {
        alert("Los datos son incorrectos, intente nuevamente")
      } else {
           if (data.user = "Martin" && data.pass =="Rivas") {
              document.getElementById("administrador").submit()
           }
           else{
            document.getElementById("form1").submit()
           }
        
      }
      

    } catch (error) {
      console.error("Error:", error);
    }
  }

  //Esta funcion la llama el boton Ingresar que tiene que ser type button para ejecutar el onclick
  function login() {
    //Leo los datos del input
    let usuario = document.getElementById("usuarioId").value
    let contraseña = document.getElementById("password").value

    //Creo un objeto de forma instantanea
    let data = {
        user: usuario,
        pass: contraseña
    }

    //data es el objeto que le paso al back
    putJSON(data)
  }

function delay(timeInMs) {
  return new Promise(resolve => setTimeout(resolve, timeInMs));
}

async function putJSON2 (data2) {   
  try {
    const response2 = await fetch("/medio", {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data2),
    });
    const result2 = await response2.json();
    console.log("Success:", result2);

    if (result2.chequeo == false) {
      document.getElementById("botonPreguntaMedia"+data2.numCorrecto).style.background = "lightgreen";
      document.getElementById("botonPreguntaMedia"+data2.numero).style.background = "pink";
      document.getElementById("botonPreguntaMedia1").disabled = true;
      document.getElementById("botonPreguntaMedia2").disabled = true;
      document.getElementById("botonPreguntaMedia3").disabled = true;
      delay(5000).then(() => location.href = "/puntaje");
    } else {
        document.getElementById("botonPreguntaMedia1").disabled = true;
        document.getElementById("botonPreguntaMedia2").disabled = true;
        document.getElementById("botonPreguntaMedia3").disabled = true;
        document.getElementById("botonPreguntaMedia"+data2.numero).style.background = "lightgreen";
        delay(5000).then(() => location.href = "/medio");
    }
  } catch (error) {
      console.error("Error:", error);
  }
}

function checkRespuesta(numero, elegido, correcto, numCorrecto) {
  console.log(numero, elegido, correcto, numCorrecto)
  let data2 = {
      numero: numero,
      elegido: elegido,
      correcto: correcto,
      numCorrecto: numCorrecto
  }
  putJSON2(data2);
}

async function putJSON3 (data3) {   
  try {
    const response3 = await fetch("/facil", {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data3),
    });
    const result3 = await response3.json();
    console.log("Success:", result3);

    if (result3.chequeo == false) {
      document.getElementById("botonPreguntaFacil"+data3.numCorrecto).style.background = "lightgreen";
      document.getElementById("botonPreguntaFacil"+data3.numero).style.background = "pink";
      document.getElementById("botonPreguntaFacil1").disabled = true;
      document.getElementById("botonPreguntaFacil2").disabled = true;
      document.getElementById("botonPreguntaFacil3").disabled = true;
      delay(5000).then(() => location.href = "/puntaje");
    } else {
        document.getElementById("botonPreguntaFacil1").disabled = true;
        document.getElementById("botonPreguntaFacil2").disabled = true;
        document.getElementById("botonPreguntaFacil3").disabled = true;
        document.getElementById("botonPreguntaFacil"+data3.numero).style.background = "lightgreen";
        delay(5000).then(() => location.href = "/facil");
    }
  } catch (error) {
      console.error("Error:", error);
  }
}

function checkRespuesta2(numero, elegido, correcto, numCorrecto) {
  console.log(numero, elegido, correcto, numCorrecto)
  let data3 = {
      numero: numero,
      elegido: elegido,
      correcto: correcto,
      numCorrecto: numCorrecto
  }
  putJSON3(data3);
}

async function putJSON4 (data4) {   
  try {
    const response4 = await fetch("/dificil", {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data4),
    });
    const result4 = await response4.json();
    console.log("Success:", result4);

    if (result4.chequeo == false) {
      document.getElementById("botonPreguntaDificil"+data4.numCorrecto).style.background = "lightgreen";
      document.getElementById("botonPreguntaDificil"+data4.numero).style.background = "pink";
      document.getElementById("botonPreguntaDificil1").disabled = true;
      document.getElementById("botonPreguntaDificil2").disabled = true;
      document.getElementById("botonPreguntaDificil3").disabled = true;
      delay(5000).then(() => location.href = "/puntaje");
    } else {
        document.getElementById("botonPreguntaDificil1").disabled = true;
        document.getElementById("botonPreguntaDificil2").disabled = true;
        document.getElementById("botonPreguntaDificil3").disabled = true;
        document.getElementById("botonPreguntaDificil"+data4.numero).style.background = "lightgreen";
        delay(5000).then(() => location.href = "/dificil");
    }
  } catch (error) {
      console.error("Error:", error);
  }
}

function checkRespuesta3(numero, elegido, correcto, numCorrecto) {
  console.log(numero, elegido, correcto, numCorrecto)
  let data4 = {
      numero: numero,
      elegido: elegido,
      correcto: correcto,
      numCorrecto: numCorrecto
  }
  putJSON4(data4);
}

/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/
/*
/*dom nuevo
 // eliminar pregunta
 function eliminarPregunta() {
  let id = document.getElementById("idPregunta").value
  let data5 = {
    idPregunta: id
  }
  console.log(data5)
  fetchEliminarPregunta(data5)
}

async function fetchEliminarPregunta(data5) {
  try {
    const response5 = await fetch("/eliminarpreg", {
      method: "POST", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data5),
    });
    const result5 = await response5.json();
    console.log("Success:", result5);

    if (result5.validar == false) {
      alert("Los datos son incorrectos")
    } else {
      location.href = "/admin"
      
    }

  } catch (error) {
    console.error("Error:", error);
  }
}
//modificar
async function mostrarPutJSON(data6) {
  //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

  try {
    const response6 = await fetch("/mostrarPregunta", {
      method: "POST", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data6),
    });
    
    //En result obtengo la respuesta
    const result6 = await response6.json();
    console.log("Success:", result6);
    if (result6.validar == true) {
      document.getElementById("pregunta").value = result6.pregunta[0].pregunta;  
    }
    else{
      document.getElementById("pregunta").value = "";  
    }
    

  } catch (error) {
    console.error("Error:", error);
  }
}

function mostrarPreg() {
  let idPregunta = document.getElementById("idPreguntaM").value
  let data6 = {
    idPregunta: idPregunta,
  }
  console.log(data6)
  mostrarPutJSON(data6)
}

async function modificarPutJSON(data7) {
  try {
    const response7 = await fetch("/modificar", {
      method: "POST", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data7),
    });
    
    //En result obtengo la respuesta
    const result7 = await response7.json();
    console.log("Success:", result7);
    if (result7.validar == true) {
      document.getElementById("pregunta").value = result7.pregunta[0].pregunta;  
    }
    else{
      document.getElementById("pregunta").value = ""
      location.href = "/admin";  
    }
    

  } catch (error) {
    console.error("Error:", error);
  }
}

function modificarPreg() {
  let preg = document.getElementById("preg").value
  let dif = document.getElementById("dif").value
  let cor = document.getElementById("cor").value
  let incor1 = document.getElementById("incor1").value
  let incor2 = document.getElementById("incor2").value
  let data7 = {
    preg : preg,
    dif : dif,
    cor : cor,
    incor1 : incor1,
    incor2 : incor2
  }
  console.log(data7)
  modificarPutJSON(data7)
}


//agregar 
function agregarPreg() {
  let preg = document.getElementById("preg").value
  let dif = document.getElementById("dif").value
  let op1 = document.getElementById("cor").value
  let op2 = document.getElementById("incor1").value
  let op3 = document.getElementById("incor2").value

  //Creo un objeto de forma instantanea
  let data8 = {
    preg : preg,
    dif : dif,
    op1 : op1,
    op2 : op2,
    op3 : op3
  }
  console.log("hola: " + data8)
  fetchAgregarPregunta(data8)
}

async function fetchAgregarPregunta(data8) {
  //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

  try {
    const response8 = await fetch("/agregarpreg", {
      method: "POST", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data8),
    });
    const result8 = await response8.json();
    console.log("Success:", result8);
    if (result8.validar == false) {
      alert("Los datos son incorrectos")
    } else {
      location.href = "/admin"
      
    }
  } catch (error) {
    console.error("Error:", error);
  }
}


//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa



/*dom nuevo*/
 // eliminar pregunta
 function eliminarPregunta() {
  let id = document.getElementById("idPregunta").value
  let data = {
    idPregunta: id
  }
  console.log(data) 
  fetchEliminarPregunta(data)
}

async function fetchEliminarPregunta(data) {

  try {
    const response = await fetch("/eliminarpreg", {
      method: "POST", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    //En result obtengo la respuesta
    const result = await response.json();
    console.log("Success:", result);

    if (result.validar == false) {
      alert("No existe una pregunta con ese ID")
    } else {
      location.href = "/eliminarpreg"
      
    }

  } catch (error) {
    console.error("Error:", error);
  }
}
//modificar
async function mostrarPutJSON(data) {
  try {
    const response = await fetch("/mostrarPregunta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    //En result obtengo la respuesta
    const result = await response.json();
    console.log("Success:", result);
    if (result.validar == true) {
      document.getElementById("pregunta").value = result.pregunta[0].pregunta;  
    }
    else{
      document.getElementById("pregunta").value = "";  
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

//Esta funcion la llama el boton Ingresar que tiene que ser type button para ejecutar el onclick
function mostrarPreg() {
  let id_pregunta = document.getElementById("id_preguntamod").value
  //Creo un objeto de forma instantanea
  let data = {
    id_pregunta: id_pregunta,
  }
  console.log(data)
  //data es el objeto que le paso al back
  mostrarPutJSON(data)
}

async function modificarPutJSON(data) {
  try {
    const response = await fetch("/editarpreg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log("Success:", result);
    if (result.validar == false) {
      alert("Complete los campos");  
    }
    else{
      document.getElementById("pregunta").value = ""
      location.href = "/editarpreg";  
    }
    
  } catch (error) {
    console.error("Error:", error);
  }
}

function modificarPreg() {
  let id_pregunta = document.getElementById("id_preguntamod").value
  let pregunta = document.getElementById("pregunta").value
  //let dif = document.getElementById("dif").value
  //let cor = document.getElementById("cor").value
  //let incor1 = document.getElementById("incor1").value
  //let incor2 = document.getElementById("incor2").value
  let data = {
    pregunta : pregunta,
    id_pregunta: id_pregunta
    //dif : dif,
    //cor : cor,
    //incor1 : incor1,
    //incor2 : incor2
  }
  console.log(data)
  modificarPutJSON(data)
}

function agregarPreg() {
  let agregarpregunta = document.getElementById("agregarPregunta").value;
  let nivel = document.getElementById("nivel").value;
  let correcta = document.getElementById("correcta").value;
  let opcion1 = document.getElementById("opcion1").value;
  let opcion2 = document.getElementById("opcion2").value;

  let data = {
    agregarpregunta : agregarpregunta,
    nivel : nivel,
    correcta : correcta,
    opcion1 : opcion1,
    opcion2 : opcion2
  }
  console.log("data:")
  console.log(data)
  fetchAgregarPregunta(data)
}

async function fetchAgregarPregunta(data) {
  try {
    const response = await fetch("/agregarpreg", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    //En result obtengo la respuesta
    const result = await response.json();
    console.log("Success:", result);
    if (result.nivel=="incorrecto" && result.validar==true){
      alert("El nivel es incorrecto, escribalo de la siguiente forma:   facil   media   dificil");
    } else if (result.validar == false) {
        alert("Los datos son incorrectos")
    } else if (result.nivel=="correcto" && result.validar==true){
        location.href = "/agregarpreg";
    }

  } catch (error) {
    console.error("Error:", error);
  }
}