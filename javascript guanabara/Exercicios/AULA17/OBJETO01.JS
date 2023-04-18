let amigo = {nome: 'José',
Sexo: 'M',
Peso: 85.}
engordar(p) {
    console.log('Engordou')
    this.peso += p
}
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)