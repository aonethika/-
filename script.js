const funnyStuff = ["💩", "🍕", "🐸", "🧦", "😂"];
let correctBox = Math.floor(Math.random() * 9);

const boxes = document.querySelectorAll(".box");
const message = document.getElementById("message");

const errorSound = new Audio("error.mp3");  
const clapSound = new Audio("clap.mp3");    

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    // If it's the correct box
    if (index === correctBox) {
      box.textContent = "🌸"; // show flower
      clapSound.play(); 
      
      // small delay before hiding all boxes so flower is visible first
      setTimeout(() => {
        boxes.forEach(b => b.style.display = "none"); // hide all boxes
        message.textContent = "Yayyy 🎉 You made it! Love you soooooooooooooooo much 😭😭😭💖";
      }, 800); 
      
    } 
    // If it's a wrong box
    else {
      errorSound.play(); 
      let funny = funnyStuff[Math.floor(Math.random() * funnyStuff.length)];
      box.textContent = funny; // show funny emoji
      message.textContent = "Nope 😆 try again!";
    }
  });
});
