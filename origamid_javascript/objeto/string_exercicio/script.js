// Utilizando o forEach no array abaixo, some os valores de Taxa e os valores de Recebimento

const transacoes = [{
        descricao: 'Taxa do Pão ',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado ',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente ',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco ',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente ',
        valor: 'R$ 49',
    },
];

let totalTaxas = 0;
let totalRecebimento = 0;
transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', ' ');
    if(item.descricao.slice(0, 4) === 'Taxa') {
        totalTaxas += numeroLimpo;
    }else {
        totalRecebimento += numeroLimpo
    }
})
console.log("Total de taxas: R$ " + totalTaxas)
console.log("Total de recebimentos: R$ " + totalRecebimento)

// Retorne um array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportesNovo = transportes.replace(/[;]+/g, ', ');
const transportesArray = transportesNovo.split(', ')
console.log(transportesArray)

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
             </ul>`

html = html.replace(/[span]+/g, 'a')
console.log(html)

//Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.at(-1))

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '    TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalDeTaxas = 0;
transacoes2.forEach((item) => {
    item = item.trim().toLowerCase().slice(0,4);
    if(item === 'taxa') {
        totalDeTaxas++;
    }
})
console.log("Total de taxas: " + totalDeTaxas)