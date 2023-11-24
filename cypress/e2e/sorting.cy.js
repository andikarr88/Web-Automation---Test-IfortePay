require('cypress-xpath');
import { Login } from "../pages/Login";

const sorting = new Login();

describe('Sorting in Home Page', () => {
    beforeEach(() => {
      sorting.login();
    })
  
    it('Choose Price (low to high)', () => {
      cy.xpath("//select[@class='product_sort_container']").select("lohi");
      cy.wait(3000);
      cy.xpath("//div[@class='inventory_list']//div[1]//div[2]//div[2]//div[1]").should('have.text', "$7.99");
      cy.screenshot();
      cy.wait(5000);
    })
  
});