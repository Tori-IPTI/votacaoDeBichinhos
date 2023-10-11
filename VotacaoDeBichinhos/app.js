class Animal {
    constructor() {
      this.contador = [];
      this.soma = 0;
      this.layout = document.getElementById(`layout`);
      this.form = document.getElementById(`form`);
    }
    cadastrarAnimal(nome) {
      const divIndex = this.contador.length;
      this.layout.innerHTML += `
        <div class="divgatinhos" id="animal${divIndex}">
          <div class="images">
            <img class="imagens" src="https://loremflickr.com/320/240/pet?random=${Math.floor(
              Math.random() * 1000
            )}" alt='gato'>
          </div>
          <div class="acao">
            <div>
              <button class="buttonVote" onclick="animal.incrementClick(${divIndex})">Adicionar voto</button>
            </div>
            <br>
            <div>
              <button class="buttonDell" onclick="animal.removeAnimal(${divIndex})">Apagar gatinho</button>
            </div>
            <div>
              <h2 class="nomeAnimal">${nome}</h2>
            </div>
            <br>
          </div>
          <div class="acao">
            <div>
              <h2 class="votos" id="contador${divIndex}">0</h2>
            </div>
          </div>
        </div>
      `;
      this.contador.push(0);
    }
  
    incrementClick(index) {
      this.contador[index]++;
      this.soma++;
      this.updateDisplay(index, this.contador[index]);
      this.updateTotalVotes();
    }
  
    removeAnimal(index) {
      const animalDiv = document.getElementById(`animal${index}`);
      animalDiv.remove();
      this.contador.splice(index, 1);
      this.updateTotalVotes();
    }
  
    updateDisplay(index, value) {
      document.getElementById(`contador${index}`).textContent = value;
    }
  
    updateTotalVotes() {
      document.getElementById('totalVotes').textContent = this.soma;
    }
  
    init() {
      this.form.innerHTML = `
        <div class="formulario">
          <div>
            <div class="divForm">
              <label>bicho</label>
              <input class="input" id='addCatsInput'></input>
              <button type="button" class="buttonAdd" onclick="animal.cadastrarAnimal(document.getElementById('addCatsInput').value)">Adicionar gatinho</button>
            </div>
          </div>
        </div>
      `;
  
      this.layout.innerHTML = `
        <div class="divots"> 
          <h2 class="votos" id="totalVotes">${this.soma}</h2>
        </div>
      `;
    }
  }
  
  const animal = new Animal();
  animal.init();
  