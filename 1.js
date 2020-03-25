

function GenerarT(){
  var x = 8 ;
  var tabla="<table border=\"0\">";
  for(i=0;i<8;i++){
  tabla+="<tr>";
  for(j=0;j<8;j++){
  tabla+="<td>"+"<IMG src=\"Bloque.ico\">"+ "</td>";
  }
  tabla+="</tr>";
  }
  tabla+="</table>";
  document.getElementById("Resultado").innerHTML=tabla;
  alert("Usted Seleccionado el Nivel Facil : ");
};



function CrearTabla(){

var Nombre = document.getElementById("Nombre").value;
var Op1    = document.getElementById("Facil");
var Op2    = document.getElementById("Medio");
var Op3    = document.getElementById("Dificil");


 if (Op1.checked==true)
  GenerarT();
 else if (Op2.checked==true)
   alert("Usted Seleccionado el nivel Medio  "+Op2.value);
 else if (Op3.checked==true)
   alert("Usted Seleccionado el nivel Dificil : "+Op3.value);

};


/*for(i=0;i<7;i++){
for(j=0;j<4s;j++){
var div = document.createElement("div");
div.id =i+""+j;
}
}
*/
