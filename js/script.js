
// VARIABLES DECLARATION AND INIZIALIZATION
const container = document.querySelector(".container");
const limit = 105;

// CYCLE
for(let i = 1; i <=limit; i++){
  const box = document.createElement ("div");
  box.className = "box";

  // add it to container  
  container.append(box);

  //condition if multiple of 3 and 5
  if(i % 3 === 0 && i % 5 === 0){
    box.classList.add("fizzbuzz");
    box.innerHTML = "FizzBuzz";
  }

  //condition if multiple of 5
  else if(!(i % 5)){
    box.classList.add("buzz");
    box.innerHTML = "Buzz";
  }
  
  //condition if multiple of 3
  else if(!(i % 3)){
    box.classList.add("fizz");
    box.innerHTML = "Fizz";
  }

  // condition if none of the above
  else{
    box.innerHTML = i;
  }

}

