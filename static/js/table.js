function runFilter(){
    d3.csv("./data/powerstats.csv").then(function(herodata){

        var tbody = d3.select("tbody");
        // console.log(herodata)

        var dc_data = herodata.filter(function (hero){
            return hero.creator === 'DC Comics' & hero.alignment === 'Good'
            });
        var marvel_data = herodata.filter(function (hero){
            return hero.creator === 'Marvel Comics'
            });

        var other_data = herodata.filter(function (hero){
            return hero.creator !== 'Marvel Comics' & hero.creator !== 'DC Comics'
                });
        // console.log(dc_data)
        
        // ALL universes
        if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "ALL"){
            tbody.html("");
            herodata.forEach((tableInput) => {
                var row = tbody.append("tr");
                Object.entries(tableInput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });//end of tabledata input
        } // returns everything

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Good") {
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

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Bad") {
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

        else if (document.getElementById("universe").value === "ALL" & document.getElementById("alignment").value === "Other") {
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
        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "ALL") {
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

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Good") {
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

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Bad") {
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

        else if (document.getElementById("universe").value === "DC" & document.getElementById("alignment").value === "Other") {
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
        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "ALL") {
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

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Good") {
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

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Bad") {
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

        else if (document.getElementById("universe").value === "Marvel" & document.getElementById("alignment").value === "Other") {
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
        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "ALL") {
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

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Good") {
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

        else if (document.getElementById("universe").value === "Other" & document.getElementById("alignment").value === "Bad") {
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

        else {
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


    });//end of d3
}

runFilter() //calls runfilter to display inital data

// // Select the form
// var form = d3.select("#form");

// // Create event handlers for date
// form.on("change",searchFilter);
