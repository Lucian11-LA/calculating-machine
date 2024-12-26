let visor = document.getElementById('visor');

function adicionarValor(valor){
    visor.value += valor;
}

function limpar(){
    visor.value = '';
}

function calcular(){
    try{
        visor.value = eval(visor.value);
    }catch(error){
        visor.value = 'Erro';
    }
}