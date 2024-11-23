  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('change is not defined')) {
      return false;
    }
    return true;
  });