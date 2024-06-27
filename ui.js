function UI() {

}
UI.prototype.addFilmToUI = function (newFlim) {
  /*  <!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> -->
<!-- <tr>  */

  const filmList = document.querySelector("#films");

  filmList.innerHTML += `
     <tr>
       <td><img src="${newFlim.url}" class="img-fluid img-thumbnail"></td>
       <td>${newFlim.title}</td>
       <td>${newFlim.director}</td>
       <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr>
     `

}
UI.prototype.clearInput = function (el1, el2, el3) {
  el1.value = "";
  el2.value = "";
  el3.value = "";
}
UI.prototype.displayMessages = function (message, type) {
  const cardBody = document.querySelectorAll(".card-body")[0]
  // alert divi

  const div = document.createElement("div");

  div.className = `alert alert-${type}`
  div.textContent = message;

  cardBody.appendChild(div);

  setTimeout(function () {
    div.remove();
  }, 2000)

}

UI.prototype.loadAllFilms = function (films) {

  const filmList = document.getElementById("films");

  films.forEach(function (film) {
    filmList.innerHTML +=
      `
     <tr>
       <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
       <td>${film.title}</td>
       <td>${film.director}</td>
       <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr>
     `
  })


}
UI.prototype.deleteFilmFromUI = function (element) {

  element.parentElement.parentElement.remove();

}