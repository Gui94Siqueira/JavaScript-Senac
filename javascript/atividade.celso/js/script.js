

function tabuada() {

    var num = parseInt(document.getElementById('num').value);
    // traz o valor digitado no input 'num' para a variavel
    var resposta = document.getElementById('resposta'); // traz a div chamada resposta
    var tabuada = '';

    for(var count=1; count <= 10; count++) {
        // laço de repetição de 1 a 10
        // monta a expressão a ser apresentada ex: 5 x 2 = 10
        tabuada += num + " x " + count + " = " + num * count + "<br>" 
    
        resposta.innerHTML = tabuada; // insere o resultado na div chamada resposta
    }
}