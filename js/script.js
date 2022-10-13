
// variabile container e limite
const container = document.querySelector(".container");
const limit = 105;

// ciclo di ripetizione dei box
for(let i = 1; i <=limit; i++){
  const box = document.createElement ("div");
  box.className = "box";

  //condizione se multiplo di 3
  if(! (i % 3)){
    box.classList.add("fizz");
  }

  //condizione se multiplo di 5
  if(! (i % 5)){
    box.classList.add("buzz");
  }

  // stampo in html
  box.innerHTML = i;
  container.append(box);
}

