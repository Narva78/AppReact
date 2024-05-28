// src/setupTests.js
import '@testing-library/jest-dom'

// Ajoutez le mock IntersectionObserver ici aussi si ce n'est pas déjà fait
class IntersectionObserver {
  constructor(callback, options) {
    this.callback = callback
    this.options = options
  }

  observe(element) {
    this.callback([{ isIntersecting: true, target: element }])
  }

  unobserve() {
    return null
  }

  disconnect() {
    return null
  }
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
})

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
})
