rockParent = document.getElementById("rock-container");
let player_body = document.getElementById("rag-body");
let player_rect = player_body.getBoundingClientRect();
let move_speed = 5
let rockCount = 0;
let playerHalfWidth = player_rect.width/2;

let failed = false;

function rockGenerator(){

    setTimeout(() => {

        rockParent.innerHTML += rockSpawn();
        rockCount++;
        
        if(!failed){
        requestAnimationFrame(rockGenerator);}
        //rockGenerator();
        
      }, "200");
      

}
let rockY = -100

function rockSpawn(){

    let randomX = Math.floor(Math.random() * (window.screen.width - 100))
    //console.log(randomX)
    let rock = `<div class="rock" style="left: ${randomX}px; top: ${rockY}px"></div>`
    return rock;
    
}







//function play() {
    function move() {
    
        
      // Detect if game has ended
      ///if (game_state != 'Play') return;
        
      // Getting reference to all the pipe elements
      let rock_prefab = document.querySelectorAll('.rock');
      rock_prefab.forEach((element) => {
        let rock_prefab_rect = element.getBoundingClientRect();
        
        let rockPoints ={
          point1: {
            x: parseFloat(element.style.left.replace("px","")) + (rock_prefab_rect.width * 0.5),
            y: parseFloat(element.style.top.replace("px","")) + (rock_prefab_rect.height * 0),
          },
          point2: {
            x: parseFloat(element.style.left.replace("px","")) + (rock_prefab_rect.width * 0.75),
            y: parseFloat(element.style.top.replace("px","")) + (rock_prefab_rect.height * 0.3),
          },
          point3: {
            x: parseFloat(element.style.left.replace("px","")) + (rock_prefab_rect.width * 0.95),
            y: parseFloat(element.style.top.replace("px","")) + (rock_prefab_rect.height * 0.25),
          },
          point4: {
            x: parseFloat(element.style.left.replace("px","")) + (rock_prefab_rect.width * 1),
            y: parseFloat(element.style.top.replace("px","")) + (rock_prefab_rect.height * 0.5),
          },
          point5: {
            x: parseFloat(element.style.left.replace("px","")) + (rock_prefab_rect.width * 0.85),
            y: parseFloat(element.style.top.replace("px","")) + (rock_prefab_rect.height * 1),
          },
          point6: {
            x: parseFloat(element.style.left.replace("px","")) + (rock_prefab_rect.width * 0.2),
            y: parseFloat(element.style.top.replace("px","")) + (rock_prefab_rect.height * 1),
          },
          point7: {
            x: parseFloat(element.style.left.replace("px","")) + (rock_prefab_rect.width * 0),
            y: parseFloat(element.style.top.replace("px","")) + (rock_prefab_rect.height * 0.6),
          },
          point8: {
            x: parseFloat(element.style.left.replace("px","")) + (rock_prefab_rect.width * 0.15),
            y: parseFloat(element.style.top.replace("px","")) + (rock_prefab_rect.height * 0.45),
          },
          point9: {
            x: parseFloat(element.style.left.replace("px","")) + (rock_prefab_rect.width * 0.35),
            y: parseFloat(element.style.top.replace("px","")) + (rock_prefab_rect.height * 0.6),
          }
        }
        //console.log(rockPoints.point1.y)
       
          
        
        
        let player_center ={
          x: parseFloat(player_body.style.left.replace("px","")) + player_rect.width/2,
          y: parseFloat(player_body.style.top.replace("px","")) + player_rect.height/2
        } 
        document.getElementById('circle-debug').style.top = `${rockPoints.point1.y}px`
        document.getElementById('circle-debug').style.left = `${rockPoints.point1.x}px`
      
        //console.log(playerHalfWidth)

          
        // Delete the pipes if they have moved out
        // of the screen hence saving memory
        //console.log(rockCount)
        //console.log(element.style.marginTop)
        if (rock_prefab_rect.top >= window.screen.height) {
          rockCount--;
          element.remove();
        } else {

//clip-path: polygon(50% 0%, 75% 30%, 95% 25%, 100% 50%, 85% 100%, 20% 100%, 0% 60%, 15% 45%, 35% 60%);
          //Collision detection with bird and pipes
          if (
            player_center.y + playerHalfWidth*2  > rockPoints.point1.y + 40 &&
            player_center.y - 5 < rockPoints.point6.y &&
            player_center.x + playerHalfWidth*2> rockPoints.point6.x &&
            player_center.x - 5 < rockPoints.point5.x
            // player_center < rock_prefab_rect.left +
            // rock_prefab_rect.width &&
            // player_center +
            // player_rect.width > rock_prefab_rect.left &&
            // player_rect.top < rock_prefab_rect.top +
            // rock_prefab_rect.height &&
            // player_rect.top +
            // player_rect.height > rock_prefab_rect.top
          ) {
            console.log("ded")
            fail();
            return;
            
             // Change game state and end the game
          // if collision occurs
          //game_state = 'End';
          //message.innerHTML = 'Press Enter To Restart';
          //message.style.left = '28vw';
          //return;
          }
        //} else {
          // Increase the score if player
          // has the successfully dodged the 
          /*if (
            rock_prefab_rect.right < player_rect.left &&
            rock_prefab_rect.right + 
            move_speed >= player_rect.left &&
            element.increase_score == '1'
          ) {
            score_val.innerHTML = +score_val.innerHTML + 1;
          }*/



          element.style.top = 
            (rock_prefab_rect.top + move_speed) + 'px';
        //}
      }
    });
    if(!failed){
    requestAnimationFrame(move);
    }
  }

  function fail(){

    failed = true
    mouseControl = false
    move_speed = 0
    document.getElementById("rag-body").innerText = `failed`
    alert("get rekt")
  }
  //move();
  requestAnimationFrame(move);
  //rockGenerator();

  requestAnimationFrame(rockGenerator);

