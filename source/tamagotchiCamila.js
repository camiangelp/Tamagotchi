function Tamagotchi(estado,felicidad, hambre,energia, ui){
    this.felicidad= felicidad;
    this.hambre = hambre;
    this.energia = energia;
    this.visor= ui;
    this.estado=estado;
    this.mensaje= "Esperando a que jueguen conmigo";
    console.log("Hola, soy Peach");
}

Tamagotchi.prototype.jugar= function(){
    this.felicidad++;
    this.energia--
    if (this.energia>5) {
        this.mensaje = "Estoy jugando";
        this.estado=1;
        
    } else {
        this.mensaje = "No puedo jugar. Estoy cansado";
        this.cambiarImagen("./assetsCamila/cansado.gif")               
    }
}

Tamagotchi.prototype.dormir= function(){
    if (this.energia <10) {
        this.energia++;
        this.estado=2;
        this.mensaje="Estoy durmiendo";
    } else {
        this.mensaje="No quiero dormir, no estoy cansado";
    }
}
Tamagotchi.prototype.comer= function(){
    if (this.hambre < 5) {
        this.energia++;
        this.estado=3;
        this.mensaje="Tengo hambre ";
    } else {
        this.mensaje="No quiero dormir, no estoy cansado";
    }
}

Tamagotchi.prototype.aburrirse = function(){
    if ((this.felicidad > 5)&&(this.estado ==0 )) {
        this.felicidad--;
        
    } else {
        this.cambiarImagen("./assetsCamila/aburrido.gif")
        this.mensaje="Estoy aburrido. Necesito jugar";
    }
}

Tamagotchi.prototype.comunicar = function(){
    this.visor.innerHTML=this.mensaje;
    return this.estado;
}



Tamagotchi.prototype.mostrarEstado = function(){
    const estadoElement = document.getElementById("estado");
    estadoElement.innerHTML = `Hambre: ${this.hambre}, Felicidad: ${this.felicidad}, Energía: ${this.energia}`;
}

Tamagotchi.prototype.cambiarImagen = function(Imagen){
    const $imagen = document.getElementById("Peach");
    $imagen.src= Imagen;
}