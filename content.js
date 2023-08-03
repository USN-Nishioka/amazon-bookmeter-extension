window.onload = function () {
    const titleElement = document.getElementById('productTitle');
    if (titleElement) {
        const title = titleElement.innerText;
        const encodedTitle = encodeURIComponent(title.trim());
        const url = `https://bookmeter.com/search?type=kindle&keyword=${encodedTitle}`;
        const buttonElement = document.createElement('button');
        buttonElement.innerText = '読書メーターで探す';
        buttonElement.className = 'bookmeter-link';
        buttonElement.onclick = function() {
            window.open(url, '_blank');
        };
        titleElement.parentNode.appendChild(buttonElement);
    }
};
