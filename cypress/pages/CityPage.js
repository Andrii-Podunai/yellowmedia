class CityPage {
  getTab(dayIndex) {
    return cy.get('main .vV3dvPLZ').eq(dayIndex);
  }

  getActiveTabInfo() {
    return cy.get('.vV3dvPLZ.uXujd8Ct');
  }

  getDayElement() {
    return this.getActiveTabInfo().find('.BzO81ZRx');
  }

  getDayNumberElement() {
    return this.getActiveTabInfo().find('.BrJ0wZrO');
  }

  getMonthElement(month) {
    return this.getActiveTabInfo().contains(month);
  }

  navigateToTab(dayIndex) {
    this.getTab(dayIndex).click();
  }
}

export default CityPage;
