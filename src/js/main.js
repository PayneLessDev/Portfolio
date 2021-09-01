// Select the button
// const btn = document.querySelector(".btn-toggle");
const checkbox = document.querySelector("input[id=tgl]");
 
// Listen for a click on the button
// btn.addEventListener("click", function() {
checkbox.addEventListener('change', function(){
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
});
