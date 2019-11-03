console.log("See this to try if this works")

//jquery for random number playing 
$(document).ready(function(){
    var random = Math.floor(Math.random() * 101 + 19);
    //The random number shown at the start of the game should be between 19 - 120.
    $("#randomNumber").text(random);
    // need to show random number first 
    var num1= Math.floor(Math.random() *11+1)
    var num2= Math.floor(Math.random() * 11+1)
    var num3= Math.floor(Math.random () *11+1)
    var num4= Math.floor(Math.random() *11+1)
    //also set up random number for each jewels.Each crystal should have a random hidden value between 1 - 12.

    var userTotal= 0;
    var wins= 0;
    var losses = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
    
    function reset (){
        random= Math.floor(Math.random() * 101+19);
        console.log (random)
        $("#randonNumber").text(random);
        num1= Math.floor(Math.random() * 11+1);
        num2= Math.floor(Math.random() *11+1);
        num3= Math.floor (Math.random () *11+1);
        num4= Math.floor (Math.random() *11+1);
        userTotal =0;
        $("#finalTotal").text(userTotal);
    }

    function hooray(){
        alert("You won!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    function eeewww(){
        alert("You lose!");
        losses++;
        $("#numberLosses").text(losses);
        reset()
    }

 
// for Jewel's click 
$("#blue").on("click", function() {
    userTotal = userTotal +num1;
    console.log("New userTotal = " +userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal === random) {
        hooray();
    }
    else if (userTotal> random) {
        eeewww();
    }
})
$("#green").on("click", function() {
    userTotal = userTotal +num2;
    console.log("New userTotal = " +userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal === random) {
        hooray();
    }
    else if (userTotal> random) {
        eeewww();
    }
})
$("#red").on("click", function() {
    userTotal = userTotal +num3;
    console.log("New userTotal = " +userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal === random) {
        hooray();
    }
    else if (userTotal> random) {
        eeewww();
    }
})
$("#yellow").on("click", function() {
    userTotal = userTotal +num4;
    console.log("New userTotal = " +userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal === random) {
        hooray();
    }
    else if (userTotal> random) {
        eeewww();
    }
})
});