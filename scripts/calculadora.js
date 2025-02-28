let calculado = false;
const op = "";

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
            equacao = equacao + num;
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

function calcular() {
    var resultado = document.getElementById('visor').innerHTML;
    resultado = resultado.replace("÷", "/");
    resultado = resultado.replace('×', '*');
    if (resultado) {
        resultado = eval(resultado);
        if (resultado % 1 !== 0)
            resultado = resultado.toFixed(5);
        document.getElementById('visor').innerHTML = resultado;
        calculado = true;
    }
    else
        document.getElementById('visor').innerHTML = "Erro";
}