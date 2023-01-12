chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    console.log("we're in background.js!")
    console.log(tabID, changeInfo, tab)
    if (changeInfo.url) {
      chrome.tabs.sendMessage( tabId, {
        message: 'hello!',
        url: changeInfo.url
      })
    }
  }
);