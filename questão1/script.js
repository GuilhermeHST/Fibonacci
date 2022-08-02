let numerosFibbonacci = []

let botao = document.getElementById("inserirNumero");



let soma;

function inserir(){ 
    

    let numeroInserido = numero();
    numerosFibbonacci.push(numeroInserido);
    console.log(numerosFibbonacci);
    removerBotao();
}

function numero(){

    let number = document.getElementById('numero').value;
    let num = parseInt(number);

    console.log(num);
    return num;
}

function removerBotao(){
    if (numerosFibbonacci.length == 2) {
        botao.remove()
        gerarNumeros()
    }
}

function gerarNumeros(){
    //variavel que determinará o tamanho limite do vetor
    let limite = parseInt(document.getElementById("limite").value);

    //sequencia de Fibonnaci é gerada automaticamente
    for (let i = 0; i < limite; i++) {
        soma = numerosFibbonacci[i] + numerosFibbonacci[i+1]
        numerosFibbonacci.push(soma)
        console.log(numerosFibbonacci);
    }
}

function verificarLenght(){
    if(numerosFibbonacci.length >= 100){
        
    }
}