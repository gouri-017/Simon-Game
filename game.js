function r()
{
    let ran =Math.round (Math.random() * 3)
    console.log(ran)
    return ran;
}
gamepattern =[]
  const buttonColours = ['red','blue','green','yellow']
  
  let randomChosenColour = buttonColours[r()]
  console.log(randomChosenColour)
  gamepattern.push(randomChosenColour)
  console.log(gamepattern);

  const selectedButton = document.getElementById(`${randomChosenColour}`)
  console.log(selectedButton);
  selectedButton.animate([
  { backgroundColor: 'transparent' },
  { backgroundColor: `light ${randomChosenColour}` },
  { backgroundColor: 'transparent' }
], {
  duration: 200,
  iterations: 2
});
// const audio = new Audio(`${randomChosenColour}.mp3`)
const audio = new Audio(`${randomChosenColour}.mp3`)

audio.play()
  
// const greenButton = document.querySelector('#green')
// const redButton = document.querySelector('#red')
// const yellowButton = document.querySelector('#yellow')
// const blueButton = document.querySelector('#blue')

// 3 ways to add flash to a button either use jquery or togglee css classes means create a css class with flas add or remove that with button click event handling or use .animate method
