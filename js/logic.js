
// Área onde sera mostrada as informações
const display = document.getElementById('display');

// Selecionando todos os botões
const buttons = document.querySelectorAll('button');


let valorActual = '';
let operador = '';
let valorAnterior = '';

// Acessando o arrays de números 
buttons.forEach(button => {

    //Acessadno a cada click feitos nos botões
    button.addEventListener('click', () => {
        const value = button.textContent;

        //Analisando os vaores inseridos
        if (value >= '0' && value <= '9' || value === '.') {
            valorActual += value;
            display.value = valorActual;
        } 
        // Apagar valores inseridos
        else if (value === 'C') {
            valorActual = '';
            valorAnterior = '';
            operador = '';
            display.value = '0';
        }
        //Condição caso pretender calucular o negativo 
        else if (value === '±') {
            valorActual = (parseFloat(valorActual) * -1).toString();
            display.value = valorActual;
        }
        // Condição caso pretender calcular percentagem 
        else if (value === '%') {
            valorActual = (parseFloat(valorActual) / 100).toString();
            display.value = apagarvalores;
        } 
        // Condição caso tivermos o sinal se = e operador
        else if (value === '=' && operador) {
            const num1 = parseFloat(valorAnterior);
            const num2 = parseFloat(valorActual);
            let result;

            switch (operador) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '×':
                    result = num1 * num2;
                    break;
                case '÷':
                    result = num1 / num2;
                    break;
            }

            display.value = result;
            valorActual = result.toString();
            valorAnterior = '';
            operador = '';
        } 
        else if (['+', '-', '×', '÷'].includes(value)) {
            valorAnterior = valorActual;
            valorActual = '';
            operador = value;
        }
    });
});