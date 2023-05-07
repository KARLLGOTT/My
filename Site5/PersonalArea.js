let res = JSON.parse(localStorage.getItem('data'));
    let res2 = localStorage.getItem('telephone');
    let q = (res.find(item => item.id === res2));
    document.getElementById('name').textContent = q.name;
    document.getElementById('name-name').textContent = q.name;
    document.getElementById('name2').textContent = q.name2;
    document.getElementById('name1').textContent = q.name1;
    document.getElementById('number').textContent = q.tel;


    if (localStorage.getItem('#city') !== null) {
        document.querySelector('#city').value = localStorage.getItem('#city');
    } else {
        document.querySelector('#city').value = `ВАШ ГОРОД`
    }


//  /* конфигурация */
//  let height = 70; // ширина картинки
//  let count = 0.4; // видимое количество изображений (шаг прокрутки)

//  let list = carousel1.querySelector('ul');
//  let listElems = carousel1.querySelectorAll('li');

//  let position = 0; // положение ленты прокрутки

//  carousel1.querySelector('.prev').onclick = function () {
//      // сдвиг вверх
//      position += height * count;
//      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//      position = Math.min(position, 0)
//      list.style.marginTop = position + 'px';
//  };

//  carousel1.querySelector('.next').onclick = function () {
//      // сдвиг вниз
//      position -= height * count;
//      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//      position = Math.max(position, -height * (listElems.length - count));
//      list.style.marginTop = position + 'px';
//  };


//  if (localStorage.getItem('#enroll') !== null) {
//     document.querySelector('#rec').innerHTML = localStorage.getItem('#enroll');
// } else {
//     document.querySelector('#rec').innerHTML = `0`;
// }


let delet = document.getElementById('delete');
let i = Number(localStorage.getItem('#enroll'));
delet.addEventListener('click', function () {
    i = i - 1;
    localStorage.setItem('#enroll', i);
    // localStorage.getItem('#enroll');
    // localStorage.removeItem('#enroll');
    location.reload();
})