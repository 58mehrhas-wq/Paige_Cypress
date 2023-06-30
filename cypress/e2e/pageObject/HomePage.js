class HomePage
{
    closePopup()
    {
        return cy.get('a[aria-label$="close"]')
    }
    paigeBtn() 
    {
        return cy.get('app-header-default[class="desktop-sticky-header sticky-unstuck sticky-top"] img[alt="PAIGE"]')
    }
    womenTab()
    {
        return cy.get('ul[class="pg-navTop_nav pg-nav is-center"] li[aria-label="Open Women menu"] span[class="menuItem--label"]')
    }
    pantsOption()
    {
        return cy.get('div:nth-child(3) > ul:nth-child(1) > li:nth-child(3) > app-menu-item:nth-child(1) > a:nth-child(1) > span:nth-child(1)')
    }
}
export default HomePage;