const mongoose = require('mongoose');

// Mongoose skeema tarjoaa Mongo DB:n tiedoille mallin ja validoinnin sekä rajoittimia.

const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isadmin: { type: Boolean, required: true },
});

// skeemasta pittää tehdä model, jonka kautta taasen tietokantaoperaatiot tehdään
const User = mongoose.model('User', UserSchema);
// exportataankin model eikä skema
module.exports = User;