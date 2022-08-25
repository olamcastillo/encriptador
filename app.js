let text= document.getElementById('textarea');
let answer = document.getElementById('textarea-answer');
let noData = document.getElementById('no-data');
let expReg = /([A-Z\d\s\W])/g;

function autoGrow(element) {
    element.style.height = '10px';
    element.style.height = (element.scrollHeight) + 'px';
    element.style.transition = '.1s';
}
/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
*/
function validEncrypt() {
    if(expReg.test(text.value) || text.value == '') {
        Swal.fire(
            { 
                title: 'Error!',
                text: 'Only lowercase letters and no accents!',
                icon: 'error',
                background: '#212534',
                color: 'white'
            }
        )
    }
    encrypt();
}
function validDecrypt() {
    if(expReg.test(text.value) || text.value == '') {
        Swal.fire(
            { 
                title: 'Error!',
                text: 'Only lowercase letters and no accents!',
                icon: 'error',
                background: '#212534',
                color: 'white'
            }
        )
    }
    decrypt();
}
function encrypt() {
    if(text.value != '') {
        let strE = text.value.replaceAll('e', 'enter');
        let strI = strE.replaceAll('i', 'imes');
        let strA = strI.replaceAll('a', 'ai');
        let strO = strA.replaceAll('o', 'ober');
        let strU = strO.replaceAll('u', 'ufat');
        answer.value = strU;
        answer.style.fontSize = '26px';
        answer.style.transition = '.4s';
        noData.style.opacity = '0';
        noData.style.transition = '.4s';
        copy.style.opacity = '1';
        copy.style.transition = '.4s';
    }
}
function decrypt() {
    if(text.value != '') {
        let strE = text.value.replaceAll('enter', 'e');
        let strI = strE.replaceAll('imes', 'i');
        let strA = strI.replaceAll('ai', 'a');
        let strO = strA.replaceAll('ober', 'o');
        let strU = strO.replaceAll('ufat', 'u')
        answer.value = strU;
        answer.style.fontSize = '26px';
        answer.style.transition = '.4s';
        noData.style.opacity = '0';
        noData.style.transition = '.4s';
        copy.style.opacity = '1';
        copy.style.transition = '.4s';
    }
}
function copyText() {
    answer.select();
    answer.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(answer.value);
    Swal.fire(
        { 
            title: 'Success!',
            text: 'Copied!',
            icon: 'success',
            background: '#212534',
            color: 'white'
        }
    )

}