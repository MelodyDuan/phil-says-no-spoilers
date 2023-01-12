// this page was always being correctly loaded
// its console logs go to the browser, not the extension

// this grabs the current URL
const thisURL = window.location.href;
// these grab the ID of the video (they are all 11 characters long)
const idStart = thisURL.indexOf("v=") + 2;
const vidId = thisURL.slice(url, url + 11);

// this fetches the tags of the video
fetch(
  `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAjGD1wzEHf239oDznUzB0lHUzD2hlCHjI&fields=items(snippet(title,description,tags))&part=snippet&id=${vidId}`
)
  .then((response) => response.json())
  .then((parsed) => {
    const tags = parsed.items[0].snippet.tags;
    // All the rest of the code for this page needs to be here
    // This is to accommodate the async nature of the fetch request

    // here is where we will check to see if the video qualifies for Phil's face
    // remind me to explain why I chose this particular tag
    if (tags.includes("express node js")) {
      // code for Phil's face
    }
  });
