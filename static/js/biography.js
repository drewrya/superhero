
biofilter();

function biofilter() {
  d3.csv("/static/data/biography.csv").then(function (data) {
    names = data.map(obj => obj.name);


    d3.select('#superhero').on('change', () => {
      names = names.filter(name => name.includes(d3.select(this).property('value')))

      names.forEach(name => {

        d3.select('#selectFilter').append('option').text(name)
      });
    })


    console.log(


      names



    );
  });
};


// Select the form
var form = d3.select("#form");

// Create event handlers for superhero
form.on("change",searchFilter);

// Select the button
var filterbutton = d3.select("#filter-btn");

// Create event handlers for date
filterbutton.on("click", searchFilter);

function searchFilter(){
  d3.csv("/static/data/biography.csv").then(function(searchdata){

        var tbody = d3.select("tbody");

        searchdata.forEach((tableInput) => {
            var row = tbody.append("tr");
            Object.entries(tableInput).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
        });//end of tabledata input

        var heroInput = d3.select('#superhero')
        // Get the date value property of the input element
        var heroValue = heroInput.property("value");

        var filteredData = searchdata.filter(data => ((data.name).match(heroValue)) 
        );

        tbody.html("");

        filteredData.forEach((tableInput) => {
            var row = tbody.append("tr");
            Object.entries(tableInput).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });  
        });


    });//end of d3
}