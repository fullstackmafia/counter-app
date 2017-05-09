// Button Refrences
var plusButton = document.getElementById("increase-count");
var minusButton = document.getElementById("decrease-count");

// Counter Reference
var counter = document.getElementById("count");

// Function to increase count by one
plusButton.addEventListener("mouseover", function() {
    var counterInteger = parseInt(counter.innerHTML)
    var increasedValue = counterInteger + 1;
    counter.innerHTML = increasedValue;
});
 
// Function to reduce count by one
minusButton.addEventListener("mouseover", function() {
    var counterInteger = parseInt(counter.innerHTML)
    var decreasedValue = counterInteger - 1;
    counter.innerHTML = decreasedValue;
});








