const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

//              função callback
const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5)

console.log(`Reprovados: ${reprovados}`)