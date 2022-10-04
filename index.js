// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

//event click on toggle la classe comment insérer une classe?

(function readyJS(win, doc) {
  "use strict";
  let btn = doc.querySelector("#btn");
  let sideBar = doc.querySelector(".sidebar");
  let sideBarShow = doc.querySelector(".sidebar-show");

  function toggle() {
    if (sideBar.classList.contains("sidebar-show")) {
      sideBar.classList.remove("sidebar-show");
    } else {
      sideBar.classList.add("sidebar-show");
    }
  }

  btn.addEventListener("click", toggle, false);
})(window, document);

//window.addEventListener("click", () => {
//Boutton = sideBar.style.transform = "translateX(" + 232 + "px) ";
//});
