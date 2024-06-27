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