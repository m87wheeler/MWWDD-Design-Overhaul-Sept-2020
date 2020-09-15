// ******************************************************************
// *** 00.                                 Window Dimensions Listener
// ******************************************************************
let windowDimensions = {
  width: window.innerWidth,
  height: window.innerHeight,
}
window.addEventListener(
  'resize',
  () => {
    windowDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  },
  false
)

// ******************************************************************
// *** 00.                                    Hamburger Icon Listener
// ******************************************************************

const HAMBURGER = document.querySelector('#hamburger')
const MAIN_NAV = document.querySelector('#main-nav')
let navIsOpen = false

const navOpenClose = () => {
  if (!navIsOpen) {
    HAMBURGER.classList.replace('hamburger', 'hamburger--open')
    MAIN_NAV.classList.replace('main-nav', 'main-nav--open')
  } else {
    HAMBURGER.classList.replace('hamburger--open', 'hamburger')
    MAIN_NAV.classList.replace('main-nav--open', 'main-nav')
  }
}
HAMBURGER.addEventListener(
  'click',
  () => {
    navOpenClose()
    navIsOpen = !navIsOpen
  },
  false
)

// ******************************************************************
// *** 00.                                   Handle Nav On Link Click
// ******************************************************************

const NAV_LINKS = document.querySelectorAll('#main-nav ul li')
NAV_LINKS.forEach(a => {
  a.addEventListener(
    'click',
    () => {
      HAMBURGER.classList.replace('hamburger--open', 'hamburger')
      MAIN_NAV.classList.replace('main-nav--open', 'main-nav')
      navIsOpen = false
    },
    false
  )
})

// ******************************************************************
// *** 00.                                   Create Element Functions
// ******************************************************************

// ***** create element with class *****
const createClassElement = (type, className, text) => {
  const element = document.createElement(type)
  className ? element.classList.add(className) : null
  text ? (element.textContent = text) : null

  return element
}

// ***** create image element *****
const createImg = (src, alt, className) => {
  const image = document.createElement('img')
  className ? image.classList.add(className) : null
  image.src = src
  image.setAttribute('alt', alt)

  return image
}

// ***** create container for language icon *****
const createLanguageContainer = (src, key) => {
  const title = key.replace('lang_', '').replace('_', ' ')

  const container = createClassElement('div', 'lang-container')
  const img = createImg(src, title, '')
  container.appendChild(img)
  const project_title = createClassElement('p', '', title)
  container.appendChild(project_title)

  return container
}

// ***** create a link to external site *****
const createExternalButton = (text, className, url) => {
  const button = createClassElement('a', className)
  if (url) {
    button.setAttribute('href', url)
    button.setAttribute('target', '_blank')
    button.setAttribute('rel', 'noreferrer noopenner')
  }
  button.textContent = text

  return button
}

// ******************************************************************
// *** 00.                                      Project Card Creation
// ******************************************************************

// ***** open card when clicked *****
const openProjectCard = e => {
  const cardClass = e.parentElement.classList.value

  cardClass.includes('--open')
    ? e.parentElement.classList.remove('project-card-wrapper--open')
    : e.parentElement.classList.add('project-card-wrapper--open')
}

