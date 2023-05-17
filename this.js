const person = {
  name: "Tymek",
  showName: function () {
    console.log(this);
  },
  showName2() {
    console.log(this.name);
  },
  addres: {
    city: "Kleszczów",
    street: "Sportowa",
    showAdress() {
      console.log(this.city);
      //console.log(this.name) undefind nie działa bo this odnosi sie do pierwszego lewej wartości itp
      //FUNCKJA STRZAŁKOWA () => {} NIE DZIAŁA BO NIE TWORZY KONTEKSTU
    },
  },
};
person.showName();
person.showName2();
person.addres.showAdress();

console.log(this);

const obj = {
  name: "Marek",
  newFuncion() {
    console.log(this);
  },
};
obj.newFuncion();

//------------------

class car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log(`${this.model} is OG`);
  }
}

let car1 = new car("mini", "2002", "Blue");
car1.drive();

//---------------------------

const learn = {
  what: "js",
  learning() {
    console.log(this.what);
  },
};

learn.learning();

//----------------------------------

const chips = {
  newChips: ["chetoss", "lays", "top"],
  showChips() {
    this.newChips.forEach((box) => {
      console.log(box[0].toUpperCase() + box.substring(1).toLowerCase());
    });
  },
};
chips.showChips();

//-----------------------------------

function idk(name) {
  this.name = name;
  this.sayHello = function () {
    alert(this.name);
  };
  console.log(idk.name);
}
const newIdk = new idk("horse");
console.log(newIdk.name);

//--------------------------------------

function showFace() {
  return this.face;
}
const Tymek = {
  face: ":-)",
};
const showTymekFace = showFace.bind(Tymek);
console.log(showTymekFace());
//pamietaj o tym nawiasie!!!! jak robisz takie coś

function showNumber() {
  return this.number;
}
const num = {
  number: 2 * 6,
};
const numbervisible = showNumber.bind(num);

console.log(numbervisible());
