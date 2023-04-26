const imie = document.querySelector('#imie');
const nazwisko = document.querySelector('#nazwisko');
const rok_szkolny = document.querySelector('#rok szkolny');
const firma = document.querySelector('#firma');
const klasa = document.querySelector('#klasa');
const data_rozpoczencia = document.querySelector('#data rozpoczencia');
const data_zakonczenia = document.querySelector('#data zakonczenia');
const display = document.querySelector('#display')

form.addEventListener ( ' submit ', function (evt) {
    evt.PreventDefalut();
display.innerHTML = `Imię: ${imie.value} Nazwisko: ${nazwisko.value} Rok szkolny: ${rok_szkolny} Klasa: ${klasa.value}  Firma: ${firma.value}  Data rozpoczencia: ${data_rozpoczencia.value}  Data zakonczenia: ${data_zakonczenia}`;
   display.appendChild(display);
   });