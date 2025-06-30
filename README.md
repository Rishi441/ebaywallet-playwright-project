# QA Skills Assessment - eBay Wallet Feature

This repository contains the automation framework and test suite developed for the eBay wallet feature, as part of the QA Skills Assessment. The project utilizes Playwright for automation testing.

## Project Structure

* `tests/`: Contains the Playwright test scripts.
* `pages/`: (Optional, but recommended for larger projects) Contains page object model files.
* `utils/`: (Optional) Contains utility functions.
* `playwright.config.js`: Playwright configuration file.
* `README.md`: This file.

## Manual Testing (Scenario Overview)

The manual testing scenario focuses on a shopper buying a wallet on eBay. Key aspects of the scenario include:

* [cite_start]**Main Product Page**: After searching, the user lands on the main product page[cite: 2, 3].
* [cite_start]**Related Products**: A list of up to six "best seller" related products should be displayed[cite: 3, 4, 5]. [cite_start]These products should be in the same category and price range as the main product.
* **Assumptions**: (Will be detailed in the test strategy and test cases based on clarifications identified).

## Automation Testing

### Prerequisites

* Node.js (LTS recommended)
* npm (comes with Node.js) or Yarn
* Git

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Rishi441/ebaywallet-playwright-project.git
    cd ebaywallet-playwright-project
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Configuration

The Playwright configuration is located in `playwright.config.js`. You can modify this file to adjust settings such as browsers, headless mode, timeouts, etc.

### Running Tests

To run all tests:

```bash
npx playwright test
