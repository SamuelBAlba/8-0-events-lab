const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}



let mainColor = document.querySelector('#current-color')

let listColor = document.querySelectorAll('.color')


listColor.forEach((singleC) => {
    singleC.addEventListener('click', (event) => {
        currentColor.style.backgroundColor = event.target.style.backgroundColor
    })
})

