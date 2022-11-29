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
var legWidth = document.getElementById("left-leg").offsetWidth;


let mouseX = 0;
let mouseY = 0;


let maxLegDist = 50;




window.onload = function() {            
    function bodyUpdate() {
        bodyVertical = mouseY - width;
        bodyHorizontal = mouseX - width;

        bodyCSS.top = `${bodyVertical}px`;
        bodyCSS.left = `${bodyHorizontal}px`;

        rightLegCSS.top = `${rightLegVertical}px`;
        rightLegCSS.left = `${rightLegHorizontal}px`;
        
        leftLegCSS.top = `${leftLegVertical}px`;  
        leftLegCSS.left = `${leftLegHorizontal}px`;    
        
        legToBody(rightLegCSS);
        legToBody(leftLegCSS);

    }
    function legUpdate() {
        
        // leftLegCSS.top = `${leftLegVertical}px`;
        // rightLegCSS.top = `${rightLegVertical}px`;
        // bodyCSS.top = `${bodyVertical}px`;

    }
    setInterval(bodyUpdate, 10);
}

let leftLegTargetV = 0;
let leftLegTargetH = 0;
let rightLegTargetV = 0;
let rightLegTargetH = 0;
console.log(document.getElementById("rag-body").offsetWidth)


const lerp = (a, b, amount) => (1 - amount) * a + amount * b;

let lerpAmount = 1;

let legPosContainer1 = [0,0,0,0];
let legPosContainer2 = [0,0,0,0];
let center1 = [0,0]
let center2 = [0,0]
function legToBody(leg){
let legPosContainer;
let legCenter;
let bodCenter = [(bodyHorizontal + width/2),(bodyVertical + width/2)]

    if(leg == rightLegCSS){
        legPosContainer = legPosContainer1
        rightLegHorizontal = legPosContainer[0]
        rightLegVertical = legPosContainer[1]
        legPosContainer[2] = bodyHorizontal + width;
        legPosContainer[3] = bodyVertical + width;
        legCenter = center1;
       
        center1[0] = (rightLegHorizontal + legWidth/2)
        center1[1] = (rightLegVertical + legWidth/2)

        document.getElementById('circle-debug').style.top = `${center1[1]}px`
        document.getElementById('circle-debug').style.left = `${center1[0]}px`

    }else if(leg == leftLegCSS){
        legPosContainer = legPosContainer2
        leftLegHorizontal = legPosContainer[0]
        leftLegVertical = legPosContainer[1]
        legPosContainer[2] = bodyHorizontal  - document.getElementById("left-leg").offsetWidth;;
        legPosContainer[3] = bodyVertical + width;
        legCenter = center2;
        center2[0] = (rightLegHorizontal + legWidth/2)
        center2[1] = (rightLegVertical + legWidth/2)
    }
        
        
        if(legPosContainer[0] != legPosContainer[2]){
            lerpAmount = Math.abs(legPosContainer[2]-legPosContainer[0])/maxLegDist;
            if (legPosContainer[0] < legPosContainer[2]){
                legPosContainer[0] += (1 * lerpAmount)
            }else if (legPosContainer[0] > legPosContainer[2]){
                legPosContainer[0] -= (1 * lerpAmount)
            }
            
        }
        if(legPosContainer[1] != legPosContainer[3]){
            lerpAmount = Math.abs(legPosContainer[3]-legPosContainer[1])/maxLegDist;
            if (legPosContainer[1] < legPosContainer[3]){
                legPosContainer[1] += (1 * lerpAmount)
            }else if (legPosContainer[1] > legPosContainer[3]){
                legPosContainer[1] -= (1 * lerpAmount)
            }
            
        }

        if(legPosContainer[2]-legPosContainer[0] > maxLegDist){
            legPosContainer[0] = legPosContainer[2] - maxLegDist
        
        }else if(legPosContainer[2]-legPosContainer[0] < -maxLegDist){
            legPosContainer[0] = legPosContainer[2] + maxLegDist
        
        }
        if(legPosContainer[3]-legPosContainer[1] > maxLegDist){
            legPosContainer[1] = legPosContainer[3] - maxLegDist
        }else if(legPosContainer[3]-legPosContainer[1] < -maxLegDist){
                legPosContainer[1] = legPosContainer[3] + maxLegDist
        }

        //if(bodyVertical - width/2)
        var angleDeg = Math.atan(bodCenter[1] - center1[1],bodCenter[0]-center1[0] ) * 180 / Math.PI;
        
        if(center1[0] > bodCenter[0] + -width/2 && center1[1] < bodCenter[1] + width/2){
            let x = (bodCenter[0] + width/2 * Math.cos(angleDeg))-legWidth/2;
            let y = (bodCenter[1] + width/2 * Math.sin(angleDeg))+legWidth/2;
            
            
            //console.log("inside")
            //legPosContainer1[0] = (bodCenter[0] + width/2) - legWidth/2;
            //legPosContainer1[1] = (bodCenter[1] + width/2)- legWidth/2;
            if(leg == rightLegCSS){
            legPosContainer[0] = x;
            legPosContainer[1] = y;
            }
            
            console.log(x, y)
            //legPosContainer1[0] = (bodCenter[1] + width/2) - legPosContainer1[1]
            //legPosContainer1[1] = legPosContainer1[1]



        }



    

}


onmousemove = function(e){mouseX = e.clientX;  mouseY = e.clientY;}



/*
function legToBody(leg, legTarget){

    if(leg == rightLegCSS){
        rightLegTargetV = bodyVertical + width;
        rightLegTargetH = bodyHorizontal + width;
        
        if(rightLegHorizontal != rightLegTargetH){
            lerpAmount = Math.abs(rightLegTargetH-rightLegHorizontal)/maxLegDist;
            if (rightLegHorizontal < rightLegTargetH){
                rightLegHorizontal += (1 * lerpAmount)
            }else if (rightLegHorizontal > rightLegTargetH){
                rightLegHorizontal -= (1 * lerpAmount)
            }
            console.log(lerpAmount)
        }
        if(rightLegVertical != rightLegTargetV){
            lerpAmount = Math.abs(rightLegTargetV-rightLegVertical)/maxLegDist;
            if (rightLegVertical < rightLegTargetV){
                rightLegVertical += (1 * lerpAmount)
            }else if (rightLegVertical > rightLegTargetV){
                rightLegVertical -= (1 * lerpAmount)
            }
            console.log(lerpAmount)
        }

        if(rightLegTargetH-rightLegHorizontal > maxLegDist){
            rightLegHorizontal = rightLegTargetH - maxLegDist
        
        }else if(rightLegTargetH-rightLegHorizontal < -maxLegDist){
            rightLegHorizontal = rightLegTargetH + maxLegDist
        
        }
        if(rightLegTargetV-rightLegVertical > maxLegDist){
            rightLegVertical = rightLegTargetV - maxLegDist
        }else if(rightLegTargetV-rightLegVertical < -maxLegDist){
                rightLegVertical = rightLegTargetV + maxLegDist
        }



    }else if(leg == leftLegCSS){

        leftLegTargetV = bodyVertical + width;
        leftLegTargetH = bodyHorizontal - document.getElementById("left-leg").offsetWidth;
            
    }

}
*/
