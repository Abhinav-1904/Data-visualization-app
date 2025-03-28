# Graph Hive

Graph Hive is an interactive data visualization dashboard designed to provide insightful visualizations from uploaded datasets. Built using Next.js for the frontend and Python for the backend, Graph Hive empowers users to analyze data effectively through dynamic, customizable charts.

## Features

- **Interactive Dashboard**: Upload datasets and generate real-time visualizations.
- **Multiple Chart Types**: Line charts, bar charts, heatmaps, and more.
- **Customizable Parameters**: Select columns and customize visualization options to suit your needs.
- **Fast and Scalable Backend**: Powered by Python with Pydantic and Databases for rapid data processing.
- **Modern Frontend**: Developed using Next.js, TypeScript, and Tailwind CSS for a seamless user experience.

## Tech Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS

### Backend

- Python
- FastAPI
- Pydantic

### Other Tools

- Turborepo for monorepo management
- Plotly for data visualizations

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- Python 3.10+

### Steps

1. **Clone the Repository**

   ```bash
   git clone [https://github.com//graph-hive.git](https://github.com/Abhinav-1904/Data-visualization-app
   cd Data-visualization-app
   ```

2. **Setup Frontend**

   ```bash
   cd apps/web-app
   npm install
   npm run dev
   ```

3. **Setup Backend**

   ```bash
   cd apps/backend
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   pip install -r requirements.txt
   uvicorn main:app --reload
   ```

4. **Environment Variables**
   Create a `.env.local` file in the `apps/web-app` directory with the following variables:

   ```env
   # Frontend
   NEXT_PUBLIC_Backend_URL=http://localhost:8000
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret
   GOOGLE_CLIENT_ID=your-ID
   GOOGLE_CLIENT_SECRET=your-secret
   GITHUB_ID=your-ID
   GITHUB_SECRET=your-secret
   ```

5. **Run the Application**

   - Start the backend server (`uvicorn` command above).
   - Start the frontend server by running `npm run dev` in `apps/web-app`.

6. **Access the App**
   Open `http://localhost:3000` in your browser.

## Usage

1. Select the desired chart type.
2. Navigate to the page and upload a `.csv` file.
3. Choose the appropriate columns for visualization (e.g., x-axis, y-axis).
4. Generate and view your chart instantly.
