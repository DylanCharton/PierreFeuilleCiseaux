// Creating an array with the play choices
const shifumi = ["Pierre", "Feuille", "Ciseaux", "Spock", "Lézard"];
// Initializing my buttons in variables
let stoneBtn = document.getElementById("stone");
let leafBtn = document.getElementById("leaf");
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
        alert("Votre adversaire joue " + counter + ", perdu !");
    } else if (counter == shifumi[0]) {
        // Nothing happens...
        alert("Égalité !");
    } else {
        // If the choice of the computer is NOT one of the indexes above, the player wins
        myScore++;
        myCounter.innerHTML = myScore;
        alert("Votre adversaire joue " + counter + ", gagné !");
    }
    // Second loop to reinitialize the score when one of the players wins
    // If the player or the computer reaches 3, the score is set to 0 and so are the score fields
    if (myScore === 3) {
        myScore = 0;
        compScore = 0;
        myCounter.innerHTML = 0;
        compCounter.innerHTML = 0;
        alert("Vous avez gagné ! Félicitations !");

    } else if (compScore === 3) {
        myScore = 0;
        compScore = 0;
        myCounter.innerHTML = 0;
        compCounter.innerHTML = 0;
        alert("Vous avez perdu. Retentez votre chance.");

    }

});
// Button to reinitialize the score field during the game
document.getElementById("init").addEventListener("click", function() {
    myScore = 0;
    compScore = 0;
    myCounter.innerHTML = 0;
    compCounter.innerHTML = 0;
});