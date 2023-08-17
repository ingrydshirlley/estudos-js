var front = ["javascript", "phyton", "ingryd"]
var back = ["java", "bk", "jojo"]


/* FUNÇÃO PARA MOSTRAR O ARRAY
function showArrays(array) {

    for (var arrays = 0; arrays < array.length; arrays++) {
        console.log(array[arrays]);
    }
}
showArrays(front) 
*/


console.log ("")
console.log ("1 --------------- ",front)
console.log ("")


//JOIN: ADICIONA UMA VIRGULA ENTRE OS ELEMENTOS
console.log ("")
console.log ("2 --------------- ",front.join(' - '))
console.log ("")


//PUSH: ADICIONA UMA ELEMENTO NO FIM DO ARRAY
console.log ("")
front.push("ELEMENTO ADICIONADO PELO PUSH")
console.log ("3 --------------- ", front)
console.log ("")


//POP: REMOVE O ULTIMO ELEMENTO DO ARRAY
console.log ("")
front.pop()
console.log ("4 --------------- ", front)
console.log ("")


//SHIFT: REMOVE O PRIMEIRO ELEMENTO DO ARRAY
console.log ("")
front.shift()
console.log ("5 --------------- ", front)
console.log ("")


//REVERSE: INVERTE A ORDEM DOS ELEMENTOS DO ARRAY
console.log ("")
front.reverse()
console.log ("6 --------------- ", front)
console.log ("")