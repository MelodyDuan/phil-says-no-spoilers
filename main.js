document.on()

console.log('hi from main.js');
chrome.browserAction.getBadgeText({}, function(result) {
  console.log('Badge text = ' + result);
});