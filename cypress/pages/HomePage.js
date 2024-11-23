class HomePage {
  getSearchInput() {
    return cy.get('form input[aria-label="Пошук населенного пункта"]');
  }

  getCityOption(cityName) {
        return cy.get('.QdUY8s3e').contains(cityName).first();
    }

  searchCity(cityName) {
    this.getSearchInput().type(cityName);
    this.getCityOption(cityName)
      .should(($el) => {
        const rect = $el[0].getBoundingClientRect();
        expect(rect.top).to.be.greaterThan(0);
      })
      .click({ force: true }); 
  }
}

export default HomePage;


