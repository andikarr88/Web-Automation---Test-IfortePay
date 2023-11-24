require('cypress-xpath');

export class Login {
    
    login() {
      cy.visit('/');
      cy.wait(3000);
      cy.xpath("//input[@id='user-name']").type("standard_user");
      cy.wait(3000);
      cy.xpath("//input[@id='password']").type("secret_sauce");
      cy.wait(3000);
      cy.xpath("//input[@id='login-button']").click();
      cy.wait(5000);
    }

}