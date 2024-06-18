
/*
 O Reduce aceita até 4 parâmetros:

const novoArray = arrayOriginal.reduce(
  (acumulador, valorAtual, índice, arrayOriginal) => {
			return xxxxx
}, valorInicial);


	1) O acumulador, na primeira iteração terá o valor inicial que daremos a ele.            
       Já nas demais iterações, ele terá o valor que iremos acumular nele. Item OBRIGATÓRIO.
	2) O valor do atual elemento sendo iterado. Item OBRIGATÓRIO.
	3) O índice do elemento atual. Item OPCIONAL.
	4) O array original. Item OPCIONAL.


*/

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acumulador, atual) => {
		return acumulador = acumulador + numero;
}, 0) // repare nesse 0. Ele é o valor inicial que o acumulador receberá