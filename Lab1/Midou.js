console.log("midou");

const StartBox = document.getElementById("start");
const ParentBox = document.getElementById("maze");
const EndBox = document.getElementById("end");
const BoxesBoundary = document.querySelectorAll(".boundary");
let arraBox = Array.from(BoxesBoundary);
let gameStarted = false; 

const resetGame = () => {
  arraBox.forEach(el => {
    el.classList.remove('active');
    el.classList.remove('lose');
    el.classList.remove('blue');
  });
  gameStarted = false; 
};

const StartGameUp = () => {
  StartBox.addEventListener('mouseover', (e) => {
    if (!gameStarted) { 
      StartGame();
    }
  });
};

const StartGame = () => {
  gameStarted = true; 
  arraBox.forEach(el => {
    el.classList.add('active');
    el.addEventListener('mouseover', () => {
      EndGame();
    });
  });

  EndBox.addEventListener('mouseover', () => {
    
    arraBox.forEach(el => {
      el.classList.remove('active');
      el.classList.remove('lose');
      el.classList.add('blue');
    });
    resetGame();
  });
};

const EndGame = () => {
  if (gameStarted) { 
    arraBox.forEach(el => {
      el.classList.remove('active');
      el.classList.add('lose');
    });
    window.alert('You Lose');
    resetGame(); 
  }
};


StartGameUp();
