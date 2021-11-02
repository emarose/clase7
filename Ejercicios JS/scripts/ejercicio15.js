let prompt3 = prompt('Ingrese el tercer numero');

let orden = [prompt1, prompt2, prompt3]

console.log(orden.sort(function(a, b){return b - a}))