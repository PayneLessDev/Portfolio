const checkbox = document.getElementById("tgl");
const burger = document.getElementById("burger")
const overlay = document.getElementById("overlay")
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");


burger.addEventListener('change', function(){
    document.getElementById("overlay").classList.toggle("hidden");
});


checkbox.addEventListener("click", function() {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
  } else {
    document.body.classList.toggle("dark-theme");
  }
});


var quotes = [
    'one',
    'two',
    'three',
]
function newQuote(){
var randomNumber = Math.floor(Math.random() * 20);
    document.getElementById('quote').innerHTML = quotes[randonNumber];
console.log(randomNumber)
}
document.getElementById("container-main").addEventListener("load", randomNumber);
