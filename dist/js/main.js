let windowDimensions = { width: window.innerWidth, height: window.innerHeight }
window.addEventListener(
  'resize',
  () => {
    windowDimensions = { width: window.innerWidth, height: window.innerHeight }
  },
  !1
)
const HAMBURGER = document.querySelector('#hamburger'),
  MAIN_NAV = document.querySelector('#main-nav')
let navIsOpen = !1
const navOpenClose = () => {
  navIsOpen
    ? (HAMBURGER.classList.replace('hamburger--open', 'hamburger'),
      MAIN_NAV.classList.replace('main-nav--open', 'main-nav'))
    : (HAMBURGER.classList.replace('hamburger', 'hamburger--open'),
      MAIN_NAV.classList.replace('main-nav', 'main-nav--open'))
}
HAMBURGER.addEventListener(
  'click',
  () => {
    navIsOpen
      ? (HAMBURGER.classList.replace('hamburger--open', 'hamburger'),
        MAIN_NAV.classList.replace('main-nav--open', 'main-nav'))
      : (HAMBURGER.classList.replace('hamburger', 'hamburger--open'),
        MAIN_NAV.classList.replace('main-nav', 'main-nav--open')),
      (navIsOpen = !navIsOpen)
  },
  !1
)
const NAV_LINKS = document.querySelectorAll('#main-nav ul li')
NAV_LINKS.forEach(e => {
  e.addEventListener(
    'click',
    () => {
      HAMBURGER.classList.replace('hamburger--open', 'hamburger'),
        MAIN_NAV.classList.replace('main-nav--open', 'main-nav'),
        (navIsOpen = !1)
    },
    !1
  )
})
const createClassElement = (e, t, a) => {
    const n = document.createElement(e)
    return t && n.classList.add(t), a && (n.textContent = a), n
  },
  createImg = (e, t, a) => {
    const n = document.createElement('img')
    return a && n.classList.add(a), (n.src = e), n.setAttribute('alt', t), n
  },
  createLanguageContainer = (e, t) => {
    const a = t.replace('lang_', '').replace('_', ' '),
      n = createClassElement('div', 'lang-container'),
      r = createImg(e, a, '')
    n.appendChild(r)
    const l = createClassElement('p', '', a)
    return n.appendChild(l), n
  },
  createExternalButton = (e, t, a) => {
    const n = createClassElement('a', t)
    return (
      a &&
        (n.setAttribute('href', a),
        n.setAttribute('target', '_blank'),
        n.setAttribute('rel', 'noreferrer noopenner')),
      (n.textContent = e),
      n
    )
  },
  openProjectCard = e => {
    e.parentElement.classList.value.includes('--open')
      ? e.parentElement.classList.remove('project-card-wrapper--open')
      : e.parentElement.classList.add('project-card-wrapper--open')
  },
  PROJECT_CARDS_ARRAY = [],
  PROJECT_CARDS_CONTAINER = document.querySelector('#project-cards-container'),
  createProjectCard = (e, t, a, n, r, l, o, s, c, i, d) => {
    const p = s + 1 < 10 ? `0${s + 1}` : `${s + 1}`,
      m = createClassElement('div', 'project-card-wrapper'),
      u = createClassElement('div', 'project-card')
    u.setAttribute('onclick', 'openProjectCard(this); return false;'),
      m.appendChild(u)
    const C = createClassElement('div', 'project-number', p)
    u.appendChild(C)
    const h = createClassElement('div', '')
    u.appendChild(h)
    const E = createClassElement('h1', 'project-title', t)
    u.appendChild(E)
    const A = createClassElement('h3', 'project-type', a)
    u.appendChild(A)
    const R = createClassElement('div', 'project-details')
    m.appendChild(R)
    const g = createImg(l, 'project logo', 'project-logo')
    R.appendChild(g)
    const _ = createClassElement('div', 'project-screenshot-wrapper')
    R.appendChild(_)
    const v = createImg(r, 'project sreenshot', 'project-screenshot')
    _.appendChild(v)
    const L = createClassElement('h3', '')
    R.appendChild(L)
    const b = createClassElement('div', 'project-text')
    ;(b.innerHTML = n), R.appendChild(b)
    const y = createClassElement('div', 'created-with')
    R.appendChild(y)
    const w = createClassElement('h3', '', 'Created With')
    y.appendChild(w),
      o.forEach(e => {
        const t = createLanguageContainer(e[1].imgix_url, e[0])
        y.appendChild(t)
      })
    const S = createClassElement('div', 'buttons')
    R.appendChild(S)
    const O = d
      ? createExternalButton('Visit Site', 'button')
      : createExternalButton('Visit Site', 'button', c)
    S.appendChild(O)
    const D = createExternalButton('View On Github', 'button--secondary', i)
    S.appendChild(D)
    let I = createClassElement('div', 'development-modal')
    I.setAttribute('id', `modal-${e}`)
    let f = createClassElement('p')
    ;(f.textContent =
      "I'm currently working on this site so some or all of the features may not work."),
      I.appendChild(f)
    let j = createClassElement('p')
    ;(j.textContent =
      'Do you want to try and visit anyway? You can always come back!'),
      I.appendChild(j)
    let N = document.createElement('button')
    N.classList.add('button--danger'),
      N.classList.add('button'),
      (N.textContent = 'NO'),
      N.addEventListener(
        'click',
        () => {
          ;(I.style.visibility = 'hidden'), (I.style.top = '-300vh')
        },
        !1
      ),
      I.appendChild(N)
    let T = createExternalButton('YES', 'button--secondary', c)
    if (
      (T.classList.add('button'),
      I.appendChild(T),
      O.addEventListener(
        'click',
        () => {
          if (d) {
            let t = document.querySelector(`#modal-${e}`)
            console.log(t),
              (t.style.visibility = 'visible'),
              (t.style.top = '0.5rem')
          }
        },
        !1
      ),
      R.appendChild(I),
      R.appendChild(I),
      d)
    ) {
      let e = createClassElement(
        'div',
        'under-development-banner',
        'Under Development'
      )
      R.appendChild(e)
    }
    PROJECT_CARDS_ARRAY.push(m), PROJECT_CARDS_CONTAINER.appendChild(m)
  },
  BLOG_CARDS_CONTAINER = document.querySelector('#blog-list'),
  createBlogCard = (e, t, a, n, r, l) => {
    const o = createClassElement('div', 'blog-post-card')
    o.setAttribute('id', `blog-${e}`)
    const s = createClassElement('div', 'image-container')
    o.appendChild(s)
    const c = createClassElement('img')
    ;(c.src = a), c.setAttribute('alt', t), s.appendChild(c)
    const i = createClassElement('h1', 'blog-title', t)
    o.appendChild(i)
    const d = createClassElement('div', 'blog-tags')
    o.appendChild(d),
      n.forEach(e => {
        let t = createClassElement(
          'span',
          `tag--${e.toLowerCase()}`,
          'Styled' === e ? 'Styled Components' : e
        )
        t.classList.add('tag'), d.appendChild(t)
      })
    const p = createClassElement('p', 'blurb', r)
    o.appendChild(p)
    const m = createClassElement('button', 'button--secondary', 'READ MORE')
    m.setAttribute('value', e),
      m.addEventListener(
        'click',
        () => {
          o.classList.value.includes('blog-post-card--open')
            ? (o.classList.remove('blog-post-card--open'),
              (m.textContent = 'READ MORE'))
            : (o.classList.add('blog-post-card--open'),
              (m.textContent = 'CLOSE'))
        },
        !1
      ),
      o.appendChild(m)
    const u = createClassElement('article', 'blog-content')
    ;(u.innerHTML = l), o.appendChild(u)
    const C = createClassElement('button', 'button--secondary', 'Back To Top')
    C.addEventListener(
      'click',
      () => {
        s.scrollIntoView()
      },
      !1
    ),
      u.appendChild(C),
      BLOG_CARDS_CONTAINER.appendChild(o)
  }
