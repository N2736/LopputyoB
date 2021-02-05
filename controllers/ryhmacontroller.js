const Ryhma = require('../models/Ryhma');

const ryhmacontroller = {
    findall: (req, res) => {
        Ryhma.find().then((ryhma) => {
            res.json(ryhma);
        }).catch((err) => {
            console.error(err);
        });
    },
    // Haetaan ryhmä ryhmänumeron perusteella
    // dynaaminen parametri, jossa on :-merkki edessä, saadaan tällä tavalla
    findbyryhmacode: (req, res) => {
        Ryhma.findOne({ ryhmacode: req.params.scode }).then((ryhma) => {
            res.json(ryhma);
        }).catch((err) => {
            console.error(err);
        });
    },
    findbyid: (req, res) => {
        Ryhma.findOne({ _id: req.params.id }).then((ryhma) => {
            res.json(ryhma);
        }).catch((err) => {
            console.error(err);
        });
    },
    delete: (req, res) => {
        Ryhma.findOneAndDelete({ _id: req.params.id }).then((ryhma) => {
            res.json(ryhma);
        }).catch((err) => {
            console.error(err);
        });
    },
    // päivitetään koko ryhmaolio
    update: (req, res) => {
        // findByIdAndUpdate käyttääpi aina id:tä päivitykseen. Siksi nyt ei tarvitse
        // laittaa oliota parametriksi
        // req.body on koko group JSON-muodossa
        Ryhma.findByIdAndUpdate(req.params.id, req.body).then((ryhma) => {
            res.json(ryhma);
        }).catch((err) => {
            console.error(err);
        });
    },
    // lisättävä data (postattava data) tulee post-metodin pyynnössä eli requestissa
    // clientilta eli asiakassovellukselta
    add: (req, res) => {
        // req.body sisältää opiskelijaolion (tulleepi clientilta)
        const NewRyhma = Ryhma(req.body);

        // metodin tuloksen käsittely callbackillä
        // save.metodin callback tuottaa err-virheen tai res-vastauksen
        NewRyhma.save((err, Ryhma) => {
            if (err) {
                console.error(err);
            };
            console.log('Groupobjekti, joka vietiin kantaan: ' + Ryhma);
            res.json(Ryhma); // tämä menee frontendiin
        });
    },
};

module.exports = ryhmacontroller;