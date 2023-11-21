/// <reference types="cypress" />

context ('Adicionar item ao carrinho', () => {
    beforeEach(() => {
        
    });

    it('Deve cadastrar tres itens ao carrinho', () => {
        cy.visit('produtos/')
        cy.addProdutos(0, 'S', 'Blue', 3)
        cy.addProdutos(2, 'M', 'Orange', 2)
        cy.addProdutos(4, '36', 'Black', 1)
        cy.get('.top-cart-wishlist').click()
        cy.get('.checkout').first().click({force: true})

        cy.get('.product-name').children().should('have.length', 3)
        
    })
})