function trocarTema() {
    var body = document.querySelector('body');
    var root = document.querySelector(':root');
    var troca = document.getElementById('trocarTema');

    troca.classList.toggle('ativo');
    if (body.dataset.theme === 'escuro') {
        root.style.setProperty('--fundo', '#d7d7d7');
        root.style.setProperty('--fonte', '#282A36');
        root.style.setProperty('--botao', '#F8F8F2');
        root.style.setProperty('--visor', 'rgba(248, 248, 242, 0.65)');
        root.style.setProperty('--calculadora', 'rgba(200, 200, 200, 0.65)');
        root.style.setProperty('--sombra', '#44475A')
        root.style.setProperty('--operador', '#F1FA8C');
        root.style.setProperty('--digito', '#282A36');
        body.dataset.theme = 'claro';
    } else {
        root.style.setProperty('--fundo', '#353740');
        root.style.setProperty('--fonte', '#FFB86C');
        root.style.setProperty('--botao', '#282A36');
        root.style.setProperty('--visor', 'rgba(40, 42, 54, 0.65)');
        root.style.setProperty('--calculadora', 'rgba(67, 69, 82, 0.65)');
        root.style.setProperty('--sombra', '#FFB86C')
        root.style.setProperty('--operador', '#BD93F9');
        root.style.setProperty('--digito', '#F8F8F2');
        body.dataset.theme = 'escuro';
    }
}