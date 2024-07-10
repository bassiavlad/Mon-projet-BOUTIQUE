document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/utilisateurs')
        .then(response => response.json())
        .then(data => console.log('Utilisateurs:', data))
        .catch(error => console.error('Erreur:', error));

    fetch('http://localhost:3000/api/articles')
        .then(response => response.json())
        .then(data => console.log('Articles:', data))
        .catch(error => console.error('Erreur:', error));

    fetch('http://localhost:3000/api/images')
        .then(response => response.json())
        .then(data => console.log('Images:', data))
        .catch(error => console.error('Erreur:', error));

    fetch('http://localhost:3000/api/factures')
        .then(response => response.json())
        .then(data => console.log('Factures:', data))
        .catch(error => console.error('Erreur:', error));

    fetch('http://localhost:3000/api/ajouters')
        .then(response => response.json())
        .then(data => console.log('Ajouters:', data))
        .catch(error => console.error('Erreur:', error));

    fetch('http://localhost:3000/api/appartenir')
        .then(response => response.json())
        .then(data => console.log('Appartenir:', data))
        .catch(error => console.error('Erreur:', error));

    fetch('http://localhost:3000/api/transferes')
        .then(response => response.json())
        .then(data => console.log('Transferes:', data))
        .catch(error => console.error('Erreur:', error));
});


document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/utilisateurs')
        .then(response => response.json())
        .then(data => displayUtilisateurs(data));

    fetch('/api/articles')
        .then(response => response.json())
        .then(data => displayArticles(data));

    fetch('/api/images')
        .then(response => response.json())
        .then(data => displayImages(data));

    fetch('/api/factures')
        .then(response => response.json())
        .then(data => displayFactures(data));

    fetch('/api/ajouters')
        .then(response => response.json())
        .then(data => displayAjouters(data));

    fetch('/api/appartenir')
        .then(response => response.json())
        .then(data => displayAppartenir(data));

    fetch('/api/transferes')
        .then(response => response.json())
        .then(data => displayTransferes(data));
});

function displayUtilisateurs(data) {
    const container = document.querySelector('#utilisateurs .content');
    container.innerHTML = data.map(user => `
        <div>
            <strong>ID:</strong> ${user.id_article} <br>
            <strong>Nom:</strong> ${user.Nom} <br>
            <strong>Prénom:</strong> ${user.Prénom} <br>
            <strong>Tel:</strong> ${user.Tel}
        </div>
    `).join('');
}

function displayArticles(data) {
    const container = document.querySelector('#articles .content');
    container.innerHTML = data.map(article => `
        <div>
            <strong>ID:</strong> ${article.id_articles} <br>
            <strong>Nom:</strong> ${article.Noms} <br>
            <strong>Prix:</strong> ${article.Prix_articles} <br>
            <strong>Description:</strong> ${article.Descriptions} <br>
            <strong>Favoris:</strong> ${article.Favoris}
        </div>
    `).join('');
}

function displayImages(data) {
    const container = document.querySelector('#images .content');
    container.innerHTML = data.map(image => `
        <div>
            <a href="${image.Liens_vers_images_1}" target="_blank">
                <img src="${image.Liens_vers_images_1}" alt="${image.Affichages_images}">
            </a>
        </div>
    `).join('');
}

function displayFactures(data) {
    const container = document.querySelector('#factures .content');
    container.innerHTML = data.map(facture => `
        <div>
            <strong>ID:</strong> ${facture.id_Facture} <br>
            <strong>Date:</strong> ${facture.FactureDate_1} <br>
            <strong>Description:</strong> ${facture.Description}
        </div>
    `).join('');
}

function displayAjouters(data) {
    const container = document.querySelector('#ajouters .content');
    container.innerHTML = data.map(ajouter => `
        <div>
            <strong>ID Article:</strong> ${ajouter.id_article} <br>
            <strong>ID Articles:</strong> ${ajouter.id_articles} <br>
            <strong>Quantités:</strong> ${ajouter.Quantités}
        </div>
    `).join('');
}

function displayAppartenir(data) {
    const container = document.querySelector('#appartenir .content');
    container.innerHTML = data.map(appartenir => `
        <div>
            <strong>ID Articles:</strong> ${appartenir.id_articles} <br>
            <strong>ID Images:</strong> ${appartenir.id_images} <br>
            <strong>Afficher:</strong> ${appartenir.Afficher}
        </div>
    `).join('');
}

function displayTransferes(data) {
    const container = document.querySelector('#transferes .content');
    container.innerHTML = data.map(transfere => `
        <div>
            <strong>ID Articles:</strong> ${transfere.id_articles} <br>
            <strong>ID Facture:</strong> ${transfere.id_Facture} <br>
            <strong>Enregistres:</strong> ${transfere.Enregistres}
        </div>
    `).join('');
}
