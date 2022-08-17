



let quantidadecartas = prompt("Digite a quantidade de cartas desejadas (mín 4; máx 14):");

perguntarquantidade();

function perguntarquantidade(){
    while(quantidadecartas < 4 || quantidadecartas%2 !== 0 || quantidadecartas > 14){
        quantidadecartas = prompt("Digite a quantidade de cartas desejadas (mín 4; máx 14):");
    }
}


