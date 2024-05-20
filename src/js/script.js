// script.js

let isScrolling;

// Функция для добавления класса 'active__scroll' к элементу с классом 'header__wrap'
function addActiveScrollClass() {
    const headerWrap = document.querySelector('.header__wrap');
    if (headerWrap) {
        headerWrap.classList.add('active__scroll');
    }
}

// Функция для удаления класса 'active__scroll' с элемента с классом 'header__wrap'
function removeActiveScrollClass() {
    const headerWrap = document.querySelector('.header__wrap');
    if (headerWrap) {
        headerWrap.classList.remove('active__scroll');
    }
}

// Добавляем событие скролла
window.addEventListener('scroll', () => {
    // Добавляем класс 'active__scroll' при начале скролла
    addActiveScrollClass();

    // Очистим предыдущий таймер, если он существует
    window.clearTimeout(isScrolling);

    // Установим новый таймер, который удалит класс 'active__scroll' через 500мс после окончания скролла
    isScrolling = setTimeout(() => {
        removeActiveScrollClass();
    }, 1000);
});