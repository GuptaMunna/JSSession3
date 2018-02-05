/*
  Follow step by step instructions to complete these 
  multiple challenges related to arrays.
*/

/*
  This require statement conveniently brings in the entire set of user profile
  data for you from a neighbouring file.
  
  You can imagine that this is your network api call delivering you data
*/
const profiles = require('./data/profileData');

/*
  Challenge 1.1 - Only extract the first 5 profiles out of the 20
  Expected const firstFiveProfiles = [{}, {}, {}, {}, {}] <-- first five profile objects
*/
let firstFiveProfiles = profiles.slice(0, 5);
console.log(firstFieProfiles);

/*
  Challenge 1.2 - Only extract the last 5 profiles out of the 20
  Expected const lastFiveProfiles = [{}, {}, {}, {}, {}] <-- last five profile objects
*/

let lastFiveProfiles = profiles.slice(-5, 0);
console.log(lastFiveProfiles);

/*
  Challenge 1.3 - Only extract the 5 profiles from the sixth object in the array to the tenth
  Expected const nextFiveProfiles = [{}, {}, {}, {}, {}] <-- index 6 to index 10
*/
let nextFiveProfiles = profiles.slice(6, 10);
console.log(nextFiveProfiles);
