// Question 1
var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// Question 2
for (let CountTo25 = 15; CountTo25 < 26; CountTo25++) {
    if (CountTo25 === 17 || CountTo25 === 20) 
    console.log(CountTo25);
}


// Question 3


// Question 4


// Question 5


// Question 6
var head = document.querySelector("title");
var classButton = document.querySelector("button.page");
var body = document.querySelector("body");
var h1 = document.querySelector("h1");

function changePage() {
    head.innerHTML = "Updated title";
    body.style.backgroundColor = "yellow";
    h1.style.color = "green";
    h1.style.fontFamily = "impact";
}

classButton.onclick = changePage;


// Question 7