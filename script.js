function maquina(){
    var valor = parseFloat(prompt("Informe o valor da compra: ", ""))
    if(valor){
    var pagamento = parseFloat(prompt("Informe o valor em reais que você pagará: ", ""))
    if(pagamento){
        if(pagamento>valor){
            var troco = parseFloat(pagamento-valor)
            var nota50=0, nota20=0, nota10=0, nota5=0, nota2=0, nota1=0
            var trocofinal= parseFloat(troco)
            for(let i=0; i<100; i++){
                if(troco<50){
                    i=100
                }else{
                    troco=troco-50
                    nota50++
                }
            }
            for(let j=0; j<100; j++){
                if(troco<20){
                    j=100
                }else{
                    troco=troco-20
                    nota20++
                }
            }
            for(let h=0; h<100; h++){
                if(troco<10){
                    h=100
                }else{
                    troco=troco-10
                    nota10++
                }
            }
            for(let k=0; k<100; k++){
                if(troco<5){
                    k=100
                }else{
                    troco=troco-5
                    nota5++
                }
            } 
            for(let l=0; l<100; l++){
                if(troco<2){
                    l=100
                }else{
                    troco=troco-2
                    nota2++
                }
            }
            for(let m=0; m<100; m++){
                if(troco==0){
                    m=100
                }else{
                    troco=troco-1
                    nota1++
                }
            }
            alert("Valor pago: R$ "+pagamento+"\nValor da compra: R$ "+valor+"\nTroco: R$ "+trocofinal+"\nNotas de R$ 50,00: "+nota50+"\nNotas de R$ 20,00: "+nota20+"\nNotas de R$ 10,00: "+nota10+"\nNotas de R$ 5,00: "+nota5+"\nNotas de R$ 2,00: "+nota2+"\nMoedas de R$ 1,00: "+nota1)
        }else if(pagamento==valor){
         alert("Compra efetuada com sucesso!")   
            }else{
            alert("A quantia paga é insuficiente para realizar a compra!")
        }
            }else{
        alert("É necessário informar um valor para efetuar o pagamento.\nCompra cancelada!")
        }
            }else{
        alert("Até outro dia!")
        }    
}
function imc(){
    var peso = parseFloat(prompt("Informe o seu peso", ""))
    if(peso){
        var altura = parseFloat(prompt("Informe a sua altura: ", ""))
        if(altura){
            var valorfinal = parseFloat(peso/Math.pow(altura,2))
            if(valorfinal<20){
                alert("De acordo com a tabela IMC, sua situação é: Abaixo do peso")
            }else if(valorfinal>=20 && valorfinal<25){
                alert("De acordo com a tabela IMC, sua situação é: Normal")
            }else if(valorfinal>=25 && valorfinal<30){
                alert("De acordo com a tabela IMC, sua situação é: Sobrepeso")
            }else if(valorfinal>=30 && valorfinal<35){
                alert("De acordo com a tabela IMC, sua situação é: Obesidade grau I")
            }else if(valorfinal>=35 && valorfinal<40){
                alert("De acordo com a tabela IMC, sua situação é: Obesidade grau II")
            }else{
                alert("De acordo com a tabela IMC, sua situação é: Obesidade grau III")
            }
        }else{
        alert("Até outro dia!")
        }
        }else{
        alert("Até outro dia!")
        }
}