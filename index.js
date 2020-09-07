// ***** window *****
let windowDimensions = {
  width: window.innerWidth,
  height: window.innerHeight,
}
window.addEventListener(
  "resize",
  () => {
    windowDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  },
  false
)

// ***** open nav on hamburger click *****
let navIsOpen = false

const HAMBURGER = document.querySelector("#hamburger")
HAMBURGER.addEventListener(
  "click",
  () => {
    navIsOpen = !navIsOpen
    console.log(navIsOpen)
  },
  false
)

// ***** rearrage z-index of cards in reverse order *****
const PROJECT_CARDS = document.querySelectorAll(".project-card-wrapper")
const arrangeProjectCards = (function () {
  let j = PROJECT_CARDS.length
  for (let i = 0; i < PROJECT_CARDS.length; i++) {
    PROJECT_CARDS[i].style.zIndex = j
    j--
  }
})()

// ***** rotate cards when in view *****
const PROJECT_CARDS_CONTAINER = document.querySelector(
  "#project-cards-container"
)
PROJECT_CARDS_CONTAINER.addEventListener(
  "scroll",
  () => {
    PROJECT_CARDS.forEach((card, i) => {
      if (card.getBoundingClientRect().x <= windowDimensions.width * 0.45) {
        card.style.transform = "rotateY(0)"
      } else {
        card.style.transform = "rotateY(-50deg)"
      }
    })
  },
  false
)

// ***** open card when clicked *****
const openProjectCard = card => {
  const cardClass = card.classList[0]

  if (!card.classList[0].includes("--open")) {
    card.classList.remove(cardClass)
    card.classList.add(`${cardClass}--open`)
  } else {
    card.classList.remove(cardClass)
    card.classList.add(cardClass.replace("--open", ""))
  }
}

PROJECT_CARDS.forEach(card => {
  card.addEventListener(
    "click",
    () => {
      openProjectCard(card)
    },
    false
  )
})
