import '../support/commands';
import HomePage from '../pages/HomePage';
import CityPage from '../pages/CityPage';
import { getCurrentDate, getFormattedDate } from '../utils/dateUtils';

describe('Weather Website Tests', () => {
  beforeEach(() => {
    cy.visit('https://ua.sinoptik.ua/')
  });

  function validateTabResponse(cityPage, dayIndex, formattedDate) {
    cy.intercept('GET', `**${formattedDate}**`).as('forecastRequest');
    cityPage.navigateToTab(dayIndex);

    cy.wait('@forecastRequest', { timeout: 5000 })
      .then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
      })
  }

  function validateWeatherDays(cityPage, numberOfDays) {
    for (let dayIndex = 0; dayIndex < numberOfDays; dayIndex++) {
      const formattedDate = getFormattedDate(dayIndex);
      const expectedDate = getCurrentDate(dayIndex);

      if (dayIndex > 0) {
        validateTabResponse(cityPage, dayIndex, formattedDate);
      }

      cityPage.getDayElement().should('contain', expectedDate.day);
      cityPage.getDayNumberElement().should('contain', expectedDate.num);
      cityPage.getMonthElement(expectedDate.month).should('be.visible');
    }
  }

  it('Search for a city and validate responses', () => {
    const homePage = new HomePage();
    const cityPage = new CityPage();

    homePage.searchCity('Київ');

    cy.url().then((url) => {
      const decodedUrl = decodeURIComponent(url);
      expect(decodedUrl).to.include('погода-київ');
    });

    cy.url().then((url) => {
      cy.request(url).its('status').should('eq', 200);
    });

    validateWeatherDays(cityPage, 7);

    cy.contains('10 днів').click();
    cy.url().then((url) => {
      cy.request(url).its('status').should('eq', 200);
    });

    validateWeatherDays(cityPage, 10);

  });
});
