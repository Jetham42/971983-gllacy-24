var body = document.querySelector("body");
var contact = document.querySelector(".contact-button");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".close-button");

var forename = document.querySelector(".feedback-form-item [name=name]");
var email = document.querySelector(".feedback-form-item [name=email]");
var text = document.querySelector(".feedback-form-item [name=text-field]");
var form = document.querySelector(".feedback-form");

var isStorageSupport = true;
var forenameStorage;
var emailStorage;

var sliderNav = document.querySelectorAll(".slider-nav-button");
var sliderItems = document.querySelectorAll(".slider-item");
var currentSlide = document.querySelector(".slider-item-current");

try {
  forenameStorage = localStorage.getItem("name");
  emailStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
};

contact.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup");
  body.classList.add("blackout");
  popup.classList.add("modal-bounce");

  if (forenameStorage) {
    forename.value = forenameStorage;
    email.focus();
  } else {
    if (forenameStorage && emailStorage) {
      forename.value = forenameStorage;
      email.value = emailStorage;
      text.focus();
    } else {
    forename.focus();
    } 
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  body.classList.remove("blackout");
  popup.classList.add("popup");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!forename.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", forename.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!(popup.classList.contains("popup"))) {
      body.classList.remove("blackout");
      popup.classList.add("popup");
      popup.classList.remove("modal-error");
    }
  }
});

for (var i = 0; i < sliderNav.length; i++) {
  sliderNav[i].addEventListener("click", function(evt) {
    var index = i;
    currentSlide.classList.remove("slider-item-current");
    console.log(i);
    sliderItems[index].classList.add("slider-item-current");
  })

};