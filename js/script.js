var button = document.querySelector(".search-button-brown");
var searchForm = document.querySelector(".search-form");
var dateOfCheckIn = searchForm.querySelector("[name = date-of-checkin");


searchForm.classList.add("search-form-display-js");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  searchForm.classList.toggle("search-form-display-js");
  dateOfCheckIn.focus();


});

var value = document.getElementById("adult-amout").value;
var minusButton = document.querySelector(".minus");

minusButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (value<= 0) {

  	minusButton.classList.add ("error-class");

  } else {
  	

  value--;
  document.getElementById("adult-amout").value = value;
}

});

var plusButton = document.querySelector(".plus");

plusButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (value === 10) {

    plusButton.classList.add ("error-class");

  } else {
    

  value++;
  document.getElementById("adult-amout").value = value;
}

});

