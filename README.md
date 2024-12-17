# Sentiment Analyzer using NestJS and Google Cloud Natural Language API

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
<img src="https://www.drupal.org/files/project-images/Google-logos-02_1.png" width="120" alt="Google Logo" />
</p>

## Overview

This API is built with NestJS and uses the Google Cloud SDK to interact with the Google Cloud Natural Language API. Basic sentiment analysis is performed and the result is saved in a MongoDB database.

## Features

- **Real-time Sentiment Analysis**: Quickly analyze string data to determine sentiment with score and magnitude.
- **Scalable Architecture**: Built on NestJS, allowing for efficient server-side processing.
- **CI/CD Pipeline**: Automated testing and deployment using GitHub Actions.

## Getting Started

### Prerequisites

- Node.js v18 or later
- npm (Node Package Manager)
- Google Cloud SDK (gcloud CLI)

### Authentication Setup

For local development, you need to set up default authentication with the Google Cloud CLI:

1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install).
2. Initialize the SDK and authenticate your account:

   ```bash
   gcloud init
   ```

3. Set the application default credentials:

   ```bash
   gcloud auth application-default login
   ```

This will allow the application to interact with the Google Cloud Natural Language API using your credentials.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/sentiment-analyzer.git
cd sentiment-analyzer
npm install
```

### Running the Application

To start the application in development mode:

```bash
npm run start:dev
```

For production:

```bash
npm run start:prod
```

### Running Tests

To execute unit tests and check coverage:

```bash
npm run test
npm run test:cov
```

## Deployment

The application is set up with a CI/CD pipeline using GitHub Actions. It automatically deploys to different environments based on the branch:

- **Development**: Deploys on pushes to the `develop` branch.
- **Staging**: Deploys on pull requests to the `main` branch.
- **Production**: Deploys on pushes to the `main` branch.
