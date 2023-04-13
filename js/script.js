
function calcular() {
    let peso = Number(frmImc.txtPeso.value.replace(",", "."))
    let altura = Number(frmImc.txtAltura.value.replace(",", "."))
    let imc = peso / (altura * altura)
    frmImc.txtImc.value = imc.toFixed(2)
    if (imc < 17) {
        document.getElementById('status').src = 'img/imc1.png'
    } else if (imc >= 17 && imc < 18.5) {
        document.getElementById('status').src = 'img/imc2.png'
    } else if (imc >= 18.5 && imc < 25){
        document.getElementById('status').src = 'img/imc3.png'
    } else if (imc >= 25 && imc < 30){
        document.getElementById('status').src = 'img/imc4.png'
    }else if (imc >= 30 && imc < 35){
        document.getElementById('status').src = 'img/imc5.png'
    }else if (imc >= 35 && imc < 40){
        document.getElementById('status').src = 'img/imc6.png'
    }else {
        document.getElementById('status').src = 'img/imc7.png'
    }
}

function limpar() {
    document.getElementById('status').src = 'img/imc.png'
}