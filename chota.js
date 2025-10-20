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


    const eventOptions = { bubbles: true, canceleble:true}
    const event = new Event('click', eventOptions)
    event.viev = window

    const mouseEvent = new MouseEvent('click',{
        ...eventOptions,
        viev: window,
    })

    document.addEventListener('click', (event)=>{
console.log(event.isTrusted)
    })


        const formEl = document.querySelector('.form')
        const inputEl = document.querySelector('.check');
            inputEl.addEventListener('click', function(e){
const target = e.target;
console.log(target.checked)
    });
            formEl.addEventListener('submit', function (e) {
        if (inputEl.checked) {
            alert("МЕГА ХАРОШ!!!")
        } else {
            alert("YOU INVALID!!!")
        }
    });



const counterDiv = document.getElementById('counter');
let count = 0;
counterDiv.addEventListener('mouseover', () => {
    count += 1;
    counterDiv.textContent = count;
})


function checkPassword() {
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message")
    const password = passwordInput.value;
    if (password === "пароль") {
        passwordInput.classList.remove("invalid");
        passwordInput.classList.add("valid");
        errorMessage.textContent = "";
    } else {
        passwordInput.classList.remove("valid");
        passwordInput.classList.add("invalid");
        errorMessage.textContent = "Пароль неверный смотри в справку";
    }
}


// 20.10.2025
navigator.geolocation.getCurrentPosition((position) =>{
    console.log(position)
    const { latitude , longitude} = position.coords
    console.log('Геолокация устройства',latitude, longitude )
})

let watchId = navigator.geolocation.watchPosition(({coords}) =>{
    console.log('Устройство обновило местоположение',coords.latitude,coords.longitude)
}
)


navigator.geolocation.clearWatch(watchId)



const handlePositionError = (error) => {
        switch (error.code) {
            case 1:
                console.log('Пользователь ограничил доступ к местоположению.')
                break
            case 2:
                console.log('Ошибка устройства определения местоположения.')
                break
            case 3:
                console.log('Достигнут тайм-аут.')
                break
            case 4:
                console.log('Извините, местоположение недоступно.', error)
                break
        }
}




// const box = document.querySelector('#box')
// console.log(box.scrollTop, box.scrollLeft);
// box.scrollTop = 500

document.addEventListener('scroll', function (e){
    console.log(document.documentElement.scrollTop);
});





// task 1


window.addEventListener('resize', function() {
  const width = window.innerWidth;  // ширина окна
  const height = window.innerHeight; // высота окна
  console.log(`Ширина: ${width}px, Высота: ${height}px`);
});


window.onbeforeunload = (evt) => {
    evt.preventDefault();
};





const selectors = {
  backButton: '.back-button',
  nextButton: '.next-button'
};



document.querySelector(selectors.backButton).onclick = () => {
    history.back();
}

document.querySelector(selectors.nextButton).onclick = () => {
    history.forward();
}
// task 2


const contentEl = document.querySelector(".content");
const btnAdd = document.querySelector(".add");
const btnDel = document.querySelector(".del");
const btnClone = document.querySelector(".clone");
const divEl = document.querySelector(".block");

btnAdd.addEventListener("click", () => {
    const newDivEl = document.createElement("div");
    newDivEl.classList.add ("block");
    newDivEl.textContent = contentEl.children.length + 1;;
    contentEl.appendChild(newDivEl);
})

btnDel.addEventListener("click", () => {
    if (contentEl.children.length > 0) {
        const lastBox = contentEl.lastChild;
        contentEl.removeChild(lastBox);
    }
});

btnClone.addEventListener("click", () => {
   const lastBox = contentEl.lastChild;
   const clone = lastBox.cloneNode (true);
   contentEl.appendChild (clone);
});


const articlesData = [
    {
        title: 'Заголовок статьи 1',
        content: 'Содержание статьи 1'
    },
    {
        title: 'Заголовок статьи 2',
        content: 'Содержание статьи 2'  
    }
]



    // Начальные статьи (JSON)
    const initialArticles = [
        { title: "Первая статья", text: "Это текст первой статьи." },
        { title: "Вторая статья", text: "Текст второй статьи здесь." }
    ];

    // Ключ для локального хранилища
    const STORAGE_KEY = 'myArticles';

    // Функция получить статьи из localStorage или initialArticles
    function getArticles() {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : initialArticles;
    }

    // Сохранить статьи в localStorage
    function saveArticles(articles) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    }

    // Отрисовка списка статей
    function renderArticles() {
        const container = document.getElementById('articlesList');
        container.innerHTML = '';

        const articles = getArticles();

        articles.forEach((article, index) => {
            const articleEl = document.createElement('div');
            articleEl.className = 'list-group-item';

            // Заголовок статьи с Bootstrap классом
            const titleEl = document.createElement('h2');
            titleEl.className = 'h5'; // h5 для аккуратного отображения (можно h2)
            titleEl.textContent = article.title;
            articleEl.appendChild(titleEl);

            // Текст статьи в <p> с классом Bootstrap
            const textEl = document.createElement('p');
            textEl.className = 'mb-2';
            textEl.textContent = article.text;
            articleEl.appendChild(textEl);

            // Контейнер для кнопок
            const btnGroup = document.createElement('div');

            // Кнопка Редактировать
            const editBtn = document.createElement('button');
            editBtn.className = 'btn btn-warning btn-sm me-2';
            editBtn.textContent = 'Редактировать';
            editBtn.onclick = () => {
                const newTitle = prompt('Введите новый заголовок', article.title);
                if (newTitle === null) return; // Отмена
                const newText = prompt('Введите новый текст', article.text);
                if (newText === null) return; // Отмена

                articles[index] = { title: newTitle.trim() || article.title, text: newText.trim() || article.text };
                saveArticles(articles);
                renderArticles();
            };
            btnGroup.appendChild(editBtn);

            // Кнопка Удалить
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger btn-sm';
            deleteBtn.textContent = 'Удалить';
            deleteBtn.onclick = () => {
                if (confirm(`Удалить статью "${article.title}"?`)) {
                    articles.splice(index, 1);
                    saveArticles(articles);
                    renderArticles();
                }
            };
            btnGroup.appendChild(deleteBtn);

            articleEl.appendChild(btnGroup);

            container.appendChild(articleEl);
        });
    }

    // Добавить новую статью
    document.getElementById('addArticleBtn').onclick = () => {
        const articles = getArticles();
        articles.push({ title: 'Новая статья', text: 'Введите содержание статьи...' });
        saveArticles(articles);
        renderArticles();
    };

    // Рендерим статьи при загрузке страницы
    renderArticles();





