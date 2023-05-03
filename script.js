const espacoResultado = document.getElementById('resultado');
let teclasClicadas = [];
        
function limpar() {
    teclasClicadas = [];
    return espacoResultado.innerHTML='';
}
        
function adicionarTeclaAoArray(tecla) {
    teclasClicadas.push(tecla);
    espacoResultado.innerHTML=teclasClicadas.join(' ')
}

function calcularResultado() {
    const expressao = teclasClicadas.join('');
    const resultado = eval(expressao);
    espacoResultado.innerHTML=resultado;
}