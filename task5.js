class Switch {
    constructor() {
    }
    turnOn= function (name,device) {
        //     let Switch = 'on';
        console.log(`Прибор ${name} включен`)
        device.switch = 'on';
    }
    turnOff = function (name,device) {
        console.log(`Прибор ${name} выключен`)
        device.switch = 'off';
    }
}
const kettle = new Switch() ;
const lamp = new Switch();
kettle.color = 'green';
kettle.power = 1600;
lamp.color = 'yellow';
lamp.power = 8;
kettle.TemperatureSet= function () {
    temp =  prompt('Введите нужную температуру чайника в Цельсиях: ');
    alert(`Температура чайника равна ${temp} по Цельсию`);
}
lamp.LightSwitch = function (){
    command = prompt('Включить или выключить лампу?')
    if (command === 'включить' || 'включить лампу') {
        alert('Лампа включена')
    }
    else
    {
        alert('Лампа выключена')
    }
}
lamp.turnOn('лампа',lamp)
kettle.turnOn('чайник',kettle)
let SumPower= 0;
for ( let key in kettle) {
    if (kettle[key] === 'on') {
        SumPower = SumPower +  kettle.power
    }
}
for ( let key in lamp) {
    if (lamp[key] === 'on') {
        SumPower = SumPower +  lamp.power
    }
}


console.log(`Общая мощность всех включенных приборов равна ${SumPower} Вт`)