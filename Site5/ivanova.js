if (localStorage.getItem('#city') !== null) {
    document.querySelector('#city').value = localStorage.getItem('#city');
} else {
    document.querySelector('#city').value = `ВАШ ГОРОД`
}



 // Get the modal
 let modal = document.getElementById("myModal");

 // Get the button that opens the modal
 let btn = document.getElementById("cabinet");

 // Get the <span> element that closes the modal
 let span = document.getElementsByClassName("close2")[0];

 // When the user clicks the button, open the modal 
 btn.onclick = function () {
     modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function () {
     modal.style.display = "none";
 }



  // Get the modal
  let modal2 = document.getElementById("myModal2");

  // Get the button that opens the modal
  let btn2 = document.getElementById("fur");

  // Get the <span> element that closes the modal
  let span2 = document.getElementsByClassName("close3")[0];

  let users = [

    { id: '+38(000) 000-00-00', name: "Іван", name1: "Іванович", name2: "Іванко", tel: '+38(000) 000-00-00' },

    { id: '+38(000) 000-00-01', name: "Ганна", name1: "Іванівна", name2: "Іванко", tel: '+38(000) 000-00-01' },

    { id: '+38(000) 000-00-02', name: "Петро", name1: "Петрович", name2: "Петренко", tel: '+38(000) 000-00-02' },

];

function MyFn() {
    if (localStorage.getItem('data') === null) {

        localStorage.setItem("data", JSON.stringify(users));

    }

    else {

        return;

    }
}

MyFn();
let res = JSON.parse(localStorage.getItem('data'));

let q;

// When the user clicks the button, open the modal 
btn2.onclick = function () {

    let NumTel = document.getElementById('tel').value;
    localStorage.setItem("telephone", NumTel);

    if (q = (res.find(item => item.id === NumTel))) {

        localStorage.setItem("data", JSON.stringify(res));

    }

    else {

        let name = prompt('Введите имя');
        let name1 = prompt('Введите отчество');
        let name2 = prompt('Введите фамилию');

        let obj = {

            id: NumTel,

            name: name,

            name1: name1,

            name2: name2,

            tel: NumTel,

        }

        res.push(obj);

        localStorage.setItem("data", JSON.stringify(res));

    }

      modal2.style.display = "block";
      modal.style.display = "none";
      function getTimeRemaining(endtime) {
          let t = Date.parse(endtime) - Date.parse(new Date());
          let seconds = Math.floor((t / 1000) % 60);
          let minutes = Math.floor((t / 1000 / 60) % 60);
          return {
              total: t,
              minutes: minutes,
              seconds: seconds
          };
      }

      function initializeClock(id, endtime) {
          let clock = document.getElementById(id);
          let minutesSpan = clock.querySelector(".minutes");
          let secondsSpan = clock.querySelector(".seconds");

          function updateClock() {
              let t = getTimeRemaining(endtime);

              if (t.total <= 0) {
                  document.getElementById("countdown").className = "hidden";
                  document.getElementById("deadline-message").className = "visible";
                  clearInterval(timeinterval);
                  return true;
              }


              minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
              secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
          }

          updateClock();
          let timeinterval = setInterval(updateClock, 1000);
      }

      let deadline = new Date(Date.parse(new Date()) + 60 * 1000);
      initializeClock("countdown", deadline);
  }

  // When the user clicks on <span> (x), close the modal
  span2.onclick = function () {
      modal2.style.display = "none";
  }



  
        document.addEventListener("DOMContentLoaded", function () {
            var eventCalllback = function (e) {
                var el = e.target,
                    clearVal = el.dataset.phoneClear,
                    pattern = el.dataset.phonePattern,
                    matrix_def = "+38(0__) ___-__-__",
                    matrix = pattern ? pattern : matrix_def,
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = e.target.value.replace(/\D/g, "");
                if (clearVal !== 'false' && e.type === 'blur') {
                    if (val.length < matrix.match(/([\_\d])/g).length) {
                        e.target.value = '';
                        return;
                    }
                }
                if (def.length >= val.length) val = def;
                e.target.value = matrix.replace(/./g, function (a) {
                    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
                });
            }
            var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
            for (let elem of phone_inputs) {
                for (let ev of ['input', 'blur', 'focus']) {
                    elem.addEventListener(ev, eventCalllback);
                }
            }
        });
    

    
        let tel = document.querySelector('#tel');

        tel.addEventListener('input', function (event) {
            let button = document.querySelector('#fur');
            if (tel.value.length == 18) {
            button.disabled = (tel.value =='');
            button.style.backgroundColor = '#FFC59E';}
        });
        button.addEventListener('click', function (event) {
            let tel = document.querySelector('#tel');
            tel.value = '';
            this.disabled = true
        });
    


       
        
  



    

     