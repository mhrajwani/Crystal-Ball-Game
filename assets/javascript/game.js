

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
blue = randomNumber(1,12);
yellow = randomNumber(1,12);
pink = randomNumber(1,12);
red = randomNumber(1,12);
document.getElementById("rNumber").innerHTML = "Random Number is : " + guess;
document.getElementById("cScore").innerHTML = crystal;
}

function lossx(){
    alert("YOU LOST. PLAY AGAIN?")
    loss++;
    document.getElementById("loss").innerHTML = "Losses " + loss;
}

function winx(){
    alert("YOU WON, PLAY AGAIN?");
    wins++;
    document.getElementById("wins").innerHTML = "Wins " + wins;

}

function randomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var guess = randomNumber(19,120);
blue = randomNumber(1,12);
yellow = randomNumber(1,12);
pink = randomNumber(1,12);
red = randomNumber(1,12);

function crystalx(x){
    crystal = crystal + x;
    document.getElementById("cScore").innerHTML = crystal;
    if (guess === crystal){
        winx();
        reset();
    }else if (guess < crystal){
        lossx();
        reset();
    }
    }



$(".blue").on("click", function () {
    crystalx(blue);
    console.log("blue is : " +blue);
});

$(".red").on("click", function () {
    crystalx(red);
    console.log("red is : " + red);
});

$(".yellow").on("click", function () {
    crystalx(yellow);
    console.log("yellow is :" + yellow);
});
$(".pink").on("click", function () {
    crystalx(pink);
    console.log("pink is : " + pink)
});




document.getElementById("rNumber").innerHTML = "Random Number is : " + guess;