let projectDataLoading = !0
const LOADING_SPINNER = document.querySelector('#spinner-container'),
  COSMIC_API_KEY = 'N6C2ydBXJRnJGr5xKPQfW16ea2qANsnZoNgLzW5hXvAUIjN8FY',
  projectData = `https://api.cosmicjs.com/v1/mwwdd-blog/objects?pretty=true&hide_metafields=true&type=projects&read_key=${COSMIC_API_KEY}&limit=20&props=slug,title,content,metadata,`,
  fetchProjectData = async e => {
    try {
      const t = await fetch(e),
        a = await t.json()
      await a.objects.forEach((e, t) => {
        const a = Object.entries(e.metadata)
          .filter(e => 'lang_' === e[0].substr(0, 5))
          .filter(e => null !== e[1].url)
        createProjectCard(
          e.slug,
          e.title,
          e.metadata.project_type,
          e.content,
          e.metadata.project_screenshot.imgix_url,
          e.metadata.project_icon.imgix_url,
          a,
          t,
          e.metadata.project_url,
          e.metadata.github_url,
          e.metadata.under_development
        ),
          (LOADING_SPINNER.style.display = 'none'),
          (projectDataLoading = !1)
      })
    } catch (e) {
      console.log('Project Data Error', e)
    }
  }
