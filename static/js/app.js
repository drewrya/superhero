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

// // Use d3 to update each cell's text with
// // ufo values ( `date/time`, `city`, `state`, `country`, `shape`, and `comment`)
// data.forEach(function(ufoSightings) {
//   console.log(ufoSightings);
//   var row = tbody.append("tr");
//   Object.entries(ufoSightings).forEach(function([key, value]) {
//     // Append a cell to the row for each value
//     // in the ufo object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    
    // Then, select the unordered list element by class name
    var tbody = d3.select("tbody");

    // remove any children from the list to
    tbody.html("");

    //Update the form with the new filtered data
    filteredData.forEach(function(filtered) {
        console.log(filtered);
        var row = tbody.append("tr");
        Object.entries(filtered).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
        });
    });
};
