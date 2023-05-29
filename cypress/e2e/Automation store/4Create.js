/// <reference types="Cypress" />

describe('Task', () => {
    it('4Create', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.url().should('include', 'Practise');
        cy.viewport(1920, 1080); // Adjust the width and height as needed
      
        var clicks = 3;

        for (let i = 0; i < clicks; i++) {
          if (i === 0) {
            cy.get('[class="increment"]').eq(0).click();
          }
          cy.get('[type="button"]').eq(1).click();
        };
      
        // Continue with the rest of the test without any additional clicks
        cy.get('[type="button"]').eq(2).click();
        cy.get('[type="button"]').eq(6).click();
        cy.get('[type="button"]').eq(9).click();
      
        cy.get('[class="cart-icon"]').click();
        cy.get('[type="button"]').contains('PROCEED TO CHECKOUT').click();
      
        cy.get('[class="promoCode"]').type('992').should('have.value', '992');

        cy.get('[class="promoBtn"]').click();
        cy.timeout(6000);
        cy.get('[class="promoInfo"]').should('have.text', 'Invalid code ..!');

        cy.contains('Place Order').click();

        //Test examples
        //cy.get('[class="wrapperTwo"]').should('contain.text', 'Choose Country');
        //cy.get('[value="Afghanistan"]').click({force: true}); 

        //cy.get('class="wrapperTwo" > .div').first().click(); 
        //cy.get('[class="wrapperTwo"]').select('Afghanistan');
        //cy.get('[class="wrapperTwo"]').find('div').first();
        //cy.wait(20000);
        //cy.get('.wrapperTwo > div:first').click()

        cy.get('select').select('Chad');
        //cy.wait(20000);

        cy.get('[class="chkAgree"]').check().should("be.checked");
        cy.contains('Proceed').click();
        
        cy.visit('http://www.webdriveruniversity.com/');
        cy.url().should('include', 'driver');
        cy.screenshot();
        cy.get('[href="Actions/index.html"]').invoke('removeAttr', "target").click();

        cy.go('back');
        cy.url().should('include', 'driver');
        cy.screenshot();

        cy.get('[href="Actions/index.html"]').invoke('removeAttr', "target").click();

        cy.get('[class="navbar-brand"]').should('contain.text', 'Actions');

         
  // .trigger('mousedown', { which: 1 })
  // .trigger('mousemove', { clientX: 100, clientY: 100 })
  // .trigger('mouseup');

  // cy.get('[id="droppable"]')
  // .trigger('mousemove', { clientX: 521.6, clientY: 150 })
  //.trigger('mouseup');

        

        cy.get('[id="droppable"]')
       //cy.get('[class="dropdown hover"]').hover();
       //cy.get('[class="dropdown hover"]').trigger('mouseenter').trigger('mouseleave')
       //cy.get('[class="dropdown hover"]').invoke('trigger', 'mouseover');
       cy.get('[class="dropdown hover"]').trigger('mouseover').click();
       //cy.get('[class="dropdown hover"]').should('be.visible')
       //cy.get('[class="list-alert"]').contains('Hover Over Me First!').hover();
        
    }); 
 });