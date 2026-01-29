// Variables for clock and chronometer
let hours = (minutes = seconds = 0);
let active = null;
let updater = null;
let is24Hour = true; // Flag for 24-hour or 12-hour format

// Function to illuminate the element
function illuminator(elem, clock) {
  
  clock.style.boxShadow = "0px 0px 20px rgba(255, 191, 0, 0.900)";

  setTimeout(function () {
    clock.style.boxShadow = "none";
   
  }, 2000);
}

// Function to stop the chronometer
function reset() {
  if (active) {
    console.log("stop");
    clearInterval(active);
    active = null;

    // Restart the regular clock update
    updateClock(); // Update the clock immediately
    updater = setInterval(updateClock, 1000); // Restart the interval for the clock
  }
}

function pause() {
  if (active) {
    console.log("pause");
    clearInterval(active);
    clearInterval(updater);
  }
}

// Function to run the chronometer
function chronometer() {
  console.log("chrono");
  let min = (sec = mills = 0);

  // Stop updating the regular clock
  clearInterval(updater);

  // Start the chronometer
  active = setInterval(function () {
    mills++;
    if (mills === 100) {
      sec++;
      mills = 0;
      if (sec === 60) {
        min++;
        sec = 0;
      }
    }

    // Update the clock display with the chronometer values
    clock.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(
      2,
      "0"
    )}:${String(Math.floor(mills / 10)).padStart(2, "0")}`;
  }, 10);
}

// Function to update the regular clock
function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();

  let hours = now.getHours();
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  if (!is24Hour) {
    // Convert to 12-hour format
    const suffix = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12; // Convert hour '0' to '12'
    clockElement.textContent = `${String(hours).padStart(2, "0")}:${minutes}:${seconds}${suffix}`;
  } else {
    // 24-hour format
    clockElement.textContent = `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;
  }
}

// Function to update the date
function updateDate() {
  const clockDays = document.querySelector(".clockdays");
  let names = ["SUN", "MO", "TU", "WE", "TH", "FR", "SAT"];
  const ora = new Date();

  // Day of the month
  let dayMon = String(ora.getDate()).padStart(2, "0");

  // Day of the week
  let weekDay = ora.getDay();
  let day = names[weekDay];

  clockDays.textContent = `${day} - ${dayMon}`;
}

// Initializing the clock and date updates
updateClock();
updateDate();

// Start updating the regular clock every second
updater = setInterval(updateClock, 1000);

// Event listener setup for button clicks
let button = document.querySelectorAll("#button");
let clockContainer = document.querySelector(".clock-container");
let clock = document.querySelector(".clock");

button.forEach((elem) =>
  elem.addEventListener("click", function (e) {
    console.log(elem, "hello!");

    if (e.target.className === "button one") {
      illuminator(elem, clockContainer);
    } else if (e.target.className === "button two") {
      if (!active) {
        chronometer(); // Start the chronometer
      } else {
        reset(); // Stop the chronometer
      }
    } else if (e.target.className === "button three") {
      pause();
    } else if (e.target.className === "button four") {
      // Toggle between 24-hour and 12-hour formats
      is24Hour = !is24Hour;
      updateClock(); // Refresh the clock display with the new format
    }
  })
);

console.log("five");
