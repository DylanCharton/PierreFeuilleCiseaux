
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
let myChoice = document.getElementById("my-choice");
let compChoice = document.getElementById("comp-choice");
// Setting the scores to 0
let myScore = 0;
let compScore = 0;
let numberWins = document.getElementById("number-wins");
let numberLost = document.getElementById("number-lost");
let myWins = JSON.parse(window.localStorage.getItem("monScore"))|| 0;
let yourWins = JSON.parse(window.localStorage.getItem("tonScore"))|| 0;
numberWins.innerHTML = JSON.parse(window.localStorage.getItem("monScore"))|| 0;
numberLost.innerHTML = JSON.parse(window.localStorage.getItem("tonScore"))|| 0;

let myRock = document.createElement("img");
myRock.src = "images/rockcardplayer.png";
myRock.className = "slide";
let myPaper = document.createElement("img");
myPaper.src = "images/papercardplayer.png";
myPaper.className = "slide";
let myScissors = document.createElement("img");
myScissors.src = "images/scissorscardplayer.png";
myScissors.className = "slide";
let mySpock = document.createElement("img");
mySpock.src = "images/spockcardplayer.png";
mySpock.className = "slide";
let myLizard = document.createElement("img");
myLizard.src = "images/lizardcardplayer.png";
myLizard.className = "slide";

let yourRock = document.createElement("img");
yourRock.src = "images/rockcardcomp.png";
yourRock.className = "slide";
let yourPaper = document.createElement("img");
yourPaper.src = "images/papercardcomp.png";
yourPaper.className = "slide";
let yourScissors = document.createElement("img");
yourScissors.src = "images/scissorscardcomp.png";
yourScissors.className = "slide";
let yourSpock = document.createElement("img");
yourSpock.src = "images/spockcardcomp.png";
yourSpock.className = "slide";
let yourLizard = document.createElement("img");
yourLizard.src = "images/lizardcardcomp.png";
yourLizard.className = "slide";

function removeCards(){
    if (compChoice.hasChildNodes() || myChoice.hasChildNodes()) {
        compChoice.removeChild(compChoice.firstChild);
        myChoice.removeChild(myChoice.firstChild);
    }
}
function reinit(){
    myScore = 0;
    compScore = 0;
    myCounter.innerHTML = 0;
    compCounter.innerHTML = 0;
    comment.innerHTML = "Choisissez une carte."
    removeCards()
}
document.getElementById("init").addEventListener("click", function() {
    reinit()
});


