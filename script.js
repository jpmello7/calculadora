const adiciona = (num) => {
    const valorAtual = document.getElementById('resultado').innerHTML
    const acc = document.getElementById('acumulador').innerHTML
    if (acc == '0') {
    if (valorAtual == "0" && num == 0) return 0
    if (num == '.'){
            if (valorAtual.includes('.') == true || valorAtual == '') return 0
            else document.getElementById('resultado').innerHTML = valorAtual + num
    }
    document.getElementById('resultado').innerHTML = valorAtual + num
    }
    else return limpar(),adiciona(num)
}

const limpar = () => {
    document.getElementById('resultado').innerHTML = ""
    document.getElementById('holder').innerHTML = ""
    document.getElementById('acumulador').innerHTML= 0
    document.getElementById('÷').className="botao_lateral"
    document.getElementById('×').className="botao_lateral"
    document.getElementById('-').className="botao_lateral"
    document.getElementById('+').className="botao_lateral"
}

const inverter = () => {
    const valorAtual = document.getElementById('resultado').innerHTML
    if (valorAtual == '') return 0
    else document.getElementById('resultado').innerHTML= valorAtual*-1
}

const porcentagem = () => {
    const valor = parseFloat(document.getElementById('resultado').innerHTML)
    if (document.getElementById('resultado').innerHTML=='')return 0
    const result = `${valor/100}`
    document.getElementById('resultado').innerHTML = result
    document.getElementById('acumulador').innerHTML = 0
}

const calcular = (operador) => {
    const valorAtual = document.getElementById('resultado').innerHTML
    const holder = document.getElementById('holder').innerHTML
    const acc = document.getElementById('acumulador').innerHTML
    if (valorAtual == '') return 0
    if(holder==''){
    document.getElementById('holder').innerHTML = valorAtual + operador
    document.getElementById('resultado').innerHTML = ""
    document.getElementById(operador).className="operacao"
    }
    if (valorAtual != '' && holder != '') {
        igual()
        document.getElementById('acumulador').innerHTML = 0
        calcular(operador)
    }
}

const igual = () => {
    const holder = document.getElementById('holder').innerHTML
    const display = document.getElementById('resultado').innerHTML
    const acc = document.getElementById('acumulador').innerHTML
    const operador = holder[holder.length-1]
    if (display == '') return 0

    if (operador=='÷') {
        document.getElementById('resultado').innerHTML=parseFloat(holder)/parseFloat(display)
    }
    if (operador=='×') {
        document.getElementById('resultado').innerHTML=parseFloat(holder)*parseFloat(display)
    }
    if (operador=='-') {
        document.getElementById('resultado').innerHTML=parseFloat(holder)-parseFloat(display)
    }
    if (operador=='+') {
        document.getElementById('resultado').innerHTML=parseFloat(holder)+parseFloat(display)
    }

    document.getElementById('acumulador').innerHTML=parseInt(acc)+1
    document.getElementById('holder').innerHTML=''
    document.getElementById('÷').className="botao_lateral"
    document.getElementById('×').className="botao_lateral"
    document.getElementById('-').className="botao_lateral"
    document.getElementById('+').className="botao_lateral"

}
