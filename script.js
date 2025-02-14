const alternatives = [
  {text:"", images:"https://i.pinimg.com/originals/10/12/e3/1012e3be9e9c1abd6b7ce5c8680f5456.gif"},
  {text:"Te prometo que será inolvidable mi ni&ntilde;a", images:"https://i.pinimg.com/originals/59/c4/c3/59c4c324726c3a1fb2d4dae578b4a700.gif"},
  {text:"Piénsalo de nuevo", images:"https://media.tenor.com/PbSDNTeVf1EAAAAM/mi-amor-my-love.gif"},
  {text:"Vamos, atrévete a un sí", images:"https://media.tenor.com/nyL1-X_lqgQAAAAM/te-amo-bjo-meu-amor.gif"},
  {text:"Que el miedo no te detenga", images:"https://i.gifer.com/6nv.gif"},
]

const ohyes = {
  text: "Sabía que aceptarías mi niña hermosa.<br>Envia la respuesta dando clic a la siguiente palabra: <br><a href='https://w.app/citaamorosa'> SAN VALENTIN</a>",
  images: "https://i.pinimg.com/originals/10/12/e3/1012e3be9e9c1abd6b7ce5c8680f5456.gif",
};


const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')
let count = 0;


function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Si"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'No'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})