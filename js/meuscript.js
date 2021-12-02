var conteudo = document.getElementById('conteudo');
var botao = document.getElementById('mostre_mais');

//criar o evento do click do botão utilizandouma função anônima
botao.onclick = function(){
    if(conteudo.className == "open"){
        //diminuir caixa
        conteudo.className = ""; //muda classe da div para " "
        botao.innerHTML = "Mostrar Mais"; //muda o texto do botão para "Mostrar Mais"
    }
    else{
        //expandir caixa
        conteudo.className =  "open"; //muda a classe da div para open 
        botao.innerHTML = "Mostra Menos" //muda texto do botão para mostrar menos  
    }
};