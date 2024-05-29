let formedWord = '';

function addLetter(letter) {
    formedWord += letter;
    updateFormedWord();
    addBouquetImage(letter);
}

function deleteLastLetter() {
    if (formedWord.length > 0) {
        formedWord = formedWord.slice(0, -1);
        updateFormedWord();
        removeLastBouquetImage();
    }
}

function clearWord() {
    formedWord = '';
    updateFormedWord();
    clearBouquetImages();
}

function updateFormedWord() {
    document.getElementById('formed-word').innerText = formedWord;
}


function addBouquetImage(letter) {
    const bouquetContainer = document.getElementById('bouquet-container');

    const img = document.createElement('img');
    img.src = `${letter.toLowerCase()}.png`; // Assuming flower images are PNG with transparent background
    img.className = 'bouquet-img';


    bouquetContainer.appendChild(img);
}


function removeLastBouquetImage() {
    const bouquetContainer = document.getElementById('bouquet-container');
    if (bouquetContainer.lastChild) {
        bouquetContainer.removeChild(bouquetContainer.lastChild);
    }
}

function clearBouquetImages() {
    const bouquetContainer = document.getElementById('bouquet-container');
    while (bouquetContainer.firstChild) {
        bouquetContainer.removeChild(bouquetContainer.firstChild);
    }
}


function removeLastBouquetImage() {
    const bouquetContainer = document.getElementById('bouquet-container');
    if (bouquetContainer.lastChild) {
        bouquetContainer.removeChild(bouquetContainer.lastChild);
    }
}

function clearBouquetImages() {
    const bouquetContainer = document.getElementById('bouquet-container');
    while (bouquetContainer.firstChild) {
        bouquetContainer.removeChild(bouquetContainer.firstChild);
    }
}


window.onload = function() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const lettersContainer = document.getElementById('letters-container');

    letters.forEach(letter => {
        const letterContainer = document.createElement('div');
        letterContainer.className = 'letter-container';

        const img = document.createElement('img');
        img.id = `img-${letter}`;
        img.className = 'letter';
        img.alt = `Letter ${letter}`;
        img.src = `${letter.toLowerCase()}.png`;
        img.onerror = () => {
            img.src = `${letter.toLowerCase()}.jpg`;
        };
        img.onclick = () => addLetter(letter);

        const p = document.createElement('p');
        p.innerText = letter;

        letterContainer.appendChild(img);
        letterContainer.appendChild(p);
        lettersContainer.appendChild(letterContainer);
    });
};

