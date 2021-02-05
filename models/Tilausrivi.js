const mongoose = require('mongoose');
const TuoteSchema = require('./Tuote');

const TilausriviSchema = new mongoose.Schema({
    // regular expressionin aloitusmerkki on ^ ja lopetusmerkki $.
    // Niitä ennen tai jälkeen ei saa olla merkkejä
    tuote: { type: [TuoteSchema], required: true },
    maara: { type: Number },
});

module.exports = TilausriviSchema;