## Superhero
# Project 2 Proposal - Superhero stats

Ashley Drewry, Hunter Johnson, Patrick Beltran, John Falcone

https://drewrya.github.io/superhero/

Beginning with scouring the web for free API’s to use and thinking of going for something a little more light-hearted than previous projects. We initially started trying to use the twitch API to give us some sort of gaming data either about what games are played most on twitch or what games have the most streamers.  But when we started trying to get into the API it required the use of two keys and an authorization token generated from twitch, and even after that, the API was confusing to use and frustrating to work with. This was the end of day one, and we were back at the drawing board for choosing a data set to work with.

Now still thinking about a lighter topic for this second project the team searched for superheroes and Pokemon, coming up with various APIs for each. Looking through them it was seen that a Superheroes API was the easiest to work with and contained all of the superheroes from the Marvel and DC universes, plus others including but not limited to Star Wars assuming this data is pulled from comic book sources.

https://www.superherodb.com/ (Orginial Database)
https://superheroapi.com/ 

When sourcing the data from the CSV it returns this result:

{
 "response": "success",
 "results-for": "batman",
 "results": [
   {
     "id": "69",
     "name": "Batman",
     "powerstats": {
       "intelligence": "81",
       "strength": "40",
       "speed": "29",
       "durability": "55",
       "power": "63",
       "combat": "90"
     },
     "biography": {
       "full-name": "Terry McGinnis",
       "alter-egos": "No alter egos found.",
       "aliases": [
         "Batman II",
         "The Tomorrow Knight",
         "The second Dark Knight",
         "The Dark Knight of Tomorrow",
         "Batman Beyond"
       ],
       "place-of-birth": "Gotham City, 25th Century",
       "first-appearance": "Batman Beyond #1",
       "publisher": "DC Comics",
       "alignment": "good"
     },
     "appearance": {
       "gender": "Male",
       "race": "Human",
       "height": [
         "5'10",
         "178 cm"
       ],
       "weight": [
         "170 lb",
         "77 kg"
       ],
       "eye-color": "Blue",
       "hair-color": "Black"
     },
     "work": {
       "occupation": "-",
       "base": "21st Century Gotham City"
     },
     "connections": {
       "group-affiliation": "Batman Family, Justice League Unlimited",
       "relatives": "Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)"
     }
   },

For visualizations, we will be creating a searchable list website like the UFO homework that will be able to populate for certain search filters, a bar chart page that will have different visualizations such as the top 50/ VS / etc.  After more searching on off times the group found the information exported into a Kaggle dataset library that allowed us to export it into Flask and begin the data visualization.  Creating Javascript and HTML files, initially using our previous UFO homework, we could then begin to make the site each individual page will have different features to allow the user to either filter, select visualizations, and search for bios with any text string. 