// ***** create project cards *****
const PROJECT_CARDS_ARRAY = []
const PROJECT_CARDS_CONTAINER = document.querySelector(
  '#project-cards-container'
)
const createProjectCard = (
  projectSlug,
  projectTitle,
  projectType,
  content,
  screenshot,
  icon,
  languages,
  index,
  project_url,
  github_url,
  underDevelopment
) => {
  // convert single digit numbers to double
  const doubleDigit = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`

  const wrapper = createClassElement('div', 'project-card-wrapper')
  // wrapper.setAttribute("onclick", "openProjectCard(this); return false;")
  const card = createClassElement('div', 'project-card')
  card.setAttribute('onclick', 'openProjectCard(this); return false;')
  wrapper.appendChild(card)
  const number = createClassElement('div', 'project-number', doubleDigit)
  card.appendChild(number)
  const blank = createClassElement('div', '')
  card.appendChild(blank)
  const title = createClassElement('h1', 'project-title', projectTitle)
  card.appendChild(title)
  const type = createClassElement('h3', 'project-type', projectType)
  card.appendChild(type)
  const details = createClassElement('div', 'project-details')
  wrapper.appendChild(details)
  const project_logo = createImg(icon, 'project logo', 'project-logo')
  details.appendChild(project_logo)
  const screenshot_wrapper = createClassElement(
    'div',
    'project-screenshot-wrapper'
  )
  details.appendChild(screenshot_wrapper)
  const project_screenshot = createImg(
    screenshot,
    'project sreenshot',
    'project-screenshot'
  )
  screenshot_wrapper.appendChild(project_screenshot)
  const second_title = createClassElement('h3', '')
  details.appendChild(second_title)
  const project_text = createClassElement('div', 'project-text')
  project_text.innerHTML = content
  details.appendChild(project_text)
  const created_with = createClassElement('div', 'created-with')
  details.appendChild(created_with)
  const created_header = createClassElement('h3', '', 'Created With')
  created_with.appendChild(created_header)

  languages.forEach(lang => {
    const langEntry = createLanguageContainer(lang[1].imgix_url, lang[0])
    created_with.appendChild(langEntry)
  })

  const button_container = createClassElement('div', 'buttons')
  details.appendChild(button_container)
  const project_button = underDevelopment
    ? createExternalButton('Visit Site', 'button')
    : createExternalButton('Visit Site', 'button', project_url)
  button_container.appendChild(project_button)

  // github button
  const github_button = createExternalButton(
    'View On Github',
    'button--secondary',
    github_url
  )
  button_container.appendChild(github_button)

  // create modal to display when project is under development
  let developmentModal = createClassElement('div', 'development-modal')
  developmentModal.setAttribute('id', `modal-${projectSlug}`)

  let modalParagraph_1 = createClassElement('p')
  modalParagraph_1.textContent =
    "I'm currently working on this site so some or all of the features may not work."
  developmentModal.appendChild(modalParagraph_1)

  let modalParagraph_2 = createClassElement('p')
  modalParagraph_2.textContent =
    'Do you want to try and visit anyway? You can always come back!'
  developmentModal.appendChild(modalParagraph_2)

  let remainButton = document.createElement('button')
  remainButton.classList.add('button--danger')
  remainButton.classList.add('button')
  remainButton.textContent = 'NO'
  remainButton.addEventListener(
    'click',
    () => {
      developmentModal.style.visibility = 'hidden'
      developmentModal.style.top = '-300vh'
    },
    false
  )
  developmentModal.appendChild(remainButton)

  let continueButton = createExternalButton(
    'YES',
    'button--secondary',
    project_url
  )
  continueButton.classList.add('button')
  developmentModal.appendChild(continueButton)

  project_button.addEventListener(
    'click',
    () => {
      if (underDevelopment) {
        let modal = document.querySelector(`#modal-${projectSlug}`)
        console.log(modal)
        modal.style.visibility = 'visible'
        modal.style.top = '0.5rem'
      }
    },
    false
  )
  details.appendChild(developmentModal)
  details.appendChild(developmentModal)

  // display banner if under development
  if (underDevelopment) {
    let dev_banner = createClassElement(
      'div',
      'under-development-banner',
      'Under Development'
    )
    details.appendChild(dev_banner)
  }

  PROJECT_CARDS_ARRAY.push(wrapper)
  PROJECT_CARDS_CONTAINER.appendChild(wrapper)
}

// ******************************************************************
// *** 00.                                              Async Fetches
// ******************************************************************

// ***** fetch Project Cards data from CosmicJS *****
let projectDataLoading = true
const LOADING_SPINNER = document.querySelector('#spinner-container')

const projectData = `https://api.cosmicjs.com/v1/mwwdd-blog/objects?pretty=true&hide_metafields=true&type=projects&read_key=N6C2ydBXJRnJGr5xKPQfW16ea2qANsnZoNgLzW5hXvAUIjN8FY&limit=20&props=slug,title,content,metadata,`
const fetchProjectData = async url => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    await data.objects.forEach((object, i) => {
      const objectEntries = Object.entries(object.metadata)
        .filter(entry => entry[0].substr(0, 5) === 'lang_')
        .filter(entry => entry[1].url !== null)

      createProjectCard(
        object.slug,
        object.title,
        object.metadata.project_type,
        object.content,
        object.metadata.project_screenshot.imgix_url,
        object.metadata.project_icon.imgix_url,
        objectEntries,
        i,
        object.metadata.project_url,
        object.metadata.github_url,
        object.metadata.under_development
      )

      LOADING_SPINNER.style.display = 'none'
      projectDataLoading = false
    })
  } catch (err) {
    console.log('Project Data Error', err)
  }
}
fetchProjectData(projectData)

// ******************************************************************
// *** 00.                                 Async Determined Functions
// ******************************************************************

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
  if (!projectDataLoading) {
    clearInterval(isLoading)

    arrangeProjectCards()

    // ***** flip cards on scroll *****
    document.querySelector('#project-cards-container').addEventListener(
      'scroll',
      () => {
        PROJECT_CARDS_ARRAY.forEach((card, i) => {
          if (card.getBoundingClientRect().x <= windowDimensions.width * 0.45) {
            card.style.transform = 'rotateY(0)'
          } else {
            card.style.transform = 'rotateY(-50deg)'
          }
        })
      },
      false
    )
    PROJECT_CARDS_ARRAY[0].style.transform = 'rotateY(0)'
  }
}, 500)

