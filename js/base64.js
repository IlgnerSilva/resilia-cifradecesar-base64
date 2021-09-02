function base(){
    let mensagem = document.querySelector('#mensagem').value.toLowerCase();
    let base = btoa(mensagem)
    document.querySelector('#resultado-msg').value = base;
    console.log(base)
}
