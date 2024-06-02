let isScrolling;

function addActiveScrollClass() {
    const headerWrap = document.querySelector('.header__wrap');
    if (headerWrap) {
        headerWrap.classList.add('active__scroll');
    }
}
function removeActiveScrollClass() {
    const headerWrap = document.querySelector('.header__wrap');
    if (headerWrap) {
        headerWrap.classList.remove('active__scroll');
    }
}
window.addEventListener('scroll', () => {
    addActiveScrollClass();

    window.clearTimeout(isScrolling);
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
            setTimeout(typeText, 100);
        }
    }

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
            setTimeout(typeText, 130);
        }
    }

    typeText();
});

document.addEventListener('DOMContentLoaded', () => {
    const codeEditorElement = document.querySelector('.code__editor');
    const aboutMeElement = document.querySelector('.about__me');
    let timeoutId;

    aboutMeElement.classList.add('hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                codeEditorElement.classList.add('visible', 'zoom-in');
                codeEditorElement.classList.remove('hidden', 'zoom-out');
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                timeoutId = setTimeout(() => {
                    codeEditorElement.classList.add('zoom-out');
                    codeEditorElement.classList.remove('zoom-in');
                    
                    setTimeout(() => {
                        codeEditorElement.classList.add('hidden');
                        codeEditorElement.classList.remove('visible');
                        
                        aboutMeElement.classList.add('visible-ab', 'zoom-in');
                        aboutMeElement.classList.remove('hidden');
                    }, 300);
                }, 5500);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(codeEditorElement);
});




window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.block');
    const menuContent = document.getElementById('menu-content');
    const navItems = document.querySelectorAll('.header__item');
    let currentSection = 'HOME';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('data-title');
        }
    });
    menuContent.textContent = currentSection;
    navItems.forEach(item => {
        item.classList.remove('select');
        if (item.getAttribute('data-title') === currentSection) {
            item.classList.add('select');
        }
    });
});