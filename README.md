# Tarvike lopputyö

## 1 Yleisesittely

### Sovelluksen idea

Alkuperäinen tarkoitus oli tehdä sovellus, jota sähköurakoitsija voisi käyttää eräänlaisena ostoslistanaan.
Mennessään uuteen kohteeseensa, sähköasentaja voisi sovellukseen kirjata/valita listasta sähköurakassa myöhemmin tarvittavista sähkötarvikkeista.
Tämä tarvikelista apunaan hän voisi myöhemmin mennä tukkuun ja kerätä listaamansa tuotteet. Tai vaihtoehtoisesti hän voisi tehdä tilauksen suoraan verkkokaupan kautta.

Tämä oli suunnitelma. Ja tämän suunnitelman ajattelinkin toteuttaa viime syksyn aikana. Syksyllä kuitenkin jouduin työtehtävien muuttuessa yllättäen suuriin haasteisiin omassa päivätyössäni. Ja sen myötä harjoitustyön tekemiseen ei ollut voimavaroja ja sen tekeminen jäi hyvin pienelle liekille.

Viime joulun alla kuitenkin päivätyön aikataulut väljenivät niin, että pääsin jatkamaan tätä lopputyötä. Mutta, koska aikataulu tämän lopputyön suorittamisen osalta kävi vähiin, päätin rajata alkuperäistä suunnitelmaa minimiin. Tavoite oli tehdä tähän alkuperäiseen sovellukseen tarvittava osanen, joka täyttää lopputyölle annetut vaateet ja jota myöhemmin sitten voisi jatkokehitellä alkuperäisen suunnitelman mukaiseksi.

Tässä Tarvike-sovelluksen osasessa voidaan ylläpitää tietokantaan talletettujen sähkötarvikkeiden tietoja.
Aiemmin syötettyjä tarvikkeita voi selata ilman kirjautumista.
Kirjautumisen jälkeen käyttäjä voi myös ylläpitää tuotteiden tietoja.

### Toiminnallisuus lyhyesti

- aiemmin syötettyjä tarvikkeita voi selata ilman kirjautumista
- kirjautumissivulla voidaan kirjautua sovellukseen ylläpitäjäksi (käyttäjätunnuksen ja salasanan avulla)
- ylläpitosivulla voidaan luoda uusia, päivittää ja poistaa sähkötarvikkeiden tietoja

## 2 Kuvaus teknologioista

### Lyhyehkö kuvaus eri teknologioiden käyttämisestä työssä

- Angular 11.
- tietokanta on tällä hetkellä mongodb ja se pyörii MongoDBAtlas-palvelussa. Myöhemmin on tarkoitus vaihtaa MongoDB-kanta MySQL-tietokantaan (jolloin myös palvelualusta vaihtuu).
- Backendissä käytetty Expressiä ja RestAPIa.
- Authorisoinnissa on käytetty JWT-tokenia.
- Salasanat on kryptattu bcryptillä

### Komennot, joilla kehitysversion saa Githubista omalle koneelle toimimaan

## 3 Reflektio ja ajankäyttö

### Miten työ onnistui? Mikä oli helppoa, mikä vaikeaa?

Työn suurimpia haasteita oli päivätyön muuttuneen työkuvan vaatima valtava työpanos syksyn aikana. Eli aikana, jolloin alunperin olin suunnitellut tekeväni tämän lopputyön en pystynytkään kuin vain silloin tällöin panautumaan aiheeseen. Onneksi joulun alla tilanne päivätyön osalta rauhoittui niin, että pääsin kunnolla käsiksi tähän työhön.

Aikataulun venyminen toi myös haasteita siinä, että opitut asiat tuppasivat unohtumaan. Onneksi nämä opetukset oli videoitu. Ilman niiden kelaamista en olisi tästä lopputyöstä selvinnyt (videoita onkin kelattu varmasti kymmeniä kertoja edestakaisin!).

Oma haasteensa oli siinäkin, että yritin haukata alussa liian paljon eli tehdä aivan liian isoa ja hienoa lopputyötä. Näiden uusien asioiden opettelu vaatii kuitenkin paljon aikaa.

### Kuinka paljon käytit aikaa loppuharjoitustyön tekemiseen?

Paljon! Jo pelkästään tallenteet olen katsonut moneen kertaan läpi uudestaan ja uudestaan. Ja kun tallenteista (frontend + backend kursseista) pelkästään kertyy yhteensä yli 50 tuntia katsottavaa ja muutakin materiaalia on netistä kaivettu niin kokonaisuudessa kulutin yli 150 tuntia tämän homman tekemiseen. Tarkkaa laskelmaa en valitettavasti tehnyt.

### Mitä tietoja/taitoja sinun tulee vielä kehittää?

Angularin taitoja pitäisi yleensäkin kehittää. Suuria haasteita on tuonut ja tuo edelleenkin observablet sun muut olioihin liittyvät opettelut. Ei meinaa opettelu oikein sujua, ei sitten millään.
Myös käyttäjälle näkyvän osuuden eli frontendin rakentelu näköjään tuottaa aina uutta opeteltavaa.
