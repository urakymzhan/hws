
var open = document.querySelector("#open");
var door = document.querySelector("#door");
var close = document.querySelector("#close");
var header = document.querySelector("#header");

open.addEventListener('click', function() {
    close.style.display = "inline";
    open.style.display = "none";
    header.style.display = "none";
    door.classList.toggle('door-open');
});

close.addEventListener('click', function() {
    header.style.display = "block";
    close.style.display = "none";
    open.style.display = "inline";
    door.classList.toggle('door-open');
});
