// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

 // Use d3 to update each cell's text with
// biography values( `Name`, `Real name`, `History Biography`, `Powers Biography`, `Place of Birth`, `Alignment`, `Gender`, `Height`, `Weight`, `Eye Color`, `Hair Color`, and `Skin Color`)
data.forEach(function(biography) {
   console.log(biography);
   var row = tbody.append("tr");
   Object.entries(biography).forEach(function([value]) {
    //Append a cell to the row for each value
    // in the biography object
    var cell = row.append("td");
    cell.text(value);
   });
 });