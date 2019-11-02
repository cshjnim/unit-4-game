console.log("See this to try if this works")

//jquery for random number playing 
$(document).ready(function(){
    var random = Math.floor(Math.random() * 101 + 19);
    //The random number shown at the start of the game should be between 19 - 120.
    $("#randomNumber").text(random);
    // need to show random number first 
    var blue= Math.floor (Math.random() *11+1);
    var green= Math.floor (Math.random() * 11+1);
    var red= Math.floor (Math.random () *11+1);
    var yellow= Math.floor (Math.random() *11+1);
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
        blue= Math.floor(Math.random() * 11+1);
        green= Math.floor(Math.random() *11+1);
        red= Math.floor (Math.random () *11+1);
        yellow= Math.floor (Math.random() *11+1);
        userTotal =0;
        $("#finalTotal").text(userTotal);
    }

    function wins(){
        alert("You won!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    function losses(){
        alert("You lose!");
        losses++;
        $("#numberLosses").text(losses);
        reset()
    }
}