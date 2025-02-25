document.addEventListener('DOMContentLoaded', (event) => {
// Получаем все элементы div с классом 'random-div'
const divs = document.querySelectorAll('.random-div');
// Проверяем, есть ли на странице какие-либо div-ы
if (divs.length > 0) {
// Выбираем случайный индекс
const randomIndex = Math.floor(Math.random() * divs.length);
// Получаем случайный div
const randomDiv = divs[randomIndex];
// Отображаем случайный div
randomDiv.classList.remove('hidden');
}
});
document.addEventListener('DOMContentLoaded', (event) => {
const divs = document.querySelectorAll('.random-div2');
if (divs.length > 0) {
const randomIndex = Math.floor(Math.random() * divs.length);
const randomDiv = divs[randomIndex];
randomDiv.classList.remove('hidden');
}
});
