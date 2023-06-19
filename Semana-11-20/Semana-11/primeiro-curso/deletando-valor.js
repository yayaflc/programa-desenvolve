const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

// deletando 'aliado'
delete objPersonagem.aliado
console.log(objPersonagem.aliado) //undefined

// deletando por notação de colchetes
delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

// ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto
const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true