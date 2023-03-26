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
function funcao(){
    var num = parseFloat(prompt("Informe um número: ", ""))
    if(!Number.isNaN(num)){
    if(num<-2){
        var numfinal = parseFloat(2*num+2)
        alert("O Valor da função após receber X="+num+" é f("+num+")="+numfinal)
    }else if(-2<=num<3){
        alert("O Valor da função após receber X="+num+" é f("+num+")=3")
    }else if(3<=num){
        var numfinal = parseFloat(-1*num)
        alert("O Valor da função após receber X="+num+" é f("+num+")="+numfinal)
    }
        }else {
        alert("Até outro dia!")
    }
}
function produtos(){
    var id = parseInt(prompt("Informe o ID do produto: ", ""))
    switch(id){
        case 1:
            alert("ID - 1\nProduto - Sapato\nPreço - R$ 99,99")
            break;
        case 2:
            alert("ID - 2\nProduto - Bolsa\nPreço - R$ 103,89")
            break;
        case 3:
            alert("ID - 3\nProduto - Camisa\nPreço - R$ 49,98")
            break;
        case 4:
            alert("ID - 4\nProduto - Calça\nPreço - R$ 89,72")
            break;
        case 5:
            alert("ID - 5\nProduto - Blusa\nPreço - R$ 97,35")
            break;
        default:
            alert("Informe um ID válido")
            break;
        }
}
function salario(){
    var codtrab = parseInt(prompt("Informe o Código do(a) Colaborador(a): ", ""))
    var horas = parseInt(prompt("Informe as horas trabalhadas por ele(a): ", ""))
    switch(codtrab){
        case 1:
           var salariobruto = parseFloat(horas*45.78)
           alert("O Salário bruto a ser pago para Ana é: "+salariobruto)
            break;
        case 2:
            var salariobruto = parseFloat(horas*60.00)
            alert("O Salário bruto a ser pago para Bruna é: "+salariobruto)
            break;
        case 3:
            var salariobruto = parseFloat(horas*38.99)
            alert("O Salário bruto a ser pago para Carlos é: "+salariobruto)
            break;
        case 4:
            var salariobruto = parseFloat(horas*45.78)
            alert("O Salário bruto a ser pago para Diogo é: "+salariobruto)
            break;
        case 5:
            var salariobruto = parseFloat(horas*45.78)
            alert("O Salário bruto a ser pago para Ester é: "+salariobruto)
            break;
        default:
            alert("Informe um Código de Colaborador(a) válido")
            break;
    }
}