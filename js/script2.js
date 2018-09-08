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


function deleteClass() {
	minusButton.classList.remove("error-class");
}