fetchProjectData(projectData)
const fetchData = async (e, t, a, n, r) => {
  try {
    const n = await fetch(e),
      l = await n.json()
    await l[t].forEach((e, t) => {
      a(e, t)
    }),
      r && (r.style.display = 'none'),
      !1
  } catch (e) {
    console.log('ERROR:', e)
  }
}
let blogListDataLoading = !0
const blogListData = `https://api.cosmicjs.com/v1/mwwdd-blog/objects?pretty=true&hide_metafields=true&type=blogposts&read_key=${COSMIC_API_KEY}&limit=20&props=slug,title,content,metadata,`,
  fetchedBlogListAction = (e, t) => {
    createBlogCard(
      e.slug,
      e.title,
      e.metadata.post_image.imgix_url,
      e.metadata.tags,
      e.metadata.blurb,
      e.content
    )
  }
fetchData(blogListData, 'objects', fetchedBlogListAction)
const arrangeProjectCards = () => {
    let e = PROJECT_CARDS_ARRAY.length
    for (let t = 0; t < PROJECT_CARDS_ARRAY.length; t++)
      (PROJECT_CARDS_ARRAY[t].style.zIndex = e), e--
  },
  isLoading = setInterval(() => {
    projectDataLoading ||
      (clearInterval(isLoading),
      arrangeProjectCards(),
      document.querySelector('#project-cards-container').addEventListener(
        'scroll',
        () => {
          PROJECT_CARDS_ARRAY.forEach((e, t) => {
            e.getBoundingClientRect().x <= 0.45 * windowDimensions.width
              ? (e.style.transform = 'rotateY(0)')
              : (e.style.transform = 'rotateY(-50deg)')
          })
        },
        !1
      ),
      (PROJECT_CARDS_ARRAY[0].style.transform = 'rotateY(0)'))
  }, 500),
  prevButton = document.querySelector('#previous-project-btn'),
  nextButton = document.querySelector('#next-project-btn')
let currentInView = 0
const nextAction = () => {
    let e = PROJECT_CARDS_ARRAY[0].offsetLeft
    if (currentInView < PROJECT_CARDS_ARRAY.length - 1) {
      let t = PROJECT_CARDS_ARRAY[currentInView + 1].offsetLeft
      ;(PROJECT_CARDS_CONTAINER.scrollLeft = t - e), (currentInView += 1)
    } else (PROJECT_CARDS_CONTAINER.scrollLeft = e - 8), (currentInView = 0)
  },
  previousAction = () => {
    let e = PROJECT_CARDS_ARRAY[PROJECT_CARDS_ARRAY.length - 1].offsetLeft
    if (currentInView > 0) {
      let e = PROJECT_CARDS_ARRAY[currentInView - 1].offsetLeft
      ;(PROJECT_CARDS_CONTAINER.scrollLeft = e - 8), (currentInView -= 1)
    } else
      (PROJECT_CARDS_CONTAINER.scrollLeft = e),
        (currentInView = PROJECT_CARDS_ARRAY.length - 1)
  }
let xDown = (yDown = null)
const getTouches = e => e.touches,
  handleTouchStart = e => {
    const t = getTouches(e)[0]
    ;(xDown = t.clientX), (yDown = t.clientY)
  },
  handleTouchMove = e => {
    if (!xDown || !yDown) return
    let t = e.touches[0].clientX,
      a = e.touches[0].clientY,
      n = xDown - t,
      r = yDown - a
    Math.abs(n) > Math.abs(r) && (n > 0 ? nextAction() : previousAction()),
      (xDown = null),
      (yDown = null)
  },
  awaitProjectLoad = setInterval(() => {
    projectDataLoading ||
      (clearInterval(awaitProjectLoad),
      nextButton.addEventListener('click', nextAction, !1),
      prevButton.addEventListener('click', previousAction, !1),
      PROJECT_CARDS_CONTAINER.addEventListener(
        'touchstart',
        handleTouchStart,
        !1
      ),
      PROJECT_CARDS_CONTAINER.addEventListener(
        'touchmove',
        handleTouchMove,
        !1
      ))
  }, 500)
