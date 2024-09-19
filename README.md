# Temperature Monitoring System

This project consists of a Python MQTT publisher, a Node.js backend with MQTT subscriber and API, and a React frontend for real-time temperature monitoring.

## Prerequisites

- Docker and Docker Compose
- Node.js (v14 or later)
- Python 3.7 or later
- npm (usually comes with Node.js)
- pip (Python package manager)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Mohsin274/Temperature-Monitoring-System.git
cd Temperature-Monitoring-System
```

### 2. Set up the database

Create a `.env` file in the root directory of the project with the following content:

```bash
POSTGRES_USER=db_user
POSTGRES_PASSWORD=password
POSTGRES_DB=db_name
```

Or export the environment variables directly in your terminal:

```bash
export POSTGRES_USER=db_user
export POSTGRES_PASSWORD=password
export POSTGRES_DB=db_name
```

Then start the PostgreSQL container using Docker Compose:

```bash
docker-compose up -d
```

### 3. Set up the backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the backend directory with the following content:

```
DATABASE_URL="postgresql://db_user:password@localhost:5432/db_name?schema=public"
BASE_URL=url_of_your_frontend_app # e.g. "http://localhost:3000"
PORT=port_for_your_backend # e.g. 5000
```

Generate Prisma client:

```bash
npx prisma generate
```

Start the backend server:

```bash
npm start
```

The server should now be running on `http://localhost:5000`.

### 4. Set up the frontend

Open a new terminal window, navigate to the frontend directory:

```bash
cd ../frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the frontend directory with the following content:

```
REACT_APP_API_URL=url_of_your_backend_api_route # e.g. "http://localhost:3000/api"
```

Start the frontend development server:

```bash
npm start
```

The React app should now be running on `http://localhost:3000`.

### 5. Run the Python MQTT publisher

Open a new terminal window, navigate to the python_scripts directory:

```bash
cd ../python_scripts
```

Install the required Python package:

```bash
pip install -r requirements.txt
```

Run the publisher script:

```bash
python publisher.py
```

## Usage

1. The Python script will start publishing random temperature data to the MQTT topic.
2. The Node.js backend will subscribe to this topic, receive the data, and store it in the PostgreSQL database.
3. The React frontend will fetch the temperature data from the backend API and display it in a real-time graph.

You can now open your web browser and navigate to `http://localhost:3000` to see the temperature monitoring dashboard.

## Troubleshooting

- If you encounter any issues with the database connection, make sure the PostgreSQL container is running and the DATABASE_URL in the .env file is correct.
- If the frontend is not receiving data, check that both the backend server and the Python publisher are running.
