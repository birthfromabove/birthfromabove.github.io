document.addEventListener('DOMContentLoaded', (event) => {
const divs = document.querySelectorAll('.poetry-quote');
if (divs.length > 0) {
const randomIndex = Math.floor(Math.random() * divs.length);
const randomDiv = divs[randomIndex];
randomDiv.classList.remove('hidden');
}
});
document.addEventListener('DOMContentLoaded', (event) => {
const divs = document.querySelectorAll('.biblical-quote');
if (divs.length > 0) {
const randomIndex = Math.floor(Math.random() * divs.length);
const randomDiv = divs[randomIndex];
randomDiv.classList.remove('hidden');
}
});
