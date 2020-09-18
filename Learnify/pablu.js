function myDark() {
  document.querySelector(".container").style.backgroundColor = "black";
  document.querySelector(".content").style.backgroundColor = "black";
  document.querySelector(".content").style.color = "white";
  document.getElementById("myBtn").style.backgroundColor = "white";
  document.getElementById("myBtn").style.color = "black";

  document.getElementById("backy").style.backgroundColor = "white";
  document.getElementById("lav1").style.color = "black";
  document.getElementById("test").style.backgroundColor = "red";
  document.getElementById("lav2").style.color = "white";
}

function myLight() {
  document.querySelector(".container").style.backgroundColor = "white";
  document.querySelector(".content").style.backgroundColor = "white";
  document.querySelector(".content").style.color = "black";
  document.getElementById("myBtn").style.backgroundColor = "black";
  document.getElementById("myBtn").style.color = "white";

  document.getElementById("backy").style.backgroundColor = "black";
  document.getElementById("lav1").style.color = "white";
  document.getElementById("test").style.backgroundColor = "red";
  document.getElementById("lav2").style.color = "white";
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}

// Section for modal

var parent = document.querySelector(".modal-parent"),
  btn = document.querySelector(".homework-back1"),
  X = document.querySelector(".X"),
  section = document.querySelector("section");

btn.addEventListener("click", appear);

function appear() {
  parent.style.display = "block";
  section.style.filter = "blur(10px)";
}

X.addEventListener("click", disappearX);

function disappearX() {
  parent.style.display = "none";
  section.style.filter = "blur(0px)";
}

parent.addEventListener("click", disappearParent);

function disappearParent(e) {
  if (e.target.className == "modal-parent") {
    parent.style.display = "none";
    section.style.filter = "blur(0px)";
  }
}
