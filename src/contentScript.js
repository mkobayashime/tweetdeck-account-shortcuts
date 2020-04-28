"use strict"

window.onload = () => {
  getVideo()
}

const getVideo = () => {
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
  
  const loadDom = () => {
    return document.getElementsByClassName('js-account-item')
  }
  
  const clickAccount = (e) => {
    if (!isOpen()) {
      showBtn.click()
      el = loadDom()
      el[e].click()
    } else {
      el = loadDom()
      el[e].click()
    }
  }

  document.onkeyup = e => {
    switch(e.shiftKey && e.which) {
      case 49:
        clickAccount(0)
        break
      case 50:
        clickAccount(1)
        break
      case 51:
        clickAccount(2)
        break
      case 52:
        clickAccount(3)
        break
      case 53:
        clickAccount(4)
        break
      case 54:
        clickAccount(5)
        break
      case 55:
        clickAccount(6)
        break
      case 56:
        clickAccount(7)
        break
      case 57:
        clickAccount(8)
        break
      case 48:
        clickAccount(9)
        break
    }
  }
}
}
