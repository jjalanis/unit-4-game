$(document).ready(function() {

// Global Variables
var targetScore;
var totalWins = 0;
var totalLosses = 0;
var score = 0;

// Incio. Obtiene valor target e actualiza la cantidad de juegos ganados y perdidos.
// Llama funcion para dar valor a los botones
function startUp ()
{
    score=0;
    updateScore();
    $("#totalWins").html(totalWins);
    $("#totalLosses").html(totalLosses);   
    var value = selectTargetScore ();
    $("#targetScore").html(value);
    giveButtonsValue ();
}

// Funcion para obtener valor de 19 a 120
function selectTargetScore ()
{
    var randomNumber = (Math.floor(Math.random() * 120)+19);
    return randomNumber;
};

// Ciclo que da valores de 1 a 19 a cada uno e los botones
function giveButtonsValue ()
{
    for (var i=1; i<5; i++)
    {
        var randomNumber = (Math.floor(Math.random() * 19)+1);
        $("#button-"+i).val(randomNumber);
        console.log(randomNumber);
        console.log("boton" + " " + i + "  Valor de: "+ $("#button-"+i).val());
    }
};

// Evento de click en cada boton. 
$("#button-1").on("click", function() {
    var value = parseInt($("#button-1").val());
    console.log(value);
    score = score + value;
    console.log(score);
    updateScore();
});
$("#button-2").on("click", function() {
    var value = parseInt($("#button-2").val());
    console.log(value);
    score = score + value;
    console.log(score);
    updateScore();
});
$("#button-3").on("click", function() {
    var value = parseInt($("#button-3").val());
    console.log(value);
    score = score + value;
    console.log(score);
    updateScore();
});
$("#button-4").on("click", function() {
    var value = parseInt($("#button-4").val());
    console.log(value);
    score = score + value;
    console.log(score);
    updateScore();
});

// Actualiza el puntuaje actual y manda llamar la funcion de checkStore
function updateScore(){
    var currentScore = score
    $("#currentScore").html(currentScore);
    setTimeout(checkScore,100);
      
};

// Revisa si perdio, gano o puede seguir jugando. 
function checkScore(){
    if (parseInt($("#currentScore").html()) <= parseInt($("#targetScore").html()))
    {
        if (parseInt($("#currentScore").html()) === parseInt($("#targetScore").html()))
        {
        alert("YOU WIN");
        totalWins++;
        startUp();
        }

    } else{
        alert("YOU LOSE");
        totalLosses++;
        startUp();
    }
}

// Inicio de juego
startUp();

});