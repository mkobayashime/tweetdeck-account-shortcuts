const matchUrl = "tweetdeck.twitter.com"

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    if (tab.url.indexOf(matchUrl) !== -1) {
      chrome.tabs.sendMessage(tabId, {
        type: "updated",
      })
    }
  }
})
