const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    const title = section.querySelector('h2');
    const ul = section.querySelector('ul');

    title.addEventListener('click', () => {
        ul.classList.toggle('hidden');
    });
});
