# Nike Clone

## Installation Guide

Clone the repository:

```bash
git clone <repository-url>
cd nike-clone
```

### 1. Start the JSON Server

Install the dependencies:

```bash
npm install
```

Install JSON Server (if it's not already included in the project):

```bash
npm install json-server
```

Start the JSON Server:

```bash
npx json-server db.json
```

> If your React app uses port 5173, you can run JSON Server on another port:

```bash
npx json-server db.json --port 5000
```

### 2. Start the Frontend

Open a new terminal:

```bash
cd nike-clone
npm install
npm run dev
```

The application will be available at:

- Frontend: `http://localhost:5173`
- JSON Server: `http://localhost:3000` (or `http://localhost:5000` if you changed the port)
