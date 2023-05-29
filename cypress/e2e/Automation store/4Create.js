/// <reference types="Cypress" />

describe('Task', () => {
  it('4Create', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.url().should('include', 'Practise');

    //Podesavanje velicine prozora
    cy.viewport(1920, 1080);

    // Dodavanje proizvoda u korpu kroz loop
    var clicks = 3;

    for (let i = 0; i < clicks; i++) {
      if (i === 0) {
        cy.get('[class="increment"]').eq(0).click();
      }
      cy.get('[type="button"]').eq(1).click();
    };

    // Dodavanje proizvoda u korpu
    cy.get('[type="button"]').eq(2).click();
    cy.get('[type="button"]').eq(6).click();
    cy.get('[type="button"]').eq(9).click();

    //Klik na mini Cart button i zatim na Checkout button
    cy.get('[class="cart-icon"]').click();
    cy.get('[type="button"]').contains('PROCEED TO CHECKOUT').click();

    //Unosenje promo code i asertacija
    cy.get('[class="promoCode"]').type('992').should('have.value', '992');

    //Klik na apply promo code button
    cy.get('[class="promoBtn"]').click();
    cy.wait(7000);

    //Asertacija poruke za promo code polje
    cy.get('[class="promoInfo"]').should('have.text', 'Invalid code ..!');

    //Klik na Place order button
    cy.contains('Place Order').click();

    //Pokusaji expandovanja Select dropdowna
    //cy.get('[class="wrapperTwo"]').should('contain.text', 'Choose Country');
    //cy.get('[value="Afghanistan"]').click({force: true}); 

    //cy.get('class="wrapperTwo" > .div').first().click(); 
    //cy.get('[class="wrapperTwo"]').select('Afghanistan');
    //cy.get('[class="wrapperTwo"]').find('div').first();
    //cy.wait(20000);
    //cy.get('.wrapperTwo > div:first').click()

    //Expandovanje dropdowna i selektovanje drzave
    cy.get('select').select('Chad');
    cy.timeout(4000);

    //Cekiranje checkboxa i asertacija
    cy.get('[class="chkAgree"]').check().should("be.checked");
    cy.contains('Proceed').click();

    //Prebacivanje na drugi sajt u istom prozoru pomocu removeAttr
    cy.visit('http://www.webdriveruniversity.com/');
    cy.url().should('include', 'driver');
    cy.screenshot();
    cy.get('[href="Actions/index.html"]').invoke('removeAttr', "target").click();

    //Vracanje na pocetni URL pomocu go back komande
    cy.go('back');
    cy.url().should('include', 'driver');
    cy.screenshot();

    cy.get('[href="Actions/index.html"]').invoke('removeAttr', "target").click();

    cy.get('[class="navbar-brand"]').should('contain.text', 'Actions');

    //Pokusaj drag and drop  
    //cy.get('[id="droppable"]')
    // .trigger('mousedown', { which: 1 })
    // .trigger('mousemove', { clientX: 100, clientY: 100 })
    // .trigger('mouseup');

    // cy.get('[id="droppable"]')
    // .trigger('mousemove', { clientX: 521.6, clientY: 150 })
    //.trigger('mouseup');


    //Pokusaj hoverovanja
    //cy.get('[class="dropdown hover"]').hover();
    //cy.get('[class="dropdown hover"]').trigger('mouseenter').trigger('mouseleave')
    //cy.get('[class="dropdown hover"]').invoke('trigger', 'mouseover');
    cy.get('[class="dropdown hover"]').trigger('mouseout');
    //cy.get('[class="dropdown hover"]').should('be.visible')
    //cy.get('[class="list-alert"]').contains('Hover Over Me First!').hover();

  });
});