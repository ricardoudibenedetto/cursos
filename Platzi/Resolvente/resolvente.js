var exp = require("express");
var app = exp();
app.get("/", inicio);
function inicio(peticion, resultado)
{
  resultado.sendfile("resolvente.html");
}
app.listen(8989);
var a = document.getElementById("a");
var A = parseInt(a.value);
var boton = document.getElementById("boton");
boton.addEventListener("click", print);
function print()
{
document.write(A);
}