$(document).ready(function () {
var wins = 0;
var losses = 0;
var result = 0;

var randomNumber = Math.floor((Math.random() * 69) + 1);
var redDiamond = Math.floor((Math.random() * 11) + 1);
var blueDiamond = Math.floor((Math.random() * 11) + 1);
var yellowDiamond = Math.floor((Math.random() * 11) + 1);
var greenDiamond = Math.floor((Math.random() * 11) + 1);




    function reset() {
        randomNumber = Math.floor((Math.random() * 69) + 1);
        redDiamond = Math.floor((Math.random() * 11) + 1);
        blueDiamond = Math.floor((Math.random() * 11) + 1);
        yellowDiamond = Math.floor((Math.random() * 11) + 1);
        greenDiamond = Math.floor((Math.random() * 11) + 1);
        result = 0;
        $('#result').text(result);
        $('#randomNum').text(randomNumber);
        console.log('hello', randomNumber);
        
    }


    $(".card-crystal-1").on("click", function () {
        result += redDiamond
        console.log("result", result);
        $("#result").text(result);

        if (result === randomNumber) {
            wins++;
            $('#wins').text(wins);
            alert("you won!");
            reset();
        }

        if (result > randomNumber) {
            losses++;
            $('#losses').text(losses);
            alert("You lose, try again");
            reset();
            console.log('lost', losses);

        }

    })

    $(".card-crystal-2").on("click", function () {
        result += blueDiamond
        console.log("result", result);
        $("#result").text(result);

        if (result === randomNumber) {
            wins++;
            $('#wins').text(wins);
            alert("you won!");
            reset();
        }

        if (result > randomNumber) {
            losses++;
            $('#losses').text(losses);
            alert("You lose, try again");
            reset();
        }

    })

    $(".card-crystal-3").on("click", function () {
        result += yellowDiamond
        console.log("result", result);
        $("#result").text(result);

        if (result === randomNumber) {
            wins++;
            $('#wins').text(wins);
            alert("you won!");
            reset();
        }

        if (result > randomNumber) {
            losses++;
            $('#losses').text(losses);
            alert("You lose, try again");
            
            reset();
        }

    })

    $(".card-crystal-4").on("click", function () {
        result += greenDiamond
        console.log("result", result);
        $("#result").text(result);

        if (result === randomNumber) {
            wins++;
            $('#wins').text(wins);
            alert("you won!");
            reset();

        }
        if (result > randomNumber) {
            losses++;
            $('#losses').text(losses);
            alert("You lose, try again");
            reset();
        }


    })


    $('#losses').text(losses);
    $('#wins').text(wins);
    $('#result').text(result);
    $('#randomNum').text(randomNumber);


    
});