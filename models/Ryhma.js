const mongoose = require('mongoose');
/* const TuoteSchema = require('./Tuote'); */

/* Edellinen versio
const RyhmaSchema = new mongoose.Schema({
    ryhmacode: { type: String, unique: true, required: true },
    name: { type: String, required: true, max: 80 },

    tuote: { type: [TuoteSchema], required: true },
});
*/

const RyhmaSchema = new mongoose.Schema({
    ryhmacode: { type: String, unique: true, required: true },
    name: { type: String, required: true, max: 80 },
});

// skeemasta pittää tehdä model, jonka kautta taasen tietokantaoperaatiot tehdään
const Ryhma = mongoose.model('Ryhma', RyhmaSchema);

// exportataankin model eikä skema
module.exports = Ryhma;