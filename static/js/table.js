
// // Select the form
// var form = d3.select("#form");

// // Create event handlers for date
// form.on("change",searchFilter);

function AllData(){
    d3.csv("./data/powerstats.csv").then(function(herodata){

        var tbody = d3.select("tbody");
        // console.log(herodata)

        herodata.forEach((tableInput) => {
            var row = tbody.append("tr");
            Object.entries(tableInput).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
        });//end of tabledata input
    });//end of d3
};// end of function
function universeFilter(){
    d3.csv("./data/powerstats.csv").then(function(herodata){

        var tbody = d3.select("tbody");
        // console.log(herodata)

        var dc_data = herodata.filter(function (hero){
            return hero.creator === 'DC Comics'
            });
        var marvel_data = herodata.filter(function (hero){
            return hero.creator === 'Marvel Comics'
            });

        var other_data = herodata.filter(function (hero){
            return hero.creator !== 'Marvel Comics' & hero.creator !== 'DC Comics'
                });
        // console.log(other_data)

        if (document.getElementById("universe").value === "ALL"){
            tbody.html("");
            herodata.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns all 

        else if (document.getElementById("universe").value === "DC"){
            tbody.html("");
            dc_data.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC Comics 

        else if (document.getElementById("universe").value === "Marvel"){
            tbody.html("");
            marvel_data.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel Comics 

        else {
            tbody.html("");
            other_data.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Other Universes

    });//end of d3
}

function alignmentFilter(){
    d3.csv("./data/powerstats.csv").then(function(herodata){

        var tbody = d3.select("tbody");

        var good_alignment = herodata.filter(function (hero){
            return hero.alignment === 'Good'
        });
            
        var bad_alignment = herodata.filter(function (hero){
            return hero.alignment === 'Bad'
        });
            
        var other_alignment = herodata.filter(function (hero){
            return hero.alignment !== 'Good' && hero.alignment != 'Bad'
        });

        if (document.getElementById("alignment").value === "ALL"){
            tbody.html("");
            herodata.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns all 

        else if (document.getElementById("alignment").value === "Good"){
            tbody.html("");
            good_alignment.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Good alignment

        else if (document.getElementById("alignment").value === "Bad"){
            tbody.html("");
            bad_alignment.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Bad alignment

        else {
            tbody.html("");
            other_alignment.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Other alignment


    });//end of d3
}// end of function

// AllData(); //run unfiltered table
universeFilter(); //run filter by Universe
alignmentFilter(); //run filter by Alignment
