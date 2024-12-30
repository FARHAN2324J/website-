setTimeout(() => {
    document.getElementById('MyDiv').style.display = 'none';
    document.getElementById('container').style.display = 'block';
    
}, 3000);

const Scroll_container = document.getElementById('scroll');


Scroll_container.addEventListener('mouseover', ()=> {
    Scroll_container.style.overflowX = 'scroll'
});

Scroll_container.addEventListener('mouseout', ()=> {
    Scroll_container.style.overflowX = 'hidden'
});



document.getElementById('login').addEventListener('click', (e)=> {
    e.preventDefault();
    document.querySelector('.login').style.display = 'block';
});

document.getElementById('exit').addEventListener('click',(e) => {
    document.querySelector('.login').style.display = 'none';
});


const main = document.querySelector('main #section1 .container');
const main2 = document.querySelector('main #section1 .items');
const text = document.getElementById('text');
const famous = document.querySelector('.famous');
const footer = document.querySelector('footer');

document.getElementById('pizza').addEventListener('click', ()=> {
    main.style.display = 'none';
    main2.style.display = 'none';
    famous.style.display = 'none';
    footer.style.display = 'none';
    document.querySelector('main #pizzaSection').style.display = 'block';
});


document.getElementById('kebab').addEventListener('click', ()=> {
    main.style.display = 'none';
    main2.style.display = 'none';
    famous.style.display = 'none';
    footer.style.display = 'none';

    document.querySelector('main #pizzaSection').style.display = 'none';
    document.querySelector('main #sectionKebab').style.display = 'block';
});


document.getElementById('soup').addEventListener('click', ()=> {
    main.style.display = 'none';
    main2.style.display = 'none';
    famous.style.display = 'none';
    footer.style.display = 'none';
    document.querySelector('main #pizzaSection').style.display = 'none';
    text.innerText = "ناموجود";
    document.querySelector('main #sectionKebab').style.display = 'none';

});


document.getElementById('sandwich').addEventListener('click', ()=> {
    main.style.display = 'none';
    main2.style.display = 'none';
    famous.style.display = 'none';
    footer.style.display = 'none';
    document.querySelector('main #pizzaSection').style.display = 'none';
    text.innerText = "ناموجود";
    document.querySelector('main #sectionKebab').style.display = 'none';

});



document.getElementById('salad').addEventListener('click', ()=> {
    main.style.display = 'none';
    main2.style.display = 'none';
    famous.style.display = 'none';
    footer.style.display = 'none';
    document.querySelector('main #pizzaSection').style.display = 'none';
    text.innerText = "ناموجود";
    document.querySelector('main #sectionKebab').style.display = 'none';
});


document.getElementById('sokhari').addEventListener('click', ()=> {
    main.style.display = 'none';
    main2.style.display = 'none';
    famous.style.display = 'none';
    footer.style.display = 'none';
    document.querySelector('main #pizzaSection').style.display = 'none';
    document.querySelector('main #sectionKebab').style.display = 'none';
    document.querySelector('main #sectionSokhari').style.display = 'block';

});



const contents1 = document.querySelector('.contents1')

document.getElementById('content1').addEventListener('click', () => {
    if (contents1.style.display === 'block') {
        contents1.style.display = 'none';
    } else {
        contents1.style.display = 'block'
    }
    contents1.classList.add('hover');
});



const contents2 = document.querySelector('.contents2');

document.getElementById('content2').addEventListener('click', () => {
    if (contents2.style.display === 'block') {
        contents2.style.display = 'none';
    } else {
        contents2.style.display = 'block'
    }
    contents2.classList.add('hover');
});


const contents3 = document.querySelector('.contents3');

document.getElementById('content3').addEventListener('click', () => {
    if (contents3.style.display === 'block') {
        contents3.style.display = 'none';
    } else {
        contents3.style.display = 'block'
    }
    contents3.classList.add('hover');
});


const contents = document.querySelector('.contents');

document.getElementById('content').addEventListener('click', () => {
    if (contents.style.display === 'block') {
        contents.style.display = 'none';
    } else {
        contents.style.display = 'block'
    }
    contents.classList.add('hover');
});