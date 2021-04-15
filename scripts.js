var valorEmDollarTexto = prompt ("Qual valor em dollar você quer converter?")
var valorEmDollarNumero = parseFloat(valorEmDollarTexto)
var valorEmReal = valorEmDollarNumero * 5.69
valorEmRealDecimal = valorEmReal.toFixed(2)
alert(valorEmRealDecimal)
// após duas barras o que é digitado não é executado e serve para inserir anotações no código
