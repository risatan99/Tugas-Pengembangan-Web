const tombol = document.querySelector('.tombol');
const menu = document.querySelector('.menu');
tombol.addEventListener('click', ('aktif') => {
        menu.classList.toggle('aktif');
});
