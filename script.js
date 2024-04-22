function calcular() {
    let resultado;
    console.log("queijo")
    let primeiroNumero = parseFloat(document.getElementById("fnumber").value);
    let segundoNumero = parseFloat(document.getElementById("snumber").value);
    const select = document.querySelector('select').value;
    console.log(calcular);
    switch (select) {
        case 'adicao':
            resultado = primeiroNumero + segundoNumero;
            break;
        case 'subtracao':
            resultado = primeiroNumero - segundoNumero;
            break;
        case 'multiplicacao':
            resultado = primeiroNumero * segundoNumero;
            break;
        case 'divisao':
            resultado = primeiroNumero / segundoNumero;
            break;
    }
    document.getElementById("resultado").innerText = resultado
}