
// variabile container e limite
const container = document.querySelector(".container");
const limit = 105;
// let i;
let fizz = "fizz"

// ciclo di ripetizione dei box
for(let i = 1; i <=limit; i++){
  const box = document.createElement ("div");
  box.className = "box";

  // stampo in html
  box.innerHTML = i;
  container.append(box);

  //condizione se multiplo di 3
  if(! (i % 3)){
    box.classList.add("fizz");
    box.replace(i,fizz);
    // console.log(i.replace:([0-9],"fizz"));
    // let box.innerHTML = box.replace(i, "fizz");
    // let text = document.getElementById("box").innerHTML; 
    // document.getElementById("box").innerHTML = text.replace(i, "W3Schools");
  }

  //condizione se multiplo di 5
  if(! (i % 5)){
    box.classList.add("buzz");
  }


}

