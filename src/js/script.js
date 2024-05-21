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

// document.addEventListener("DOMContentLoaded", function() {
//     const text = `              <div class="wrapper">
//                      <div class="container">
//                          <div class="about__me">
//                              <div class="profile__photo">
//                                  <img src="profile-photo.png" alt="profile photo">
//                              </div>
//                              <div class="profile__info">
//                                  <h1><span class="text">Привет, я </span><span class="keyword">Денис Вишняков</span></h1>
//                                  <p><span class="text">Я начинающий </span><span class="keyword">frontend-разработчик</span></p>
//                              </div>
//                              <div class="button"><span class="text">next slide</span></div>
//                          </div>
//                        </div>
//                      </div>`;
//     let index = 0;

//     function typeText() {
//         if (index < text.length) {
//             document.getElementById("typed-text").innerHTML += text.charAt(index);
//             index++;
//             setTimeout(typeText, 10); // Скорость печати (в миллисекундах)
//         } else {
//             // Печать завершена
//         }
//     }

//     // Запускаем функцию печати текста
//     typeText();
// });




// document.addEventListener("DOMContentLoaded", function() {
//     const text = `              <div class="wrapper">
//                     <div class="container">
//                         <div class="about__me">
//                             <div class="profile__photo">
//                                 <img src="profile-photo.png" alt="profile photo">
//                             </div>
//                             <div class="profile__info">
//                                 <h1>Привет, я Денис Вишняков</h1>
//                                 <p>Я начинающий frontend-разработчик</p>
//                             </div>
//                             <div class="button">next slide</div>
//                         </div>
//                       </div>
//                     </div>`;
//     let index = 0;

//     function typeText() {
//         if (index < text.length) {
//             document.getElementById("typed-text").textContent += text.charAt(index);
//             index++;
//             setTimeout(typeText, 10); // Скорость печати (в миллисекундах)
//         } else {
//             // Печать завершена
//         }
//     }

//     // Запускаем функцию печати текста
//     typeText();
// });