 

//funcion para abrir menu
function menu(){
    document.getElementById('nav__responsive').style.display = 'block';
}
 
//funcion para cerrar menu
function menu_close(){
    document.getElementById('nav__responsive').style.display = 'none';
    
}


//condicion para que cuando la pantalla llegue mayo de 965px el elemento seleccionado cambio estilo de display
/*if (window.innerWidth > 965){
    document.getElementById('nav__reponsive').style.display = 'none';
}*/


//Slider para imagenes
const slider = document.querySelector("#slider"); //Se pone constante por que es una constante permanente no se modificara.
let  sliderSection = document.querySelectorAll(".slider__section");//cada una de las secciones que seran modificadas, por eso se pone como na variable let ya que sera modificada
let  sliderSectionLast = sliderSection[sliderSection.length -1];//De esta manera obtenemos la ultima imagen del section para poder poner al principio
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");


slider.insertAdjacentElement('afterbegin', sliderSectionLast); //va obetener al ultimo elemento y colocamos al slider en la posicion despues de que termine

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];//
    slider.style.marginLeft = "-200%";//slider tenga un margin left
    slider.style.transition = "all 0.5s"; //con una transicion 
    //slider vuelva a la normalida 
setTimeout(function() {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);//lo contrario al primer insertAdj
    slider.style.marginLeft = "-100%";
}, 500);
}

btnRight.addEventListener('click',function(){
    Next();
});//para ejecutarlo con el click 

function Prev() {
    let  sliderSection = document.querySelectorAll(".slider__section");//Se vuelven a declarar por que elemento cambio
    let  sliderSectionLast = sliderSection[sliderSection.length -1];
    
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];//
    slider.style.marginLeft = "0";//slider tenga un margin left
    slider.style.transition = "all 0.5s"; //con una transicion 
    //slider vuelva a la normalida 
setTimeout(function() {
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);//lo contrario al primer insertAdj
    slider.style.marginLeft = "-100%";
}, 500);
}

btnLeft.addEventListener('click',function(){
    Prev();
});//para ejecutarlo con el click 

setInterval(function () {
    Next();
}, 3000);//cada 3s se ejecutara la funcion next para que avance automaticamente

//FIN Sider para imagenes


