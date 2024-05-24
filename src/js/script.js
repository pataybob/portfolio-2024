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


document.addEventListener("DOMContentLoaded", function() {
    const textParts = [
        { text: '<div ', className: 'div-tag' },
        { text: 'class="', className: 'source-tag' },
        { text: 'wrapper', className: 'keyword' },
        { text: '">', className: 'div-tag' },
        { text: '\n\t', className: 'html-tag' },
        { text: '<div ', className: 'div-tag' },
        { text: 'class="', className: 'source-tag' },
        { text: 'container', className: 'keyword' },
        { text: '">', className: 'div-tag' },
        { text: '\n\t\t', className: 'html-tag' },
        { text: '<div ', className: 'div-tag' },
        { text: 'class="', className: 'source-tag' },
        { text: 'about__me', className: 'keyword' },
        { text: '">', className: 'div-tag' },
        { text: '\n\t\t\t', className: 'html-tag' },
        { text: '<div ', className: 'div-tag' },
        { text: 'class="', className: 'source-tag' },
        { text: 'profile__photo', className: 'keyword' },
        { text: '">', className: 'div-tag' },
        { text: '\n\t\t\t\t', className: 'html-tag' },
        { text: '<img ', className: 'div-tag' },
        { text: 'src=', className: 'source-tag' },
        { text: '"profile-photo.png"', className: 'keyword' },
        { text: ' alt="', className: 'source-tag' },
        { text: 'profile photo', className: 'keyword' },
        { text: '">', className: 'div-tag' },
        { text: '\n\t\t\t', className: 'html-tag' },
        { text: '</div>', className: 'div-tag' },
        { text: '\n\t\t\t', className: 'html-tag' },
        { text: '<div ', className: 'div-tag' },
        { text: 'class="', className: 'source-tag' },
        { text: 'profile__info', className: 'keyword' },
        { text: '">', className: 'div-tag' },
        { text: '\n\t\t\t\t', className: 'html-tag' },
        { text: '<h1>', className: 'div-tag' },
        { text: 'Привет, я ', className: 'text' },
        { text: 'Денис Вишняков', className: 'text' },
        { text: '</h1>', className: 'div-tag' },
        { text: '\n\t\t\t\t', className: 'html-tag' },
        { text: '<p>', className: 'div-tag' },
        { text: 'Я начинающий ', className: 'text' },
        { text: 'frontend-разработчик', className: 'text' },
        { text: '</p>', className: 'div-tag' },
        { text: '\n\t\t\t', className: 'html-tag' },
        { text: '</div>', className: 'div-tag' },
        { text: '\n\t\t\t', className: 'html-tag' },
        { text: '<div ', className: 'div-tag' },
        { text: 'class="', className: 'source-tag' },
        { text: 'button', className: 'keyword' },
        { text: '">', className: 'div-tag' },
        { text: 'next slide', className: 'text' },
        { text: '</div>', className: 'div-tag' },
        { text: '\n\t\t', className: 'html-tag' },
        { text: '</div>', className: 'div-tag' },
        { text: '\n\t', className: 'html-tag' },
        { text: '</div>', className: 'div-tag' },
        { text: '\n', className: 'html-tag' },
        { text: '</div>', className: 'div-tag' }
    ];
    let index = 0;

    function typeText() {
        if (index < textParts.length) {
            const part = textParts[index];
            const span = document.createElement('span');
            span.className = part.className;
            if (part.text === '\n') {
                span.innerHTML = '<br>';
            } else {
                span.textContent = part.text;
            }
            document.getElementById("typed-text").appendChild(span);
            index++;
            setTimeout(typeText, 100); // Скорость печати (в миллисекундах)
        }
    }

    // Запускаем функцию печати текста
    typeText();
});

