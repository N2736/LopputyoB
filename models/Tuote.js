const mongoose = require('mongoose');

const TuoteSchema = new mongoose.Schema({
    // regular expressionin aloitusmerkki on ^ ja lopetusmerkki $.
    // Niitä ennen tai jälkeen ei saa olla merkkejä
    tuotecode: { type: String, unique: true, required: true, match: /^[A-Za-z]{2}[0-9]{7}$/ },
    name: { type: String, required: true, max: 80 },
    tuoteinfo: { type: String, required: false, min: 0, max: 300 },
    ryhmacode: { type: String, required: true },
});

// skeemasta pittää tehdä model, jonka kautta taasen tietokantaoperaatiot tehdään
const Tuote = mongoose.model('Tuote', TuoteSchema);

// exportataankin model eikä skema
module.exports = Tuote;