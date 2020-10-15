function IntFilter(heroes) {
    d3.csv("/data/powerstats.csv").then(function(herodata){
        
        //filter DC Comics and Marvel Comics heroes/villains
        var dc_data = herodata.filter(function (hero){
            return hero.creator === 'DC Comics'
        });
    
        var marvel_data = herodata.filter(function (hero){
            return hero.creator === 'Marvel Comics'
        });

        //create filter for int score and sort by top
        var dc_Int = dc_data.sort(function(a, b){
            return b.intelligence_score - a.intelligence_score
        });
        var dc_top_Int = dc_Int.slice(0,10)
        // console.log(dc_top_Int)
        var reversed_DC_Int = dc_top_Int.reverse()
        
        var marvel_Int = marvel_data.sort(function(a, b){
            return b.intelligence_score - a.intelligence_score
        });
        var marvel_top_Int = marvel_Int.slice(0,10);

        var reversed_marvel_Int = marvel_top_Int.reverse()


        //create Traces for DC and Marvel
        DC_Trace = {
            type: 'bar',
            x: reversed_DC_Int.map(row => row.name),
            y: reversed_DC_Int.map(row => row.intelligence_score),
            marker: {color: 'darkblue'}

        }

        DCLayout = {
            plot_bgcolor: 'white',
            paper_bgcolor:"#2b3e50",
            xaxis : {
                  color : 'white',
                  linecolor: 'white',
                  title: 'DC Comics Heroes/Villains'
                },
            yaxis : {
                    color : 'white',
                    linecolor: 'white'
                  }
        }
    
        DC_data = [DC_Trace]

        Plotly.newPlot('bar', DC_data, DCLayout);

        Marvel_Trace = {
            type: 'bar',
            x: reversed_marvel_Int.map(row => row.name),
            y: reversed_marvel_Int.map(row => row.intelligence_score),
            marker: {color: 'darkred'}
        }

        MarvelLayout = {
            plot_bgcolor: 'white',
            paper_bgcolor:"#2b3e50",
            xaxis : {
                  color : 'white',
                  linecolor: 'white',
                  title: 'Marvel Comics Heroes/Villains'
                },
            yaxis : {
                    color : 'white',
                    linecolor: 'white'
                  }
        }

        Marvel_data = [Marvel_Trace]

        Plotly.newPlot('bar2', Marvel_data, MarvelLayout);

    }); //end of d3 function
};

IntFilter()