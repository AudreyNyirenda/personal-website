import { getAll } from './utils'

export function header(el) {
  el.addEventListener('click', event => {
    event.currentTarget.classList.toggle('teal')
  })
}
