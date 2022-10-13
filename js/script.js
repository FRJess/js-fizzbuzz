
// variabile container e limite
const container = document.querySelector(".container");
const limit = 105;

// ciclo di ripetizione dei box
for(let i = 1; i <=limit; i++){
  const box = document.createElement ("div");
  box.className = "box";

  // aggiungo al container  
  container.append(box);

  //condizione se multiplo di 3 e di 5
  if(i % 3 === 0 && i % 5 === 0){
    box.classList.add("fizzbuzz");
    box.innerHTML = "FizzBuzz";
  }

  //condizione se multiplo di 5
  else if(!(i % 5)){
    box.classList.add("buzz");
    box.innerHTML = "Buzz";
  }
  
  //condizione se multiplo di 3
  else if(!(i % 3)){
    box.classList.add("fizz");
    box.innerHTML = "Fizz";
  }


  else{
    box.innerHTML = i;
  }

}

