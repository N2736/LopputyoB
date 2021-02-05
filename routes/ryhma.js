/*
students.js on reititystiedosto (router), joka tarjoaa REST-apin
Tietokantaoperaatiot ovat kontrollerin metodeissa

Ryhma-datan muokkauksen mahdollistavat reitit on suojattu authorize -metodilla
joten muokkaamaan pääsy vaatii kirjautumisen

*/
/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const sc = require('../controllers/ryhmacontroller');
const authorize = require('../verifytoken'); // authorisointi eli vahvistetaan token

// http://localhost:3000/ryhma/
router.get('/', sc.findall);

// http://localhost:3000/ryhma/ryhmacode/a1234  tms.
// tässä : -merkintä on aina dynaamisen (muuttuvat) reittiparametrin edessä
router.get('/:ryhmacode', sc.findbyryhmacode);

// http://localhost:3000/ryhma/5f07718dc418fb4de4f39307  tms.
router.get('/:id', sc.findbyid);

// seuraavat reitit ovat käytössä vain authorisoiduille käyttäjille
// authorize-funktio suoritetaan ennen kuin päästään kontrollerin metodiin

// http://localhost:3000/ryhma/
router.post('/', authorize, sc.add);

// http://localhost:3000/ryhma/5f07718dc418fb4de4f39307  tms.
router.delete('/:id', authorize, sc.delete);

// Seuraavassa menee updateen kaksi parametria
/* router.put('/:id/:spoints', sc.updatespoints); */

// router.put('/:id', authorize, sc.update);

module.exports = router;