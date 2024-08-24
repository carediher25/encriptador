
//Variables
let resultTxt = document.getElementById('resultTxt');
let userTxt = document.getElementById('userTxt');
let btnCopy =  document.getElementById('btnCopy');
let btnCI = document.getElementById('btnCI');
let resultMsj1 = document.getElementById('resultMsj1');
let resultMsj2 = document.getElementById('resultMsj2');
let aprovadoImg = document.getElementById('comprobadoImg');
let titleResult = document.getElementById('titleResult');
let logo = document.getElementById('logo');
let labelResult = document.getElementById('labelResult');
let footer =  document.getElementById('footer');

// Functions

function initialConditionFunction() {
    userTxt.value="";
    resultTxt.innerHTML="";
    btnCopy.style.display = 'none';
    btnCI.disabled = true;   
    resultTxt.style.display='none';
    resultMsj1.style.display = 'inline';
    resultMsj2.style.display = 'inline';
    logo.style.display = 'inline';
    aprovadoImg.style.display = 'none';
    titleResult.style.display = 'none';
    labelResult.innerHTML = "";
    footer.style.padding = '0.85%';
}

initialConditionFunction();

function activateElements () {
    btnCopy.style.display = 'inline';
    btnCI.disabled = false;   
    resultTxt.style.display='inline';
    aprovadoImg.style.display='inline'; 
    labelResult.style.color = "chartreuse";
    resultTxt.style.outline = "none";
    resultTxt.style.borderColor = "#00fffc";
    resultTxt.style.boxShadow = "0 0 3rem #00fffc";
    footer.style.padding = '0.55%'
    titleResult.style.display = 'inline';   
}

function disableElements () {
    resultMsj1.style.display = 'none';
    resultMsj2.style.display = 'none';
    logo.style.display = 'none';
}

function encryptFunction(){
    //encriptando el mensaje recibido
    resultTxt.innerHTML = userTxt.value
        .replace(/e/gi, "enter")    
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    disableElements();
    activateElements();
    titleResult.innerHTML = "Texto Encriptado";
    labelResult.innerHTML = "¡El Texto Ha Sido Encriptado Con Exito!!"
}

function decryptFunction(){
    //desencriptando el mensaje obtenido
    resultTxt.innerHTML = userTxt.value
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    disableElements();
    activateElements();
    titleResult.innerHTML = "Texto Desencriptado";
    labelResult.innerHTML = "¡El Texto Ha Sido Desencriptado Con Exito!!";
}

function copyFunction(){
    // copiando el texto del resultado y lo pego dentro del texto a encriptar o desemcriptar
    userTxt.value = resultTxt.innerHTML;
    resultTxt.innerHTML = "";
    aprovadoImg.style.display='none';
    titleResult.innerHTML = "...";
    labelResult.innerHTML = "¡El Texto Ha Sido Copiado Con Exito!!";
    labelResult.style.color = '#e30075';
    resultTxt.style.outline = "none";
    resultTxt.style.borderColor = "none";
    resultTxt.style.boxShadow = "none";
    userTxt.style.outline = "none";
    userTxt.style.borderColor = "#00fffc";
    userTxt.style.boxShadow = "0 0 3rem #00fffc";
    footer.style.padding = '0.5%'
}