// ******************************************************************
// *** 00.                                     Project Scroll Buttons
// ******************************************************************

// scroll buttons for project tiles
const prevButton = document.querySelector('#previous-project-btn')
const nextButton = document.querySelector('#next-project-btn')

let currentInView = 0

const awaitProjectLoad = setInterval(() => {
  if (!projectDataLoading) {
    clearInterval(awaitProjectLoad)

    nextButton.addEventListener(
      'click',
      () => {
        let startOffset = PROJECT_CARDS_ARRAY[0].offsetLeft

        if (currentInView < PROJECT_CARDS_ARRAY.length - 1) {
          let nextElementOffset =
            PROJECT_CARDS_ARRAY[currentInView + 1].offsetLeft

          PROJECT_CARDS_CONTAINER.scrollLeft = nextElementOffset - startOffset
          currentInView += 1
        } else {
          PROJECT_CARDS_CONTAINER.scrollLeft = startOffset - 8
          currentInView = 0
        }
      },
      false
    )

    prevButton.addEventListener(
      'click',
      () => {
        let startOffset =
          PROJECT_CARDS_ARRAY[PROJECT_CARDS_ARRAY.length - 1].offsetLeft

        if (currentInView > 0) {
          let nextElementOffset =
            PROJECT_CARDS_ARRAY[currentInView - 1].offsetLeft
          PROJECT_CARDS_CONTAINER.scrollLeft = nextElementOffset - 8
          currentInView -= 1
        } else {
          PROJECT_CARDS_CONTAINER.scrollLeft = startOffset
          currentInView = PROJECT_CARDS_ARRAY.length - 1
        }
      },
      false
    )
  }
}, 500)

// ******************************************************************
// *** 00.                                            Form Validation
// ******************************************************************

let nameValid = false
let emailValid = false
let messageValid = false

const validateField = (e, type) => {
  let input = e.target.value
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const enableSubmit = () => {
    nameValid && emailValid && messageValid
      ? (document.querySelector('#form-submit').disabled = false)
      : (document.querySelector('#form-submit').disabled = true)
  }

  if (type === 'text' && input) {
    if (input.length < 2) {
      nameValid = false
    } else {
      nameValid = true
    }
  } else if (type === 'email' && input) {
    if (!re.test(String(input).toLocaleLowerCase())) {
      emailValid = false
    } else {
      emailValid = true
    }
  } else if (type === 'textarea' && input) {
    if (input.length < 10) {
      messageValid = false
    } else {
      messageValid = true
    }
  }

  const EMAIL_ERROR_CONTAINER = document.querySelector('#email-error')
  const NAME_ERROR_CONTAINER = document.querySelector('#name-error')
  const MSG_ERROR_CONTAINER = document.querySelector('#message-error')

  !nameValid
    ? ((NAME_ERROR_CONTAINER.style.height = '2rem'),
      (NAME_ERROR_CONTAINER.innerText = 'Use at least two characters'))
    : (NAME_ERROR_CONTAINER.style.height = '0')

  !emailValid
    ? ((EMAIL_ERROR_CONTAINER.style.height = '2rem'),
      (EMAIL_ERROR_CONTAINER.innerText =
        'Make sure this is a valid email address'))
    : (EMAIL_ERROR_CONTAINER.style.height = '0')

  !messageValid
    ? ((MSG_ERROR_CONTAINER.style.height = '2rem'),
      (MSG_ERROR_CONTAINER.innerText = 'How about something a bit longer?'))
    : (MSG_ERROR_CONTAINER.style.height = '0')

  enableSubmit()
}

const FORM_NAME = document.querySelector('#form-name')
const FORM_EMAIL = document.querySelector('#form-email')
const FORM_MESSAGE = document.querySelector('#form-message')

// *****
FORM_NAME.addEventListener(
  'input',
  e => {
    validateField(e, 'text')
  },
  false
)
FORM_EMAIL.addEventListener(
  'input',
  e => {
    validateField(e, 'email')
  },
  false
)
FORM_MESSAGE.addEventListener(
  'input',
  e => {
    validateField(e, 'textarea')
  },
  false
)

// *****
// FORM_NAME.addEventListener(
//   'blur',
//   e => {
//     validateField(e, 'text')
//   },
//   false
// )
// FORM_EMAIL.addEventListener(
//   'blur',
//   e => {
//     validateField(e, 'email')
//   },
//   false
// )
// FORM_MESSAGE.addEventListener(
//   'blur',
//   e => {
//     validateField(e, 'textarea')
//   },
//   false
// )
