const enableSplash = false // for production

const SPLASH_PAGE = document.querySelector("#splash-page")
const ANIMATION_WRAPPER = document.querySelector(
  "#animated-logo-wrapper .animation-wrapper"
)
const ELEMS_TOP_BLOCK_FALL = document.querySelectorAll(".anim-top-block-fall")
const ELEMS_BOTTOM_BLOCK_FALL = document.querySelectorAll(
  ".anim-bottom-block-fall"
)
const LEFT_DIAMOND = document.querySelector(
  "#animated-logo-wrapper .left-diamond"
)
const RIGHT_DIAMOND = document.querySelector(
  "#animated-logo-wrapper .right-diamond"
)
const SPLASH_PAGE_MAIN_LOGO = document.querySelector("#splash-page .main-logo")

const animateOnLoad = () => {
  ANIMATION_WRAPPER.style.animationName = "rotate-logo"
  ELEMS_TOP_BLOCK_FALL.forEach(
    elem => (elem.style.animationName = "top-block-fall")
  )
  ELEMS_BOTTOM_BLOCK_FALL.forEach(
    elem => (elem.style.animationName = "bottom-block-fall")
  )
  LEFT_DIAMOND.style.animationName = "left-diamond-slide"
  RIGHT_DIAMOND.style.animationName = "right-diamond-slide"
  SPLASH_PAGE_MAIN_LOGO.style.animationName = "slide-up-and-color"
}

// ***** determine splash page display on load *****

const playSplashPage = bool => {
  if (bool) {
    // disable scroll on body and add padding on desktop
    document.body.style.overflowY = "hidden"
    window.innerWidth >= 1280
      ? (document.body.style.padding = "0 15px 0 0")
      : null
    // show splash page
    SPLASH_PAGE.style.display = "block"
    // generate animations
    animateOnLoad()
    // hide page after set time determined by CSS animations
    setTimeout(() => {
      SPLASH_PAGE.style.opacity = "0"
      setTimeout(() => {
        SPLASH_PAGE.style.display = "none"
        document.body.style.overflowY = "scroll"
        window.innerWidth >= 1280 ? (document.body.style.padding = "0") : null
      }, 500)
    }, 9000)
  } else {
    SPLASH_PAGE.style.display = "none"
  }
}
playSplashPage(enableSplash)
