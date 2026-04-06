const http = require('http');

const serveur = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Bonjour, vous êtes connecté à mon premier serveur Node.js !');
});

serveur.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});