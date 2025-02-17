let btn = document.querySelector("#btnUp");
let nav = document.getElementById("nav");

window.onscroll = function () {
  // Handle the scroll for the button visibility
  if (window.scrollY >= 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }

  // Handle the scroll for navbar background color
  if (window.scrollY >= 150) {
    nav.style.backgroundColor = "#111";
  } else {
    nav.style.backgroundColor = "transparent";
  }
};

// Scroll to the top when button is clicked
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});
//remove active class from all and add to clicked
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
//mange images
function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