let nameValid = !1,
  emailValid = !1,
  messageValid = !1
const validateField = (e, t) => {
    let a = e.target.value
    const n = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    'text' === t && a
      ? (nameValid = !(a.length < 2))
      : 'email' === t && a
      ? (emailValid = !!n.test(String(a).toLocaleLowerCase()))
      : 'textarea' === t && a && (messageValid = !(a.length < 10))
    const r = document.querySelector('#email-error'),
      l = document.querySelector('#name-error'),
      o = document.querySelector('#message-error')
    nameValid
      ? (l.style.height = '0')
      : ((l.style.height = '2rem'),
        (l.innerText = 'Use at least two characters')),
      emailValid
        ? (r.style.height = '0')
        : ((r.style.height = '2rem'),
          (r.innerText = 'Make sure this is a valid email address')),
      messageValid
        ? (o.style.height = '0')
        : ((o.style.height = '2rem'),
          (o.innerText = 'How about something a bit longer?')),
      (document.querySelector('#form-submit').disabled = !(
        nameValid &&
        emailValid &&
        messageValid
      ))
  },
  FORM_NAME = document.querySelector('#form-name'),
  FORM_EMAIL = document.querySelector('#form-email'),
  FORM_MESSAGE = document.querySelector('#form-message')
FORM_NAME.addEventListener(
  'input',
  e => {
    validateField(e, 'text')
  },
  !1
),
  FORM_EMAIL.addEventListener(
    'input',
    e => {
      validateField(e, 'email')
    },
    !1
  ),
  FORM_MESSAGE.addEventListener(
    'input',
    e => {
      validateField(e, 'textarea')
    },
    !1
  )

const enableSplash = true // for production

const SPLASH_PAGE = document.querySelector('#splash-page')
const ANIMATION_WRAPPER = document.querySelector(
  '#animated-logo-wrapper .animation-wrapper'
)
const ELEMS_TOP_BLOCK_FALL = document.querySelectorAll('.anim-top-block-fall')
const ELEMS_BOTTOM_BLOCK_FALL = document.querySelectorAll(
  '.anim-bottom-block-fall'
)
const LEFT_DIAMOND = document.querySelector(
  '#animated-logo-wrapper .left-diamond'
)
const RIGHT_DIAMOND = document.querySelector(
  '#animated-logo-wrapper .right-diamond'
)
const SPLASH_PAGE_MAIN_LOGO = document.querySelector('#splash-page .main-logo')

const animateOnLoad = () => {
  ANIMATION_WRAPPER.style.animationName = 'rotate-logo'
  ELEMS_TOP_BLOCK_FALL.forEach(
    elem => (elem.style.animationName = 'top-block-fall')
  )
  ELEMS_BOTTOM_BLOCK_FALL.forEach(
    elem => (elem.style.animationName = 'bottom-block-fall')
  )
  LEFT_DIAMOND.style.animationName = 'left-diamond-slide'
  RIGHT_DIAMOND.style.animationName = 'right-diamond-slide'
  SPLASH_PAGE_MAIN_LOGO.style.animationName = 'slide-up-and-color'
}

// ***** determine splash page display on load *****

const playSplashPage = bool => {
  if (bool) {
    // disable scroll on body and add padding on desktop
    document.body.style.overflowY = 'hidden'
    window.innerWidth >= 1280
      ? (document.body.style.padding = '0 15px 0 0')
      : null
    // show splash page
    SPLASH_PAGE.style.display = 'block'
    // generate animations
    animateOnLoad()
    // hide page after set time determined by CSS animations
    setTimeout(() => {
      SPLASH_PAGE.style.opacity = '0'
      setTimeout(() => {
        SPLASH_PAGE.style.display = 'none'
        document.body.style.overflowY = 'scroll'
        window.innerWidth >= 1280 ? (document.body.style.padding = '0') : null
      }, 500)
    }, 9000)
  } else {
    SPLASH_PAGE.style.display = 'none'
  }
}

// ***** session storage *****
if (!sessionStorage.getItem('visited')) {
  playSplashPage(enableSplash)
  sessionStorage.setItem('visited', true)
} else {
  SPLASH_PAGE.style.display = 'none'
}
