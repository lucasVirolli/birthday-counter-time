(function () {
  const form = document.querySelector('.form-pattern');
  const startButton = document.querySelector('.button-calculate button');

  const valueDaysEl = document.getElementById('value-days');
  const valueHoursEl = document.getElementById('value-hours');
  const valueMinutesEl = document.getElementById('value-minutes');
  const valueSecondsEl = document.getElementById('value-seconds');

  const textDays = document.getElementById('text-days');
  const textHours = document.getElementById('text-hours');
  const textMinutes = document.getElementById('text-minutes');
  const textSeconds = document.getElementById('text-seconds');

  const ageEl = document.getElementById('text-top');
  const textSubTop = document.getElementById('text-subtop');

  var setCountdownTimer;

  var totalSeconds;

  const today = new Date();

  var dateToday;
  var monthToday;
  var yearToday;

  var age;

  startButton.addEventListener("click", function (e) {
    e.preventDefault();

    clearInterval(setCountdownTimer)

    //variables used in form
    var nameUser = document.querySelector('#name-user').value;
    var birthDayInformed = document.querySelector('#date-to-calculate').value;
    var dateBDay = birthDayInformed.substring(11, 8);
    var monthBday = birthDayInformed.substring(7, 5);
    var yearBday = parseInt(birthDayInformed.substring(4, 0));
    var birthdayInformed = new Date(yearBday, monthBday - 1, dateBDay);

    //variables to get the informations of actual day(today)
    dateToday = today.getDate();
    monthToday = (today.getMonth() + 1);
    yearToday = today.getFullYear();

    if (nameUser == '' || birthDayInformed == '') {
      alert('Por favor preencha todos os campos');
      defaultPage();
    } else if (birthdayInformed > today) {
      alert('A data de nascimento deve ser anterior a data de hoje!');
      defaultPage();
    } else {

      //verify if the user did birthday this year or not
      var bDayThisYear = new Date(today.getFullYear(), monthBday - 1, dateBDay);
      if (bDayThisYear <= today) {yearToday += 1}; //hear is necessary add 1 year to say that the next birthday is just on the next year.

      if ((monthToday == monthBday && dateToday == dateBDay) || totalSeconds < 0) {
        clearInterval(setCountdownTimer)
        yearToday -= 1;
        celebrateBDay(yearBday, monthBday, nameUser);
      } else {
        countDown(nameUser, dateBDay, monthBday, yearBday);
        textSubTop.innerHTML = `Comemoração será em: ${dateBDay}/${monthBday}/${yearToday}`;
        setCountdownTimer = setInterval(function () {
          countDown(nameUser, dateBDay, monthBday, yearBday);
        }, 1000);
      }
    }
    form.reset();

  });

  function defaultPage(){
    ageEl.textContent = 'Insira um nome e data de nascimento'
    textSubTop.textContent = 'Mate sua curiodade, veja quanto tempo falta para seu próximo aniversário!'

    textDays.textContent = '';
    textHours.textContent = '';
    textMinutes.textContent = '';

    textSeconds.textContent = '';

    valueDaysEl.textContent = '';
    valueHoursEl.textContent = '';
    valueMinutesEl.textContent = '';
    valueSecondsEl.textContent = '';
  }

  function countDown(nameUser, dateBDay, monthBday, yearBday) {

    nameUser = nameUser;
    dateBDay = parseInt(dateBDay);
    monthBday = parseInt(monthBday);
    yearBday = yearBday;

    if(totalSeconds <= 200){
      clearInterval(setCountdownTimer);
      setTimeout(() => {celebrateBDay(yearBday, monthBday, nameUser)}, 1200);
      celebrateBDay(yearBday, monthBday, nameUser);
    } 

    var dateNextBirthday = new Date(yearToday, (monthBday - 1), dateBDay);
    var todayToCalculate = new Date();

    totalSeconds = 0;
    totalSeconds = (dateNextBirthday - todayToCalculate) / 1000;

    var days = Math.floor(totalSeconds / 3600 / 24);
    var hours = Math.floor(totalSeconds / 3600) % 24;
    var minutes = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds) % 60;

    valueDaysEl.textContent = days < 10 ? '0' + days : days;
    valueHoursEl.textContent = hours < 10 ? '0' + hours : hours;
    valueMinutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
    valueSecondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;

    age = yearToday - yearBday;

    ageEl.textContent = `Aniversário de ${age} anos de ${nameUser}`;

    textDays.innerHTML = 'Dias';
    textHours.innerHTML = 'Horas';
    textMinutes.innerHTML = 'Minutos';
    textSeconds.innerHTML = 'Segundos';

  }

  function celebrateBDay(yearBday, monthBday, nameUser) {

    yearBday = parseInt(yearBday);

    monthBday = monthBday;

    age = yearToday - yearBday;

    nameUser = nameUser;

    defaultPage();

    ageEl.textContent = `PARABÉNS ${nameUser.toUpperCase()} COMEMORE SEU ${age}ª ANIVERSÁRIO!`;
    textSubTop.textContent = '';
  }
})();

