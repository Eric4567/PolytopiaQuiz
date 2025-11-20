
const musicButton = document.getElementById("play-button")

const AiMo = new Audio("Polytopia Musics/Ai-mo.mp3");
const Anzala = new Audio("Polytopia Musics/Anzala.mp3");
const Aquarion = new Audio("Polytopia Musics/Aquarion.mp3");
const Aumux = new Audio("Polytopia Musics/Aumux.mp3");
const Baergoff = new Audio("Polytopia Musics/Baergoff.mp3");
const Bardur = new Audio("Polytopia Musics/Bardur.mp3");
const Cultist = new Audio("Polytopia Musics/Cultist.mp3");
const Cymanti = new Audio("Polytopia Musics/Cymanti.mp3");
const Elyrion = new Audio("Polytopia Musics/Elyrion.mp3");
const Forgotten = new Audio("Polytopia Musics/Forgotten.mp3");
const Hoodrick = new Audio("Polytopia Musics/Hoodrick.mp3");
const Imperius = new Audio("Polytopia Musics/Imperius.mp3");
const Iqaruz = new Audio("Polytopia Musics/Iqaruz.mp3");
const Khondor = new Audio("Polytopia Musics/Khondor.mp3");
const Kickoo = new Audio("Polytopia Musics/Kickoo.mp3");
const Lirepacci = new Audio("Polytopia Musics/Lirepacci.mp3");
const Luxidoor = new Audio("Polytopia Musics/Luxidoor.mp3");
const Midnight = new Audio("Polytopia Musics/midnight.mp3");
const Oumaji = new Audio("Polytopia Musics/Oumaji.mp3");
const Polaris = new Audio("Polytopia Musics/Polaris.mp3");
const Quetzali = new Audio("Polytopia Musics/Quetzali.mp3");
const Shapo = new Audio("Polytopia Musics/Sha-po.mp3");
const Solaris = new Audio("Polytopia Musics/Solaris.mp3");
const ToLi = new Audio("Polytopia Musics/To Li.mp3");
const Urkaz = new Audio("Polytopia Musics/Urkaz.mp3");
const Vengir = new Audio("Polytopia Musics/Vengir.mp3");
const Xinxi = new Audio("Polytopia Musics/Xin-xi.mp3");
const Yadakk = new Audio("Polytopia Musics/Yadakk.mp3");
const Yorthwober = new Audio("Polytopia Musics/Yorthwober.mp3");
const Zebasi = new Audio("Polytopia Musics/Zebasi.mp3");

// ---------------

// -- Variables --

let isPlaying = false

const bar = document.getElementById("bar-progression")
const buttonsContainer = document.getElementById("buttons-container")
const results = document.getElementById("results-div")

let seconds = 0
let percentage = 0
let duration = null
let song = null
let correctAnswer = null
let tribeButtons = null
let correctButton = null

// ---------------

let tribeMusics = [
  { tribe: "Ai-Mo", music: AiMo },
  { tribe: "Anzala", music: Anzala },
  { tribe: "Aquarion", music: Aquarion },
  { tribe: "Aumux", music: Aumux },
  { tribe: "Baergoff", music: Baergoff },
  { tribe: "Bardur", music: Bardur },
  { tribe: "Cultist", music: Cultist },
  { tribe: "Cymanti", music: Cymanti },
  { tribe: "Elyrion", music: Elyrion },
  { tribe: "Forgotten", music: Forgotten },
  { tribe: "Hoodrick", music: Hoodrick },
  { tribe: "Imperius", music: Imperius },
  { tribe: "Iqaruz", music: Iqaruz },
  { tribe: "Khondor", music: Khondor },
  { tribe: "Kickoo", music: Kickoo },
  { tribe: "Lirepacci", music: Lirepacci },
  { tribe: "Luxidoor", music: Luxidoor },
  { tribe: "Midnight", music: Midnight },
  { tribe: "Oumaji", music: Oumaji },
  { tribe: "Polaris", music: Polaris },
  { tribe: "Quetzali", music: Quetzali },
  { tribe: "Sha-po", music: Shapo },
  { tribe: "Solaris", music: Solaris },
  { tribe: "To Li", music: ToLi },
  { tribe: "Ürkaz", music: Urkaz },
  { tribe: "Vengir", music: Vengir },
  { tribe: "Xin-xi", music: Xinxi },
  { tribe: "Yadakk", music: Yadakk },
  { tribe: "Yorthwober", music: Yorthwober },
  { tribe: "Zebasi", music: Zebasi }
];



function CreateTribeButtons(){
  for(i = 0; i < tribeMusics.length; i++){
    let newButton = document.createElement("div")
    newButton.className = "tribalButton"
    newButton.id = tribeMusics[i].tribe
    newButton.innerHTML = tribeMusics[i].tribe
    buttonsContainer.appendChild(newButton)
  }

  tribeButtons = document.querySelectorAll(".tribalButton")
  
  for(i = 0; i < tribeMusics.length; i++){
    let identification = document.getElementById(tribeMusics[i].tribe).id
    tribeButtons[i].addEventListener("click", function()
      {
        if(identification == correctAnswer)
          {
              if(tribeMusics.length < 1){
                alert("Acertou")
                console.log("if")
                correctButton.remove()
                song.pause()
                isPlaying = false
                musicButton.style.backgroundImage = 'url(Images/PlayButton.png)'
                results.style.display = "block"
              }
              else{
                alert("Acertou")
                console.log("else")
                correctButton.remove()
                song.pause()
                isPlaying = false
                musicButton.style.backgroundImage = 'url(Images/PlayButton.png)'
                GenerateSong()
              }
          }

        else
          {
            if(tribeMusics.length < 1){
              alert("Errou")
              console.log("if")
              correctButton.remove()
              song.pause()
              isPlaying = false
              musicButton.style.backgroundImage = 'url(Images/PlayButton.png)'
              }
              else{
                alert("Errou")
                console.log("else")
                correctButton.remove()
                song.pause()
                isPlaying = false
                musicButton.style.backgroundImage = 'url(Images/PlayButton.png)'
                GenerateSong()
            }
          }
      }
    )
  }
}

function DeleteTribeButtons(){
  for(i = 0; i < tribeMusics.length; i++){
    let buttons = document.getElementById(tribeMusics[i].tribe)
    buttons.remove()
    correctButton.remove()
  }
}

function GenerateSong(){
  let randomNumber = Math.floor(Math.random()*(tribeMusics.length-1))
  correctAnswer = tribeMusics[randomNumber].tribe
  correctButton = document.getElementById(correctAnswer)
  song = tribeMusics[randomNumber].music
  console.log(correctAnswer)
  tribeMusics.splice(randomNumber, 1)
}

// -- Executation --

CreateTribeButtons()
GenerateSong()

// -----------------

// -- Load the song --

song.addEventListener("loadedmetadata", function(){duration = song.duration});

// -------------------

// -- Music Button Event --

musicButton.addEventListener("click", function () {
    if (!isPlaying) {
        song.play()
        musicButton.style.backgroundImage = 'url(Images/PauseButton.png)'
        isPlaying = true
        setInterval(function(){
            seconds = song.currentTime
            percentage = ((seconds/duration)*100)
            bar.style.width = `${percentage}%`
        }, 500)
    } 
    else {
        song.pause()
        musicButton.style.backgroundImage = 'url(Images/PlayButton.png)'
        
        isPlaying = false
    }
});

// ------------------------