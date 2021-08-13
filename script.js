function updateTime(){
    var display = document.querySelector('.display');

    var now = new Date();

    var time = corrigirHorario(now.getHours()) + ':' + corrigirHorario(now.getMinutes()) + ':' + corrigirHorario(now.getSeconds());

    display.textContent = time;
}

function corrigirHorario(numero){
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero;
}

updateTime();
setInterval(updateTime, 1000);

console.log(time);