var bodyCSS = document.getElementById("rag-body").style;
var leftLegCSS = document.getElementById("left-leg").style;
var rightLegCSS = document.getElementById("right-leg").style;

var bodyVertical = 0;
var rightLegVertical = 0;
var leftLegVertical = 0;

var bodyHorizontal = 0;
var rightLegHorizontal = 0;
var leftLegHorizontal = 0;

var width = document.getElementById("rag-body").offsetWidth;


let mouseX = 0;
let mouseY = 0;




window.onload = function() {            
    function legUpdate() {
        bodyVertical = mouseY - width;
        bodyHorizontal = mouseX - width;

        leftLegCSS.top = `${leftLegVertical}px`;     //vertical
        rightLegCSS.top = `${rightLegVertical}px`;
        bodyCSS.top = `${bodyVertical}px`;


        leftLegCSS.left = `${leftLegHorizontal}px`;     //horizontal
        rightLegCSS.left = `${rightLegHorizontal}px`;
        bodyCSS.left = `${bodyHorizontal}px`;
        legToBody(rightLegCSS);
        legToBody(leftLegCSS);

    }
    function bodyUpdate() {
        
        // leftLegCSS.top = `${leftLegVertical}px`;
        // rightLegCSS.top = `${rightLegVertical}px`;
        // bodyCSS.top = `${bodyVertical}px`;

    }
    setInterval(legUpdate, 10);
}


console.log(document.getElementById("rag-body").offsetWidth)
function legToBody(leg){

    if(leg == rightLegCSS){
        rightLegVertical = bodyVertical + width;
        rightLegHorizontal = bodyHorizontal + width;
    }else if(leg == leftLegCSS){

        leftLegVertical = bodyVertical + width;
        leftLegHorizontal = bodyHorizontal - document.getElementById("left-leg").offsetWidth;
            
    }

}


onmousemove = function(e){mouseX = e.clientX;  mouseY = e.clientY;}
