# Playwright Test Automation Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)](https://nodejs.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.57.0-blue.svg)](https://playwright.dev/)
[![Angular](https://img.shields.io/badge/Angular-14.2.12-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.6.4-blue.svg)](https://www.typescriptlang.org/)

This project contains end-to-end test automation for an Angular application using Playwright. The tests cover various UI components, forms, interactions, and mobile responsiveness.

## Overview

This test suite is built with Playwright and TypeScript. It uses the Page Object Model pattern to organize test code and make it more maintainable. The project includes tests for forms, tables, modals, date pickers, drag and drop functionality, and mobile device testing.

## Prerequisites

Before running the tests, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/esaganchi/pw-practice-app.git
cd pw-practice-app
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

> **Note:** Due to dependency conflicts in Angular 14, use `--legacy-peer-deps` flag during installation.

3. Install Playwright browsers:
```bash
npx playwright install
```

## Configuration

The project uses environment variables for configuration. Create a `.env` file in the root directory with the following variables:

```env
DEV=1
STAGING=0
URL=http://localhost:4200
```

The `playwright.config.ts` file contains all test configuration including browser settings, timeouts, and project definitions.

## Running the Application

Start the Angular development server:

```bash
npm start
```

The application will be available at `http://localhost:4200/` by default.

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Tests in a Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run Tests with UI (Headed Mode)
```bash
npx playwright test --headed
```

### Run Specific Test File
```bash
npx playwright test tests/012-usePageObject.spec.ts
```

### Run Mobile Tests
```bash
npx playwright test --project=mobile
```

### Run Tests Using NPM Scripts
```bash
npm run pageObjects-chrome
npm run pageObjects-firefox
npm run pageObjects-all
```

## Project Structure

```
pw-practice-app/
├── page-objects/          # Page Object Model classes
│   ├── datepickerPage.ts
│   ├── formLayuotsPage.ts
│   ├── helperBase.ts
│   ├── navigationPage.ts
│   └── pageManager.ts
├── tests/                 # Test files
│   ├── 001-firstTest.spec.ts
│   ├── 002-locatorSyntaxRules.spec.ts
│   ├── 003-userFasingLocators.spec.ts
│   ├── 004-autoWaiting.spec.ts
│   ├── 005-datepeaker.spec.ts
│   ├── 006-dialogBoxes.spec.ts
│   ├── 007-dragAndDrog.spec.ts
│   ├── 008-listsAndDropdowns.spec.ts
│   ├── 009-sliders.spec.ts
│   ├── 010-tooltips.spec.ts
│   ├── 011-uiComponents.spec.ts
│   ├── 012-usePageObject.spec.ts
│   ├── 013-testWithFixtures.spec.ts
│   ├── 014-testMobile.spec.ts
│   ├── 015-visualTesting.spec.ts
│   └── webTables.spec.ts
├── playwright.config.ts   # Playwright configuration
├── test-options.ts        # Custom test fixtures and options
└── package.json           # Project dependencies and scripts
```

## Test Coverage

The test suite includes:

- **Locator strategies**: Different ways to find elements on the page
- **User-facing locators**: Best practices for element selection
- **Auto-waiting**: Understanding Playwright's automatic waiting
- **Form testing**: Input fields, radio buttons, checkboxes
- **Date picker testing**: Calendar interactions and date selection
- **Dialog boxes**: Handling browser alerts and confirmations
- **Drag and drop**: Testing drag and drop functionality
- **Lists and dropdowns**: Testing dropdown menus and lists
- **Sliders**: Testing range sliders and interactive controls
- **Tooltips**: Testing hover interactions and tooltips
- **Page Object Pattern**: Organizing tests with Page Objects
- **Fixtures**: Using Playwright fixtures for test setup
- **Mobile testing**: Testing responsive design on mobile devices
- **Visual testing**: Screenshot comparison testing
- **Web tables**: Testing data tables and interactions

## Page Object Model

The project uses the Page Object Model pattern to organize test code. Each page or component has its own class in the `page-objects/` directory:

- `NavigationPage`: Handles navigation between different pages
- `FormLayoutsPage`: Contains methods for interacting with forms
- `DatepickerPage`: Methods for date picker interactions
- `PageManager`: Central manager for all page objects

## Reports

After running tests, you can view the HTML report:

```bash
npx playwright show-report
```

The project also supports Allure reports. To generate Allure reports:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Docker Support

The project includes Docker configuration for running tests in containers:

```bash
docker-compose up
```

## Environment Variables

The following environment variables can be used:

- `DEV=1`: Use development environment (localhost:4200)
- `STAGING=1`: Use staging environment (localhost:4202)
- `URL`: Custom URL for specific tests

## Troubleshooting

If tests fail, check the following:

1. Make sure the Angular application is running on the correct port
2. Verify that all dependencies are installed correctly
3. Check that Playwright browsers are installed
4. Review the test output for specific error messages
5. Ensure environment variables are set correctly in the `.env` file

## Contributing

When adding new tests, please follow these guidelines:

1. Follow the existing naming convention for test files
2. Use Page Object Model pattern for new pages
3. Add appropriate test descriptions and tags
4. Update this README if adding new features
5. Ensure all tests pass before submitting changes

## License

This project is licensed under the MIT License.

