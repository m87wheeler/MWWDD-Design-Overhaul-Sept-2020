// production only
// window.onload = function () {
//   localStorage.clear()
// }

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

// ***** splash page run on first visit *****
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

// ***** function to add animations *****
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

// ***** function to display splash page *****
const showSplashPage = () => {
  const visited = localStorage.getItem("Visited")
  if (!visited) {
    document.querySelector("#splash-page").style.display = "block"
    animateOnLoad()
    setTimeout(() => {
      SPLASH_PAGE.style.opacity = "0"
      setTimeout(() => {
        SPLASH_PAGE.style.display = "none"
      }, 1000)
    }, 9000) // based on css animation length
    localStorage.setItem("Visited", true)
  } else {
    SPLASH_PAGE.style.display = "none"
  }
}

// ***** show splash page on first load *****
window.addEventListener(
  "load",
  () => {
    showSplashPage()
  },
  false
)

// ***** open nav on hamburger click *****
const HAMBURGER = document.querySelector("#hamburger")
const MAIN_NAV = document.querySelector("#main-nav")
let navIsOpen = false

const navOpenClose = () => {
  if (!navIsOpen) {
    HAMBURGER.classList.replace("hamburger", "hamburger--open")
    MAIN_NAV.classList.replace("main-nav", "main-nav--open")
  } else {
    HAMBURGER.classList.replace("hamburger--open", "hamburger")
    MAIN_NAV.classList.replace("main-nav--open", "main-nav")
  }
}
HAMBURGER.addEventListener(
  "click",
  () => {
    navOpenClose()
    navIsOpen = !navIsOpen
  },
  false
)

// ***** create element with class *****
const createClassElement = (type, className, text) => {
  const element = document.createElement(type)
  className ? element.classList.add(className) : null
  text ? (element.textContent = text) : null

  return element
}

// ***** create image element *****
const createImg = (src, alt, className) => {
  const image = document.createElement("img")
  className ? image.classList.add(className) : null
  image.src = src
  image.setAttribute("alt", alt)

  return image
}

// ***** create container for language icon *****
const createLanguageContainer = (src, key) => {
  const title = key.replace("lang_", "").replace("_", " ")

  const container = createClassElement("div", "lang-container")
  const img = createImg(src, title, "")
  container.appendChild(img)
  const project_title = createClassElement("p", "", title)
  container.appendChild(project_title)

  return container
}

// ***** create a link to external site *****
const createExternalButton = (text, className, url) => {
  const button = createClassElement("a", className)
  button.setAttribute("href", url)
  button.textContent = text

  return button
}

// ***** open card when clicked *****
function openProjectCard(e) {
  const cardClass = e.classList.value

  cardClass.includes("--open")
    ? e.classList.remove("project-card-wrapper--open")
    : e.classList.add("project-card-wrapper--open")
}

