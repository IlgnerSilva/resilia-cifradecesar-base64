function cesar() {
    let mensagem = document.querySelector('#mensagem').value.toLowerCase();
    let numCesar = document.querySelector('#numero-cesar').value
    let convertNum = parseInt(numCesar);
    let guardaMensagem = []
    let foi = '';

    for (let i = 0; i < mensagem.length; i++) {
        if (mensagem[i] != ' ') {
            for (let j = 0; j < alfa.length; j++) {
                if (mensagem[i] == alfa[j]) {
                    guardaMensagem = alfa[(j + convertNum) % alfa.length];
                    foi += guardaMensagem
                }
            }
        } else {
            guardaMensagem[i] = ' '
        }
    }

    document.querySelector('#resultado-msg').value = foi;
}