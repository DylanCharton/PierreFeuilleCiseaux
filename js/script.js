
// Creating an array with the play choices
const shifumi = ["Pierre", "Feuille", "Ciseaux", "Spock", "Lézard"];
// Initializing my buttons in variables
let comment = document.getElementById("state");
let stoneBtn = document.getElementById("stone");
let paperBtn = document.getElementById("leaf");
let scissorsBtn = document.getElementById("scissors");
let spockBtn = document.getElementById("spock");
let lizardBtn = document.getElementById("lizard");
// Initializing the score field 
let myCounter = document.getElementById("myscore");
let compCounter = document.getElementById("compscore");
// Setting the scores to 0
let myScore = 0;
let compScore = 0;


// Rock button
stoneBtn.addEventListener("click", function () {
    // Randomizing the choice of the computer
    let counter = shifumi[Math.floor(Math.random() * shifumi.length)];
    // If the choice of the computer corresponds to the index [1] OR the index [3], the player lost and the computer's score increments by 1
    if (counter == shifumi[1] || counter == shifumi[3]) {
        compScore++;
        // Now I changed the score, I change what is displayed in the score field
        compCounter.innerHTML = compScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", perdu !";
    } else if (counter == shifumi[0]) {
        // Nothing happens...
        comment.innerHTML = "Votre adversaire joue " + counter + ", égalité !";
    } else {
        // If the choice of the computer is NOT one of the indexes above, the player wins
        myScore++;
        myCounter.innerHTML = myScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", gagné !";
    }
    result();
});
// Paper button
paperBtn.addEventListener("click", function () {   
    let counter = shifumi[Math.floor(Math.random() * shifumi.length)];   
    if (counter == shifumi[2] || counter == shifumi[4]) {
        compScore++;  
        compCounter.innerHTML = compScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", perdu !";
    } else if (counter == shifumi[1]) {    
        comment.innerHTML ="Votre adversaire joue "+ counter +", égalité !";
    } else {  
        myScore++;
        myCounter.innerHTML = myScore;
        comment.innerHTML ="Votre adversaire joue " + counter + ", gagné !";
    }
    result();
});
// Scissors button
scissorsBtn.addEventListener("click", function () {   
    let counter = shifumi[Math.floor(Math.random() * shifumi.length)];   
    if (counter == shifumi[0] || counter == shifumi[3]) {
        compScore++;  
        compCounter.innerHTML = compScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", perdu !";
    } else if (counter == shifumi[2]) {    
        comment.innerHTML ="Votre adversaire joue "+ counter +", égalité !";
    } else {  
        myScore++;
        myCounter.innerHTML = myScore;
        comment.innerHTML ="Votre adversaire joue " + counter + ", gagné !";
    }
    result();
});
// Spock button
spockBtn.addEventListener("click", function () {   
    let counter = shifumi[Math.floor(Math.random() * shifumi.length)];   
    if (counter == shifumi[1] || counter == shifumi[4]) {
        compScore++;  
        compCounter.innerHTML = compScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", perdu !";
    } else if (counter == shifumi[3]) {    
        comment.innerHTML ="Votre adversaire joue "+ counter +", égalité !";
    } else {  
        myScore++;
        myCounter.innerHTML = myScore;
        comment.innerHTML ="Votre adversaire joue " + counter + ", gagné !";
    }
    result();
});
// Lizard button
lizardBtn.addEventListener("click", function () {   
    let counter = shifumi[Math.floor(Math.random() * shifumi.length)];   
    if (counter == shifumi[2] || counter == shifumi[0]) {
        compScore++;  
        compCounter.innerHTML = compScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", perdu !";
    } else if (counter == shifumi[4]) {    
        comment.innerHTML ="Votre adversaire joue "+ counter +", égalité !";
    } else {  
        myScore++;
        myCounter.innerHTML = myScore;
        comment.innerHTML ="Votre adversaire joue " + counter + ", gagné !";
    }
    result();
});
// Button to reinitialize the score during the game
document.getElementById("init").addEventListener("click", function() {
    myScore = 0;
    compScore = 0;
    myCounter.innerHTML = 0;
    compCounter.innerHTML = 0;
});
let numberWins = document.getElementById("number-wins");
let numberLost = document.getElementById("number-lost");
let myWins = JSON.parse(window.localStorage.getItem("monScore"))|| 0;
let yourWins = JSON.parse(window.localStorage.getItem("tonScore"))|| 0;
numberWins.innerHTML = JSON.parse(window.localStorage.getItem("monScore"))|| 0;
    numberLost.innerHTML = JSON.parse(window.localStorage.getItem("tonScore"))|| 0;
function result(){
    if (myScore == 3) {
        myScore = 0;
        compScore = 0;
        myCounter.innerHTML = 0;
        compCounter.innerHTML = 0;
        comment.innerHTML += " Vous avez gagné ! Félicitations !";
        myWins++
        

    } else if (compScore == 3) {
        myScore = 0;
        compScore = 0;
        myCounter.innerHTML = 0;
        compCounter.innerHTML = 0;
        comment.innerHTML += " Vous avez perdu. Retentez votre chance.";
        yourWins++
        

    }
    console.log(numberWins);
    console.log(numberLost);
    window.localStorage.setItem("monScore", JSON.stringify(myWins));
    window.localStorage.setItem("tonScore", JSON.stringify(yourWins));
    
    
}


