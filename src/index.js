import './style.css'

const menuBtn = document.querySelector('.menu')
const navBar = document.querySelector('.nav-bar')

menuBtn.addEventListener('click', () => {
  navBar.classList.toggle('visible')
})

const container = document.querySelector('.container')
const main = document.querySelector('.main')
const section = document.querySelector('.section')

const actions = {
  home: () => {
    section.classList.remove('on')
    main.classList.remove('off')
    container.scrollTop = 0
    container.scrollIntoView({ behaviour: 'instant', block: 'start' })
  },
  projects: () => {
    main.classList.add('off')
    section.classList.add('on')
    container.scrollTop = 0
    container.scrollIntoView({ behaviour: 'instant', block: 'start' })
  }
}

document.body.addEventListener('click', event => {
  const target = event.target.closest('[data-action]')
  if (!target) return

  const { action } = target.dataset
  if (actions[action]) {
    actions[action]()
  }
})

const backToTopBtn = document.querySelector('.back-to-top-button')

window.addEventListener('scroll', () => {
  backToTopBtn.classList.toggle('show', window.scrollY > 300)
})

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
