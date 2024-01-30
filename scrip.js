var textInput = document.getElementById('INPUT_TEXT');
let textOutput = document.getElementById('OUTPUT_TEXT');
const btnEncrypt = document.getElementById('BTN_ENCRYPT');
const btnUnencrypt = document.getElementById('BTN_DECRYPT');
const btncopy = document.getElementById('BTN_COPY');


/* ######| BOTONES |############### */

function encryptText(){
    if (textInput.value != '') {
        textOutput.innerText = encrypt(textInput.value.toLowerCase())
        btncopy.disabled=false;
    }

}

function decryptText(){
    textOutput.innerText = decrypt(textInput.value.toLowerCase())
}

function copyText(){
    navigator.clipboard.writeText(textOutput.innerText); 
    
}

/* ######| END BOTONES |############# */

/* 
La letra "a" es convertida para "ai"1
La letra "e" es convertida para "enter"4 
La letra "i" es convertida para "imes"3
La letra "o" es convertida para "ober"3
La letra "u" es convertida para "ufat" 3
*/

var caracteres = {}



function encrypt(text){
    let encryptedText=''

    for (let i = 0; i < text.length; i++) { 
        
        switch (text[i]) {
            case 'a':
                encryptedText+='ai';
                break;

            case 'e':
                encryptedText+='enter';
                break;

            case 'i':
                encryptedText+='imes';
                break;

            case 'o':
                encryptedText+='ober';
                break;

            case 'u':
                encryptedText+='ufat';
                break;

            default:
                encryptedText+=text[i]
                break;
        }
    }
    return encryptedText
}

function decrypt(text) {
    
    let encryptedText=''

    for (let i = 0; i < text.length; i++) { 
        
        switch (text[i]) {
            case 'a':
                encryptedText+=text[i];
                i+=1
                break;

            case 'e':
                encryptedText+=text[i];
                i+=4
                break;

            case 'i':
                encryptedText+=text[i];
                i+=3
                break;

            case 'o':
                encryptedText+=text[i];
                i+=3
                break;

            case 'u':
                encryptedText+=text[i];
                i+=3
                break;

            default:
                encryptedText+=text[i]
                break;
        }
    }
    return encryptedText
}

var dict={
    'a' : 'al', 
    'e' : 'el',
    'i' : 'il',
    'o' : 'ol',
    'u' : 'ul'

}


function remplazarCharKeyToCharValue(letra) {
/* leer el caracter del string */
    
    /* buscar el caracter en diccionario[key] */
    if (letra in Object.keys(dict)) {

        /* return  diccionario[value] del caracter*/
        return dict[letra];
    }

    else{
        letra
    }
}

function remplazarCharValueToCharKey(letra) {
    
    if (letra in Object.values(dict)) {

        /* return  diccionario[value] del caracter*/
        return dict[letra];
    }

    else{
        letra
        }
}