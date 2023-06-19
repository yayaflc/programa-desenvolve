const cliente = {
    nome: "André",
    idade: 36,
    cpf: "324266343243",
    email: "andre@email.com"
}

                 // 0  // 1   // 2    // 3
const chaves =["nome","idade","cpf","email"]

// acessar por notação de colchetes 
// console.log(cliente[chaves[0]])
// console.log(cliente["nome"])

// acessar por array callback com forEach
chaves.forEach(info => console.log(cliente [info]))

