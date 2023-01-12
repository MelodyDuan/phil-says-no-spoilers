// THIS IS HACKATHON TESTING
// make this useful later
let ourArr = [];
const fetchTags = (url) => {
  fetch(url)
   .then(response => response.json())
   .then((parsed) => { ourArr = parsed.items[0].snippet.tags});
  
   return ourArr;
}

setTimeout(() => console.log(ourArr), 3000)

module.exports = fetchTags;