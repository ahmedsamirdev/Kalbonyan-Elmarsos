let guessGame = function (guess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min )) + min;
  
    return guess === randomNum;
  };
  
  console.log(guessGame(1));
  