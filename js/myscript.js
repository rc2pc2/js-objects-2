// const auto = {
//    brand: 'ferrori',
//    model : 'Oltreluna',
//    doors: 5,
//    hp: 544
// };

// // § const brand = auto.brand;
// // § const model = auto.model;
// // § const doors = auto.doors;
// // § const hp = auto.hp;
// const {brand, model, doors, hp} = auto;

const obj = {
   gino : 'ginetti',
   gina : 'ginettini',
   ginetto : 'giuni'
};

const array = [1,2,3,4,5,6,8];

console.log(obj);
const oggettoCopiato = {
   ...obj,
   copiato: true
};

console.log(oggettoCopiato);


const oggettoCopiatoMale = {
   obj : obj,
   copiato: true
};

console.log(oggettoCopiatoMale);

console.log(array);
const nuovoArraySbaglieto = [array];
const nuovoArray = [...array];

console.log(nuovoArray, nuovoArraySbaglieto);

