# Weather Website Tests with Cypress

## Overview
This project contains automated tests for the weather website [Sinoptik.ua](https://ua.sinoptik.ua/). The tests are written using the Cypress framework to verify the functionality of the website, particularly the city search feature, and to ensure that the correct weather data is displayed.

## Table of Contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Run Tests](#run-tests)
- [Test Descriptions](#test-descriptions)
- [Testing Challenges](#testing-challenges)
- [Tips](#tips)

## Requirements
- Node.js (version 14 or higher)
- npm or yarn

## Installation

### 1. Clone the repository:
Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/weather-website-tests.git
cd weather-website-tests


### 2. Install dependencies:
Run the following command to install the required dependencies:

bash
npm install
# or

### Run Tests
Open Cypress Test Runner
After installing dependencies, you can open the Cypress Test Runner by running:

bash
npx cypress open

## Testing Challenges

During the implementation of tests, several challenges were encountered:
Locator Issues: Locators for elements on the page are difficult to manage due to dynamic classes and complex HTML structures.
Dynamic HTML: The website uses dynamic class names and complex HTML structures, making it difficult to target elements accurately with typical locators.
Similar Classes: Some elements share the same class names, which required additional attributes (like data-testid or other unique identifiers) to create unique locators.

