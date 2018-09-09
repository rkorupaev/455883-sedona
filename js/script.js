var button = document.querySelector(".search-button-brown");
var searchForm = document.querySelector(".search-form");
var dateOfCheckIn = searchForm.querySelector("[name = date-of-checkin");


searchForm.classList.add("search-form-display-js");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  searchForm.classList.toggle("search-form-display-js");
  dateOfCheckIn.focus();


});


var massive = document.getElementById("adult-amout");
var value = massive.value;
var minusButton = document.querySelector(".minus");

minusButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (value<= 0) {
  	value = 0;

  	minusButton.classList.add ("error-class");
  	// setTimeout(deleteClass() , 10000);


  } else {
  	

  value--;
  document.getElementById("adult-amout").value = value;
}

});