var button = document.querySelector(".search-button-brown");
var searchForm = document.querySelector(".search-form");
var dateOfCheckIn = searchForm.querySelector("[name = date-of-checkin");


searchForm.classList.add("search-form-display-js");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  searchForm.classList.toggle("search-form-display-js");
  dateOfCheckIn.focus();


});
