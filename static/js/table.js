// Select the form
var form = d3.select("#form");

// Create event handlers for superhero
form.on("change",searchFilter);

// Select the button
var filterbutton = d3.select("#filter-btn");

// Create event handlers for date
filterbutton.on("click", searchFilter);

function searchFilter(){
    d3.csv("./data/powerstats.csv").then(function(searchdata){

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

function runFilter(){
    d3.csv("./data/powerstats.csv").then(function(herodata){

        var tbody = d3.select("tbody");
        // console.log(herodata)
        
    //Unsorted Stats
        // ALL universes
        if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "None"){
            tbody.html("");
            herodata.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns everything

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Good'
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Good Alignment 

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Bad'
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Bad Alignment 

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns ALL universes with Other Alignment

        //DC Universe
        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics'
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire DC universe

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Good'
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Good Alignment

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Bad'
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Bad Alignment

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Other Alignment

        //Marvel Universe
        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics'
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire Marvel universe

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Good'
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Good Alignment

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Bad'
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Bad Alignment

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Other Alignment

        //Other Universes
        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Good'
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Good Alignment

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Bad'
            });


            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Bad Alignment

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "None") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns non DC and Marvel universes with Other Alignments

    //Sort by Top Avg Stats
        // ALL universes
        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Avg"){
            tbody.html("");
            
            var herodata = herodata.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            herodata.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns everything with top avg

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Good Alignment with top avg

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Bad Alignment with top avg

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns ALL universes with Other Alignment with top avg

        //DC Universe
        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics'
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire DC universe with top avg

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Good Alignment with top avg

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Bad Alignment with top avg

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Other Alignment with top avg

        //Marvel Universe
        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics'
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire Marvel universe with top avg

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Good Alignment with top avg

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Bad Alignment with top avg

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Other Alignment with top avg

        //Other Universes
        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with top avg

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Good Alignment with top avg

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Bad Alignment with top avg

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Avg") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.avg_stats - a.avg_stats
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns non DC and Marvel universes with Other Alignments with top avg

    //Sort by Top Int Stats
        // ALL universes
        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Int"){
            tbody.html("");
            
            var herodata = herodata.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            herodata.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns everything with top Int

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Good Alignment with top Int

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Bad Alignment with top Int

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns ALL universes with Other Alignment with top Int

        //DC Universe
        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics'
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire DC universe with top Int

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Good Alignment with top Int

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Bad Alignment with top Int

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Other Alignment with top Int

        //Marvel Universe
        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics'
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire Marvel universe with top Int

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Good Alignment with top Int

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Bad Alignment with top Int

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Other Alignment with top Int

        //Other Universes
        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with top Int

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Good Alignment with top Int

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Bad Alignment with top Int

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Int") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.intelligence_score - a.intelligence_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns non DC and Marvel universes with Other Alignments with top Int

    //Sort by Top Str Stats
        // ALL universes
        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Str"){
            tbody.html("");
            
            var herodata = herodata.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            herodata.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns everything with top Str

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Good Alignment with top Str

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Bad Alignment with top Str

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns ALL universes with Other Alignment with top Str

        //DC Universe
        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics'
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire DC universe with top Str

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Good Alignment with top Str

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Bad Alignment with top Str

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Other Alignment with top Str

        //Marvel Universe
        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics'
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire Marvel universe with top Str

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Good Alignment with top Str

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Bad Alignment with top Str

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Other Alignment with top Str

        //Other Universes
        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with top Str

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Good Alignment with top Str

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Bad Alignment with top Str

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Str") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.strength_score - a.strength_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns non DC and Marvel universes with Other Alignments with top Str

    //Sort by Top Spe Stats
        // ALL universes
        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Spe"){
            tbody.html("");
            
            var herodata = herodata.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            herodata.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns everything with top Spe

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Good Alignment with top Spe

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Bad Alignment with top Spe

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns ALL universes with Other Alignment with top Spe

        //DC Universe
        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics'
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire DC universe with top Spe

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Good Alignment with top Spe

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Bad Alignment with top Spe

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Other Alignment with top Spe

        //Marvel Universe
        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics'
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire Marvel universe with top Spe

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Good Alignment with top Spe

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Bad Alignment with top Spe

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Other Alignment with top Spe

        //Other Universes
        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with top Spe

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Good Alignment with top Spe

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Bad Alignment with top Spe

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Spe") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.speed_score - a.speed_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns non DC and Marvel universes with Other Alignments with top Spe

    //Sort by Top Dura Stats
        // ALL universes
        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Dura"){
            tbody.html("");
            
            var herodata = herodata.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            herodata.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns everything with top Dura

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Good Alignment with top Dura

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Bad Alignment with top Dura

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns ALL universes with Other Alignment with top Dura

        //DC Universe
        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics'
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire DC universe with top Dura

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Good Alignment with top Dura

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Bad Alignment with top Dura

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Other Alignment with top Dura

        //Marvel Universe
        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics'
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire Marvel universe with top Dura

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Good Alignment with top Dura

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Bad Alignment with top Dura

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Other Alignment with top Dura

        //Other Universes
        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with top Dura

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Good Alignment with top Dura

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Bad Alignment with top Dura

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Dura") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.durability_score - a.durability_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns non DC and Marvel universes with Other Alignments with top Dura

    //Sort by Top Pwr Stats
        // ALL universes
        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Pwr"){
            tbody.html("");
            
            var herodata = herodata.sort(function(a, b){
                return b.power_score - a.power_score
            });

            herodata.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns everything with top Pwr

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Good Alignment with top Pwr

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Bad Alignment with top Pwr

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns ALL universes with Other Alignment with top Pwr

        //DC Universe
        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics'
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire DC universe with top Pwr

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Good Alignment with top Pwr

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Bad Alignment with top Pwr

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Other Alignment with top Pwr

        //Marvel Universe
        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics'
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire Marvel universe with top Pwr

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Good Alignment with top Pwr

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Bad Alignment with top Pwr

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Other Alignment with top Pwr

        //Other Universes
        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with top Pwr

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Good Alignment with top Pwr

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Bad Alignment with top Dura

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Pwr") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.power_score - a.power_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns non DC and Marvel universes with Other Alignments with top Pwr

    //Sort by Top Com Stats
        // ALL universes
        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Com"){
            tbody.html("");
            
            var herodata = herodata.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            herodata.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns everything with top Com

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Com") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Good Alignment with top Com

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Com") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All universes with Bad Alignment with top Com

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Com") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns ALL universes with Other Alignment with top Com

        //DC Universe
        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Com") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics'
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire DC universe with top Com

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Com") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Good Alignment with top Com

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Com") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Bad Alignment with top Com

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Com") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'DC Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns DC universe with Other Alignment with top Com

        //Marvel Universe
        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Com") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics'
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Entire Marvel universe with top Com

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Com") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Good Alignment with top Com

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Com") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Bad Alignment with top Com

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Other" & document.getElementById("Stats").value === "Com") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator === 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns Marvel universe with Other Alignment with top Com

        //Other Universes
        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "ALL" & document.getElementById("Stats").value === "Com") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with top Com

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Good" & document.getElementById("Stats").value === "Com") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Good'
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Good Alignment with top Com

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Bad" & document.getElementById("Stats").value === "Com") {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics'
                & hero.alignment === 'Bad'
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns All non DC and Marvel universes with Bad Alignment with top Dura

        else {
            tbody.html("");
            
            var filteredData = herodata.filter(function (hero){
                return hero.creator !== 'DC Comics' & hero.creator !== 'Marvel Comics' & hero.alignment !== 'Good' & hero.alignment !== 'Bad' 
            });

            filteredData.sort(function(a, b){
                return b.combat_score - a.combat_score
            });

            filteredData.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns non DC and Marvel universes with Other Alignments with top Com


    });//end of d3
}

runFilter() //calls runfilter to display inital data

