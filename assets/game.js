
var wins = 0;
var losses = 0;
var totalScore = 0;
$(".total-score").text(totalScore);

var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);

var red = Math.floor(Math.random() * 12) + 1;
console.log(red);
var blue = Math.floor(Math.random() * 12) + 1;
console.log(blue);
var yellow = Math.floor(Math.random() * 12) + 1;
console.log(yellow);
var green = Math.floor(Math.random() * 12) + 1;
console.log(green);


function reset() {
     totalScore = 0;
    $(".total-score").text(totalScore);

    targetNumber = Math.floor(Math.random() * 101) + 19;
    $("#targetNumber").text(targetNumber);

    red = Math.floor(Math.random() * 12) + 1;
    blue = Math.floor(Math.random() * 12) + 1;
    yellow = Math.floor(Math.random() * 12) + 1;
    green = Math.floor(Math.random() * 12) + 1;

}


$("#red").on("click", function () {
    totalScore = totalScore + red;
    $(".total-score").text(totalScore);
    console.log(totalScore);
    if (totalScore === targetNumber) {
        wins++;
        reset();
        $("#wins").text("wins: " + wins);
    }
    else if (totalScore > targetNumber) {
        losses++;
        reset();
        $("#losses").text("losses: " + losses);
        
    }
    
});


$("#blue").on("click", function () {
    totalScore = totalScore + blue;
    $(".total-score").text(totalScore);
    console.log(totalScore);
    if (totalScore === targetNumber) {
        wins++;
        reset();
        $("#wins").text("wins: " + wins);
    }
    else if (totalScore > targetNumber) {
        losses++;
        reset();
        $("#losses").text("losses: " + losses);
        
    }
});

$("#yellow").on("click", function () {
    totalScore = totalScore + yellow;
    $(".total-score").text(totalScore);
    console.log(totalScore);
    if (totalScore === targetNumber) {
        wins++;
        reset()
        $("#wins").text("wins: " + wins);
    }
    else if (totalScore > targetNumber) {
        losses++;
        reset();
        $("#losses").text("losses: " + losses);
    }
});

$("#green").on("click", function () {
    totalScore = totalScore + green;
    $(".total-score").text(totalScore);
    console.log(totalScore);
    if (totalScore === targetNumber) {
        wins++;
        reset();
        $("#wins").text("wins: " + wins);
    }

    else if (totalScore > targetNumber) {
        losses++;
        reset();
        $("#losses").text("losses: " + losses);
    }

    
});
 

