const checkbox = document.querySelector("input[id=tgl]");
checkbox.addEventListener('change', function(){
  document.body.classList.toggle("dark-theme");
});