stoneBtn.addEventListener("click", function () {
    let counter = shifumi[Math.floor(Math.random() * shifumi.length)];
    removeCards();
    myChoice.appendChild(myRock);
    if(counter == shifumi[1] || counter == shifumi[3]){
        compScore ++
        compCounter.innerHTML = compScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", perdu !";
        if(counter == shifumi[1]){   
            compChoice.appendChild(yourPaper)
        } else if (counter == shifumi[3]) { 
            compChoice.appendChild(yourSpock)
        }
    } else if (counter == shifumi[2] || counter == shifumi[4]){
        myScore ++;
        myCounter.innerHTML = myScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", gagné !"
        if (counter == shifumi[2]){
            compChoice.appendChild(yourScissors);
        }
        else if (counter == shifumi[4]){
            compChoice.appendChild(yourLizard);    
        }
    } else {
        compChoice.appendChild(yourRock);
        comment.innerHTML = "Égalité";
    }
    result()    
});
scissorsBtn.addEventListener("click", function () {
    let counter = shifumi[Math.floor(Math.random() * shifumi.length)];
    removeCards();
    myChoice.appendChild(myScissors);
    if(counter == shifumi[0] || counter == shifumi[3]){
        compScore ++;
        compCounter.innerHTML = compScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", perdu !";
        if(counter == shifumi[0]){
            compChoice.appendChild(yourRock)
        } else if (counter == shifumi[3]) {
            compChoice.appendChild(yourSpock)
        }
    } else if (counter == shifumi[1] || counter == shifumi[4]){
        myScore ++;
        myCounter.innerHTML = myScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", gagné !"
        if (counter == shifumi[1]){
            compChoice.appendChild(yourPaper);
        }
        else if (counter == shifumi[4]){
            compChoice.appendChild(yourLizard);    
        }
    } else {
        compChoice.appendChild(yourScissors);
        comment.innerHTML = "Égalité";
    }
    result()    
});
paperBtn.addEventListener("click", function () {
    let counter = shifumi[Math.floor(Math.random() * shifumi.length)];
    removeCards();
    myChoice.appendChild(myPaper);
    if(counter == shifumi[2] || counter == shifumi[4]){
        compScore ++;
        compCounter.innerHTML = compScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", perdu !";
        if(counter == shifumi[2]){
            compChoice.appendChild(yourScissors)
        } else if (counter == shifumi[4]) {   
            compChoice.appendChild(yourLizard)
        }
    } else if (counter == shifumi[0] || counter == shifumi[3]){
        myScore ++;
        myCounter.innerHTML = myScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", gagné !"
        if (counter == shifumi[0]){
            compChoice.appendChild(yourRock);
        }
        else if (counter == shifumi[3]){
            compChoice.appendChild(yourSpock);    
        }
    } else {
        compChoice.appendChild(yourPaper);
        comment.innerHTML = "Égalité";
    }
    result()    
});
spockBtn.addEventListener("click", function () {
    let counter = shifumi[Math.floor(Math.random() * shifumi.length)];
    removeCards();
    myChoice.appendChild(mySpock);
    if(counter == shifumi[1] || counter == shifumi[4]){
        compScore ++;
        compCounter.innerHTML = compScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", perdu !";
        if(counter == shifumi[1]){
            compChoice.appendChild(yourPaper)
        } else if (counter == shifumi[4]) {
            compChoice.appendChild(yourLizard)
        }
    } else if (counter == shifumi[0] || counter == shifumi[2]){
        myScore ++;
        myCounter.innerHTML = myScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", gagné !"
        if (counter == shifumi[0]){
            compChoice.appendChild(yourRock);
        }
        else if (counter == shifumi[2]){
            compChoice.appendChild(yourScissors);    
        }
    } else {
        compChoice.appendChild(yourSpock);
        comment.innerHTML = "Égalité";
    }
    result()    
});
lizardBtn.addEventListener("click", function () {
    let counter = shifumi[Math.floor(Math.random() * shifumi.length)];
    removeCards();
    myChoice.appendChild(myLizard);
    if(counter == shifumi[0] || counter == shifumi[2]){
        compScore ++;
        compCounter.innerHTML = compScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", perdu !";
        if(counter == shifumi[0]){
            compChoice.appendChild(yourRock)
        } else if (counter == shifumi[2]) {
            compChoice.appendChild(yourScissors)
        }
    } else if (counter == shifumi[3] || counter == shifumi[1]){
        myScore ++;
        myCounter.innerHTML = myScore;
        comment.innerHTML = "Votre adversaire joue " + counter + ", gagné !"
        if (counter == shifumi[3]){
            compChoice.appendChild(yourSpock);
        }
        else if (counter == shifumi[1]){
            compChoice.appendChild(yourPaper);    
        }
    } else {
        compChoice.appendChild(yourSpock);
        comment.innerHTML = "Égalité";
    }
    result()    
});

function result(){

    if (myScore == 3) {
        reinit()
        alert("Vous avez gagné ! Félicitations !");
        myWins++
    } else if (compScore == 3) {
        reinit()
        alert("Vous avez perdu. Retentez votre chance.");
        yourWins++
    }    
    window.localStorage.setItem("monScore", JSON.stringify(myWins));
    window.localStorage.setItem("tonScore", JSON.stringify(yourWins));
    numberWins.innerHTML = JSON.parse(window.localStorage.getItem("monScore"))|| 0;
    numberLost.innerHTML = JSON.parse(window.localStorage.getItem("tonScore"))|| 0;
}




