/* eslint-disable new-cap */
//
// Kontrolleri on tehty siksi saadaan eroteltua reitit ja tietokantahakujen
// sovelluslogiikka toisistaan. Eli kyse on arkkitehtuuriratkaisusta. Eli saamme järkevämmän arkkitehtuurin kun
// teemme koodin, jolla on tietty käyttötarkoitus omaan kansioonsa.
const Tilaus = require('../models/Tilaus');

const tilauscontroller = {
    findall: (req, res) => {
        /*
            Student.find((err, students) get=> {
                if (err) {
                    throw err;
                }
                res.json(students);
            });
        */
        Tilaus.find().then((tilaus) => {
            res.json(tilaus);
        }).catch((err) => {
            console.error(err);
        });
    },
    // Haetaan tilaus tilausnumeron perusteella
    // alla req.params.scode hakee urlista tilausnumeron
    // dynaaminen parametri, jossa on :-merkki edessä, saadaan tällä tavalla
    findbytilauscode: (req, res) => {
        Tilaus.findOne({ tilauscode: req.params.tilauscode }).then((tilaus) => {
            res.json(tilaus);
        }).catch((err) => {
            console.error(err);
        });
    },
    findbyid: (req, res) => {
        Tilaus.findOne({ _id: req.params.id }).then((tilaus) => {
            res.json(tilaus);
        }).catch((err) => {
            console.error(err);
        });
    },
    delete: (req, res) => {
        Tilaus.findOneAndDelete({ _id: req.params.id }).then((tilaus) => {
            res.json(tilaus);
        }).catch((err) => {
            console.error(err);
        });
    },
    // findOneAndUpdaten argumentit ovat kaksi oliota. Ekassa kerrotaan hakuehto, mikä päivitetään
    // toinen kertoo, mitä päivitetään
    // tilauksen päivitys
    updatestilaus: (req, res) => {
        Tilaus.findOneAndUpdate({ _id: req.params.id }, { tuote: req.params.tuote }).then(() => {
            res.send('Tilausrivi päivitetty');
        }).catch((err) => {
            console.error(err);
        });
    },
    // päivitetään koko tilausolio
    update: (req, res) => {
        // findByIdAndUpdate käyttääpi aina id:tä päivitykseen. Siksi nyt ei tarvitse
        // laittaa oliota parametriksi
        // req.body on koko tilaus JSON-muodossa
        Tilaus.findByIdAndUpdate(req.params.id, req.body).then((tilaus) => {
            res.json(tilaus);
        }).catch((err) => {
            console.error(err);
        });
    },
    // lisättävä data (postattava data) tulee post-metodin pyynnössä eli requestissa
    // clientilta eli asiakassovellukselta
    add: (req, res) => {
        // req.body sisältää opiskelijaolion (tulleepi clientilta)
        const NewTilaus = Tilaus(req.body);

        // metodin tuloksen käsittely callbackillä
        // save.metodin callback tuottaa err-virheen tai res-vastauksen
        NewTilaus.save((err, tilaus) => {
            if (err) {
                console.error(err);
            };
            console.log('Tilausobjekti, joka vietiin kantaan: ' + tilaus);
            res.json(tilaus); // tämä menee frontendiin
        });
    },
};

module.exports = tilauscontroller;