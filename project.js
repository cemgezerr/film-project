const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");


// UI Objesini Başlatma
const ui = new UI();

// Storage Objesi üret
const storage = new Storage();

// Tüm eventleri yükleme

eventListeners();


function eventListeners() {
     form.addEventListener("submit", addFilm);
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


