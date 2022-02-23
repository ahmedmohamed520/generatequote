"use strict";
const advice = document.getElementById("advice");
const id = document.getElementById("id");
const roll = document.querySelector(".dice");
const getData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    if (advice.textContent === data.slip.advice) {
        getData();
        return;
    }
    advice.textContent = '"' + data.slip.advice + '"';
    id.textContent = "#" + data.slip.id;
};
getData();
roll.addEventListener("click", () => {
    getData();
});
