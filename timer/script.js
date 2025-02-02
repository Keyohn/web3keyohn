//TODO: set the following variables to the correct values. Use the index.html to 
//figure out the id names of the elements we need.
const timerDisplay = document.getElementById("timer")
const startStopButton = document.getElementById("startStop")
const resetButton = document.getElementById("reset")
const timerNameInput = document.getElementById("timerName")

let startTime = 0
let elapsedTime = 0
let timerInterval = null;
let isRunning = false

// Load the previous state from localStorage
window.onload = () => {
 //TODO: get the elapsedTime and timeName keys from local storage
  const savedTime = localStorage.getItem('elapsedTime');
  const savedName = localStorage.getItem('timerName');

  if (savedTime) {
    elapsedTime = parseInt(savedTime, 10);
    updateDisplay(elapsedTime);
  }

  if (savedName) {
    timerNameInput.value = savedName;
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
    
    startStopButton.textContent = 'Start';
  }
  isRunning = !isRunning;
});

// Reset button functionality
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  elapsedTime// set the elapsed time to the appropriate value
  isRunning// update
  startStopButton.textContent// update this
  updateDisplay(__);//what goes in the paranthesis?
  timerNameInput.value = ''; // Clear the name
  //remove the keys from local storage
  
});


// Update the display
function updateDisplay(time) {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  
  // Update the timer every second
  function updateTimer() {
    elapsedTime = Date.now();// subtract something from Data.now()
    updateDisplay(__); // what should be displayed
    //save something to local storage
  }
  
  // Pad single digits with a leading zero
  function pad(num) {
    return num.toString().padStart(2, '0')
}
