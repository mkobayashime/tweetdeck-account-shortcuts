"use strict"

window.onload = () => {
  getDom()
}

const getDom = () => {
  const promise = new Promise((resolve) => {
    const interval = window.setInterval(() => {
      const showBtn = document.getElementsByClassName('js-show-drawer')[0]
      const application = document.getElementsByClassName('application')[0]
      if (showBtn && application) {
        window.clearInterval(interval)
        resolve({ showBtn, application })
      }
    }, 250)
  })

  promise.then((dom) => {
    setShortcuts(dom.showBtn, dom.application)
  })
}

const setShortcuts = (showBtn, application) => {
  const buttons = document.getElementsByClassName('js-account-item')

  const isOpen = () => {
    return application.classList.contains('hide-detail-view-inline')
  }

  const clickAccount = (e) => {
    if (!isOpen()) {
      showBtn.click()
      buttons[e].click()
    } else {
      buttons[e].click()
    }
  }

  const isTyping = () => {
    const tagName = document.activeElement.tagName

    // HTML tags to be detected as typing
    const inputTags = ["INPUT", "TEXTAREA", "SELECT"]

    if (inputTags.indexOf(tagName) !== -1) {
      return true
    }
  }

  document.onkeydown = e => {
    if (!isTyping() && e.shiftKey && e.code.includes("Digit")) {
      e.preventDefault()

      const numKeyIndex = e.code.slice(-1)

      numKeyIndex > 0 ? clickAccount(numKeyIndex - 1) : clickAccount(9)
    }
  }
}
