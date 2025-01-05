import confetti from 'https://cdn.skypack.dev/canvas-confetti';
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const imageDisplay = document.getElementById('imageDisplay');
    const valentineQuestion = document.getElementById('valentineQuestion');
    const responseButtons = document.getElementById('responseButtons');
  
    let noClickCount = 0;
    let buttonHeight = 48; 
    let buttonWidth = 80;
    let fontSize = 20; 
    const imagePaths = [
      "./image1.gif",
      "./image2.gif",
      "./image3.gif",
      "./image4.gif",
      "./image5.gif",
      "./image6.gif",
      "./image7.gif"
    ];
  
    noButton.addEventListener('click', function() {
      if (noClickCount < 5) {
        noClickCount++;
        imageDisplay.src = imagePaths[noClickCount];
        buttonHeight += 35; 
        buttonWidth += 35;
        fontSize += 25; 
        yesButton.style.height = `${buttonHeight}px`; 
        yesButton.style.width = `${buttonWidth}px`;
        yesButton.style.fontSize = `${fontSize}px`; 
        if (noClickCount < 6) {
          noButton.textContent = ["No", "Are you sure?", "Pookie please", "Don't do this to me :(", "You're breaking my heart", "I'm gonna cry..."][noClickCount];
        }
      }
    });
  
    yesButton.addEventListener('click', () => {
      imageDisplay.src = '/image7.gif'; 
      valentineQuestion.textContent = "I love you so much"; 
      responseButtons.style.display = 'none'; 
      confetti(); 
    });
