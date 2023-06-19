const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map( notas => nota == 10 ? notas : ++nota)

console.log(notasAtualizadas)