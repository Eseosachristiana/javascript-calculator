const animals = ["dog", "cow", "fish", "porcupine", "rabbit"];
const body = document.body;
const ul = document.createElement("ul");


for (let index = 0; index < animals.length; index++) {
    const li = document.createElement("li");
    li.textContent = animals[index]
    ul.appendChild(li)
    
}

body.appendChild(ul)
