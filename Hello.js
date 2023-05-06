console.log("Czesc Ninusia");
document.getElementById("Meeting").textContent ="Goodnight guys" 
document.getElementById("Farwell").textContent ="Goodnight now Nina"

let numberOfClicks = 0
const button = document.querySelector("button");
button.addEventListener("click", (event) => {

if (numberOfClicks > 9) {
numberOfClicks = numberOfClicks - 1
} else {
  numberOfClicks = numberOfClicks + 1

}

  console.log(numberOfClicks);
  document.getElementById("Farwell").textContent ="You've just clicked" 
  document.getElementById("CurrentCount").textContent ="Click count " + numberOfClicks
});

