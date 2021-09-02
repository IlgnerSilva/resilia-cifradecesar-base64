let tipo = document.querySelector('.select');
let marcouCrip = document.querySelector('#crip-marcado')

function teste(){
    if(tipo.value == 'cifra-de-cesar' && marcouCrip.value == 'crip-marcado'){
        document.querySelector('.section').style.display = 'none'
    }else{
        alert('Alguem não marcou')
    }
}