// ***** create project cards *****
const PROJECT_CARDS_ARRAY = []
const PROJECT_CARDS_CONTAINER = document.querySelector(
  "#project-cards-container"
)
const createProjectCard = (
  projectTitle,
  projectType,
  content,
  screenshot,
  icon,
  languages,
  index,
  project_url,
  github_url
) => {
  // convert single digit numbers to double
  const doubleDigit = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`

  const wrapper = createClassElement("div", "project-card-wrapper")
  wrapper.setAttribute("onclick", "openProjectCard(this); return false;")
  const card = createClassElement("div", "project-card")
  wrapper.appendChild(card)
  const number = createClassElement("div", "project-number", doubleDigit)
  card.appendChild(number)
  const blank = createClassElement("div", "")
  card.appendChild(blank)
  const title = createClassElement("h1", "project-title", projectTitle)
  card.appendChild(title)
  const type = createClassElement("h3", "project-type", projectType)
  card.appendChild(type)
  const details = createClassElement("div", "project-details")
  wrapper.appendChild(details)
  const project_logo = createImg(icon, "project logo", "project-logo")
  details.appendChild(project_logo)
  const screenshot_wrapper = createClassElement(
    "div",
    "project-screenshot-wrapper"
  )
  details.appendChild(screenshot_wrapper)
  const project_screenshot = createImg(
    screenshot,
    "project sreenshot",
    "project-screenshot"
  )
  screenshot_wrapper.appendChild(project_screenshot)
  const second_title = createClassElement("h3", "")
  details.appendChild(second_title)
  const project_text = createClassElement("div", "project-text")
  project_text.innerHTML = content
  details.appendChild(project_text)
  const created_with = createClassElement("div", "created-with")
  details.appendChild(created_with)
  const created_header = createClassElement("h3", "", "Created With")
  created_with.appendChild(created_header)

  languages.forEach(lang => {
    const langEntry = createLanguageContainer(lang[1].imgix_url, lang[0])
    created_with.appendChild(langEntry)
  })

  const button_container = createClassElement("div", "buttons")
  details.appendChild(button_container)
  const project_button = createExternalButton(
    "Visit Site",
    "button",
    project_url
  )
  button_container.appendChild(project_button)
  const github_button = createExternalButton(
    "View On Github",
    "button--secondary",
    github_url
  )
  button_container.appendChild(github_button)

  PROJECT_CARDS_ARRAY.push(wrapper)
  PROJECT_CARDS_CONTAINER.appendChild(wrapper)
}

// ***** fetch Project Cards data from CosmicJS *****
let projectDataLoading = true

const projectData = `https://api.cosmicjs.com/v1/mwwdd-blog/objects?pretty=true&hide_metafields=true&type=projects&read_key=N6C2ydBXJRnJGr5xKPQfW16ea2qANsnZoNgLzW5hXvAUIjN8FY&limit=20&props=slug,title,content,metadata,`
const fetchProjectData = async url => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    data.objects.forEach((object, i) => {
      const objectEntries = Object.entries(object.metadata)
        .filter(entry => entry[0].substr(0, 5) === "lang_")
        .filter(entry => entry[1].url !== null)

      createProjectCard(
        object.title,
        object.metadata.project_type,
        object.content,
        object.metadata.project_screenshot.imgix_url,
        object.metadata.project_icon.imgix_url,
        objectEntries,
        i,
        object.metadata.project_url,
        object.metadata.github_url
      )

      projectDataLoading = false
    })
  } catch (err) {
    console.log("Project Data Error", err)
  }
}
fetchProjectData(projectData)

// ***** rearrage z-index of cards in reverse order *****
const arrangeProjectCards = () => {
  let j = PROJECT_CARDS_ARRAY.length
  for (let i = 0; i < PROJECT_CARDS_ARRAY.length; i++) {
    PROJECT_CARDS_ARRAY[i].style.zIndex = j
    j--
  }
}

// ***** actions restricted until loading complete
const isLoading = setInterval(() => {
  if (projectDataLoading) {
    console.log("Loading")
  } else {
    console.log("Finished Loading")
    clearInterval(isLoading)

    arrangeProjectCards()

    document.querySelector("#project-cards-container").addEventListener(
      "scroll",
      () => {
        PROJECT_CARDS_ARRAY.forEach((card, i) => {
          if (card.getBoundingClientRect().x <= windowDimensions.width * 0.45) {
            card.style.transform = "rotateY(0)"
          } else {
            card.style.transform = "rotateY(-50deg)"
          }
        })
      },
      false
    )
  }
}, 500)

// // ***** rotate cards when in view *****
// PROJECT_CARDS_CONTAINER.addEventListener(
//   "scroll",
//   () => {
//     PROJECT_CARDS.forEach((card, i) => {
//       if (card.getBoundingClientRect().x <= windowDimensions.width * 0.45) {
//         card.style.transform = "rotateY(0)"
//       } else {
//         card.style.transform = "rotateY(-50deg)"
//       }
//     })
//   },
//   false
// )
