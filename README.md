# SGM - Customer Churn Analysis Model

This is an intelligent web application that uses a powerful AI model to analyze customer data from a CSV file, predict customer churn, evaluate model performance, and provide actionable business insights. The application presents the analysis in a clean dashboard and includes a feature to download the complete report as a well-formatted PDF document.

## Business Problem

Customer churn, or the rate at which customers stop doing business with a company, is a critical metric for any subscription-based or recurring revenue business. High churn rates can significantly impact profitability and growth. The core business problem is to proactively identify customers who are at a high risk of churning before they leave. By doing so, the business can ask key questions:

-   Who are our at-risk customers?
-   Why are they likely to leave?
-   What specific, targeted actions can we take to retain them?

The **SGM Customer Churn Analysis Model (CCA)** is designed to answer these questions by transforming raw customer data into a clear, actionable analysis, empowering business users to make data-driven decisions without needing a dedicated data science team.

## Key Features

-   **CSV File Upload**: Simple and intuitive drag-and-drop or file-picker interface to upload customer data.
-   **AI-Powered Analysis**: Leverages a sophisticated AI model to perform an analysis which includes:
    -   **Algorithm Selection**: Automatically chooses a suitable machine learning algorithm (e.g., Logistic Regression, Random Forest) and provides a rationale for the choice.
    -   **Simulated Model Training**: Simulates the model training process and generates key performance metrics.
-   **Comprehensive Dashboard**: Visualizes the analysis results clearly, including:
    -   Key performance metrics: **Precision, Recall, F1-Score, and ROC-AUC**.
    -   A **Confusion Matrix** to understand prediction accuracy.
-   **Actionable Insights**: Provides concrete, AI-generated recommendations for:
    -   **Customer Retention Strategies** to help reduce churn.
    -   **Model Improvements** to enhance predictive accuracy in the future.

## Key Visualizations & Reporting

A primary output of the SGM CCA Model is a comprehensive, single-page PDF report that summarizes the entire analysis. This report is designed to be easily shared with stakeholders and provides a clear overview of the model's findings.

-   **[View a Sample PDF Report (SGMCCAM.pdf)](./SGMCCAM.pdf)**

The report includes key visualizations such as performance metric charts and the confusion matrix, alongside actionable recommendations, ensuring that complex data is presented in an accessible and impactful format.

## Getting Started

To run this project locally, you will need a modern web browser and a valid API key for the AI service.

### Prerequisites

-   A valid API key for the configured AI provider.

### Installation & Setup

1.  **Clone the repository or download the source files.**
2.  **Set up Environment Variables**:
    This project expects the AI API key to be available as an environment variable. When running in a compatible environment, create a `.env` file in the root directory of the project and add your API key:
    ```
    API_KEY="YOUR_AI_API_KEY"
    ```
3.  **Run the application**:
    Open the `index.html` file in your web browser. A local development server is recommended for the best experience.

<br>

<details>
<summary><h3>Click to Expand Technical Details</h3></summary>

#### Technology Stack

-   **Frontend**: React, TypeScript, Tailwind CSS
-   **AI/ML**: Generative AI Model
-   **PDF Generation**: jsPDF, html2canvas

#### How It Works

The application operates through a seamless, multi-step process:

1.  **Data Ingestion**: The user uploads a CSV file. The frontend parses this file into a string format.
2.  **Prompt Engineering**: A detailed prompt is constructed, instructing the AI to act as a data scientist. The prompt provides the CSV data and requests a specific set of tasks: algorithm selection with rationale, simulated training and evaluation, and the generation of actionable recommendations.
3.  **Structured Output**: The AI is instructed to return its findings in a strictly-defined JSON format using the AI provider's structured output feature. This ensures the response is predictable and can be reliably parsed by the application.
4.  **Frontend Rendering**: The React application receives the JSON response, manages the state, and dynamically renders the analysis across various components (e.g., metric cards, charts, recommendation lists).
5.  **PDF Generation**: When the user requests a download, the `html2canvas` library captures the main report container as an image. `jsPDF` then takes this image and places it into a PDF document, scaling it to fit the page and adding a header and footer.

</details>