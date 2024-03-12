import { GYUMOLCSOK } from "./adatok.js";
const vasarolt = [];

// 1. feladat
function letrehozTablazat(lista) {
  let txt = `<table> `;
  for (let index = 0; index < lista.length; index++) {
    txt += `
        <tr>
          <td class = "gyumolcs">${lista[index].nev}</td>
          <td>${lista[index].tomeg}</td>
          <td>${lista[index].ar}</td>
        </tr>
        `;
  }
  txt += `</table>`;
  return txt;
}

const TABLAZAT = document.getElementById("feladat_1");
TABLAZAT.innerHTML = letrehozTablazat(GYUMOLCSOK);

// 2. feladat
function arOsszesit(lista) {
  let osszAr = 0;
  for (let index = 0; index < lista.length; index++) {
    osszAr += lista[index].ar;
  }
  return osszAr;
}
function tomegOsszesit(lista) {
  let osszTomeg = 0;
  for (let index = 0; index < lista.length; index++) {
    osszTomeg += lista[index].tomeg;
  }
  return osszTomeg;
}
const OSSZESITO = document.getElementById("feladat_2");
OSSZESITO.innerHTML = `A gyümölcsök súlya összesen: ${tomegOsszesit(
  GYUMOLCSOK
)} g<br>A gyümölcsök ára összesen: ${arOsszesit(GYUMOLCSOK)} ft`;

// 3. feladat
const VASAROL = document.getElementById("feladat_3");
const gyumolcsELEM = document.querySelectorAll(".gyumolcs");

function vasarol() {
  for (let index = 0; index < gyumolcsELEM.length; index++) {
    gyumolcsELEM[index].addEventListener("click", kattintas);
  }

  function kattintas(event) {
    /* vasarolt.push(event.target.innerHTML); */
    if (!vasarolt.includes(event.target.innerHTML)) {
      vasarolt.push(event.target.innerHTML);
      VASAROL.innerHTML = `${vasarolt}`;
    }
  }
}
vasarol();

// 4. feladat


function torolEsemeny() {}
