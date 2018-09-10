var massive = document.getElementById("adult-amout");
var value = massive.value;
var minusButton = document.querySelector(".minus");


function deleteClass() {
  minusButton.classList.remove("error-class");
}


function changeValue(button, massive) {
  var value = document.getElementById(massive).value;

  button.addEventListener("click", function(evt) {
        evt.preventDefault();
          if (button === ".plus") {
            value++;
          } else {
            value--;
          }
                  return value;
        });


}

var tempo = changeValue(minusButton, massive);

console.log(tempo);