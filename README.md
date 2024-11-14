# Playwright Automation Project

This is a Playwright automation project created for practice and exploration of Playwright, a powerful end-to-end testing framework. The goal of this project was to learn how to write automated browser tests, explore Playwright’s capabilities, and implement an efficient project structure for test automation.

## Tools and Technologies Used

- **Node.js**: JavaScript runtime environment used to run the automation scripts.
- **VS Code**: Integrated development environment (IDE) for writing and editing the automation code.
- **ESLint**: Linter to ensure code quality and consistency.
- **Playwright**: The primary testing framework for automating browser interactions.
- **Playwright Runner (VS Code Extension)**: Extension to run Playwright tests directly from VS Code.
- **Git**: Version control to manage the project's codebase.
- **TypeScript**: Used for writing the test scripts with type safety.
  
## Project Structure

The project is organized into several folders to keep the codebase clean and maintainable. Here’s the breakdown of the directory structure:


- **`/src/tests`**: Contains the Playwright test files (e.g., `LoginTest.spec.ts`).
- **`/src/pages`**: Stores page object models (POM) that interact with the elements on the page.
- **`/src/utils`**: Helper functions used across tests.
- **`/src/config`**: Stores Playwright configuration and settings.
- **`/src/api`**: Contains any API testing scripts (if applicable).
- **`/src/reporting`**: Used for test result reporting and logs.
- **`/src/logging`**: Centralized logging for debugging during test execution.

## Setup Instructions

To get started with this project, follow the steps below:

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Install Node.js and Dependencies

Ensure you have **Node.js** installed. If not, download and install from [Node.js](https://nodejs.org/).

Then, run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Install Playwright

To initialize Playwright in your project, run:

```bash
npm init playwright@latest
```

### 4. Project Structure

The directory structure should now look something like this:

```bash
/my-playwright-project
|-- /src
    |-- /tests
    |-- /pages
    |-- /utils
    |-- /config
    |-- /api
    |-- /reporting
    |-- /logging
```
### 5. Configure ESLint

Run the following command to install and configure ESLint for consistent coding standards:

```bash
npm install eslint --save-dev
npx eslint --init
```

### 6. Running Tests

You can run a single Playwright test file with the following command:

```bash
npx playwright <test-file> --headed
```
