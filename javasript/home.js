var playing = false;  
var fruits = ["apple", "cherry", "watermelon", "grape", "banana"];
var trials = 3;
var step = 0;
var score = 0;

$("#reset").click(()=>{
    if(!playing){
        
        setGame();
        addHearts();
        generateFruits();
        sliceFruits();
        stepFruits();  

    }
    else{
        location.reload();
    }
});

function setGame(){
    playing = true;
    $("#reset").html("Reset");
    $("#trials").css("visibility", "visible");
    $("#time").css("visibility", "visible");
}

function addHearts(){
    $("#trials").empty();
    for(i=0;i<trials;i++){
        $("#trials").append('<img src="./img/LogoMakr-8zZ0qS.png" alt="Coracoes">');
    }
}

 function generateFruits(){
     $("#fruit1").show();
     $("#fruit1").attr('src', "./img/"+fruits[Math.round(4*Math.random())]+".png");
     $("#fruit1").css('left', Math.round(625*Math.random()));
     $("#fruit1").css('top', -40);
     step = 1+Math.round(6*Math.random());
}

function stepFruits(){
    action = setInterval(()=>{
        $('#fruit1').css('top', $('#fruit1').position().top + step);
    
        if($("#fruit1").position().top > $("#screen").height()){
            trials-=1;
            addHearts();
            if(trials > 0){
                generateFruits();
            }else{
                $('#game-over').show();
                stopIt();
            }
        }   
    }, 10);
}
    
function sliceFruits(){
    $("#fruit1").mouseover(()=>{
        $("#slicefruit")[0].play();
        score++;
        $('#score').html(score);
        $('#finalScore').html(score);
        stopIt();
        generateFruits();
        stepFruits();
    });

}

function stopIt(){
    $("#fruit1").hide();
    clearInterval(action);
}