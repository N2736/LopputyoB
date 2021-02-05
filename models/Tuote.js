const mongoose = require('mongoose');

const TuoteSchema = new mongoose.Schema({
    // regular expressionin aloitusmerkki on ^ ja lopetusmerkki $.
    // Niitä ennen tai jälkeen ei saa olla merkkejä
    tuotecode: { type: String, unique: true, required: true },
    name: { type: String, required: true, max: 80 },
    tuoteinfo: { type: String, required: false, min: 0, max: 300 },
});

module.exports = TuoteSchema;