let tus = document.getElementsByClassName("sayi");
let islem = document.getElementsByClassName("islem");
let temizle = document.getElementById("temizle");
let ekran = document.getElementsByClassName("ekran")[0];
let hesapla = document.getElementById("hesapla");
let ilkSayi = 0;
let ikinciSayi = 0;
let dortIslem, hesap, gelenSayi;
console.log(islem);

function tusBul() {
  let rakam = this.getAttribute("data-num");
  ekran.innerHTML += rakam;
}

function islemYap() {
  let yislem = this.getAttribute("data-islem");
  ilkSayi = parseInt(ekran.innerHTML);
  ekran.innerHTML = "";
  switch (yislem) {
    case "+":
      dortIslem = "+";
      break;
    case "-":
      dortIslem = "-";
      break;
    case "*":
      dortIslem = "*";
      break;
    case "/":
      dortIslem = "/";
      break;
    default:
      break;
  }
}
addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    sonucHesapla();
  }else if(e.key == "1"){
    ekran.innerHTML += "1";
  }else if(e.key == "2"){
    ekran.innerHTML += "2";
  }else if(e.key == "3"){
    ekran.innerHTML += "3";
  }else if(e.key == "4"){
    ekran.innerHTML += "4";
  }else if(e.key == "5"){
    ekran.innerHTML += "5";
  }else if(e.key == "6"){
    ekran.innerHTML += "6";
  }else if(e.key == "7"){
    ekran.innerHTML += "7";
  }else if(e.key == "8"){
    ekran.innerHTML += "8";
  }else if(e.key == "8"){
    ekran.innerHTML += "8";
  }else if(e.key == "9"){
    ekran.innerHTML += "9";
  }else if(e.key == "0"){
    ekran.innerHTML += "0";
  }else if(e.key == "+"){
    ilkSayi = parseInt(ekran.innerHTML);
    ekran.innerHTML = "";
    dortIslem = "+";
  }else if (e.key == "-") {
    ilkSayi = parseInt(ekran.innerHTML);
    ekran.innerHTML = "";
    dortIslem = "-";  
  } else if(e.key == "*"){
    ilkSayi = parseInt(ekran.innerHTML);
    ekran.innerHTML = "";
    dortIslem = "*";    
  }else if(e.key == "/"){
    ilkSayi = parseInt(ekran.innerHTML);
    ekran.innerHTML = "";
    dortIslem = "/";
  }else if(e.key == "Backspace"){
    ekran.innerHTML = "";
  }
});
function sonucHesapla() {
  ikinciSayi = parseInt(ekran.innerHTML);
  switch (dortIslem) {
    case "+":
      hesap = ilkSayi + ikinciSayi;
      ekran.innerHTML = hesap;
      break;
    case "-":
      hesap = ilkSayi - ikinciSayi;
      ekran.innerHTML = hesap;
      break;
    case "*":
      hesap = ilkSayi * ikinciSayi;
      ekran.innerHTML = hesap;
      break;
    case "/":
      hesap = ilkSayi / ikinciSayi;
      ekran.innerHTML = hesap;
      break;
    default:
      break;
  }
}

function sonucTemizle(){
  ekran.innerHTML = "";
  ilkSayi = 0;
  ikinciSayi = 0;
}

for(let i = 0; i < tus.length; i++){
  tus[i].onclick = tusBul;
}

for(let j = 0; j < islem.length; j++){
  islem[j].onclick = islemYap;
}
hesapla.onclick = sonucHesapla;
temizle.onclick = sonucTemizle;
