var bodyCSS = document.getElementById("rag-body").style;
var headCSS = document.getElementById("rag-head").style;
var leftLegCSS = document.getElementById("left-leg").style;
var rightLegCSS = document.getElementById("right-leg").style;
var leftArmCSS = document.getElementById("left-arm").style;
var rightArmCSS = document.getElementById("right-arm").style;

var bodyVertical = 0;
var headVertical = 0;
var rightLegVertical = 0;
var leftLegVertical = 0;
var rightArmVertical = 0;
var leftArmVertical = 0;

var bodyHorizontal = 0;
var headHorizontal = 0;
var rightLegHorizontal = 0;
var leftLegHorizontal = 0;
var rightArmHorizontal = 0;
var leftArmHorizontal = 0;

var width = document.getElementById("rag-body").offsetWidth;
var legWidth = document.getElementById("left-leg").offsetWidth;
var headWidth = document.getElementById("rag-head").offsetWidth;


let mouseX = 0;
let mouseY = 0;

let mouseControl = true;


let maxLegDist = 50;




window.onload = function() {            
    function bodyUpdate() {
        if(mouseControl){
        bodyVertical = mouseY - width;
        bodyHorizontal = mouseX - width;
        }

        bodyCSS.top = `${bodyVertical}px`;
        bodyCSS.left = `${bodyHorizontal}px`;

        rightLegCSS.top = `${rightLegVertical}px`;
        rightLegCSS.left = `${rightLegHorizontal}px`;
        
        leftLegCSS.top = `${leftLegVertical}px`;  
        leftLegCSS.left = `${leftLegHorizontal}px`;   
        
        rightArmCSS.top = `${rightArmVertical}px`;
        rightArmCSS.left = `${rightArmHorizontal}px`;
        
        leftArmCSS.top = `${leftArmVertical}px`;  
        leftArmCSS.left = `${leftArmHorizontal}px`; 

        headCSS.top = `${headVertical}px`;  
        headCSS.left = `${headHorizontal}px`; 

        // document.getElementById('circle-debug').style.top = `${rightArmVertical}px`
        // document.getElementById('circle-debug').style.left = `${rightArmHorizontal}px`
       
        
        legToBody(rightLegCSS);
        legToBody(leftLegCSS);
        legToBody(rightArmCSS);
        legToBody(leftArmCSS);
        legToBody(headCSS);

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

let leftArmTargetV = 0;
let leftArmTargetH = 0;
let rightArmTargetV = 0;
let rightArmTargetH = 0;

let headTargetV = 0;
let headTargetH = 0;

//console.log(document.getElementById("rag-body").offsetWidth)


//const lerp = (a, b, amount) => (1 - amount) * a + amount * b;

let lerpAmount = 1;

let legPosContainer1 = [0,0,0,0];
let legPosContainer2 = [0,0,0,0];
let armPosContainer1 = [0,0,0,0];
let armPosContainer2 = [0,0,0,0];
let headContainer = [0,0,0,0];
let center1 = [0,0]
let center2 = [0,0]
let center3 = [0,0]
let center4 = [0,0]
let centerH = [0,0]

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

        

    }else if(leg == leftLegCSS){
        legPosContainer = legPosContainer2
        leftLegHorizontal = legPosContainer[0]
        leftLegVertical = legPosContainer[1]
        legPosContainer[2] = bodyHorizontal  - document.getElementById("left-leg").offsetWidth;;
        legPosContainer[3] = bodyVertical + width;
        legCenter = center2;
        center2[0] = (leftLegHorizontal + legWidth/2)
        center2[1] = (leftLegVertical + legWidth/2)
    }else if(leg == rightArmCSS){
        legPosContainer = armPosContainer1
        rightArmHorizontal = legPosContainer[0]
        rightArmVertical = legPosContainer[1]
        legPosContainer[2] = bodyHorizontal + width;
        legPosContainer[3] = bodyVertical;
        armCenter = center3;
       
        center3[0] = (rightArmHorizontal + legWidth/2)
        center3[1] = (rightArmVertical + legWidth/2)
    }else if(leg == leftArmCSS){
        legPosContainer = armPosContainer2
        leftArmHorizontal = legPosContainer[0]
        leftArmVertical = legPosContainer[1]
        legPosContainer[2] = bodyHorizontal  - document.getElementById("left-arm").offsetWidth;;
        legPosContainer[3] = bodyVertical;
        legCenter = center4;
        center4[0] = (leftArmHorizontal + legWidth/2)
        center4[1] = (leftArmVertical + legWidth/2)
    }else if(leg == headCSS){
        //console.log("head")
        legPosContainer = headContainer
        headHorizontal = legPosContainer[0]
        headVertical = legPosContainer[1]
        legPosContainer[2] = bodyHorizontal + width/4;
        legPosContainer[3] = bodyVertical - width/1.2;
        legCenter = centerH;
       
        centerH[0] = (headHorizontal + headWidth/2)
        centerH[1] = (headVertical + headWidth/2)
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



        if(leg == rightLegCSS){
            var angleDeg = Math.atan2(((window.screen.height - bodCenter[1]) - (window.screen.height - center1[1])),-1*(bodCenter[0]-center1[0]) )
            let x = (bodCenter[0])+ (width/2 * Math.cos(angleDeg))//+legWidth/2;
            let y = (bodCenter[1])+ (width/2 * Math.sin(angleDeg))//+legWidth/2;
     

            //document.getElementById('circle-debug').style.top = `${y}px`
            //document.getElementById('circle-debug').style.left = `${x}px`
            
            if((center1[0] <= bodCenter[0] + width/1.8) && (center1[1] <= bodCenter[1] + width/1.8)) {
 
                legPosContainer[0] = x;
                legPosContainer[1] = y;
            }
           

        }else if(leg == leftLegCSS){
            var angleDeg = Math.atan2(((window.screen.height - bodCenter[1]) - (window.screen.height - center2[1])),(bodCenter[0]-center2[0]) )
            let x = (bodCenter[0])- (width/2 * Math.cos(angleDeg))//+legWidth/2;
            let y = (bodCenter[1])+ (width/2 * Math.sin(angleDeg))//+legWidth/2;
            
            // document.getElementById('circle-debug').style.top = `${y}px`
            // document.getElementById('circle-debug').style.left = `${x}px`
            
            //console.log(x,y)
            if((center2[0] >= bodCenter[0] - width/1.8) && (center2[1] <= bodCenter[1] + width/1.8)) {
                //console.log("inside")
                legPosContainer[0] = x - width/2.2;
                legPosContainer[1] = y;
            }
           

        }else if(leg == rightArmCSS){
            var angleDeg = Math.atan2(((window.screen.height - bodCenter[1]) - (window.screen.height - center3[1])),-1*(bodCenter[0]-center3[0]) )
            let x = (bodCenter[0])+ (width/2 * Math.cos(angleDeg))//+legWidth/2;
            let y = (bodCenter[1])+ (width/2 * Math.sin(angleDeg))//+legWidth/2;
     

            //  document.getElementById('circle-debug').style.top = `${y}px`
            //  document.getElementById('circle-debug').style.left = `${x}px`
        
       
            if((center3[0] <= bodCenter[0] + width/1.8) && (center3[1] >= bodCenter[1] - width/1.8)) {
                //console.log("inside")
                legPosContainer[0] = x;
                legPosContainer[1] = y-width/2.2;
            }
           

        }else if(leg == leftArmCSS){
            var angleDeg = Math.atan2(((window.screen.height - bodCenter[1]) - (window.screen.height - center4[1])),(bodCenter[0]-center4[0]) )
            let x = (bodCenter[0])- (width/2 * Math.cos(angleDeg))//+legWidth/2;
            let y = (bodCenter[1])+ (width/2 * Math.sin(angleDeg))//+legWidth/2;
            
            //document.getElementById('circle-debug').style.top = `${y}px`
            //document.getElementById('circle-debug').style.left = `${x}px`
      
            //console.log(x,y)
            if((center4[0] >= bodCenter[0] - width/1.8) && (center4[1] <= bodCenter[1] + width/1.8)) {
                
                legPosContainer[0] = x - width/2.2;
                legPosContainer[1] = y - width/2.2;
            }
           

        }else if(leg == headCSS){
            var angleDeg = Math.atan2(((window.screen.height - bodCenter[1]) - (window.screen.height - centerH[1])),(bodCenter[0]-centerH[0]) )
            let x = (bodCenter[0])- (width/2 * Math.cos(angleDeg))//+legWidth/2;
            let y = (bodCenter[1])+ (width/2 * Math.sin(angleDeg))//+legWidth/2;
            
            
            //console.log(x,y)
            if((centerH[0] >= bodCenter[0] - width/1.8) && (centerH[1] >= bodCenter[1] - width/1.8)&& centerH[0]>bodCenter[0]) {
                //console.log("insideleft")
                legPosContainer[0] = x;
                legPosContainer[1] = y - width/2.2 ;
            }else if((centerH[0] >= bodCenter[0] - width/1.8) && (centerH[1] >= bodCenter[1] - width/1.8) && centerH[0]<bodCenter[0]) {
                //console.log("insideright")
                legPosContainer[0] = x - width/2.2;
                legPosContainer[1] = y - width/2.2 ;
            }
           

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
