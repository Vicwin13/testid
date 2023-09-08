let weekDay = document.querySelector("[data-testid = 'currentDayOfTheWeek']");
let dayOfWeek = new Date();
let options = { weekday: "long" };
let theDay = dayOfWeek.toLocaleDateString("en-NG", options);

weekDay.innerHTML = theDay;

let UTCTime = document.querySelector("[data-testid = 'currentUTCTime']");

let currentTime = new Date();

let newUTCTime = currentTime.getTime();

UTCTime.innerHTML = newUTCTime;

