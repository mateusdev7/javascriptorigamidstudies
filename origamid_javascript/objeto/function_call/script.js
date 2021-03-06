function somar(n1, n2) {
    return n1 + n2;
}

// Propriedades da Function
console.log(somar(10,10)) // Execução da função
console.log(somar.length) // Total de argumentos da função
console.log(somar.name) // Retorna o nome da função

// Métodos da Function - Function.prototype

// ---------- Function.call(this, arg1, arg2, ...) ---------- //
function darOi(nome, idade) {
    console.log('Oi para você ' + nome + " " + idade);
}
// darOi(); 1º Forma de executar a função
darOi.call(null, 'Mateus', 21); // 2º Forma de executar a função

// Criando o objeto dentro do call
function descricaoCarro(velocidade) {
    console.log(this.marca + " " + this.ano + " " + velocidade + "Km/h");
}
descricaoCarro.call({marca: 'Honda', ano: 2021}, 100); // O primeiro argumento é do THIS e o segundo é do parâmetro

// Passando o objeto direto
const carro = {
    marca: 'Mercedes',
    ano: 2022,
    cor: 'Preto',
};
function descricaoNovoCarro() {
    console.log(`${this.marca} ${this.ano} ${this.cor}`);
}
descricaoNovoCarro.call(carro);

const pessoa = {
    nome: 'Mateus',
    nascimento: 2001,
    idade: 21,
    sexo: 'Masculino',
};
function mostrarInformacoes() {
    console.log(`${this.nome} ${this.nascimento} ${this.idade} ${this.sexo}`)
}
mostrarInformacoes.call(pessoa);

const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ['Banana', 'Uva', 'Pêra'];
carros.forEach.call(frutas, (item) => {
    console.log(item)
})

// Exemplo real usando o CALL
function Dom(seletor) {
    this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe) {
    console.log(this)
    this.element.classList.add(classe)
}

const li = {
    element: document.querySelector('li'),
}

Dom.prototype.ativo.call(li, 'teste')


const novasFrutas = ['Uva', 'Pêra', 'Maçã'];
novasFrutas.pop();

const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    length: 3,
};

const novoLi = document.querySelectorAll('li');
const filtroLi = Array.prototype.filter.call(novoLi, (item) => {
    return item.classList.contains('ativo');
})
console.log(filtroLi)