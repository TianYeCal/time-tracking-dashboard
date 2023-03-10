const workHour = document.querySelector(".work-hours .hours");
const lastWorkHour = document.querySelector(".work-hours .last-hour");
const playHour = document.querySelector(".play-hours .hours");
const lastPlayHour = document.querySelector(".play-hours .last-hour");
const studyHour = document.querySelector(".study-hours .hours");
const lastStudyHour = document.querySelector(".study-hours .last-hour");
const exerciseHour = document.querySelector(".exercise-hours .hours");
const lastExerciseHour = document.querySelector(".exercise-hours .last-hour");
const socialHour = document.querySelector(".social-hours .hours");
const lastSocialHour = document.querySelector(".social-hours .last-hour");
const selfcareHour = document.querySelector(".selfcare-hours .hours");
const lastSelfcareHour = document.querySelector(".selfcare-hours .last-hour");
const dailyBtn = document.querySelector(".daily");
const weeklyBtn = document.querySelector(".weekly");
const monthlyBtn = document.querySelector(".monthly");

const getWeeklyData = async function () {
  const res = await fetch("./data.json");
  const data = await res.json();
  console.log(data);
  workHour.innerHTML = `${data[0].timeframes.weekly.current}hrs`;
  lastWorkHour.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
  playHour.innerHTML = `${data[1].timeframes.weekly.current}hrs`;
  lastPlayHour.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
  studyHour.innerHTML = `${data[2].timeframes.weekly.current}hrs`;
  lastStudyHour.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
  exerciseHour.innerHTML = `${data[3].timeframes.weekly.current}hrs`;
  lastExerciseHour.innerHTML = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
  socialHour.innerHTML = `${data[4].timeframes.weekly.current}hrs`;
  lastSocialHour.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
  selfcareHour.innerHTML = `${data[5].timeframes.weekly.current}hrs`;
  lastSelfcareHour.innerHTML = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
};
const getDailyData = async function () {
  const res = await fetch("./data.json");
  const data = await res.json();
  console.log(data);
  workHour.innerHTML = `${data[0].timeframes.daily.current}hrs`;
  lastWorkHour.innerHTML = `Yesterday - ${data[0].timeframes.daily.previous}hrs`;
  playHour.innerHTML = `${data[1].timeframes.daily.current}hrs`;
  lastPlayHour.innerHTML = `Yesterday - ${data[1].timeframes.daily.previous}hrs`;
  studyHour.innerHTML = `${data[2].timeframes.daily.current}hrs`;
  lastStudyHour.innerHTML = `Yesterday - ${data[2].timeframes.daily.previous}hrs`;
  exerciseHour.innerHTML = `${data[3].timeframes.daily.current}hrs`;
  lastExerciseHour.innerHTML = `Yesterday - ${data[3].timeframes.daily.previous}hrs`;
  socialHour.innerHTML = `${data[4].timeframes.daily.current}hrs`;
  lastSocialHour.innerHTML = `Yesterday - ${data[4].timeframes.daily.previous}hrs`;
  selfcareHour.innerHTML = `${data[5].timeframes.daily.current}hrs`;
  lastSelfcareHour.innerHTML = `Yesterday - ${data[5].timeframes.daily.previous}hrs`;
};
const getMonthlyData = async function () {
  const res = await fetch("./data.json");
  const data = await res.json();
  console.log(data);
  workHour.innerHTML = `${data[0].timeframes.monthly.current}hrs`;
  lastWorkHour.innerHTML = `Last month - ${data[0].timeframes.monthly.previous}hrs`;
  playHour.innerHTML = `${data[1].timeframes.monthly.current}hrs`;
  lastPlayHour.innerHTML = `Last month - ${data[1].timeframes.monthly.previous}hrs`;
  studyHour.innerHTML = `${data[2].timeframes.monthly.current}hrs`;
  lastStudyHour.innerHTML = `Last month - ${data[2].timeframes.monthly.previous}hrs`;
  exerciseHour.innerHTML = `${data[3].timeframes.monthly.current}hrs`;
  lastExerciseHour.innerHTML = `Last month - ${data[3].timeframes.monthly.previous}hrs`;
  socialHour.innerHTML = `${data[4].timeframes.monthly.current}hrs`;
  lastSocialHour.innerHTML = `Last month - ${data[4].timeframes.monthly.previous}hrs`;
  selfcareHour.innerHTML = `${data[5].timeframes.monthly.current}hrs`;
  lastSelfcareHour.innerHTML = `Last month - ${data[5].timeframes.monthly.previous}hrs`;
};
getWeeklyData();
dailyBtn.addEventListener("click", getDailyData);
weeklyBtn.addEventListener("click", getWeeklyData);
monthlyBtn.addEventListener("click", getMonthlyData);
