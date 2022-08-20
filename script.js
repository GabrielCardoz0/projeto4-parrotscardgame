

const imagens = [
    "./imagens/bobrossparrot.gif",
    "./imagens/explodyparrot.gif",
    "./imagens/fiestaparrot.gif",
    "./imagens/metalparrot.gif",
    "./imagens/revertitparrot.gif",
    "./imagens/tripletsparrot.gif",
    "./imagens/unicornparrot.gif", 
];


let cartascriadas = [];

let i = 0;

let contt = 0;

let jogadas = 0;


function comparador() { 
	return Math.random() - 0.5; 
}
imagens.sort(comparador);


let quantidadecartas = prompt("Digite a quantidade de cartas desejadas (mín 4; máx 14):");

function perguntarquantidade(){
    while(quantidadecartas < 4 || quantidadecartas%2 !== 0 || quantidadecartas > 14){
        quantidadecartas = prompt("Digite a quantidade de cartas desejadas (mín 4; máx 14):");
    }
}
perguntarquantidade();




let primeirocard = '';
let segundocard = '';



function checardupla(){
    console.log('Hello');
    console.log(primeirocard);
    console.log(segundocard);

    if (primeirocard != segundocard){
        console.log("são diferentes")
    } else {
        console.log('são iguais');
    }

    // Primeira ideia de função:
    //let backprimeirocard = primeirocard.querySelector('.back');
    //let frontprimeirocard = primeirocard.querySelector('.front');

    //let backsegundocard = segundocard.querySelector('.back');
    //let frontsegundocard = segundocard.querySelector('.front');

   // if (primeirocard === segundocard){
   //     console.log('são iguais');
   // } else {
    //    backprimeirocard.classList.remove('transformback');
    //    frontprimeirocard.classList.remove('transformfront');

    //    backsegundocard.classList.remove('transformback');
    //    frontsegundocard.classList.remove('transformfront');
   // }

}


function virarcarta(carta){

    
    const backface = carta.querySelector('.back');
    const frontface = carta.querySelector('.front');

    if (primeirocard === ''){
        backface.classList.add('transformback');
        frontface.classList.add('transformfront');
        primeirocard = carta;

    } else if(segundocard ===''){
        backface.classList.add('transformback');
        frontface.classList.add('transformfront');
        segundocard = carta;
        checardupla();


       // setTimeout(checardupla, 2000);
    }
    

}













function criarcartas(){
    while(i<(quantidadecartas/2)){
        cartascriadas.push(`<li class="card" onclick="virarcarta(this)">
        <div class="front face"><img src="/imagens/front.png" alt=""></div>
        <div class="back face"><img src="${imagens[i]}" alt=""></div>
        </li> <br>`);
        cartascriadas.push(`<li class="card" onclick="virarcarta(this)">
        <div class="front face"><img src="/imagens/front.png" alt=""></div>
        <div class="back face"><img src="${imagens[i]}" alt=""></div>
        </li> <br>`);
        i++
    }
}
criarcartas();

cartascriadas.sort(comparador);
cartascriadas.sort(comparador);


function adicionarcartas(){
    while(contt<(quantidadecartas)){
        let lista = document.querySelector('.boardgame');

        lista.innerHTML = lista.innerHTML+cartascriadas[contt];
        
        contt++
    }
}
adicionarcartas();



//Quero adicionar repetidamente itens a um array
//Quero executar até ter uma quantidade de intens igual a quantidade de cartas
//cada itereção irá somar +1
