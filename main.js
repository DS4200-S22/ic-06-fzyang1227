/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    let randNum = Math.floor(Math.random()*100);
    console.log("Button 1 was clicked");
    let randomDiv = document.getElementById("random_num");
    randomDiv.innerHTML = randNum;
}

function button2Clicked() {
    let color = document.getElementById("circle1");
    console.log("Button 2 was clicked");
    console.log(color.style.cssText)
    if (color.style.fill == "blue") {
        color.style.fill = "green";
    } else {
        color.style.fill = "blue"
    }
}   