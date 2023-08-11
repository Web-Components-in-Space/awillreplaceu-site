import { renderItem } from './rendering';

window.addEventListener('load', () => {
    const shortCode = window.location.search.slice(1, window.location.search.length);
    const container = document.getElementById('album');
    container.appendChild(renderItem(shortCode));
});