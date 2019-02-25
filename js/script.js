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
    var element = evt.target;
    var currentSlide = document.querySelector(".slider-item-current");
    currentSlide.classList.remove("slider-item-current");
    sliderItems[element.dataset.id].classList.add("slider-item-current");
    var currentSliderButoon = document.querySelector(".slider-nav-button-current");
    currentSliderButoon.classList.remove("slider-nav-button-current");
    element.classList.add("slider-nav-button-current");
    document.body.style.backgroundColor = element.dataset.color;
  })

};

function initMap() {
  var coordinates = {lat: 59.938723, lng: 30.323072},
  
      map = new google.maps.Map(document.getElementById("map"), {
          center: coordinates,
          zoom: 8,
          disableDefaultUI: true,
          scrollwheel: false,
      });

      image = "img/map-marker.svg",
      marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: image
      });
}