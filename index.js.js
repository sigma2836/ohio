// Pop sound effect
const popSound = document.getElementById('popSound');

// Function to create balloons dynamically
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  
  // Randomize the position of the balloon
  balloon.style.left = `${Math.random() * 100}vw`;
  balloon.style.animationDuration = `${Math.random() * 5 + 3}s`; // Randomize the speed of the balloon
  
  // Add random color to the balloon
  const balloonColor = getRandomColor();
  balloon.style.background = balloonColor;

  // Attach the string to the balloon
  const string = document.createElement("div");
  string.classList.add("balloon-string");
  balloon.appendChild(string);

  // Add the balloon to the background
  document.querySelector(".background").appendChild(balloon);
  
  // Randomize if the balloon should be faint or not
  if (Math.random() > 0.5) {
    balloon.classList.add("faint");
  } else {
    balloon.classList.add("normal");
    // Add click event to pop the balloon
    balloon.addEventListener("click", () => {
      popBalloon(balloon);
    });
  }
}

// Function to pop a balloon
function popBalloon(balloon) {
  // Play the pop sound
  popSound.play();
  
  // Add pop effect (scale down and fade out)
  balloon.style.transform = "scale(0)";
  balloon.style.opacity = "0";
  
  // Remove the balloon after the effect
  setTimeout(() => {
    balloon.remove();
  }, 300); // Match the time with the transition
}

// Function to generate a random color for the balloons
function getRandomColor() {
  const colors = ["#ff4f58", "#4f87ff", "#ffbf00", "#00ff88", "#ff00bf"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Create balloons every 2 seconds
setInterval(createBalloon, 2000);

// Function for form submission
function submitForm() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name && age) {
    alert(`Hello ${name}! You are ${age} years old.`);
  } else {
    alert("Please fill in both fields.");
  }
}
