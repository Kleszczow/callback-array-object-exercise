let names = ["Tymek", "Marek", "Dominika", "Dominika", "Agnieszka"];
let names2 = ["Ewa", "Bianka", "Asia"];
let names3 = ["Staszek"];
let copyNames = [...names];

const stringNames = names.toString();
console.log(stringNames);
//robi stringa

const joinName = names.join(" and ");
console.log(joinName);
//robi nam stringa ale z mozliwościa zmiany , na co chcemy

const concatName = names.concat(names2, names3);
console.log(concatName);
//pozwala łaczyć arrays

const spliceNames = copyNames.splice(1, 2);
console.log(spliceNames); // usuniety element pojedynczo
console.log(copyNames); // array  bez tego elementu
// usuwa nam z array obiekt pierwsza liczba indexOf a druga ilośc obirktów

copyNames.splice(2, 2, "Kinga", "Dominika");
console.log(copyNames);
//wycinamy i dodajemy nowe obiekty

const sliceName = names.slice(1, 3); // ostatni index nie wlicza się normalnie do reszty yuwim
console.log(sliceName);
// copiujemy fragment istenijacej tablicy i tworzymy nowy z wyodrębiuonymi obiektami

const indexName = names.indexOf("Dominika");
console.log(indexName);
//przeszukuje tablice od lewej pokazując index jaki ma wpisany obiekt

const lasindexName = names.lastIndexOf("Dominika");
console.log(lasindexName);
//przeszukuje od tyłu liste i szuka najblizszego pasujacego elemetu (pokazuje index od przodu)

let nums = [1, 2, 3, 4, [5, 6, [7, 8, 9]]];

console.log(nums);

const flatNums = nums.flat(2); //zeby dokopać się do 2lvl a tablicy musimy w nawias za flat wpisać ilośc lvl tablicy
console.log(flatNums);
//pokazuje cała zawartość tablicy

//-------

const forEachNames = names.forEach((n) => {
  console.log(n);
});
//rozpsiuje nam array na odzielnne obiekty przydatne qurerySellectorAll itp

const mapNums = flatNums.map((i) => i * 2); //uzyłem flatNums bo nie rozpoznaje tavblic w tablicy w tablicy
console.log(mapNums);
//przydatna do mnozenia itp tworzy nową tablice

let post = [
  { title: "todayMorning", author: "ugabuga" },
  { title: "yearWatch", author: "magazynBike" },
];

const searchPost = post
  .filter((p) => {
    return p.author === "ugabuga";
  })
  .map((k) => {
    return `the author is ${k.author}`;
  });
console.log(searchPost);
// metoda filter uzywana do znalezienia pasujacego obirktu

//////////REDUCE////////////

const reduceNumb = flatNums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0 //ta wartośc to od jakiej zaczynamy
);
console.log(reduceNumb);
// działa to tak:
//1+2
//3+3
//6+4

let total = flatNums.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(total);
//mozemy znaleać maksymalna liczbe itp
