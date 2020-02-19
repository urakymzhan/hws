// create an array of image sources;
var images = [
    'image1.png', 'image2.png', 'image3.png','image4.png'
]
var i = 0;

//add initial image to canvas
var canvas = document.getElementById('canvas');
canvas.style.backgroundImage = `url(./img/${images[0]})`

//add eventListeners to arrows
var arrows = document.querySelectorAll('.arrow');

arrows.forEach(function(arrow){
    arrow.addEventListener('click', function(e){
                if (e.target.id === "left"){
            //check to see if at beginning of array
            i--;
            if (i < 0){
                i = images.length -1;
            }
            canvas.style.backgroundImage = `url(./img/${images[i]})`;
            } else if (e.target.id === "right") {
            i++;
            if (i >= images.length ){
                i = 0;
            }
            canvas.style.backgroundImage = `url(./img/${images[i]})`;
        }
    })
});