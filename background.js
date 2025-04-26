chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installée !");
});

chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
      // read changeInfo data and do something with it
      // like send the new url to contentscripts.js
      if (changeInfo.url) {
        chrome.tabs.sendMessage( tabId, {
          message: 'start',
          url: changeInfo.url
        })
      }
    }
);
