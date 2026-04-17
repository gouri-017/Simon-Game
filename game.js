const buttonColours = ['red','blue','green','yellow']
let gamepattern =[]
let userClickedPattern =[]
let allButtons = document.querySelectorAll('.btn')
started = false
level = 0

function nextSequence()
{
  level++;
  document.querySelector("#level-title").textContent = `Level ${level}`;
    let randomNum = Math.round (Math.random() * 3)
    // console.log(randomNum)
    let randomChosenColour = buttonColours[randomNum]
    gamepattern.push(randomChosenColour);
    console.log(`game pattern = ${gamepattern}`)
    userClickedPattern = []
    return randomChosenColour;
}

function playSound(name){
  var audio = new Audio(`${name}.mp3`)
  audio.play()
  if (name === 'wrong')
    return;
  selectedButton = document.getElementById(`${name}`)
  console.log(selectedButton);
  
  selectedButton.animate([
  { backgroundColor: 'transparent' },
  { backgroundColor: `${name}` },
  { backgroundColor: 'transparent' }
], {
  duration: 100,
  iterations: 2
}); 
}

function startOver(){
  document.querySelector('#level-title').textContent = 'Game Over! Press any key to restart.'
  level = 0;
  gamepattern = []
  userClickedPattern = []
  started = false
  return;
}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] !== gamepattern[currentLevel])
// console.log('working');
    {
      console.log('nope');
      playSound("wrong");
      document.body.classList.add('game-over')
      setTimeout(()=>{
        document.body.classList.remove('game-over')
      },200)
      startOver()
      return;
    }     
}

// ------------------------------------execution starts from heeree-------------------------
// when a keyboard key is pressed 

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", (e) => {
    // console.log(e.target);
    userChosenColor = e.target.id
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor);
    //check here
    let ind = userClickedPattern.length - 1
    checkAnswer(ind);
    // that;
    console.log(userClickedPattern);
    console.log(started);
    
    if (started && userClickedPattern.length === gamepattern.length){
      setTimeout(() => {
  playSound(nextSequence());
},1000);
    }
    // else{
    //   document.body.classList.add('game-over')
    // }
 
  });

}

document.addEventListener("keypress",()=>{

if (!started){
  started = true
  if (level===0){
    document.querySelector("#level-title").textContent = `Level 0`;
    playSound(nextSequence()); }

}
})
