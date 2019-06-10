class pakiman
{
    constructor(nombre , vida , ataque)
    {
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida ;
        this.ataque = ataque;
        
        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert (this.nombre);
    }
    mostrar()
    {     
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong> Nombre: "+ this.nombre +" </strong > <br>");
        document.write("<strong>Vida: "+ this.vida +" </strong > <br>");
        document.write("<strong>Ataque: "+ this.ataque +" </strong > <hr> <br>");
        document.write("</p>");
    }
}