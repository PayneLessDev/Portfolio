const checkbox = document.getElementById("tgl");
const burger = document.getElementById("burger")
const overlay = document.getElementById("overlay")



checkbox.addEventListener('change', function(){
    document.body.classList.toggle("dark-theme");
});

burger.addEventListener('change', function(){
    document.getElementById("overlay").classList.toggle("hidden");
});
