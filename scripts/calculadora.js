const trocarTema = document.getElementById('trocarTema');
const calculadora = document.getElementById('calculadora');
let escuro = true;

trocarTema.onclick = () => {
    calculadora.classList.toggle('escuro');
    trocarTema.classList.toggle('ativo');
};