//Average stats
function AvgFilter() {
  d3.csv("/data/powerstats.csv").then(function(herodata){
      
      //filter DC Comics and Marvel Comics heroes/villains
      var dc_data = herodata.filter(function (hero){
          return hero.creator === 'DC Comics'
      });
  
      var marvel_data = herodata.filter(function (hero){
          return hero.creator === 'Marvel Comics'
      });

      //create filter for int score and sort by top
      var dc_Avg = dc_data.sort(function(a, b){
          return b.avg_stats - a.avg_stats
      });
      var dc_top_Avg = dc_Avg.slice(0,50)
      // console.log(dc_top_Int)
      var reversed_DC_Avg = dc_top_Avg.reverse()
      
      var marvel_Avg = marvel_data.sort(function(a, b){
          return b.avg_stats - a.avg_stats
      });
      var marvel_top_Avg = marvel_Avg.slice(0,50);

      var reversed_marvel_Avg = marvel_top_Avg.reverse()


      //create Traces for DC and Marvel
      DC_Trace = {
          type: 'bar',
          x: reversed_DC_Avg.map(row => row.name),
          y: reversed_DC_Avg.map(row => row.avg_stats),
          marker: {color: 'darkblue'}

      }

      DCLayout = {
          title: {
              text:'DC Comics Heroes/Villains',
              font: {
                size: 24,
                color: 'white'
              },
              xref: 'paper',
              x: 0.05,
            },
          plot_bgcolor: 'white',
          paper_bgcolor:"#2b3e50",
          
          xaxis : {
                color : 'white',
                linecolor: 'white',
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
          x: reversed_marvel_Avg.map(row => row.name),
          y: reversed_marvel_Avg.map(row => row.avg_stats),
          marker: {color: 'darkred'}
      }

      MarvelLayout = {
          title: {
              text:'Marvel Comics Heroes/Villains',
              font: {
                size: 24,
                color: 'white'
              },
              xref: 'paper',
              x: 0.05,
            },
          plot_bgcolor: 'white',
          paper_bgcolor:"#2b3e50",
          xaxis : {
                color : 'white',
                linecolor: 'white',
              },
          yaxis : {
                  color : 'white',
                  linecolor: 'white'
                }
      };

      Marvel_data = [Marvel_Trace]

      Plotly.newPlot('bar2', Marvel_data, MarvelLayout);

  }); //end of d3 function
};
//Intelligence score
function IntFilter() {
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
      var dc_top_Int = dc_Int.slice(0,50)
      // console.log(dc_top_Int)
      var reversed_DC_Int = dc_top_Int.reverse()
      
      var marvel_Int = marvel_data.sort(function(a, b){
          return b.intelligence_score - a.intelligence_score
      });
      var marvel_top_Int = marvel_Int.slice(0,50);

      var reversed_marvel_Int = marvel_top_Int.reverse()


      //create Traces for DC and Marvel
      DC_Trace = {
          type: 'bar',
          x: reversed_DC_Int.map(row => row.name),
          y: reversed_DC_Int.map(row => row.intelligence_score),
          marker: {color: 'darkblue'}

      }

      DCLayout = {
          title: {
              text:'DC Comics Heroes/Villains',
              font: {
                size: 24,
                color: 'white'
              },
              xref: 'paper',
              x: 0.05,
            },
          plot_bgcolor: 'white',
          paper_bgcolor:"#2b3e50",
          
          xaxis : {
                color : 'white',
                linecolor: 'white',
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
          title: {
              text:'Marvel Comics Heroes/Villains',
              font: {
                size: 24,
                color: 'white'
              },
              xref: 'paper',
              x: 0.05,
            },
          plot_bgcolor: 'white',
          paper_bgcolor:"#2b3e50",
          xaxis : {
                color : 'white',
                linecolor: 'white',
              },
          yaxis : {
                  color : 'white',
                  linecolor: 'white'
                }
      };

      Marvel_data = [Marvel_Trace]

      Plotly.newPlot('bar2', Marvel_data, MarvelLayout);

  }); //end of d3 function
};
//Strength score
function StrFilter() {
  d3.csv("/data/powerstats.csv").then(function(herodata){
      
      //filter DC Comics and Marvel Comics heroes/villains
      var dc_data = herodata.filter(function (hero){
          return hero.creator === 'DC Comics'
      });
  
      var marvel_data = herodata.filter(function (hero){
          return hero.creator === 'Marvel Comics'
      });

      //create filter for int score and sort by top
      var dc_Str = dc_data.sort(function(a, b){
          return b.strength_score - a.strength_score
      });
      var dc_top_Str = dc_Str.slice(0,50)
      // console.log(dc_top_Int)
      var reversed_DC_Str = dc_top_Str.reverse()
      
      var marvel_Str = marvel_data.sort(function(a, b){
          return b.strength_score - a.strength_score
      });
      var marvel_top_Str = marvel_Str.slice(0,50);

      var reversed_marvel_Str = marvel_top_Str.reverse()


      //create Traces for DC and Marvel
      DC_Trace = {
          type: 'bar',
          x: reversed_DC_Str.map(row => row.name),
          y: reversed_DC_Str.map(row => row.strength_score),
          marker: {color: 'darkblue'}

      }

      DCLayout = {
          title: {
              text:'DC Comics Heroes/Villains',
              font: {
                size: 24,
                color: 'darkblue'
              },
              xref: 'paper',
              x: 0.05,
            },
          plot_bgcolor: 'white',
          paper_bgcolor:"#2b3e50",
          
          xaxis : {
                color : 'white',
                linecolor: 'white',
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
          x: reversed_marvel_Str.map(row => row.name),
          y: reversed_marvel_Str.map(row => row.strength_score),
          marker: {color: 'darkred'}
      }

      MarvelLayout = {
          title: {
              text:'Marvel Comics Heroes/Villains',
              font: {
                size: 24,
                color: 'white'
              },
              xref: 'paper',
              x: 0.05,
            },
          plot_bgcolor: 'white',
          paper_bgcolor:"#2b3e50",
          xaxis : {
                color : 'white',
                linecolor: 'white',
              },
          yaxis : {
                  color : 'white',
                  linecolor: 'white'
                }
      };

      Marvel_data = [Marvel_Trace]

      Plotly.newPlot('bar2', Marvel_data, MarvelLayout);

  }); //end of d3 function
};
//Speed score
function SpeFilter() {
  d3.csv("/data/powerstats.csv").then(function(herodata){
      
      //filter DC Comics and Marvel Comics heroes/villains
      var dc_data = herodata.filter(function (hero){
          return hero.creator === 'DC Comics'
      });
  
      var marvel_data = herodata.filter(function (hero){
          return hero.creator === 'Marvel Comics'
      });

      //create filter for int score and sort by top
      var dc_Speed = dc_data.sort(function(a, b){
          return b.speed_score - a.speed_score
      });
      var dc_top_Speed = dc_Speed.slice(0,50)
      // console.log(dc_top_Int)
      var reversed_DC_Speed = dc_top_Speed.reverse()
      
      var marvel_Speed = marvel_data.sort(function(a, b){
          return b.speed_score - a.speed_score
      });
      var marvel_top_Speed = marvel_Speed.slice(0,50);

      var reversed_marvel_Speed = marvel_top_Speed.reverse()


      //create Traces for DC and Marvel
      DC_Trace = {
          type: 'bar',
          x: reversed_DC_Speed.map(row => row.name),
          y: reversed_DC_Speed.map(row => row.speed_score),
          marker: {color: 'darkblue'}

      }

      DCLayout = {
          title: {
              text:'DC Comics Heroes/Villains',
              font: {
                size: 24,
                color: 'darkblue'
              },
              xref: 'paper',
              x: 0.05,
            },
          plot_bgcolor: 'white',
          paper_bgcolor:"#2b3e50",
          
          xaxis : {
                color : 'white',
                linecolor: 'white',
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
          x: reversed_marvel_Speed.map(row => row.name),
          y: reversed_marvel_Speed.map(row => row.speed_score),
          marker: {color: 'darkred'}
      }

      MarvelLayout = {
          title: {
              text:'Marvel Comics Heroes/Villains',
              font: {
                size: 24,
                color: 'white'
              },
              xref: 'paper',
              x: 0.05,
            },
          plot_bgcolor: 'white',
          paper_bgcolor:"#2b3e50",
          xaxis : {
                color : 'white',
                linecolor: 'white',
              },
          yaxis : {
                  color : 'white',
                  linecolor: 'white'
                }
      };

      Marvel_data = [Marvel_Trace]

      Plotly.newPlot('bar2', Marvel_data, MarvelLayout);

  }); //end of d3 function
};
//Durablity Score
function DuraFilter() {
  d3.csv("/data/powerstats.csv").then(function(herodata){
      
      //filter DC Comics and Marvel Comics heroes/villains
      var dc_data = herodata.filter(function (hero){
          return hero.creator === 'DC Comics'
      });
  
      var marvel_data = herodata.filter(function (hero){
          return hero.creator === 'Marvel Comics'
      });

      //create filter for int score and sort by top
      var dc_Dura = dc_data.sort(function(a, b){
          return b.durability_score - a.durability_score
      });
      var dc_top_Dura = dc_Dura.slice(0,50)
      // console.log(dc_top_Int)
      var reversed_DC_Dura = dc_top_Dura.reverse()
      
      var marvel_Dura = marvel_data.sort(function(a, b){
          return b.durability_score - a.durability_score
      });
      var marvel_top_Dura = marvel_Dura.slice(0,50);

      var reversed_marvel_Dura = marvel_top_Dura.reverse()


      //create Traces for DC and Marvel
      DC_Trace = {
          type: 'bar',
          x: reversed_DC_Dura.map(row => row.name),
          y: reversed_DC_Dura.map(row => row.durability_score),
          marker: {color: 'darkblue'}

      }

      DCLayout = {
          title: {
              text:'DC Comics Heroes/Villains',
              font: {
                size: 24,
                color: 'darkblue'
              },
              xref: 'paper',
              x: 0.05,
            },
          plot_bgcolor: 'white',
          paper_bgcolor:"#2b3e50",
          
          xaxis : {
                color : 'white',
                linecolor: 'white',
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
          x: reversed_marvel_Dura.map(row => row.name),
          y: reversed_marvel_Dura.map(row => row.durability_score),
          marker: {color: 'darkred'}
      }

      MarvelLayout = {
          title: {
              text:'Marvel Comics Heroes/Villains',
              font: {
                size: 24,
                color: 'white'
              },
              xref: 'paper',
              x: 0.05,
            },
          plot_bgcolor: 'white',
          paper_bgcolor:"#2b3e50",
          xaxis : {
                color : 'white',
                linecolor: 'white',
              },
          yaxis : {
                  color : 'white',
                  linecolor: 'white'
                }
      };

      Marvel_data = [Marvel_Trace]

      Plotly.newPlot('bar2', Marvel_data, MarvelLayout);

  }); //end of d3 function
};
//Power Score
function PwrFilter() {
  d3.csv("/data/powerstats.csv").then(function(herodata){
      
      //filter DC Comics and Marvel Comics heroes/villains
      var dc_data = herodata.filter(function (hero){
          return hero.creator === 'DC Comics'
      });
  
      var marvel_data = herodata.filter(function (hero){
          return hero.creator === 'Marvel Comics'
      });

      //create filter for int score and sort by top
      var dc_Pwr = dc_data.sort(function(a, b){
          return b.power_score - a.power_score
      });
      var dc_top_Pwr = dc_Pwr.slice(0,50)
      // console.log(dc_top_Int)
      var reversed_DC_Pwr = dc_top_Pwr.reverse()
      
      var marvel_Pwr = marvel_data.sort(function(a, b){
          return b.power_score - a.power_score
      });
      var marvel_top_Pwr = marvel_Pwr.slice(0,50);

      var reversed_marvel_Pwr = marvel_top_Pwr.reverse()


      //create Traces for DC and Marvel
      DC_Trace = {
          type: 'bar',
          x: reversed_DC_Pwr.map(row => row.name),
          y: reversed_DC_Pwr.map(row => row.power_score),
          marker: {color: 'darkblue'}

      }

      DCLayout = {
          title: {
              text:'DC Comics Heroes/Villains',
              font: {
                size: 24,
                color: 'white'
              },
              xref: 'paper',
              x: 0.05,
            },
          plot_bgcolor: 'white',
          paper_bgcolor:"#2b3e50",
          
          xaxis : {
                color : 'white',
                linecolor: 'white',
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
          x: reversed_marvel_Pwr.map(row => row.name),
          y: reversed_marvel_Pwr.map(row => row.power_score),
          marker: {color: 'darkred'}
      }

      MarvelLayout = {
          title: {
              text:'Marvel Comics Heroes/Villains',
              font: {
                size: 24,
                color: 'white'
              },
              xref: 'paper',
              x: 0.05,
            },
          plot_bgcolor: 'white',
          paper_bgcolor:"#2b3e50",
          xaxis : {
                color : 'white',
                linecolor: 'white',
              },
          yaxis : {
                  color : 'white',
                  linecolor: 'white'
                }
      };

      Marvel_data = [Marvel_Trace]

      Plotly.newPlot('bar2', Marvel_data, MarvelLayout);

  }); //end of d3 function
};
function ComFilter() {
  d3.csv("/data/powerstats.csv").then(function(herodata){
      
      //filter DC Comics and Marvel Comics heroes/villains
      var dc_data = herodata.filter(function (hero){
          return hero.creator === 'DC Comics'
      });
  
      var marvel_data = herodata.filter(function (hero){
          return hero.creator === 'Marvel Comics'
      });

      //create filter for int score and sort by top
      var dc_Com = dc_data.sort(function(a, b){
          return b.combat_score - a.combat_score
      });
      var dc_top_Com = dc_Com.slice(0,50)
      // console.log(dc_top_Int)
      var reversed_DC_Com = dc_top_Com.reverse()
      
      var marvel_Com = marvel_data.sort(function(a, b){
          return b.combat_score - a.combat_score
      });
      var marvel_top_Com = marvel_Com.slice(0,50);

      var reversed_marvel_Com = marvel_top_Com.reverse()


      //create Traces for DC and Marvel
      DC_Trace = {
          type: 'bar',
          x: reversed_DC_Com.map(row => row.name),
          y: reversed_DC_Com.map(row => row.combat_score),
          marker: {color: 'darkblue'}

      }

      DCLayout = {
          title: {
              text:'DC Comics Heroes/Villains',
              font: {
                size: 24,
                color: 'white'
              },
              xref: 'paper',
              x: 0.05,
            },
          plot_bgcolor: 'white',
          paper_bgcolor:"#2b3e50",
          
          xaxis : {
                color : 'white',
                linecolor: 'white',
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
          x: reversed_marvel_Com.map(row => row.name),
          y: reversed_marvel_Com.map(row => row.combat_score),
          marker: {color: 'darkred'}
      }

      MarvelLayout = {
          title: {
              text:'Marvel Comics Heroes/Villains',
              font: {
                size: 24,
                color: 'white'
              },
              xref: 'paper',
              x: 0.05,
            },
          plot_bgcolor: 'white',
          paper_bgcolor:"#2b3e50",
          xaxis : {
                color : 'white',
                linecolor: 'white',
              },
          yaxis : {
                  color : 'white',
                  linecolor: 'white'
                }
      };

      Marvel_data = [Marvel_Trace]

      Plotly.newPlot('bar2', Marvel_data, MarvelLayout);

  }); //end of d3 function
};
AvgFilter()
// IntFilter()
// StrFilter()
// SpeFilter()
// DuraFilter()
// PwrFilter()
// ComFilter()