var Peach, f, h, e,es;
function setear(){
    f=10;
    h=5;
    e=15;
    es=0;
    Peach= new Tamagotchi(es,f,h,e,document.getElementById("mensaje"));
    setInterval (abu,5000);

}

function abu(){
    Peach.aburrirse();
    Peach.comunicar();
    Peach.mostrarEstado();

}

function cambioEstado(imagen){
    const $imagen = document.getElementById("Peach");
    $imagen.src= imagen;
}



function accionar(boton){
    console.log(boton);
    switch (boton.value) {
        case "Jugar":
            cambioEstado("./assetsCamila/jugando2.gif");
            Peach.jugar();

            break;
        case "Dormir":
            cambioEstado("./assetsCamila/durmiendo.gif");
            Peach.dormir();
            break;

        case "Comer":
            cambioEstado("./assetsCamila/comiendo.gif");
            Peach.comer();
            break;
    
        default:
            break;
    }
}

onload=setear;