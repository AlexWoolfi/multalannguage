

const maxImg = document.querySelector('.right-panel img');
const select = document.querySelector('select');
const allLang = ['en','ru','ua'];

// document.querySelectorAll('.left-panel img')
// .forEach(element => element.onmouse);

select.addEventListener('change', cangeURLLang);
//Перенаправляет на урл с указанием языка
function cangeURLLang() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLang() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if(!allLang.includes(hash)) {
    alert("Введи правильно или не выпендривайся и клацни на селект");
    location.href = window.location.pathname + '#ru';
    location.reload();
  }
  select.value = hash;
  document.querySelector('title').innerHTML = langArr['unit'][hash];
  document.querySelector('.lng-unit').innerHTML = langArr['unit'][hash];
}
changeLang();
// changeLang();



