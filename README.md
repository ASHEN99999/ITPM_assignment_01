# ITPM Assignment 1 - Automation Project

This project automates the testing of [SwiftTranslator](https://www.swifttranslator.com/) (Singlish to Sinhala) using Playwright.
It covers 35 test scenarios (Precision, Negative, UI) and generates a report in Excel format.

## Prerequisites

- Node.js (v18 or higher)
- npm

## Installation

1. Clone or extract the project.
2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers (if not already installed):

```bash
npx playwright install chromium
```

## Running Tests

To execute the automation script:

```bash
npx playwright test
```

This will run all 35 test cases in a headless browser. The results will be saved to `test-results/results.json`.

## Generating the Report

After running the tests, verify that `test-results/results.json` exists. Then, generate the Excel report:

```bash
npx ts-node scripts/generate_report.ts
```

This will create a new Excel file (e.g., `IT12345678_TestCases.xlsx`) in the project root, containing the test case details, actual outputs, and status.

## Project Structure

- `tests/assignment.spec.ts`: Main test script.
- `tests/test_data.ts`: Definition of all 35 test scenarios.
- `scripts/generate_report.ts`: Script to populate the Excel template.
- `ITPM_Assignment1_TestCases_35_ONLY.xlsx`: The blank template file.
