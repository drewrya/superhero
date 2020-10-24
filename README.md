## Superhero
# Project 2 Proposal - Superhero stats

Ashley Drewry, Hunter Johnson, Patrick Beltran, John Falcone

![Marvelvsdc](static/images/img1.png)

  Beginning with scouring the web for free API’s to use and thinking of going for something a little more light-hearted than previous projects. We initially started trying to use the twitch API to give us some sort of gaming data either about what games are played most on twitch or what games have the most streamers.  But when we started trying to get into the API it required the use of two keys and an authorization token generated from twitch, and even after that, the API was confusing to use and frustrating to work with. This was the end of day one, and we were back at the drawing board for choosing a data set to work with.

  Now still thinking about a lighter topic for this second project the team searched for superheroes and Pokemon, coming up with various APIs for each. Looking through them it was seen that a Superheroes API was the easiest to work with and contained all of the superheroes from the Marvel and DC universes, plus others including but not limited to Star Wars assuming this data is pulled from comic book sources.

https://www.superherodb.com/ (Orginial Database)
https://superheroapi.com/ 

After cleaning up the data and separating it into two different CSVs, an example response from powerstats.csv returns this result:

{name: "Spider-Man (Ultimate)", real_name: "Peter Parker", full_name: "Peter Benjamin Parker", alignment: "Good", creator: "Marvel Comics", …}
alignment: "Good"
avg_stats: "65"
combat_score: "50"
creator: "Marvel Comics"
durability_score: "55"
full_name: "Peter Benjamin Parker"
intelligence_score: "85"
name: "Spider-Man (Ultimate)"
power_score: "100"
real_name: "Peter Parker"
speed_score: "60"
strength_score: "40"

  For visualizations, we will be creating a searchable list website like the UFO homework that will be able to populate for certain search filters, a bar chart page that will have different visualizations such as the top 50/ VS / etc.  After more searching on off times the group found the information exported into a Kaggle dataset library that allowed us to export it into Flask and begin the data visualization.  Creating Javascript and HTML files, initially using our previous UFO homework, we could then begin to make the site each individual page will have different features to allow the user to either filter, select visualizations, and search for bios with any text string.

  Using the site with the flask application open, navigation is acheived with the left side menu and text box. Each page has its own functionality integrated with javascript. Beginning with the index page including the Anime.js library to have a visualization of text, and an explaination of how to use the site. The Bios page allows for any text string to be searched and returned within the Names column of the dataset(Case sensitive) , ex Bat will return all Bat named heroes and people woth the text string in their name. Top 50 page visualizes different metrics (Strength, Speed, Intelligence, etc.) for each universe allowing to chosse between each and displays both in their own chart. Powerstats page allows for searching of all data through string input again but also gives user filters that work together to show specific filtered data.
