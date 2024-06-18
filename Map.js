
/*
 O Map aceita até 3 parâmetros:

const novoArray = arrayOriginal.map((valorAtual, indice, arrayOriginal) => xxx )


	1) O Map vai passar por todos os itens do array, e o primeiro parâmetro é cada item, um por vez do array que estamos mapeando. Item OBRIGATÓRIO.
	2) O indíce é a posição atual que estamos mapeando. Item OPCIONAL.
	3) Uma cópia do array original. Item OPCIONAL.

*/

const number = [1, 2, 3, 4, 5, 6]

const double = number.map((item) => {

    const newItem = item *2
    return newItem
})

console.log(double);




