"use strict";

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector(`.btn-convert`);
const lengthEl = document.querySelector(`.length-p`);
const volumeEl = document.querySelector(`.volume-p`);
const massEl = document.querySelector(`.mass-p`);
const inputEl = document.querySelector(`#input-num`);

convertBtn.addEventListener(`click`, function () {
  const inputValue = inputEl.value;
  const toFeet = inputValue * 3.281;
  const toMeters = inputValue / 3.281;
  const toGallons = inputValue * 0.264;
  const toLiters = inputValue / 0.264;
  const toPounds = inputValue * 2.204;
  const toKilos = inputValue / 2.205;

  lengthEl.textContent = `${inputValue} meters = ${toFeet.toFixed(
    3
  )} feet | ${inputValue} feet = ${toMeters.toFixed(3)} meters`;

  volumeEl.textContent = `${inputValue} liters = ${toGallons.toFixed(
    3
  )} gallons | ${inputValue} gallons = ${toLiters.toFixed(3)} liters`;

  massEl.textContent = `${inputValue} kilos = ${toPounds.toFixed(
    3
  )} pounds | ${inputValue} pounds = ${toKilos.toFixed(3)} kilos`;
});
