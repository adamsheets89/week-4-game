$(document).ready(function () {

    var crystals = {
        blue: {
            name: "blue",
            value: 0
        },
        green: {
            name: "green",
            value: 0
        },
        red: {
            name: "red",
            value: 0
        },
        yellow: {
            name: "yellow",
            value: 0
        }
    };

    var wins = 0;
    var losses = 0;
    var currentScore;
    var targetScore;

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function startGame() {

        currentScore = 0;

        targetScore = getRandom(19, 120);

        crystals.blue.value = getRandom(1, 12);
        crystals.green.value = getRandom(1, 12);
        crystals.red.value = getRandom(1, 12);
        crystals.yellow.value = getRandom(1, 12);

        var allButtons = $(".number")

        // for each button, assign a data-number value grabbed from the crystals object
        for (var i = 0; i < allButtons.length; i++) {
            var button = allButtons[i]
            // console.log("allButtons value", button.value)
            //for each individual button assign the random number to its data number attribute (stored value)
            var color = button.value;
            var buttonNumber = crystals[color].value
            $(button).attr("data-number", buttonNumber)
        }


        // console.log($(".number").length)
        console.log(crystals.blue.value)
        console.log(crystals.green.value)
        console.log(crystals.red.value)
        console.log(crystals.yellow.value)
        console.log(targetScore)

        $("#your-score").html(currentScore);
        $("#target-score").html(targetScore);
        $("#wins").html(wins);
        $("#losses").html(losses);

    }

    function checkWins() {

        if (currentScore === targetScore) {
            wins++;
            alert("You Win!")
            startGame()

        }
        else if (currentScore > targetScore) {
            losses++;
            alert("You Lose!")
            startGame()

        }
    }

    //Logic 

    startGame()


    //react to the user's click 
    $(".number").on("click", function () {
        
        //get the clicked crystal
        var clickedCrystal = $(this)
        //get the clicked crystal's data number attribute
        var userPick = clickedCrystal.attr("data-number");
        //add value crystal to current score
        var y = parseInt(userPick)
        currentScore += y
        $("#your-score").text(currentScore)
        console.log(currentScore)
        checkWins()
  
    });

});