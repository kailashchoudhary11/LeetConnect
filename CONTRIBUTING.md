# Contributing to LeetConnect

👋 Thank you for your interest in contributing to LeetConnect! We appreciate your help in making LeetConnect better.

Before you start, please take a moment to read the following guidelines.

## Table of Contents

-   [Code of Conduct](#code-of-conduct)
-   [How Can I Contribute?](#how-can-i-contribute)
-   [Setup Local Environment](#setup-local-environment)
-   [Getting Started With Contributing](#getting-started-with-contributing)
-   [Submitting Contributions](#submitting-contributions)
-   [Code Style](#code-style)
-   [Bug Reports](#bug-reports)
-   [Feature Requests](#feature-requests)
-   [License](#license)

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project, you agree to abide by its terms. Please review the [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## How Can I Contribute?

You can contribute to LeetConnect in various ways, including:

-   Reporting bugs
-   Suggesting new features or improvements
-   Writing code enhancements
-   Providing documentation updates
-   Reviewing pull requests
-   Helping with testing and quality assurance

If you're not sure how to get started, feel free to reach out to us in the [Issues](https://github.com/kailashchoudhary11/leetconnect/issues) section for guidance or ideas.

## Setup Local Environment

⚠️ **Please Note:** Docker is required to run LeetConnect locally. Ensure that you have Docker installed on your system before proceeding with the following steps.

1.  Fork this repository to your GitHub account.

2.  Clone your forked repository to your local machine:

    ```
    git clone git@github.com:<your-username>/LeetConnect.git
    ```

3.  Create a `.env` file in the `backend` directory based on the provided `.env.example` file. You can copy the example file and customize it as needed.

4.  To start the development server make sure you're in the root directory of the project and run the following command

        ```
        npm start
        ```

    -   The frontend will be available at http://localhost:5001.
    -   The backend will be available at http://127.0.0.1:8000.

### Extension Development

If you want to test the extension locally, follow these steps:

1. In the root folder, build the extension:

    ```
    npm run build
    ```

2. Upload the `dist` directory created in the `extension-ui` directory to your browser's extensions.

3. Click on "Load Unpacked" and select the `dist` directory. This step should be done only once during the initial setup.

Whenever you make changes to the extension, run the `npm run build` command again to reflect the changes in the extension.

These instructions allow you to set up both the backend and frontend locally, as well as test the extension in your browser. Make sure to create the `.env` file for the backend and customize it as needed for your local environment.

## Getting Started With Contributing

1. Set the upstream remote to the original repository (this step is optional but can be helpful for syncing with the latest changes):

    ```
    git remote add upstream https://github.com/original-repo/LeetConnect.git
    ```

2. Create a new branch for your contribution. Replace `feature-name` with a descriptive branch name:

    ```
    git checkout -b feature-name
    ```

3. Start making your changes and contributions.

## Submitting Contributions

1. Ensure that your code adheres to the [code style](#code-style) guidelines.

2. Commit your changes and write meaningful commit messages.

3. Push your changes to your forked repository:
    ```
    git push origin feature-name
    ```
4. Open a pull request (PR) against the `main` branch of the [original repository](https://github.com/original-repo/LeetConnect).

5. Provide a clear and descriptive title and description for your PR.

6. Your PR will be reviewed by the project maintainers. Be prepared to address any feedback or questions.

7. Once your PR is approved, it will be merged into the main codebase.

## Code Style

Please follow the code style and conventions used in this project. If you're making changes to existing code, try to match the existing style for consistency.

## Bug Reports

If you encounter a bug or issue, please open a [new issue](https://github.com/kailashchoudhary11/leetconnect/issues) and provide details about the problem. Include information about your operating system, browser version, and any relevant error messages.

## Feature Requests

If you have an idea for a new feature or improvement, please open a [new issue](https://github.com/kailashchoudhary11/leetconnect/issues) and describe your proposal. We welcome suggestions for making LeetConnect even better!

## License

By contributing to LeetConnect, you agree that your contributions will be licensed under the [MIT License](LICENSE.md).

Thank you for contributing to LeetConnect! We appreciate your help in making this project a success.
