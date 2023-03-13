//easing animation

function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
  }

// Dice roller
 
  function rollDice(sides) {
    const resultElement = document.getElementById("result-d" + sides);
    const result = Math.floor(Math.random() * sides) + 1;
    const modifier = parseInt(document.getElementById("modifier-d" + sides).value);
    const resultTotalElement = document.getElementById("result-total-d" + sides); 
    const resultTotal = result + modifier;

    resultElement.classList.remove("gold"); //remove the gold
    
    // display random numbers
    const startTime = Date.now();
    const intervalId = setInterval(function() {
    let  elapsedTime = Date.now() - startTime;
      if (elapsedTime >= 700) {
        clearInterval(intervalId);
        resultElement.innerHTML = result; //dice roll
        resultTotalElement.innerHTML = resultTotal //total with mod
        if (sides == 20 && result == sides) {
            resultElement.classList.add("gold"); // add the "gold" class
          }
      } else {
        const progress = Math.min(1, elapsedTime / 700);
        let  easing = easeOutQuart(progress); // use the easeOutQuart function
        let  randomNumber = Math.floor(Math.random() * sides) + 1;
        let  animatedNumber = Math.floor(randomNumber * easing);
        resultElement.innerHTML = animatedNumber;
      }
    }, 50); //speed of the animation
  }
  

//   Clear results
  function clearResult() {
    let resultElements = document.getElementsByClassName("result");
    let resultTotalElements = document.getElementsByClassName("result-total");
    for (let i = 0; i < resultElements.length; i++) {
      resultElements[i].innerHTML = "-";
      resultTotalElements[i].innerHTML = "-";
    }
  }
  

  //TODO - add modifier total. 
  
