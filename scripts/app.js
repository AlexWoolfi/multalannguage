

const maxImg = document.querySelector('.right-panel img');
const select = document.querySelector('select');
const allLang = ['en','ru','ua'];

// Анимация при наведении
document.querySelectorAll('.left-panel img').forEach(item =>
   item.onmouseenter = (event) => maxImg.src = event.target.src);

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
  document.querySelector('.site-title').innerHTML = langArr['unit'][hash];
  // Ручками...
  // document.querySelector('.lng-unit').innerHTML = langArr['unit'][hash];
  // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];

  //Правильно
  for( let key in langArr) {
    let element = document.querySelector('.lng-'+ key);
    if(element){
          element.innerHTML = langArr[key][hash];
    }
    
  }
}

changeLang();
