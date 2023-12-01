/// <reference types="cypress" />
import HomePage from '../pageObject/HomePage'
import WomenPantsPage from '../pageObject/WomenPantsPage'

const homePage = new HomePage()
const womenPantsPage = new WomenPantsPage()

describe('The very first Paige Test', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  it('Women Pants test', () => {
    cy.visit(Cypress.env('url'))    

    // Maximize the Window
    cy.viewport(1920, 1080)

    // Close the popup
    homePage.closePopup().click()

    // Assert the page in on the Main Paige 
    homePage.paigeBtn().should('be.visible')

    // Hover over the WOMEN tab
    homePage.womenTab().trigger('mouseover')

    // Click on Pants
    homePage.pantsOption().click()

    womenPantsPage.womenPantsTitle().should('be.visible')

    // Enter the item into the Search field
    womenPantsPage.searchField().click()

    // Click on the result
    womenPantsPage.selectResult().click()


    // Assert the title of the item
    womenPantsPage.brooklynCropTitle().should('be.visible')

    // Click on the item
    womenPantsPage.brooklynCropBtn().click()


    // Assert the item page details
    womenPantsPage.brooklynCropDetails().should('be.visible')    

    // Click on the item size
    womenPantsPage.size32().click()

    // Click on the Shopping back
    womenPantsPage.shoppingBag().click()

    // Click on the Checkout button
    womenPantsPage.checkoutBtn()

    // Assert the Checkout Title page
    womenPantsPage.checkoutTitle().should('be.visible')

    // Click on the Checkout as a Guest button
    womenPantsPage.checkoutAsAGuestBtn().click()
   })
})