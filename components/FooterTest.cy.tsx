import React from 'react';
import Footer from './Footer';

describe('<Footer/>', () => {
    beforeEach(() => {
        cy.mount(<Footer />);
      });
      it('should display the logo', () => {
        cy.get('img[alt="SeeQR Logo"]').should('be.visible');
      });
    
      it('should link to the correct homepage', () => {
        cy.get('a[href="http://seeqrapp.com/"]').should('have.length', 2);
      });
    
      it('should have Github link leading to the correct URL', () => {
        cy.get('a[href="https://github.com/open-source-labs/SeeQR"]').should('contain', 'Github');
      });
    
      it('should have Blog link leading to the correct URL', () => {
        cy.get('a[href="https://medium.com/p/59741756cfcb"]').should('contain', 'Blog');
      });
    
      it('should have Contact link leading to the correct URL', () => {
        cy.get('a[href="http://www.seeqrapp.com/team"]').should('contain', 'Contact');
      });
    
      it('should display the copyright message', () => {
        cy.get('span')
          .contains('© 2023 SeeQR. All Rights Reserved.')
          .should('be.visible');
      });
});