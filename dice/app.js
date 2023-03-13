function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
  }

// Dice roller

 
  function rollDice(sides) {
    const resultElement = document.getElementById("result-d" + sides);
    const result = Math.floor(Math.random() * sides) + 1;
    resultElement.classList.remove("gold"); //remove the gold
    
    // display random numbers for 1 second using an easing function
    const startTime = Date.now();
    const intervalId = setInterval(function() {
    let  elapsedTime = Date.now() - startTime;
      if (elapsedTime >= 700) {
        clearInterval(intervalId);
        resultElement.innerHTML = result;
        if (sides == 20 && result == sides) {
            resultElement.classList.add("gold"); // add the "gold" class to the result element if the result is 20 on a d20
          }
      } else {
        const progress = Math.min(1, elapsedTime / 700);
        let  easing = easeOutQuart(progress); // use the easeOutQuart function
        let  randomNumber = Math.floor(Math.random() * sides) + 1;
        let  animatedNumber = Math.floor(randomNumber * easing);
        resultElement.innerHTML = animatedNumber;
      }
    }, 50); // change this value to adjust the speed of the animation
  }
  

//   Clear results
  function clearResult() {
    let  resultElements = document.getElementsByClassName("result");
    for (let  i = 0; i < resultElements.length; i++) {
      resultElements[i].innerHTML = "-";
    }
  }

  //TODO - add modifier total. 
  