document.addEventListener("DOMContentLoaded", function() {
    const textParts = [
        { text: '.main__code{', className: 'keyword' },
        { text: '\n\t', className: 'html-tag' },
        { text: 'background: ', className: 'source-tag' },
        { text: 'rgb(31,31,31);', className: 'text' },
        { text: '\n\t', className: 'html-tag' },
        { text: 'width: ', className: 'source-tag' },
        { text: '100%;', className: 'string' },
        { text: '\n\t', className: 'html-tag' },
        { text: 'height: ', className: 'source-tag' },
        { text: '100%;', className: 'string' },
        { text: '\n\t', className: 'html-tag' },
        { text: 'display: ', className: 'source-tag' },
        { text: 'flex;', className: 'html-tag' },
        { text: '\n\t', className: 'html-tag' },
        { text: 'flex-direction: ', className: 'source-tag' },
        { text: 'column;', className: 'html-tag' },
        { text: '\n\t', className: 'html-tag' },
        { text: '.main__code-wrap{', className: 'keyword' },
        { text: '\n\t\t', className: 'html-tag' },
        { text: 'display: ', className: 'source-tag' },
        { text: 'flex;', className: 'html-tag' },
        { text: '\n\t\t', className: 'html-tag' },
        { text: 'flex-direction: ', className: 'source-tag' },
        { text: 'column;', className: 'html-tag' },
        { text: '\n\t\t', className: 'html-tag' },
        { text: '.counter__side{', className: 'keyword' },
        { text: '\n\t\t\t', className: 'html-tag' },
        { text: 'text-alight:', className: 'source-tag' },
        { text: 'right;', className: 'html-tag' },
        { text: '\n\t\t\t', className: 'html-tag' },
        { text: 'display: ', className: 'source-tag' },
        { text: 'flex;', className: 'html-tag' },
        { text: '\n\t\t\t', className: 'html-tag' },
        { text: 'flex-direction: ', className: 'source-tag' },
        { text: 'column;', className: 'html-tag' },
        { text: '\n\t\t\t', className: 'html-tag' },
        { text: 'p{ ', className: 'keyword' },
        { text: '\n\t\t\t\t', className: 'html-tag' },
        { text: 'color: ', className: 'source-tag' },
        { text: '#918080;', className: 'text' },
        { text: '\n\t\t\t\t', className: 'html-tag' },
        { text: 'font-size: ', className: 'source-tag' },
        { text: '16px;', className: 'string' },
        { text: '\n\t\t\t', className: 'html-tag' },
        { text: '}', className: 'keyword' },
        { text: '\n\t\t', className: 'html-tag' },
        { text: '}', className: 'keyword' },
        { text: '\n\t', className: 'html-tag' },
        { text: '}', className: 'keyword' },
        { text: '\n', className: 'html-tag' },
        { text: '}', className: 'keyword' },


        // { text: 'rgb(31,31,31);', className: 'text' },
        // { text: 'rgb(31,31,31);', className: 'text' },
        // { text: 'rgb(31,31,31);', className: 'text' },

    ];
    let index = 0;

    function typeText() {
        if (index < textParts.length) {
            const part = textParts[index];
            const span = document.createElement('span');
            span.className = part.className;
            if (part.text === '\n') {
                span.innerHTML = '<br>';
            } else {
                span.textContent = part.text;
            }
            document.getElementById("typed-text-css").appendChild(span);
            index++;
            setTimeout(typeText, 130); // Скорость печати (в миллисекундах)
        }
    }

    // Запускаем функцию печати текста
    typeText();
});

// document.addEventListener("DOMContentLoaded", function() {
//     let blocks = document.querySelectorAll(".block");

//     function toggleVisibility() {
//         let screenWidth = window.innerWidth;
//         blocks.forEach(function(block) {
//             if (screenWidth <= 901) {
//                 block.classList.add("visible");
//                 block.classList.remove("hidden");
//             } else {
//                 if (isElementInViewport(block)) {
//                     block.classList.add("visible");
//                     block.classList.remove("hidden");
//                  } 
//                 // else {
//                 //     block.classList.add("hidden");
//                 //     block.classList.remove("visible");
//                 // }
//             }
//         });
//     }

//     window.addEventListener("scroll", toggleVisibility);
//     window.addEventListener("resize", toggleVisibility);
// });

// function isElementInViewport(el) {
//     let rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

document.addEventListener('DOMContentLoaded', () => {
    const codeEditorElement = document.querySelector('.code__editor');
    const aboutMeElement = document.querySelector('.about__me');
    let timeoutId;

    // Скрываем элемент about__me изначально
    aboutMeElement.classList.add('hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                codeEditorElement.classList.add('visible', 'zoom-in');
                codeEditorElement.classList.remove('hidden', 'zoom-out');

                // Удаляем предыдущий таймер, если он существует
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // Устанавливаем новый таймер на 3 секунды
                timeoutId = setTimeout(() => {
                    codeEditorElement.classList.add('zoom-out');
                    codeEditorElement.classList.remove('zoom-in');
                    
                    setTimeout(() => {
                        codeEditorElement.classList.add('hidden');
                        codeEditorElement.classList.remove('visible');
                        
                        // Показываем элемент about__me с анимацией приближения
                        aboutMeElement.classList.add('visible-ab', 'zoom-in');
                        aboutMeElement.classList.remove('hidden');
                    }, 300); // Длительность анимации zoom-out
                }, 5500);
            }
        });
    }, { threshold: 0.1 }); // Порог срабатывания 10%

    observer.observe(codeEditorElement);
});