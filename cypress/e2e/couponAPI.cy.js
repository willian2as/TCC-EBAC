/// <reference types="cypress" />
import couponSchema from "../contracts/coupon.contract";

context('Verificar a funcionalidade de cadastro de cupons', () => {

    it('Deve listar todos os cupons cadastrados', () => {
        cy.listCoupons()
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })

    it('Deve cadastrar um novo cupom de desconto', () => {
        let cod = `CUPOM ${Math.floor(Math.random() * 10000)}`
        let desc = `Você adicionou o `+cod+` de 10% de desconto`
        cy.addCoupons(cod, "10.00", "percent", desc)
        .then((response) => {
            expect(response.status).to.equal(201)
            //expect(response.body.message).to.equal("Cupom cadastrado com sucesso")

        })
    })
    
    it('Deve emitir erro ao cadastrar cupom repetido', () => {
        cy.addCoupons("10tccebac", "10.00", "percent", "Teste de cupom repetido")
        .then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal("O código de cupom já existe")
        })
    })
})
