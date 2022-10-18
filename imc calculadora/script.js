function calcImc(){
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const imc = peso / (altura * altura)
    if(imc < 15.99){
       let resultado = document.getElementById('resultado');
       resultado.innerHTML = `${nome.value}</br> Magreza grave </br> Imc: ${imc.toFixed()}`
       resultado.style.color = "red";

    } else if(imc >= 16 && imc <= 16.99){
        document.getElementById('resultado');
        resultado.innerHTML = `${nome.value}</br>Magreza moderada </br> Imc: ${imc.toFixed()}`;
        resultado.style.color = "orange"
    } else if (imc >= 17 && imc <= 18.49){
        document.getElementById('resultado');
        resultado.innerHTML = `${nome.value}</br>Magreza leve </br> Imc: ${imc.toFixed()}`;
        resultado.style.color = "yellow"
    } else if (imc >= 18.5 && imc <= 24.9){
        document.getElementById('resultado');
        resultado.innerHTML = `${nome.value}</br>Saudavel </br> Imc: ${imc.toFixed()}`;
        resultado.style.color = "green"
    } else if (imc >= 25 && imc <= 29.9){
        document.getElementById('resultado');
        resultado.innerHTML = `${nome.value}</br>Sobrepeso </br> Imc: ${imc.toFixed()}`
        resultado.style.color = "yellow"
    } else if (imc >= 30 && imc <= 34.9){
        document.getElementById('resultado');
        resultado.innerHTML = `${nome.value}</br>Obesidade Grau 1 </br> Imc: ${imc.toFixed()}`
        resultado.style.color = "orange"
    } else if (imc >= 35 && imc <= 39.9) {
        document.getElementById('resultado');
        resultado.innerHTML = `${nome.value}</br>Obesidade Grau 2(Severa) </br> Imc: ${imc.toFixed()}`
        resultado.style.color = "red"
    } else if (imc >= 40){
        document.getElementById('resultado');
        resultado.innerHTML = `${nome.value}</br>Obesidade Grau 3(Morbida) </br> Imc: ${imc.toFixed()}`;
        resultado.style.color = "red"
    }
}

document.getElementsByTagName('body')[0].addEventListener('keydown', pressiona_tecla);
function pressiona_tecla(event) {
    if (event.keyCode === 13){
        document.getElementById('botao').click();
    }
}