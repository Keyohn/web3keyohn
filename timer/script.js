//TODO: set the following variables to the correct values. Use the index.html to 
//figure out the id names of the elements we need.
const timerDisplay = document.getElementById("timer")
const startStopButton = document.getElementById("startStop")
const resetButton = document.getElementById("reset")
const timerNameInput = document.getElementById("timerName")
const lapButton = document.getElementById("lap")
const lapList = document.getElementById("lapList")

// variables
let startTime = 0
let elapsedTime = 0
let timerInterval = null;
let isRunning = false
let lastLap = 0
list = []
// Load the previous state from localStorage
window.onload = () => {
 //TODO: get the elapsedTime and timeName keys from local storage
  const savedTime = localStorage.getItem('elapsedTime');
  const savedName = localStorage.getItem('timerName');
  const savedLap = localStorage.getItem('lastLap')
  const savedList = localStorage.getItem('list')

  if (savedTime) {
    elapsedTime = parseInt(savedTime, 10);
    updateDisplay(elapsedTime);
  }

  if (savedName) {
    timerNameInput.value = savedName;
  }

  if (savedLap) {
    lastLap = parseInt(savedLap, 10);
  }

  if (savedList) {
    list = JSON.parse(savedList)
    list.forEach(element => {
      let li = document.createElement('li')
      li.textContent = element
      lapList.appendChild(li)
      console.log('from window onload',lapList)
    });
  }
};

// Start/Stop button functionality
startStopButton.addEventListener('click', () => {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime// subtract something from Date.now()
    timerInterval = setInterval(updateTimer, 1000);
    startStopButton.textContent = 'Stop';
  } else {
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime// subtract something from here to figure out the elapsed Time
    //save the two keys to local storage below
    localStorage.setItem("elapsedTime", elapsedTime)
    localStorage.setItem("timerName", timerNameInput.value)
    startStopButton.textContent = 'Start';
  }
  isRunning = !isRunning;
});

// Reset button functionality
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  elapsedTime = 0 // set the elapsed time to the appropriate value
  isRunning = false// update
  startStopButton.textContent = "Start" // update this
  updateDisplay(0);//what goes in the paranthesis?
  timerNameInput.value = ''; // Clear the name
  //remove the keys from local storage
  lapList.innerHTML= ''
  localStorage.removeItem("elapsedTime")
  localStorage.removeItem("timerName")
  localStorage.removeItem("list")
  localStorage.removeItem("lastLap")

  console.log(lapList)
});

lapButton.addEventListener('click', () => {
  if (lastLap==0) {
    updateLapList(elapsedTime)
  }
  else {
    updateLapList(elapsedTime - lastLap)
  }
  lastLap = elapsedTime
  localStorage.setItem("lastLap", lastLap)
})

function updateLapList(time) {
  newLap = document.createElement("li")
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  newLap.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  lapList.appendChild(newLap)
  list = Array.from(document.querySelectorAll("li")).map((li)=>li.textContent)
  localStorage.setItem("list", JSON.stringify(list))
}
// Update the display
function updateDisplay(time) {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  
  // Update the timer every second
  function updateTimer() {
    elapsedTime = Date.now() - startTime;// subtract something from Data.now()
    updateDisplay(elapsedTime); // what should be displayed
    //save something to local storage
    localStorage.setItem("elapsedTime", elapsedTime)
  }
  
  // Pad single digits with a leading zero
  function pad(num) {
    return num.toString().padStart(2, '0')
}

const stopwatchMode = document.getElementById("StopwatchMode")
const timerMode = document.getElementById("TimerMode")
/// TODO: make the dots work
let mode = "stopwatch"
stopwatchMode.addEventListener('click', () => {
  // If the mode is not stopwatch 
    // remove the yelow color from the timer and add to stopwatch
    //the timer div should disapper by setting the display to none
    // the stopwatch display to block
    //the mode should be set to stop watch
  if (mode !== "stopwatch") {
    stopwatchMode.classList.add("active")
    timerMode.classList.remove("active")
    timer.style.display = "none"
    stopwatch.style.display = "block"
    mode = "stopwatch"
  }
})

timerMode.addEventListener('click', () => {
  if (mode !== "timer") {
    stopwatchMode.classList.remove("active")
    timerMode.classList.add("active")
    timer.style.display = "block"
    stopwatch.style.display = "none"
    mode = "timer"
  }
})

const startTimerButton = document.getElementById("startTimer")
const resetTimerButton = document.getElementById("resetTimer")
const add30sec = document.getElementById("+30sec")
const add1min = document.getElementById("+1min")
const add5min = document.getElementById("+5min")
const add10min = document.getElementById("+10min")
const timer = document.getElementById("Timer")
const timerNums = document.getElementById("timerNums")
const stopwatch = document.getElementById("stopwatch")

///TODO: MAKE THE timer work

//make constant variables to hold the time
const ONE_MIN = 1000 * 60 
const FIVE_MIN = 1000 * 60 * 5
const TEN_MIN = 10000 * 60
const THIRTY_SEC = 1000 * 30

// make regular js variables to hold timeRemaining in timer
// timerElapsedTime
// timerStartTime 
//timerDuration

let timerElapsedTime = 0
let timerStartTime = 0
let timerDuration = 0

//TODO: copy line 106 and change timerDisplay to timerNum
