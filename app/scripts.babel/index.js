window.onload = () => {
  let showBtn, application, el
  const interval = window.setInterval(() => {
    showBtn = document.querySelector('.js-show-drawer')
    application = document.querySelector('.application')
    if(showBtn && application) {
      window.clearInterval(interval)
    }
  }, 1000)

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
