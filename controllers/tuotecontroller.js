const Tuote = require('../models/Tuote');

const tuotecontroller = {
    findall: (req, res) => {
        Tuote.find().then((tuote) => {
            res.json(tuote);
        }).catch((err) => {
            console.error(err);
        });
    },
    // Haetaan tuote tuotenumeron perusteella
    // dynaaminen parametri, jossa on :-merkki edessä, saadaan tällä tavalla
    findbytuotecode: (req, res) => {
        Tuote.findOne({ tuotecode: req.params.tuotecode }).then((tuote) => {
            res.json(tuote);
        }).catch((err) => {
            console.error(err);
        });
    },
    findbyid: (req, res) => {
        Tuote.findOne({ _id: req.params.id }).then((tuote) => {
            res.json(tuote);
        }).catch((err) => {
            console.error(err);
        });
    },
    delete: (req, res) => {
        Tuote.findOneAndDelete({ _id: req.params.id }).then((tuote) => {
            res.json(tuote);
        }).catch((err) => {
            console.error(err);
        });
    },
    // päivitetään koko tuoteolio
    update: (req, res) => {
        // findByIdAndUpdate käyttääpi aina id:tä päivitykseen. Siksi nyt ei tarvitse
        // laittaa oliota parametriksi
        // req.body on koko group JSON-muodossa
        Tuote.findByIdAndUpdate(req.params.id, req.body).then((tuote) => {
            res.json(tuote);
        }).catch((err) => {
            console.error(err);
        });
    },
    // lisättävä data (postattava data) tulee post-metodin pyynnössä eli requestissa
    // clientilta eli asiakassovellukselta
    add: (req, res) => {
        // req.body sisältää opiskelijaolion (tulleepi clientilta)
        const NewTuote = Tuote(req.body);

        // metodin tuloksen käsittely callbackillä
        // save.metodin callback tuottaa err-virheen tai res-vastauksen
        NewTuote.save((err, Tuote) => {
            if (err) {
                console.error(err);
            };
            console.log('Tuoteobjekti, joka vietiin kantaan: ' + Tuote);
            res.json(Tuote); // tämä menee frontendiin
        });
    },
};

module.exports = tuotecontroller;