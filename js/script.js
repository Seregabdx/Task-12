"use strict";

const movieDB = {
  movies: [
    "логан",
    "лига справедливости",
    "ла-ла лэнд",
    "одержимость",
    "скотт пилигрим против...",
  ],
};

function deleteAdv() {
  //задание 1
  let promo = document.querySelector(".promo__adv");
  promo.innerHTML = "";
}

function changeGenre() {
  //задание 2
  let genre = document.querySelector(".promo__genre");
  genre.textContent = "драма";
}

function changeBackground() {
  //задание 3
  let image = document.querySelector(".promo__bg");
  image.style.background = `url("../img/bg.jpg")`;
}

function changeFilmList() {
  //задание 4-5
  let films = document.querySelectorAll(".promo__interactive-item");
  movieDB.movies.sort();
  films.forEach(
    (film, index) =>
      (film.textContent = index + 1 + ". " + movieDB.movies[index])
  );
}

function reloadFilmList() {
  let filmList = document.querySelector(".promo__interactive-list");
  filmList.innerHTML = "";
  movieDB.movies.forEach((film, index) => {
    let filmName;
    film.length > 20
      ? (filmName = film.slice(0, 21) + "...")
      : (filmName = film);
    let liElement = document.createElement("li");
    liElement.className = "promo__interactive-item";
    liElement.innerHTML = `${
      index + 1
    }. ${filmName} <div class="delete"></div>`;
    filmList.append(liElement);
  });
}

function addListner() {
  let deleteButton = document.querySelectorAll(".delete");
  deleteButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      let parent = button.parentNode;
      let filmName = parent.textContent;
      let indexElem = filmName.slice(".")[0];
      movieDB.movies.splice(indexElem - 1, 1);
      reloadFilmList();
      addListner();
    });
  });
}

// deleteAdv();
// changeGenre();
// changeBackground();
changeFilmList();
reloadFilmList();
addListner();

let submitButton = document.querySelector(".add").querySelector("button");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let filmName = document.querySelector(".adding__input").value;
  let favorite = document.querySelectorAll("input")[2].checked;
  movieDB.movies.push(filmName.toLowerCase());
  if (favorite) {
    console.log("Добавляем любимый фильм");
  }
  movieDB.movies.sort();
  reloadFilmList();
  addListner();
});
