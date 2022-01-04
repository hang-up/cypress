/// <reference types="cypress" />
import { mount } from '@cypress/vue'

Cypress.Commands.overwrite('mount', (comp) => {
  return mount(comp)
})
