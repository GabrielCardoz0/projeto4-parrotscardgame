let i = 0;
let contt = 0;
let parescertos = 0;
let jogadas = 0;
let tempo = 0;

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


let primeirocard = '';
let segundocard = '';


function comparador() { 
	return Math.random() - 0.5; 
}
imagens.sort(comparador);
imagens.sort(comparador);


let quantidadecartas = prompt("Digite a quantidade de cartas desejadas (Apenas números pares entre 4 e 14):");

function perguntarquantidade(){
    while(quantidadecartas < 4 || quantidadecartas%2 !== 0 || quantidadecartas > 14){
        quantidadecartas = prompt("Digite a quantidade de cartas desejadas (Apenas números pares entre 4 e 14):");
    }
}
perguntarquantidade();


function criarcartas(){
    while(i<(quantidadecartas/2)){
        cartascriadas.push(`<li class="card" onclick="virarcarta(this)">
        <div class="front face"><img src="./imagens/front.png" alt=""></div>
        <div class="back face"><img src="${imagens[i]}" alt=""></div>
        </li> <br>`);
        cartascriadas.push(`<li class="card" onclick="virarcarta(this)">
        <div class="front face"><img src="./imagens/front.png" alt=""></div>
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

const pararcronometo = setInterval(addTime, 1000);

function addTime(){
    tempo++;
    let cronometro = document.querySelector('.cronometro');
    cronometro.innerHTML = '';
    cronometro.innerHTML = cronometro.innerHTML+tempo;
}


function virarcarta(carta){
    const backface = carta.querySelector('.back');
    const frontface = carta.querySelector('.front');

    if (primeirocard === ''){
        backface.classList.add('transformback');
        frontface.classList.add('transformfront');
        primeirocard = carta.querySelector('.back');
        carta.setAttribute("onclick", "");
    } else if(segundocard ===''){
        backface.classList.add('transformback');
        frontface.classList.add('transformfront');
        segundocard = carta.querySelector('.back');
        setTimeout(checardupla, 1000);
        jogadas = jogadas+2;
        console.log(jogadas);
        carta.setAttribute("onclick", "");
    }
}


function checardupla(){
    //console.log('checar dupla foi ativado');
    let card1pai = primeirocard.parentNode;
    let card2pai = segundocard.parentNode;

    let frontcard1 = card1pai.querySelector('.front');
    let backcard1 = card1pai.querySelector('.back');

    let frontcard2 = card2pai.querySelector('.front');
    let backcard2 = card2pai.querySelector('.back');

    if (primeirocard.innerHTML != segundocard.innerHTML){
        //console.log("são diferentes")
        frontcard1.classList.remove('transformfront');
        backcard1.classList.remove('transformback');  
        frontcard2.classList.remove('transformfront');
        backcard2.classList.remove('transformback');
        
        card1pai.setAttribute("onclick", "virarcarta(this)");
        card2pai.setAttribute("onclick", "virarcarta(this)"); 
    } else {
       // console.log('São iguais');
        frontcard1.classList.add('acertou');
        backcard1.classList.add('acertou');  
        frontcard2.classList.add('acertou');
        backcard2.classList.add('acertou');
        parescertos++;
        setTimeout(jogofinalizou, 700); 
    }
    primeirocard = '';
    segundocard = '';
}


function jogofinalizou(){
    if(parescertos == (quantidadecartas/2) ){
        alert(`Parabés!, você ganhou a partida em ${tempo} segundos e ${jogadas} jogadas.`);
        clearInterval(pararcronometo);
    }
}

