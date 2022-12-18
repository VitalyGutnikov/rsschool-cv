alert('Приветствую Вас уважаемый проверяющий на своей CV странице!) Оценка моей работы выведена в console. Если будут какие-то замечания, большая просьба оставить свои контактные данные при оценке, дабы я смог с вами если что связаться. Хорошего Вам дня!)')
console.log(`Score: 130/120
1. работа засабмитина в rss.app +10
2. вёрстка валидная +10, проверено валидатором
3. вёрстка семантическая +20:
3.1 header, main, footer +5
3.2 элемент nav +5
3.3 только один заголовок h1 +5
3.4 заголовки h2 +5
4. в footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс +10
5. для оформления СV используются css-стили +10
6. при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10
7. на странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt +10
8. навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a +10
9. Содержание CV +30:
9.1 краткую информацию о себе +5
9.2 контакты для связи +5
9.3 перечень навыков +5
9.4 пример кода. Код добавляется при помощи символов и тегов, а не картинкой +5
9.5 перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения +5
9.6 информацию об образовании и уровне английского +5
10. CV выполнено на английском языке +10`)

// Adaptive menu
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');

function switchMenu() {
  toggleBtn.classList.toggle('collapsed');
  nav.classList.toggle('collapsed');
  navList.classList.toggle('collapsed');
}
toggleBtn.addEventListener('click', switchMenu);

function closeMenu() {
  setTimeout(() => {
    toggleBtn.classList.remove('collapsed');
    nav.classList.remove('collapsed');
    navList.classList.remove('collapsed');
  }, 1000);  
}
navItems.forEach(el => el.addEventListener('click', closeMenu));