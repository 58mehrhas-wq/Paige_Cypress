class WomenPantsPage {
    womenPantsTitle() 
    {
        return cy.get('h1:nth-child(1)')
    }

    searchField() 
    {
        return cy.get(' app-header-default > div > app-header-search > div > form > div > input').type('Brooklyn Crop - Black Willow')
    }

    selectResult() 
    {
        return cy.get('a.ng-tns-c29-1')
    }

    brooklynCropTitle()
    {
        return cy.get("div[class='plp-search-header'] h1")
    }

    brooklynCrop() 
    {
        return cy.get('.pg-productListItems_name')
    }
    brooklynCropDetails()
    {
        return cy.get("div[class='plp-search-header'] h1")
    }
    brooklynCropBtn() 
    {
        return cy.get('img[alt="Brooklyn Crop - Black Willow"]')
    }
    size32() 
    {
        return cy.get('.pg-productInfo_sizes > .pg-productInfo_button-list > :nth-child(10) > a')
    }

    shoppingBag() 
    {
        return cy.get('#add-to-shopping-bag-button')
    }
    brooklyYourBag()
    {
        return cy.get("app-bag-flyout[class='ng-tns-c22-15'] div p")
    }

    subtotal1Item()
    {
        return cy.get("app-bag-flyout[class='ng-tns-c22-15'] div[class='bag-flyout-backdrop'] div[class='bag-flyout'] div[class='bag-flyout-footer'] div div[class='subtotal-container']")
    }

    checkoutBtn()
    {
        return cy.get('div.pg-navFlyout_column div.bag-flyout-backdrop div.bag-flyout div.bag-flyout-footer div:nth-child(3) > button:nth-child(1)').click({force:true})
    }

    checkoutTitle()
    {
        return cy.get(".pg-myBagProductList_title.my-bag-page-title")
    }

    checkoutAsAGuestBtn()
        {
            return cy.get(".pg-myBagOrderSummary_buttons > :nth-child(2)")
        }
    



}
export default WomenPantsPage;