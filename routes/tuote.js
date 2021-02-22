/*
tuote.js on reititystiedosto (router), joka tarjoaa REST-apin
Tietokantaoperaatiot ovat kontrollerin metodeissa

Ryhma-datan muokkauksen mahdollistavat reitit on suojattu authorize -metodilla
joten, jos haluaapi muokata niin sit pitää kirjautua sisään
*/

/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const sc = require('../controllers/tuotecontroller');
const authorize = require('../verifytoken'); // authorisointi eli vahvistetaan token

// http://localhost:3000/tuote/
router.get('/', sc.findall);

// http://localhost:3000/tuote/tuotecode/a1234  tms.
// tässä : -merkintä on aina dynaamisen (muuttuvat) reittiparametrin edessä
router.get('/tuotecode/:tuotecode', sc.findbytuotecode);

// http://localhost:3000/tuote/5f07718dc418fb4de4f39307  tms.
router.get('/:id', sc.findbyid);

// seuraavat reitit ovat käytössä vain authorisoiduille käyttäjille
// authorize-funktio suoritetaan ennen kuin päästään kontrollerin metodiin

// http://localhost:3000/tuote/
router.post('/', authorize, sc.add);

// http://localhost:3000/tuote/5f07718dc418fb4de4f39307  tms.
router.delete('/:id', authorize, sc.delete);

// Seuraavassa menee updateen kaksi parametria
router.put('/:id', authorize, sc.update);

module.exports = router;