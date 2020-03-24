function CrearTabla(){
/*
facil   8 x 8
medio   16 x 16
dificil 32 x 32
*/

var Nombre = document.getElementById("Nombre").value;
var Op1    = document.getElementById("Facil");
var Op2    = document.getElementById("Medio");
var Op3    = document.getElementById("Dificil");

 if (Op1.checked==true)
  alert("Usted Seleccionado el Nivel Facil : "+Op1.value);
 else if (Op2.checked==true)
   alert("Usted Seleccionado el nivel Medio  "+Op2.value);
 else if (Op3.checked==true)
   alert("Usted Seleccionado el nivel Dificil : "+Op3.value);

   GenerarT()
}

function GenerarT(){

    for(i=0;i<8;i++){
    for(j=0;j<8;j++){
    var div = document.createElement("div");
    div.id =i+""+j;
    }
    }


    document.getElementById("Resultado").innerHTML=div;
    alert("SI ESTA!!!")
}










/*for(i=0;i<7;i++){
for(j=0;j<4;j++){
var div = document.createElement("div");
div.id =i+""+j;
}
}
*/
