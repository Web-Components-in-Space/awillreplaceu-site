const AWS_PUBLIC_URI = "https://aiwillreplaceu.s3.us-west-1.amazonaws.com";
const AWS_BUCKET = "photos";

export function renderItems(container, items) {
    items.forEach((item) => {
        if (item.Size > 0) {
            const shortCode = item.Key.split('/')[1].split('.jpg')[0];
            if (shortCode.indexOf('-s') === -1) { // -s is a double but with the tagline in the image
                const shortdatestamp = parseInt(shortCode, 16) * 1000;
                const datestart = new Date('August 1 2023');
                const date = new Date(datestart.getTime() + shortdatestamp);
                container.appendChild(renderItem(shortCode, date));
            }
        }
    });
}

export function renderItem(shortCode, date) {
    const item = document.createElement('div');
    const datehtml = date ? `<h3>Someone who was replaced on ${new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date)}</h3>` : '';
    item.innerHTML = `<div class="item">
        <div class="item-images">
            <a target="_blank" href="${AWS_PUBLIC_URI}/${AWS_BUCKET}/${shortCode}.jpg"><img height="200" src="${AWS_PUBLIC_URI}/${AWS_BUCKET}/${shortCode}.jpg" /></a>
            <a target="_blank" href="${AWS_PUBLIC_URI}/${AWS_BUCKET}/${shortCode}-s.jpg"><img height="200" src="${AWS_PUBLIC_URI}/${AWS_BUCKET}/${shortCode}-s.jpg" /></a>
        </div>
        ${datehtml}
    </div>`;
    return item;
}