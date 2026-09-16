// //1
// const szamok = [1, 2, 3, 4, 5];
// const dupla = szamok.map(szam => szam * 2);
// console.log(dupla)

// //2
// const szamok2 = [1, 2, 3, 4, 5, 6];
// const negyzet = szamok2.map(szam => szam ** 2);
// console.log(negyzet)

// //3
// const nevek = ["anna", "béla", "cecília", "dávid"];
// console.log(nevek.map(nev => nev[0].toUpperCase()+ nev.slice(1)));

// //4
// const celsiusFokok = [0, 10, 20, 30, 100];
// const fahrenheitFokok = celsiusFokok.map(celsius => celsius * 9 / 5 + 32);
// console.log(fahrenheitFokok);

// //5
// const diakok = [
//   { nev: "Kovács Péter", jegy: 4 },
//   { nev: "Nagy Anna", jegy: 5 },
//   { nev: "Szabó Bence", jegy: 3 }
// ];
// const diakokNevei = diakok.map(diak => diak.nev);
// console.log(diakokNevei);

// //6
// const termekek = [
//   { nev: "Kenyér", ar: 500 },
//   { nev: "Tej", ar: 350 },
//   { nev: "Sajt", ar: 1200 }
// ];
// const termekekAratNovelo = termekek.map(termek => ({nev: termek.nev, netto: termek.ar, brutto: termek.ar*1.27}));
// console.log(termekekAratNovelo);


// //7
// const gyumolcsok = ["alma", "körte", "szilva"];
// const gyumolcsokSorszam = gyumolcsok.map((gyumolcs, index) => (index+1) + ". " + gyumolcs);
// console.log(gyumolcsokSorszam);

// //8
// const szamok3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const parosSzamok = szamok3.map(szam => szam % 2 === 0 ? szam ** 3 : null).filter(szam => szam !== null);
// console.log(parosSzamok);

// //9
// const matrix = [[1, 2], [3, 4], [5, 6]];
// const osszeadas=matrix.map(matrixTomb => matrixTomb.reduce((sum, szam) => sum + szam, 0));
// console.log(osszeadas);


// //10
// const szamok4 = [1, 2, 3];
// const eredmeny = szamok4.map(szam => {
//   return szam * 2;
// });
// console.log(eredmeny); 








// const szamok9 = [1, 2, 3, 4, 5];
// const duplaSzamok = szamok.map(szam => szam * 2);
// console.log(duplaSzamok);




// //1
// const szamok5 = [10, 20, 30];
// const [a, b, c] = szamok5;
// console.log(a, b, c);

// //2
// const napok = ["hétfő", "kedd", "szerda", "csütörtök", "péntek"];
// const [elso, , , negyedik] = napok;
// console.log(elso, negyedik);


// //3
// let x = 5;
// let y = 10;
// [x, y] = [y, x];
// console.log(y, x);

// //4
// const szinek = ["piros"];
// const [elso1, masodik = "kék"] = szinek;
// console.log(elso1, masodik);


// //5
// const jegyek = [5, 4, 3, 2, 5];
// const [elsoJegy, ...tobbiJegy] = jegyek;
// console.log(elsoJegy, tobbiJegy);
// //[4, 3, 2, 5]

// //6
// function minMax(tomb) {
//   return [Math.min(...tomb), Math.max(...tomb)];
// }
// const szamok8 = [4, 2, 9, 1, 7];
// const [legkisebb, legnagyobb] = minMax(szamok8);
// console.log(legkisebb, legnagyobb);

// //7
// const koordinatak = [[1, 2], [3, 4]];
// const [[x1, y1], [x2, y2]] = koordinatak;
// console.log(x1, y1, x2, y2);

// //8
// const diak = { nev: "Feke Gergő", kor: 19, osztaly: "13.A" };
// const { nev3, kor } = diak;
// console.log(nev3, kor);



// //9
// const termek = { id: 101, cim: "Notebook", keszlet: 15 };
// const { cim: termeknev, keszlet: darabszam } = termek;
// console.log(termeknev, darabszam);




// //10
// const felhasznalo = { nev: "Tóth Gábor" };
// const { nev4, szerep = "felhasznalo" } = felhasznalo;
// console.log(nev4, szerep);





// //11
// const auto = { marka: "Toyota", modell: "Corolla", ev: 2022, szin: "fehér" };
// const { marka, ...tobbiAdat } = auto;
// console.log(marka);
// console.log(tobbiAdat);






// //12
// const dolgozo = {
//   nev: "Varga Kata",
//   cim: {
//   varos: "Debrecen",
//   iranyitoszam: "4024"
//   }
// };
// const{nev, cim:{varos}}= dolgozo;
// console.log(nev, varos);



// //13
// function bemutatkozas({ nev, kor }) {
//   console.log(`Szia, a nevem ${nev}, ${kor} éves vagyok.`);
// }
// bemutatkozas({ nev: "Farkas Dani", kor: 17, varos: "Szeged" });




// //14
// const diakok4 = [
//   { nev: "Anna", jegy: 5 },
//   { nev: "Béla", jegy: 3 },
//   { nev: "Cili", jegy: 4 }
// ];
// console.log(diakok4.map(({ nev, jegy }) => `${nev}: ${jegy}`));






//1
const szamok = [5, 10, 15];
const szamok2 = [...szamok,20];
console.log(szamok2); 



//2
const napok = ["Kedd", "Szerda", "Csütörtök"];
const ujNapok = ["Hétfő", ...napok, "Péntek"];
console.log(ujNapok);


//3
const elso = [1, 2, 3]; 
const masodik = [4, 5, 6];
const harmadik = [...elso, ...masodik];
console.log(harmadik);


//4
const diak = {
  nev: "Anna",
  kor: 17
};
const ujDiak = { ...diak, kor: "18" };
console.log(ujDiak);



//5
const diak2 = {
  nev: "Anna",
  kor: 17
};
const varos={...diak2, varos: "Szeged"};
console.log(varos);



//6
const alap = {
  nev: "Bence",
  kor: 18
};
const plusz = {
  iskola: "Technikum",
  osztaly: "11.A"
};
const alapPlusz={...alap,...plusz};
console.log(alapPlusz);






//7
const elso1 = {
  nev: "Anna",
  kor: 17
};
const masodik2 = {
  kor: 18
};
const eredmeny = {
  ...elso1,
  ...masodik2,
};
console.log(eredmeny);


//8
const szamok1 = [1, 2, 3];
const uj = [0, ...szamok1, 4];
console.log(uj);


//9
const diak3 = {
  nev: "Péter",
  jegyek: [5, 4, 3]
};
const Ujdiak2=[...diak3.jegyek, 5];
console.log(Ujdiak2)





const tomb1 = [1,2,3];
const ujTomb = [...tomb1];
console.log(ujTomb);
tomb1[0]=99;
console.log(tomb1)
console.log(ujTomb);