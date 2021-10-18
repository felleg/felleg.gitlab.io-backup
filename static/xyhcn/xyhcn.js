var COLORS = [
   "red",
   "blue",
   "green",
   "yellow",
   "purple",
   "orange",
   "brown",
   "black",
   "pink",
]



// Taken from the excellent https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
function* range(start, end) {
   for (let i = start; i < end; i++) {
      yield i;
   }
}

function randint(n) {
   return Math.floor(Math.random() * n);
}

function generateTable(table) {
   // Count the number of cells as we are building them
   var counter = 0;

   for (const i of range(0, x)) {
      let row = table.insertRow();
      for (const j of range(0, y)) {
         // A new cell is inserted!
         let cell = row.insertCell();
         cell.id = i.toString() + "," + j.toString();
         let check = document.createElement("input");
         check.type = "checkbox";
         cell.appendChild(check);

         counter++;
      }
   }

   // We now color the table.
   // We will count how many colored tiles we have.
   var counter = 0;
   var tries = 0

   // We stop the coloring process when we colored all the tiles we want
   while (counter < x * y - h) {
      var rand_x = randint(x);
      var rand_y = randint(y);
      let cell = document.getElementById(rand_x + "," + rand_y);
      // We color the cell if it is not already colored
      if (cell.style.backgroundColor == "") {
         // Note, we color according to `tries`, not `counter`. We came to the conclusion that if using
         // `counter`, there will be an equal number of cells of each color. This makes bad art because all
         // puzzles end up looking the same.
         // Thus, using `tries` is more pleasing to the gamer.
         cell.style.backgroundColor =  COLORS[tries % c];
         counter++;
      }
      // We count how many tries it took to colorize all cells
      tries++;
   }
}

function swapColors(i,j) {
}

// Random puzzle parameters
var x = 5;
var y = 5;
var h = 0;
var c = 2 + randint(8);

let table = document.querySelector("table");
generateTable(table);
var clone = table.cloneNode(true);
let target = document.getElementById("target");
target.after(clone);
