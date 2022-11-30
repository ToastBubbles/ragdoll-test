rockParent = document.getElementById("rock-container");
let move_speed = 1

function rockGenerator(){

    setTimeout(() => {

        rockParent.innerHTML += rockSpawn();
        

        rockGenerator();
        
      }, "4000");

}
let rockY = -100

function rockSpawn(){

    let randomX = Math.floor(Math.random() * (window.screen.width - 100))
    //console.log(randomX)
    let rock = `<div class="rock" style="left: ${randomX}px; top: -100px"></div>`
    return rock;
    
}


rockGenerator();



//function play() {
    function move() {
        
      // Detect if game has ended
      ///if (game_state != 'Play') return;
        
      // Getting reference to all the pipe elements
      let rock_prefab = document.querySelectorAll('.rock');
      rock_prefab.forEach((element) => {
          
        let rock_prefab_rect = element.getBoundingClientRect();
        player_rect = rockParent.getBoundingClientRect();
          
        // Delete the pipes if they have moved out
        // of the screen hence saving memory
        console.log(rock_prefab_rect.top)
        if (rock_prefab_rect.top >= window.screen.height) {
          element.remove();
        } else {
          // Collision detection with bird and pipes
          if (
            player_rect.left < rock_prefab_rect.left +
            rock_prefab_rect.width &&
            player_rect.left +
            player_rect.width > rock_prefab_rect.left &&
            player_rect.top < rock_prefab_rect.top +
            rock_prefab_rect.height &&
            player_rect.top +
            player_rect.height > rock_prefab_rect.top
          ) {
             // Change game state and end the game
          // if collision occurs
          //game_state = 'End';
          //message.innerHTML = 'Press Enter To Restart';
          //message.style.left = '28vw';
          return;
        } else {
          // Increase the score if player
          // has the successfully dodged the 
          if (
            rock_prefab_rect.right < player_rect.left &&
            rock_prefab_rect.right + 
            move_speed >= player_rect.left &&
            element.increase_score == '1'
          ) {
            score_val.innerHTML = +score_val.innerHTML + 1;
          }
          element.style.top = 
            rock_prefab_rect.top - move_speed + 'px';
        }
      }
    });
  
    requestAnimationFrame(move);
  }
  move();
  //requestAnimationFrame(move);