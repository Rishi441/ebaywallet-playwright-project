# eBay Wallet Product Page Automation Tests

This project contains automated tests for the "Related Products" feature on an eBay product page, specifically focusing on a wallet product. The tests are developed using Playwright, a robust end-to-end testing framework.

## Scenario

As a shopper on eBay, when viewing a main product (a wallet), I expect to see a list of related products that are:
* [cite_start]Best sellers [cite: 3]
* [cite_start]In the same category as the main product [cite: 4]
* [cite_start]Within the same price range as the main product [cite: 4]
* [cite_start]Up to six products displayed [cite: 5]

## Test Strategy

The testing approach involves validating the presence, count, category relevance, and price range of the "Similar sponsored items" (Related Products) section on the eBay product page. Both positive and negative test cases are included to ensure comprehensive coverage.

## Assumptions

Based on the scenario and clarifications needed (which would be asked in Question 1 of the original prompt), the following assumptions are made for these tests:

1.  **Product Category Verification**: Direct programmatic verification of product category is challenging without an API or explicit category tags in the HTML. Therefore, the test assumes that if related product titles contain keywords like "wallet," "purse," "card holder," or "leather," they are considered to be in the same category.
2.  **Price Range Definition**: "Same price range" is defined as a price within +/- 20% of the main product's price. This percentage can be adjusted as per business requirements.
3.  **Best Seller Verification**: It's assumed that the products listed under "Similar sponsored items" are indeed "best sellers" as per the requirement. Programmatic verification of "best seller" status is usually not possible from the front-end without specific indicators or an API.
4.  **UI Element Stability**: The selectors used are based on common eBay page structures, but minor UI changes on eBay could break them.
5.  **Page Load State**: Tests assume `domcontentloaded` is sufficient for elements to be present and interactive.

## Prerequisites

* Node.js (LTS version recommended)
* npm (Node Package Manager)

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd playwright-ebay-wallet-tests
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
    This command will install Playwright and other necessary packages.

## How to Run Tests

To run the tests, use the Playwright test runner command:

* **Run all tests in headless mode (default):**
    ```bash
    npx playwright test
    ```
* **Run tests in UI mode (shows browser and step-by-step execution):**
    ```bash
    npx playwright test --ui
    ```
* **Run tests in headed mode (shows browser but no UI runner):**
    ```bash
    npx playwright test --headed
    ```
* **Run a specific test file:**
    ```bash
    npx playwright test tests/wallet.spec.js
    ```
* **Generate HTML test report:**
    After running tests, an HTML report will be generated. To open it:
    ```bash
    npx playwright show-report
    ```

## Project Structure

* `tests/`: Contains the actual test files (`.spec.js`).
* `pages/`: Implements the Page Object Model (POM) for interacting with web elements on different pages.
* `utils/`: Stores utility functions, like centralized selectors.
* `playwright.config.js`: Playwright configuration file.
* `package.json`: Project metadata and dependencies.
* `README.md`: This file.

## Test Cases Covered

The `wallet.spec.js` file covers the following scenarios:

* **TC001**: Verify Related Products section is displayed.
* **TC002**: Verify up to six best seller products are displayed in related products section.
* **TC003**: Verify Related Products are in the same category as the main product (Wallet).
* **TC004**: Verify Related Products are in the same price range as the main product.
* **TC005**: Verify "See all" link navigates to a page with more related products.
* **TC006 (Negative)**: Verify behavior when no related products are found (simulated).
* **TC007 (Negative)**: Verify behavior with an invalid product URL.

## Bug Reporting (Example - Not implemented in code, but conceptual)

If issues were found during manual or automated testing, they would be reported with details like:

* **Bug ID:** [Unique ID]
* **Title:** Concise summary of the bug.
* **Description:** Detailed explanation, including steps to reproduce, actual results, and expected results.
* **Severity:** (e.g., High, Medium, Low)
* **Priority:** (e.g., Critical, High, Medium, Low)
* **Environment:** Browser, OS, specific URL.
* **Screenshots/Videos:** Visual evidence.

Example Bug:
**Bug ID:** EBAY-WAL-001
**Title:** Related Products Section Displays More Than 6 Items
**Description:** The "Similar sponsored items" section is displaying 7 products instead of the expected maximum of 6.
**Steps to Reproduce:**
1. Navigate to the wallet product page: `https://www.ebay.com/itm/1950605167537`
2. Scroll down to the "Similar sponsored items" section.
**Actual Result:** 7 products are visible in the "Similar sponsored items" section.
**Expected Result:** A maximum of 6 products should be displayed in the "Similar sponsored items" section.
**Severity:** Medium
**Priority:** High
**Environment:** Chrome, Windows 10, URL: `https://www.ebay.com/itm/1950605167537`

---