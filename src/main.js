import { listBucket } from './aws3.js';
import { renderItem, renderItems } from './rendering.js';

let displayoffset = 0;
let displaylimit = 10;
let items;
async function init() {
    items = await listBucket();

    document.getElementById('next').addEventListener('click', () => {
        next();
    });

    document.getElementById('codeinput').addEventListener('change', () => {
        const shortCode = document.getElementById('codeinput').value;
        const container = document.getElementById('single-image');
        container.innerHTML = '';
        document.getElementById('codeinput').value = '';
        container.appendChild(renderItem(shortCode));

        const badImg = document.querySelector('#single-image img');
        badImg.addEventListener('error', (event) => {
            container.innerHTML = '<br /><br /><span>Sorry, that photo can not be found. Is your code correct?</span>'
        });
    });

    document.body.addEventListener('error', (event) => {
        console.log(event);
    });
    const container = document.getElementById('album');
    renderItems(container, items.slice(displayoffset, displayoffset + displaylimit));
}

function onImageError() {
    console.log('error')
}

function next() {
    displayoffset += displaylimit;
    const container = document.getElementById('album');
    renderItems(container, items.slice(displayoffset, displayoffset + displaylimit));
}

function previous() {
    displayoffset -= displaylimit;
    const container = document.getElementById('album');
    renderItems(container, items.slice(displayoffset, displayoffset + displaylimit));
}
init();