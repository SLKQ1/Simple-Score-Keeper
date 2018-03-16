console.log('Scrip Connected.');

// p1 vars
var p1Button = document.querySelector('#p1');
var p1Display = document.querySelector('#p1Display');
// p2 vars
var p2Button = document.querySelector('#p2');
var p2Display = document.querySelector('#p2Display');
// reset var
var reset = document.querySelector('#reset');
// user number of games
var num_input = document.querySelector('input');
// play to var
var play_to = 3;

// If p1 is clicked
var p1_score = 0;
p1Button.addEventListener('click', function(){
  if(p1_score < play_to - p2_score){
    p1_score += 1;
    p1Display.innerText = p1_score;

    if(p1_score + p2_score == play_to){
      if(p1_score > p2_score){
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');

      }
      else{
        p1Display.classList.add('loser');
        p2Display.classList.add('winner');
      }
    }
  }
});

// if p2 is clicked
var p2_score = 0;
p2Button.addEventListener('click', function(){
  if(p2_score < play_to - p1_score){
    p2_score += 1;
    p2Display.innerText = p2_score;

    if(p2_score + p1_score == play_to){
      if(p2_score > p1_score){
        p2Display.classList.add('winner');
        p1Display.classList.add('loser');
      }
      else{
        p2Display.classList.add('loser');
        p1Display.classList.add('winner');
      }
    }
  }
});



// if reset is clicked
reset.addEventListener('click', function(){
  p1_score = 0;
  p1Display.innerText = p1_score;
  p1Display.classList.remove('winner');
  p1Display.classList.remove('loser');

  p2_score = 0;
  p2Display.innerText = p2_score;
  p2Display.classList.remove('winner');
  p2Display.classList.remove('loser');

});

// changing the play_to var
num_input.addEventListener('change', function(){
  play_to_display.innerText = num_input.value;
  play_to = parseInt(num_input.value)
});;
