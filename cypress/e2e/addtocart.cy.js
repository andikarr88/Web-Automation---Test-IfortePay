require('cypress-xpath');
import { Login } from "../pages/Login";

const addtocart = new Login();

describe('Add To Cart Product', () => {
    beforeEach(() => {
        addtocart.login();
    })
  
    it('Adding Product to Cart', () => {
      cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").click();
      cy.wait(3000);
      cy.xpath("//a[@class='shopping_cart_link']").click();
      cy.wait(3000);
      cy.xpath("//div[@class='inventory_item_name']").should('have.text', "Sauce Labs Backpack");
      cy.screenshot();
      cy.wait(5000);
    })
  
});