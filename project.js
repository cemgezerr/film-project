const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


// UI Objesini Başlatma
const ui = new UI();

// Storage Objesi üret
const storage = new Storage();

// Tüm eventleri yükleme

eventListeners();


function eventListeners() {
     form.addEventListener("submit", addFilm);
     document.addEventListener("DOMContentLoaded", function () {
          let films = storage.getFilmsFromStorage();
          ui.loadAllFilms(films);
     })
     cardBody.addEventListener("click", deleteFilm);
     clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
     const title = titleElement.value;
     const director = directorElement.value;
     const url = urlElement.value;

     if (title === "" || director === "" || url === "") {
          //hata
          ui.displayMessages("Tüm alanları doldurun...", "danger")
     } else {
          //yeni film
          const newFlim = new Film(title, director, url);

          ui.displayMessages("Başarılı", "success")

          storage.addFilmToStorage(newFlim); // Storage film ekleme

          ui.addFilmToUI(newFlim) // arayüze film ekleme
     }


     ui.clearInput(titleElement, directorElement, urlElement);

     e.preventDefault();
}

function deleteFilm(e) {

     if (e.target.id === "delete-film") {
          ui.deleteFilmFromUI(e.target);
          storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

          ui.displayMessages("silme işlemi başarılı...", "success");
     }

}

function clearAllFilms() {
     if (confirm("emin misiniz ?")) {
          ui.clearAllFilmsFromUI();
          storage.clearAllFilmsFromStorage();
     }

}

