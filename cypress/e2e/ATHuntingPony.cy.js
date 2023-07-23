describe('Оформление заказа', function () {
    
    it('Оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="2"] > .header__collections-controls > .header__collections-link').click();
        cy.wait(1500)
        cy.get('[data-product-id="378247921"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.wait(1500)
        cy.get('.add-cart-counter__btn').click();
        cy.wait(1500)
        cy.get('.header__cart').click();
        cy.wait(1500)
        cy.get('.is-count-up').click();
        cy.wait(1500)
        cy.get('.cart-controls > .button').click();
        cy.wait(1500)
        cy.contains('Оформление заказа').should('be.visible');
    
    })     



})         