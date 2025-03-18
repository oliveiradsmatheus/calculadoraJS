let calculado = false;

function inserir(num) {
    var equacao = document.getElementById('visor').innerHTML;

    if (num >= '0' && num <= '9')
        if (calculado) {
            equacao = num;
            calculado = false;
        }
        else
            if (equacao === '0')
                equacao = num;
            else
                equacao = equacao + num;
    else
        if (calculado) {
            if (equacao === '0' && num === '-') {
                equacao = num;
                calculado = false;
            }
            else {
                equacao = equacao + num;
                calculado = false;
            }
        } else
            if (equacao === '0' && num === '-') {
                equacao = num;
                calculado = false;
            } else
                if (equacao[equacao.length - 1] >= 0 && equacao[equacao.length - 1] <= 9)
                    equacao = equacao + num;
                else {
                    equacao = equacao.slice(0, equacao.length - 1);
                    equacao = equacao + num;
                }
    document.getElementById('visor').innerHTML = equacao;
}

function apagar() {
    equacao = document.getElementById('visor').innerHTML;
    if (calculado)
        equacao = '0';
    else {
        if (equacao[equacao.length - 2] === '.')
            equacao = equacao.slice(0, equacao.length - 2);
        else
            equacao = equacao.slice(0, equacao.length - 1);
        if (equacao.length === 0)
            equacao = '0';
    }
    document.getElementById('visor').innerHTML = equacao;
}

function limpar() {
    document.getElementById('visor').innerHTML = "0";
}

function operacao(a, b, op) {
    return op(a, b);
}

function soma(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtracao(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function divisao(a, b) {
    return parseFloat(a) / parseFloat(b);
}

function multiplicacao(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function calcular() {
    var resultado = document.getElementById('visor').innerHTML;
    var i, a, b, op;
    let func;

    resultado = resultado.replace("÷", "/");
    resultado = resultado.replace('×', '*');

    i = 0;
    if (resultado[0] === "-")
        i = 1;
    while (i < resultado.length && ((resultado[i] >= 0 && resultado[i] <= 9) || resultado[i] === '.'))
        i++;

    op = resultado[i];
    a = resultado.substring(0, i);
    b = resultado.substring(i + 1, resultado.lenght);

    switch (op) {
        case '+':
            func = soma;
            break;
        case '-':
            func = subtracao;
            break;
        case '*':
            func = multiplicacao;
            break;
        case '/':
            func = divisao;
    }
    resultado = operacao(a, b, func);
    if (resultado % 1 !== 0)
        resultado = resultado.toFixed(5);
    document.getElementById('visor').innerHTML = resultado;
    calculado = true;
}