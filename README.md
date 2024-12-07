
# ts-backend

A Node.js TypeScript starter project.

## Description

This project is a basic setup for a Node.js application using TypeScript. It includes Express for building web applications and Mongoose for MongoDB data modeling.

## Getting Started

### Prerequisites

- Node.js 
- npm

### Installing

1. Clone the repository:

    ```bash
    git clone https://github.com/gsubhampatra/ts-backend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ts-backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running the Application

To start the application in development mode with live reloading:

```bash
npm run dev
```

To build the application:

```bash
npm run build
```

To start the application in production mode:

```bash
npm start
```

## Usage

This project exposes a basic API endpoint at `/api/users`. You can extend the functionality by adding more routes and controllers.

## Project Structure

```plaintext
ts-backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── services/
│   ├── utils/
│   ├── app.ts
│   ├── server.ts
├── dist/
├── node_modules/
├── package.json
├── tsconfig.json
├── README.md
```

- `src/`: Contains the TypeScript source files.
- `dist/`: Contains the compiled JavaScript files.
- `package.json`: Contains npm scripts and dependencies.
- `tsconfig.json`: TypeScript configuration file.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

