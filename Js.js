const showBtn = document.querySelector('.btn1');
const hideBtn = document.querySelector('.btn2');
const text = document.querySelector('.text');

showBtn.addEventListener('click', function () {
    text.classList.add('show');
});


hideBtn.addEventListener('click', function () {
    text.classList.add('hide');
});