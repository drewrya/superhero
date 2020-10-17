function getData(){
    d3.csv("./data/powerstats.csv").then(function(herodata){

        herodata
        var tbody = d3.select("tbody");
        console.log(herodata)

        herodata.forEach((tableInput) => {
            var row = tbody.append("tr");
            Object.entries(tableInput).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
        });//end of tabledata input
    });//end of d3
};// end of function
getData()
