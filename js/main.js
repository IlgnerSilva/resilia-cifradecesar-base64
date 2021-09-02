let alfa = 'abcdefghijklmnopqrstuvwxyz'
let btnCriptografar = document.querySelector('#btn-crip');
let tipo = document.querySelector('.select');
let numeroCesar = document.querySelector('#numero-cesar')
document.querySelector('.msg-codificada').style.display = 'none'
document.querySelector('.aparece-cesar').style.display = 'none'

tipo.addEventListener('change',function(){
    if (tipo.value !== 'cifra-de-cesar') {
        document.querySelector('#numero-cesar').style.display = 'none'
        document.querySelector('.msg-codificada').style.display = 'none'
        document.querySelector('.aparece-cesar').style.display = 'none'
    }else{
        document.querySelector('#numero-cesar').style.display = 'inline-block'
        document.querySelector('.msg-codificada').style.display = 'none'
        document.querySelector('.aparece-cesar').style.display = 'inline-block'
    }
})

btnCriptografar.addEventListener('click', function () {
    if (tipo.value == 'cifra-de-cesar'){
        document.querySelector('.msg-codificada').style.display = 'block'
        cesar()
    } else if(tipo.value == 'base64'){
        document.querySelector('.msg-codificada').style.display = 'block'
        base()
    }
})
