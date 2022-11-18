const refs = {
    closeBtn:document.querySelector('.close_btn'),
    openBtn: document.querySelector('.burger_btn'),
    burger: document.querySelector('.burger'),
}


refs.openBtn.addEventListener('click', () => {
    refs.burger.classList.add('open');
})

refs.closeBtn.addEventListener('click', () => {
    refs.burger.classList.remove('open');
})