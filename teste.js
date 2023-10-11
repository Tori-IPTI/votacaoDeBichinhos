class Animal {
    constructor(nome, votos, image) {
    this.nome = nome;
    this.votos = votos;
    this.image = image;
    }
    
// Constructor sempre vai ser a regra pra 


var contador = [];
var gatinho = 0;
let soma = 0;
var layout = document.getElementById(`layout`);
var form = document.getElementById(`form`);

form.innerHTML = (
    `
    <div class="formulario">
        <div>
            <div class="divForm">
                <label>bicho</label>
                <input class="input" id='addCatsInput'></input>
                <button type="button" class="buttonAdd" onclick="adicionarGatinho()">Adicionar gatinho</button>
            </div>
        </div>
    </div>
     `);

layout.innerHTML = (
    `
    <div class="divots"> 
        <h2 class="votos" id="totalVotes">${soma}</h2>
    </div>
    `
);

state

function adicionarGatinho() {
    let input = document.getElementById("addCatsInput");
    let nomeGatinho = input.value;

        layout.innerHTML += (
            `
                <div class="divgatinhos">
                    <div class="images">
                        <img class="imagens" src="https://loremflickr.com/320/240/pet?random=${Math.floor(Math.random() * 1000)}" alt='gato'>
                    </div>
                    <div class="acao">
                        <div>
                            <button class="buttonVote" onclick="incrementClick(${contador.length})">Adicionar voto</button>
                        </div>
                        <br>
                        <div>
                            <button class="buttonDell" onclick="removeClick(${contador.length})">Apagar gatinho</button>
                        </div>
                        <div>
                            <h2 class="nomeAnimal" id="">${nomeGatinho}</h2>
                        </div>
                        <br>
                    </div>
                    <div class="acao">
                        <div>
                            <h2 class="votos" id="contador${contador.length}">0</h2>
                        </div>
                    </div>
                </div>
                `);
        contador.push(0);
}
function incrementClick(i) {
    contador[i] = contador[i] + 1;
    soma += 1;
    updateDisplay(i, contador[i]);
    updateTotalVotes(soma);
}

function removeClick(i) {
    let div = document.getElementById(`div${i}`);
    div.remove();
}

function updateDisplay(i, val) {
    document.getElementById(`contador${i}`).innerHTML = val;
}

function updateTotalVotes(val) {
    document.getElementById('totalVotes').innerHTML = val;
}

// function adiconar (i){
//     console.log(i);
//     if(i <= 10){
//         adicionar(i++);
//     }
// }

// adiconar(0);


// let bicho = adicionar();


// if(bicho instanceof Cachorro) bicho
}