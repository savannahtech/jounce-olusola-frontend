# LLM Metrics Dashboard

## Overview

The LLM Metrics Dashboard is a React-based web application designed to visualize and compare performance metrics for various Language Learning Models (LLMs). This dashboard provides an intuitive interface for users to explore different metrics such as TPS (Tokens Per Second), RPS (Requests Per Second), TTFT (Time To First Token), and end-to-end latency across multiple LLM models.

## Features

- Interactive dashboard for LLM performance metrics visualization
- Histogram and line chart views for easy comparison
- Dynamic metric selection
- Secure API integration with AWS Lambda proxy
- Responsive design for various screen sizes

## Technologies Used

- React.js
- Axios for API requests
- Recharts for data visualization
- Tailwind CSS for styling
- Shadcn UI components

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)


## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/llm-metrics-dashboard.git
   cd llm-metrics-dashboard
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To run the application in development mode:

```
npm start
```

The application will be available at `http://localhost:3000`.

## Building for Production

To create a production build:

```
npm run build
```

This will create a `build` directory with production-ready files.

## Usage

1. Open the application in a web browser.
2. Use the dropdown menu to select a metric (TPS, RPS, TTFT, e2e_latency).
3. View the performance of different LLM models in either histogram or line chart format.
4. Toggle between chart types using the tabs above the chart.

## API Endpoints

- `/api/token` - POST request to obtain authentication token
- `/api/metrics` - GET request to fetch available metrics
- `/api/ranking/{metric}` - GET request to fetch rankings for a specific metric


## Contributing

Contributions to the LLM Metrics Dashboard are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the original branch: `git push origin feature-branch-name`.
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

If you have any questions or feedback, please contact [olusola akinsulere] at [olusola.akinsulere@gmail.com].

## Acknowledgements

- [React](https://reactjs.org/)
- [Recharts](https://recharts.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)