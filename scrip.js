var textInput = document.getElementById("INPUT_TEXT");
let textOutput = document.getElementById('OUTPUT_TEXT');


const btnEncript = document.getElementById('BTN_ENCRIPT');
const btnUnencript = document.getElementById('BTN_DESENCRIPT');
const btncopy = document.getElementById('BTN_COPY');



function encriptText(){
    if (textInput.value != '') {
        textOutput.innerText = encript(textInput.value.toLowerCase())
        btncopy.disabled=false;
    }

}

function desencriptText(){
    textOutput.innerText = desencript(textInput.value.toLowerCase())
}

function copyText(){
    navigator.clipboard.writeText(textOutput.innerText); 
    
}


/* 
La letra "a" es convertida para "ai"1
La letra "e" es convertida para "enter"4 
La letra "i" es convertida para "imes"3
La letra "o" es convertida para "ober"3
La letra "u" es convertida para "ufat" 3
*/
function encript(text){
    let encriptedText=''

    for (let i = 0; i < text.length; i++) { 
        
        switch (text[i]) {
            case 'a':
                encriptedText+='ai';
                break;

            case 'e':
                encriptedText+='enter';
                break;

            case 'i':
                encriptedText+='imes';
                break;

            case 'o':
                encriptedText+='ober';
                break;

            case 'u':
                encriptedText+='ufat';
                break;

            default:
                encriptedText+=text[i]
                break;
        }
    }
    return encriptedText
}

function desencript(text) {
    
    let encriptedText=''

    for (let i = 0; i < text.length; i++) { 
        
        switch (text[i]) {
            case 'a':
                encriptedText+=text[i];
                i+=1
                break;

            case 'e':
                encriptedText+=text[i];
                i+=4
                break;

            case 'i':
                encriptedText+=text[i];
                i+=3
                break;

            case 'o':
                encriptedText+=text[i];
                i+=3
                break;

            case 'u':
                encriptedText+=text[i];
                i+=3
                break;

            default:
                encriptedText+=text[i]
                break;
        }
    }
    return encriptedText
}