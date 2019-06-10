var r = document.getElementById("res");
var boton = document.getElementById("extraer");
boton.addEventListener("click", ExtraerDinero);
var dineroUsuario;
var papeles;

var imagenes = [];
imagenes["50"] = "billete50.jpg";
imagenes["20"] = "billete20.jpg";
imagenes["10"] = "billete10.jpg";

class billete
{
    constructor(valor , cantidad)
    {
        this.valor = valor;
        this.cantidad = cantidad;
        this.imagen = new Image();
		this.imagen.src = imagenes[this.valor];
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
    }
}


var billetes = [];
var e = [];
billetes.push(new billete (50 , 3));
billetes.push(new billete(20 , 2));
billetes.push(new billete(10 , 2));





function ExtraerDinero()
{
    var dinerohtml = document.getElementById("dinero");
    dineroUsuario = parseInt(dinerohtml.value);

    for(var dinero of billetes)
{
    if ( dineroUsuario > 0)
    {
        var div = Math.floor(dineroUsuario / dinero.valor);
        if ( div < dinero.cantidad)
        {
            papeles = div;
           
        }
        else
        {
            papeles = dinero.cantidad;
           
        }
        for ( var i = 0 ; i <papeles ; i++)
        {
            e.push(new billete(dinero.valor, 1));
        }
        dineroUsuario -= papeles * dinero.valor; 
    }
}

if(dineroUsuario > 0 )
{
    
    r.innerHTML="no tenemos dinero suficiente";
}
else 
{
    for(var entregado of e)
    {
        
        entregado.mostrar();
        //r.innerHTML += entregado.cantidad +" billetes de $"+ entregado.valor +  "<br/>" ;
        
    }
   
}


    console.log(e);

}
