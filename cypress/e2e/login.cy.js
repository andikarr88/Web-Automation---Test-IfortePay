require('cypress-xpath');

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(3000);
  })

  it('Login as Valid Username', () => {
    cy.xpath("//input[@id='user-name']").type("standard_user");
    cy.wait(3000);
    cy.xpath("//input[@id='password']").type("secret_sauce");
    cy.wait(3000);
    cy.xpath("//input[@id='login-button']").click();
    cy.contains("Products").should('be.visible');
    cy.screenshot();
    cy.wait(5000);
  })

  it('Login as Invalid Username', () => {
    cy.xpath("//input[@id='user-name']").type("standard_user1");
    cy.wait(3000);
    cy.xpath("//input[@id='password']").type("secret_sauce");
    cy.wait(3000);
    cy.xpath("//input[@id='login-button']").click();
    cy.xpath("//h3[contains(text(),'Epic sadface: Username and password do not match a')]").should('have.text', "Epic sadface: Username and password do not match any user in this service");
    cy.screenshot();
    cy.wait(5000);
  })

  it('Signin Using Wrong Password', () => {
    cy.xpath("//input[@id='user-name']").type("standard_user");
    cy.wait(3000);
    cy.xpath("//input[@id='password']").type("secret_sauce1");
    cy.wait(3000);
    cy.xpath("//input[@id='login-button']").click();
    cy.xpath("//h3[contains(text(),'Epic sadface: Username and password do not match a')]").should('have.text', "Epic sadface: Username and password do not match any user in this service");
    cy.screenshot();
    cy.wait(5000);
  })

  it('Signin Not Fill Username', () => {
    cy.xpath("//input[@id='user-name']")
    cy.wait(3000);
    cy.xpath("//input[@id='password']").type("secret_sauce");
    cy.wait(3000);
    cy.xpath("//input[@id='login-button']").click();
    cy.xpath("//h3[normalize-space()='Epic sadface: Username is required']").should('have.text', "Epic sadface: Username is required");
    cy.screenshot();
    cy.wait(5000);
  })

  it('Signin Not Fill Password', () => {
    cy.xpath("//input[@id='user-name']").type("standard_user");
    cy.wait(3000);
    cy.xpath("//input[@id='password']")
    cy.wait(3000);
    cy.xpath("//input[@id='login-button']").click();
    cy.xpath("//h3[normalize-space()='Epic sadface: Password is required']").should('have.text', "Epic sadface: Password is required");
    cy.screenshot();
    cy.wait(5000);
  })

});