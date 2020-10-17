d3.csv("/data/biography.csv", function(d) {
  return {
    name : d.name,
    real_name : d.real_name,
    history_text : d.history_text,
    powers_text : d.powers_text,
    place_of_birth : d.place_of_birth,
    alignment : d.alignment,
    gender : d.gender,
    type_race : d.type_race,
    height : d.height,
    weight: d.weight,
    eye_color : d.eye_color,
    hair_color : d.hair_color,
    skin_color : d.skin_color
  };
}).then(function(data) {
  console.log(data[0]);
});
