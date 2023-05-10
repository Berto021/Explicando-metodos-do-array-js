const pessoas = ['Junior','Matheus','Carlos','Pietro','Maria','Jéssica','Rafael','Joyce','Humberto','Romulo']

const numeros = [2,7,4,10,23,45,734,12,86,34,22,194,166,98,19]

/*for(let i = 0; i in pessoas; i++){
    console.log(pessoas[i])     //esse código aqui é um for que vai percorrer todo o array, é maneiro utilizar para ver como ele vai estar naquele momento, ou dá o     famoso console.log
}*/

pessoas.push('Bauerman Preso') //com o push a gente coloca algo no fim do array
//resultado : ['Junior','Matheus','Carlos','Pietro','Maria','Jéssica','Rafael','Joyce','Humberto','Romulo','Bauerman Preso']

pessoas.unshift('Matheuszin Rápidin')// o unshif coloca algo no início
//resultado : ['Matheuszin Rápidin','Junior','Matheus','Carlos','Pietro','Maria','Jéssica','Rafael','Joyce','Humberto','Romulo','Bauerman Preso']

pessoas.pop() // Pop retira o ultimo index do array
//resultado : ['Matheuszin Rápidin','Junior','Matheus','Carlos','Pietro','Maria','Jéssica','Rafael','Joyce','Humberto','Romulo']

pessoas.shift() // shift retira do início
// resultado: ['Junior','Matheus','Carlos','Pietro','Maria','Jéssica','Rafael','Joyce','Humberto','Romulo']



//Agora vamos utilizar o filter, map e join

//filter vai filtrar o array de acordo com o que passarmos 

const checaPar = valor =>{
    if(valor % 2 === 0) return valor // aqui a gente fez uma function que checa se o número é par
}
const numerosPares = numeros.filter(checaPar) // isso aqui é a mesma coisa que [2,7,4,10,23,45,734,12,86,34,22,194,166,98,19]. filtre esse array com base nisso(checar se é par)


//No map ele vai percorrer o array todinho, index por index aplicando a função que você colocar, nesse caso coloquei uma função que soma 1 ao valor do index
const numerosMais1 = numeros.map(function(valor){
    valor++
    return valor
})
//console.log(numerosMais1)//[ 3,  8,  5, 11, 24,  46, 735, 13, 87, 35, 23, 195, 167, 99, 20] array pós map
//console.log(numeros)//[2,  7,  4, 10, 23,  45, 734, 12, 86, 34, 22, 194, 166, 98, 19] array original


const joinUtilizandoPessoas = pessoas.join('-') // o join transforma o array em string e une todos os index por meio do parâmetro que colocarmos
const joinUtilizandoNumeros = numeros.join(',')
//console.log(joinUtilizandoPessoas) //Resultado: Junior-Matheus-Carlos-Pietro-Maria-Jéssica-Rafael-Joyce-Humberto-Romulo
//console.log(joinUtilizandoNumeros) //Resultado: 2,7,4,10,23,45,734,12,86,34,22,194,166,98,19



///Agora vamos ver o concat, slice, flat e for each
const pessoasNovas = ['Cauã', 'Ian', 'JH', 'Ruanito', 'Carlitos']
const concatenado = pessoas.concat(pessoasNovas) // aqui a gente colocou todo esse novo array no fim do ultimo
//console.log(concatenado) //resultado ['Junior',  'Matheus', 'Carlos', 'Pietro',  'Maria', 'Jéssica', 'Rafael','Joyce','Humberto', 'Romulo','Cauã','Ian','JH',       'Ruanito', 'Carlitos']

const cortandoPrimeiroEUltimo = numeros.slice(1,-1) // aqui eu estou cortando a primeira posição index 0 e cortando o ultimo também -1 que é o primeiro de trás pra frente
// é basicamente o priumeiro parâmetro é de onde começa, se colocar 0 vai começar do index zero e não cortar nada no início, e no segundo a mesma coisa, se deixar vazio ele não vai cortar nada, só percorrer o array todo normalmente
//resultado [7,  4, 10, 23,  45, 734, 12, 86, 34, 22, 194, 166, 98]



//o flat ele meio que cria um novo array com todos elementos sub-arrays concatenados nele 
const novoArray = [1,2,3,[4,5,6],[7,8,9,10]]
const flatArray = novoArray.flat() //resultado [1, 2, 3, 4,  5,6, 7, 8, 9, 10]

