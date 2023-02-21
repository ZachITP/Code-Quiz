
var highscore = document.querySelector ("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack")

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !==null) {

    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("Li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highscore.appendChild(createLi);

    }
}

goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});