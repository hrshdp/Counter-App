let counter = 0; 

const inc = document.querySelector("#increase");
inc.addEventListener("click", ()=> {
    if(counter < 100) {
        counter++;
        document.querySelector("h1").textContent = `Counter = ${counter}`;
    }
})

const dec = document.querySelector("#decrease");
dec.addEventListener("click", ()=> {
    if(counter > 0) {
        counter--;
        document.querySelector("h1").textContent = `Counter = ${counter}`;
    }
})

