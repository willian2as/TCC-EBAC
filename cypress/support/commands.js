// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addProdutos', (ordem, tamanho, cor, quantidade) => {
    cy.get('[class="product-block grid"]').eq(ordem).click()
    cy.wait(1000)
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.visit('produtos/')
})

const URLfinal = 'wp-json/wc/v3/coupons'
const token = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'

Cypress.Commands.add('listCoupons', () => {
    cy.request({
        method: 'GET',
        url: URLfinal,
        headers: { authorization: token }
    })
})

Cypress.Commands.add('addCoupons', (codigo, valor, tipo, descricao) => {
    cy.request({
        method: 'POST',
        url: URLfinal,
        headers: { authorization: token },
        body: {
            "code": codigo,
            "amount": valor,
            "discount_type": tipo,
            "description": descricao
        },
        failOnStatusCode: false

    })
})