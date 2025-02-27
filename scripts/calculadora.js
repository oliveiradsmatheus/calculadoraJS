let calculado = false;
const op = "";

function inserir(num) {
    var numero = document.getElementById('visor').innerHTML;

    if (num >= '0' && num <= '9') {
        if (calculado) {
            document.getElementById('visor').innerHTML = num;
            calculado = false;
        }
        else
            if (numero === '0')
                document.getElementById('visor').innerHTML = num;
            else
                document.getElementById('visor').innerHTML = numero + num;
    } else {
        if (calculado) {
            document.getElementById('visor').innerHTML = numero + num;
            calculado = false;
        } else {
            if (numero[numero.length - 1] >= 0 && numero[numero.length - 1] <= 9)
                document.getElementById('visor').innerHTML = numero + num;
            else {
                numero = numero.slice(0, numero.length - 1);
                document.getElementById('visor').innerHTML = numero + num;
            }
        }
    }
}

function apagar() {
    numero = document.getElementById('visor').innerHTML;
    if (calculado)
        numero = '0';
    else {
        if (numero[numero.length - 2] === '.')
            numero = numero.slice(0, numero.length - 2);
        else
            numero = numero.slice(0, numero.length - 1);
        if (numero.length === 0)
            numero = '0';
    }
    document.getElementById('visor').innerHTML = numero;
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
        document.getElementById('visor').innerHTML = eval(resultado);
        calculado = true;
    }
    else
        document.getElementById('visor').innerHTML = "Erro";
}