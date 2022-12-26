// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}


// current color will is the blank box that will change according to what is clicked on the pallete
const currentColor = document.querySelector("#current-color")
// all colors will be the pallete of colors at the bottom
const allColors = document.querySelectorAll(".color")

// cell is the grid of with all the boxes
const cell = document.querySelectorAll(".cell")


// iterating through our color list
allColors.forEach((newColor) => {
  // adding 'click' event to the pallete of colors
  newColor.addEventListener('click',(event) => {
    // when a color is clicked it swicthes the color of currenColor to the one clicked
    currentColor.style.backgroundColor = event.target.style.backgroundColor
  })
})
// looping through the cell class elements
cell.forEach((cells) => {
  // add the click event to the grid
  cells.addEventListener('click', () => {
    // when a grid is clicked the color of it becomes the color of current color
    cells.style.backgroundColor = currentColor.style.backgroundColor
  })
})





