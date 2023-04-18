let num = [5, 8, 2, 9, 3, 6 ]
num[6] = 4
num.push(7)
num.length
num.sort()
console.log(`Nosso vetor é o ${num}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}