const matchUrl = "tweetdeck.twitter.com"

// eslint-disable-next-line no-undef
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    if (tab.url.indexOf(matchUrl) !== -1) {
      // eslint-disable-next-line no-undef
      chrome.tabs.sendMessage(tabId, {
        type: "updated",
      })
    }
  }
})
