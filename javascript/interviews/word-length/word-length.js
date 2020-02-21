
// word count

var button = document.getElementById('btn');

button.addEventListener('click', function(){
    let word = document.getElementById('str').value;
    let count = word.length;
    let outputDiv = document.getElementById('output');

    outputDiv.innerHTML = `<h1>${count}</h1>`
});


//  styling 

var style = document.querySelector(".style");
// var reset = document.getElementById("reset");
var wrapper = document.querySelector(".wrapper");


var addS = function addStyle() {
    wrapper.style.backgroundImage = "linear-gradient(to bottom, black, orange)";
    document.body.style.backgroundColor = "lightblue";
    style.style.backgroundColor = "black";
    style.style.color = "white";
    reset.style.backgroundColor = "black";
    reset.style.color = "white";
    // toggle is an option
}

style.addEventListener('mouseover', addS);
style.addEventListener('mouseout',  function(addS) {
    // TODO: ideally use this method, not working right now
    // document.querySelector(".style").removeEventListener('mouseover', 
    //     addS,
    //     false
    //     );
    wrapper.style.backgroundImage = "linear-gradient(to right, blue, red)";
    document.body.style.backgroundColor = "black";
    style.style.backgroundColor = "green";
    style.style.color = "black";
    reset.style.backgroundColor = "green";
    reset.style.color = "black";
});