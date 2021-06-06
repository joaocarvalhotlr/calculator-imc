var nome = document.getElementById('nome')
var altura = document.getElementById('altura')
var peso = document.getElementById('peso')
var calcular = document.getElementById('calcular')
var resultado = document.getElementById('resultado')

function imc () {
    var nome = document.getElementById('nome') .value
    var altura = document.getElementById('altura') .value
    var peso = document.getElementById('peso') .value
    var resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        
        var valorIMC = (peso / (altura * altura)).toFixed(1)

        let classificacao =''

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.'
        }

        else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns !!!'
        }

        else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.'
        }
        else if (valorIMC < 35) {
            classificacao = 'com obesidade grau 1.'
        }
        else if (valorIMC < 40) {
            classificacao = 'obesidade grau 2.'
        }
        else {
            classificacao = 'com obesidade grau 3. Cuidado !'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`

    } 
    
    else {
        resultado.textContent = 'Preencha todos os campos !'
    }
}

calcular.addEventListener('click', imc)