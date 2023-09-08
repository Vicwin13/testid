let weekDay = document.querySelector(
  "[data-testid = 'currentDayOfTheWeek']"
);
let dayOfWeek = new Date();
let options = {weekday : 'long'}
let theDay = dayOfWeek.toLocaleDateString('en-NG', options)

weekDay.innerHTML = theDay;


let UTCTime = document.querySelector("[data-testid = 'currentUTCTime']");

let currentTime = new Date();

let newUTCTime = new Date(currentTime.getTime());

let hours = newUTCTime.getUTCHours();
let minutes = newUTCTime.getUTCMinutes();


UTCTime.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2,'0')} UTC`;