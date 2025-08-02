const copyButton = document.getElementById("copyButton");
const tokenInput = document.getElementById("tokenInput");

document.addEventListener("DOMContentLoaded", function () {
        copyButton.addEventListener("click", function () {
        tokenInput.select();
        document.execCommand("copy");
    });
});

const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menuClose');
const overlay = document.getElementById('overlay');

// Открытие меню по клику на кнопку
menuButton.addEventListener('click', function () {
    menu.classList.add('active');
    overlay.classList.add('active');
});

// Закрытие меню при клике на пункт меню
const menuLinks = document.querySelectorAll('.menu li a');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// Закрытие меню при клике вне его (по области документа)
document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('active'); 
        overlay.classList.remove('active');
    }
});

//Закрытие меню при нажатии на кнопку закрытия меню
menuClose.addEventListener('click', function () {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

const termsModal = document.getElementById('termsModal');
const termsLinks = document.querySelectorAll('a[href="#terms"]'); // Выбираем все ссылки Terms
const closeButton = document.getElementById('closeButton');

// Добавляем обработчик события для каждой ссылки Terms
termsLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Отменяем переход по ссылке
        termsModal.classList.add('active');
    });
});

// Закрыть вкладку по клику на крестик
closeButton.addEventListener('click', function () {
    termsModal.classList.remove('active');
});

// Закрыть вкладку при клике вне контента
termsModal.addEventListener('click', function (event) {
    if (event.target === termsModal) {
        termsModal.classList.remove('active');
    }
});