const lvlupAge = () =>{
    let age = Number(prompt("Сколько вам лет??"));
    alert("Через 5 лет вам будет " + (age + 5))
} 

const length = 10;
const min = -100;
const max = 100;
const numbers = []; // создаём массив
for (let i = 0; i < 15; i++) { // перебираем элементы
    numbers.push(Math.floor(Math.random()*(max-min)+1)); 
  }


const moth = ()=>{
   let day = Number(prompt("Введите число от 1 до 7:"));
        let dayName;

        switch (day) {
            case 1:
                dayName = "Понедельник";
                break;
            case 2:
                dayName = "Вторник";
                break;
            case 3:
                dayName = "Среда";
                break;
            case 4:
                dayName = "Четверг";
                break;
            case 5:
                dayName = "Пятница";
                break;
            case 6:
                dayName = "Суббота";
                break;
            case 7:
                dayName = "Воскресенье";
                break;
            default:
                dayName = "YOU INVALID!!";
        }
        alert(dayName);
    }




const sum = () => {
    let number1 = Number(prompt('Введите число 1'));
    let number2 = Number(prompt('Введите число 2'));
    alert(number1 + number2);
}

const del = () => {
    let number1 = Number(prompt('Введите число 1'));
    let number2 = Number(prompt('Введите число 2'));
    if (number2 !== 0) {
        alert(number1 / number2);
    } else {
        alert('Деление на ноль невозможно');
    }
}

const minus = () => {
    let number1 = Number(prompt('Введите число 1'));
    let number2 = Number(prompt('Введите число 2'));
    alert(number1 - number2);
}

const kvadratick = () => {
    let number1 = Number(prompt('Введите число 1'));
    let number2 = Number(prompt('Введите число 2'));
    alert(number1 * number2);
}




const checkMax = () => {
        let number1 = Number(prompt('Введите число 1'));
        let number2 = Number(prompt('Введите число 2'));
        let number3 = Number(prompt('Введите число 3'));
        
        alert(Math.max(number1, number2, number3));
    }



    // Получаем ссылку на селект-тему
const themeSelect = document.getElementById("theme-select");

// Функция изменения темы при выборе
themeSelect.addEventListener("change", () => {
    const selectedTheme = themeSelect.value;
    const bodyEl = document.querySelector("body");

    // Удаляем предыдущие классы тем
    bodyEl.className = "";

    // Устанавливаем новую тему согласно выбору
    switch(selectedTheme) {
        case 'light':
            bodyEl.classList.add('light-theme');
            break;
        case 'dark':
            bodyEl.classList.add('dark-theme');
            break;
        case 'green':
            bodyEl.classList.add('green-theme');
            break;
        case 'witeblue':
            bodyEl.classList.add('witeblue-theme');
            break;
    }
});



document.addEventListener('DOMContentLoaded', ()=>{
    console.log('Все теги загрузились');
});

window.addEventListener('load', ()=>{
    console.log('Вся страница загрузилась');
});
за что отвечает этот блок кода?
