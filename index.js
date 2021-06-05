var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).ready(function(){
    $(document).keypress(function() {
        if (!started) {
            $("#start").html(``);
            nextSequence();
            started = true;
        }
    });
})

$('button').click(function(){
    let color = $(this).attr("id");
    userClickedPattern.push(color);
    pressed(color);
    check(userClickedPattern.length - 1);
})

function pressed(color)
{
    $("#" + color).addClass('pressed');
        setTimeout(()=>{
            $("#" + color).removeClass('pressed');
        } , 100);
}

function check(colorindex)
{
    
    if(gamePattern[colorindex] === userClickedPattern[colorindex] && colorindex === gamePattern.length-1)
    {
        nextSequence() ;
    }
    else if(gamePattern[colorindex] !== userClickedPattern[colorindex])
    {
        if(gamePattern.length == 0)
        {
            $('#start').html(`GameOver Press any key to play again <br><br> Score : 0`);
        }
        else
        $('#start').html(`GameOver Press any key to play again <br><br> Score : ${gamePattern.length-1}`);
        gamePattern = [];
        started = false;
        $('#level').text('');
        level = 0;

    }


}

function nextSequence()
{
    level++;
    $("#level").text("Level " + level);
    let newcolor = Math.floor(Math.random()*4);
    setTimeout(pressed(buttonColours[newcolor] , 4000));
    gamePattern.push(buttonColours[newcolor]);
    console.log('gamePattern');
    userClickedPattern = [];
}