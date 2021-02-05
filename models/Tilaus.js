const mongoose = require('mongoose');
const TilausriviSchema = require('./Tilausrivi');

// Mongoose skeema tarjoaa Mongo DB:n tiedoille mallin ja validoinnin sekä rajoittimia.

const TilausSchema = new mongoose.Schema({
    // regular expressionin aloitusmerkki on ^ ja lopetusmerkki $.
    // Niitä ennen tai jälkeen ei saa olla merkkejä
    tilauscode: { type: String, unique: true, required: true },
    kohde: { type: String, required: true, max: 80 },
    osoite: { type: String, required: true, max: 80 },
    kuvaus: { type: String, required: false, max: 80 },
    pvm: { type: Date, required: false },
    puhelin: { type: Number, required: false },
    tilausrivi: { type: [TilausriviSchema], required: true },
});

// skeemasta pittää tehdä model, jonka kautta taasen tietokantaoperaatiot tehdään
const Tilaus = mongoose.model('Tilausrivi', TilausSchema);
// exportataankin model eikä skema
module.exports = Tilaus;