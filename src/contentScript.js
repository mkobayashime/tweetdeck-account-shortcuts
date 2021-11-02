"use strict"

const handleShortcut = (index) => {
  const drawerToggleButton =
    document.getElementsByClassName("js-show-drawer")[0]
  const application = document.getElementsByClassName("application")[0]
  if (!drawerToggleButton || !application) return

  // if the tweet composing drawer is not opened
  if (!application.classList.contains("hide-detail-view-inline")) {
    drawerToggleButton.click()
  }

  const buttons = document.getElementsByClassName("js-account-item")
  if (!buttons.length) return

  const buttonToClick = index < buttons.length ? buttons[index] : buttons[0]
  buttonToClick.click()
}

//
;(() => {
  const isTyping = () => {
    // HTML tags to be detected as typing
    const inputTags = ["INPUT", "TEXTAREA", "SELECT"]

    const tagName = document.activeElement.tagName
    if (inputTags.includes(tagName)) {
      return true
    }
  }

  document.onkeydown = (e) => {
    if (!isTyping() && e.shiftKey && e.code.includes("Digit")) {
      e.preventDefault()

      const numKeyIndex = e.code.slice(-1)
      numKeyIndex > 0 ? handleShortcut(numKeyIndex - 1) : handleShortcut(9)
    }
  }
})()
