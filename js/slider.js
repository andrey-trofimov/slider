document.addEventListener("DOMContentLoaded", slider);

let imgNumber = 0;
let projectsList = {};
let navDot = {};
const urlBase = "./images/slider/";

const project = [
  {
    city: "Rostov-on-Don<br>LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request",
    fileName: "admiral.jpg",
    alt: "Rostov-on-Don Admiral",
  },

  {
    city: "Sochi<br>Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request",
    fileName: "thieves.jpg",
    alt: "Sochi Thieves",
  },

  {
    city: "Rostov-on-Don<br>Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request",
    fileName: "patriotic.jpg",
    alt: "Rostov-on-Don Patriotic",
  },
];

function slider() {
  navDot = document.querySelectorAll(".dot");
  projectsList = document.querySelectorAll(".projects-list a");

  checkArrowsNav();
  checkDotsNav();
  checkListNav();
}

function checkArrowsNav() {
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const leftArrowMobile = document.querySelector(".left-arrow-mobile");
  const rightArrowMobile = document.querySelector(".right-arrow-mobile");

  leftArrow.addEventListener("click", setPreviousNumber);
  rightArrow.addEventListener("click", setNextNumber);
  leftArrowMobile.addEventListener("click", setPreviousNumber);
  rightArrowMobile.addEventListener("click", setNextNumber);
}

function setNextNumber() {
  imgNumber = imgNumber === project.length - 1 ? 0 : imgNumber + 1;
  showData(imgNumber);
}

function setPreviousNumber() {
  imgNumber = imgNumber === 0 ? project.length - 1 : imgNumber - 1;
  showData(imgNumber);
}

function checkDotsNav() {
  setNumber(navDot);
}

function checkListNav() {
  setNumber(projectsList);
}

function setNumber(list) {
  list.forEach((element, number) => {
    element.addEventListener("click", () => {
      imgNumber = number;
      showData(number);
    });
  });
}

function showData(imgNumber) {
  const projectCity = document.querySelector("#project-city");
  const projectArea = document.querySelector("#project-area");
  const projectTime = document.querySelector("#project-time");
  const projectCost = document.querySelector("#project-cost");
  const sliderImg = document.querySelector(".slider img");

  projectCity.innerHTML = project[imgNumber].city;
  projectArea.innerHTML = project[imgNumber].area;
  projectTime.innerHTML = project[imgNumber].time;
  projectCost.innerHTML = project[imgNumber].cost;

  sliderImg.setAttribute("src", `${urlBase}${project[imgNumber].fileName}`);

  projectsList.forEach((element) => (element.className = ""));
  navDot.forEach((element) => (element.className = "dot"));

  projectsList[imgNumber].className = "active";
  navDot[imgNumber].className = "dot active";
}
