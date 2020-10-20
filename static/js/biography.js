
biofilter();


function biofilter(){
  d3.csv("data/biography.csv").then(function(data) {
    names = data.map(obj=>obj.name);


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
