

var wins = 0;
var loss = 0;
var crystal = 0;
var blue = 0;
var yellow = 0;
var pink = 0;
var red = 0;

function reset(){

guess = randomNumber(19,120);
crystal = 0;
blue = 0;
yellow = 0;
pink = 0;
red = 0;
document.getElementById("rNumber").innerHTML = "Random Number is : " + guess;
document.getElementById("cScore").innerHTML = crystal;
}

function lossx(){
    alert("YOU LOST. PLAY AGAIN?")
    loss++;
    document.getElementById("loss").innerHTML = "Losses " + loss;
}

function winx(){
    alert("YOU WON, PLAY AGAIN?")
    wins++;
    document.getElementById("wins").innerHTML = "Wins " + wins;

}

function randomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var guess = randomNumber(19,120);



$(".blue").on("click", function () {
    
    if (blue === 0){
        blue = randomNumber(1,12);
        crystal = crystal + blue;
        document.getElementById("cScore").innerHTML = crystal;
        if (guess === crystal){
            winx();
            reset();
        }else if (guess < crystal){
            lossx();
            reset();
        }
    } else {
    crystal = crystal + blue;
    document.getElementById("cScore").innerHTML = crystal;
    if (guess === crystal){
        winx();
        reset();
    }else if (guess < crystal){
        lossx();
        reset();
    }
    }});

$(".red").on("click", function () {
    if (red === 0){
        red = randomNumber(1,12);
        crystal = crystal + red;
        document.getElementById("cScore").innerHTML = crystal;
        if (guess === crystal){
            winx();
            reset();
        }else if (guess < crystal){
            lossx();
            reset();
        }
    } else {
    crystal = crystal + red;
    document.getElementById("cScore").innerHTML = crystal;
    if (guess === crystal){
        winx();
        reset();
    }else if (guess < crystal){
        lossx();
        reset();
    }
    }});

$(".yellow").on("click", function () {
    if (yellow === 0){
        yellow = randomNumber(1,12);
        crystal = crystal + yellow;
        document.getElementById("cScore").innerHTML = crystal;
        if (guess === crystal){
            winx();
            reset();
        }else if (guess < crystal){
            lossx();
            reset();
        }
    } else {
    crystal = crystal + yellow;
    document.getElementById("cScore").innerHTML = crystal;
    if (guess === crystal){
        winx();
        reset();
    }else if (guess < crystal){
        lossx();
        reset();

    }
    }});
$(".pink").on("click", function () {
    if (pink === 0){
        pink = randomNumber(1,12);
        crystal = crystal + pink;
        document.getElementById("cScore").innerHTML = crystal;
        if (guess === crystal){
            winx();
            reset();
        }else if (guess < crystal){
            lossx();
            reset();
        }
    } else {
    crystal = crystal + pink;
    document.getElementById("cScore").innerHTML = crystal;
    if (guess === crystal){
        winx();
        reset();
    }else if (guess < crystal){
        lossx();
        reset();
    }
    }});




document.getElementById("rNumber").innerHTML = "Random Number is : " + guess;
document.getElementById("cScore").innerHTML = crystal;
document.getElementById("wins").innerHTML = "Wins " + wins;
document.getElementById("loss").innerHTML = "Losses " + loss;
