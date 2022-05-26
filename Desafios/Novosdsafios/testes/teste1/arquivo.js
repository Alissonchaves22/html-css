function botao(x) {
    alert("Você clicou no botão " + x)
}

function antsuc() {
    var num = prompt("Digite um número: ")
    num = parseInt(num)
    
    alert(`Seu sucessor é ${num + 1} e seu antecessor é o ${num - 1}`)
    
}

function converta() {
    var num = prompt("Digite uma distância em metros (m)")
    numconv = parseFloat(num)
    document.getElementById("textoconv").innerHTML = `A distância de ${numconv} metros, corresponde a...`
    document.getElementById("conv").innerHTML = `${numconv/1000} quilômetros (KM) <br> ${numconv/100} hectômetros (HM) <br> ${numconv/10} decâmetros (dam) <br>  ${numconv * 10} Decímetros (dm) <br> ${numconv * 100} centímetros (cm) <br> ${numconv * 1000} milimitros(mm)`

}

function reajuste() {
    var nome, salario, porce, aum, tot;
    nome = prompt("Qual é o seu nome? ")
    salario = prompt(`Qual é o salário de ${nome}?`)
    porce = prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
    aum = parseFloat(salario * (porce/100))
    tot = parseFloat(salario + aum)
    document.getElementById("reaj").innerHTML = `<h1> Pedro paulo recebeu um aumento salarial </h1><p>O salário atual era R$ ${salario}.<br>Com um aumento de ${porce}%, o salário vai aumentar R$ ${aum.toFixed(2)} no próximo mês.<br>E a partir daí, Pedro Paulo vai passar a ganhar R$ ${tot.toFixed(2)}.</p>`
    
}

function situacao() {
    var nome, nota1, nota2, media, sit;
    nome = prompt("Qual é o seu nome?")
    nota1 = parseFloat(prompt(`Primeira nota de ${nome}: `))
    nota2 = parseFloat(prompt(`Segunda nota de ${nome}: `))
    media = (nota1 + nota2) / 2
    
    if (media >= 6) {
        sit = "APROVADO"
    }
    else if (media >= 3)
    {
        sit = "em RECUPERAÇÃO"
    }
    else{
        sit = "REPROVADO"
    }
    document.getElementById("sit").innerHTML = `Com as notas ${nota1} e ${nota2}, a média é ${media}, você está ${sit}`
}