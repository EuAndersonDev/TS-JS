---

# JavaScript/TypeScript FullStack Course Repository

Welcome to my repository for the FullStack JavaScript/TypeScript course! This repo contains projects, exercises, and notes from the course, covering both front-end and back-end development with JavaScript, TypeScript, databases, and API development.

## 📚 Course Overview

This course focuses on building full-stack applications using JavaScript and TypeScript, alongside databases like MySQL and MongoDB. It covers both front-end development with Next.js and back-end development with APIs and database integration.

## 🛠️ Technologies Used

- **JavaScript (JS):** Core language for web development.
- **TypeScript (TS):** Type-safe superset of JavaScript.
- **Next.js:** A React framework for server-side rendering and full-stack applications.
- **MySQL:** Relational database used for structured data storage.
- **MongoDB:** NoSQL database used for flexible, document-based storage.
- **API RESTful:** Design of RESTful APIs for back-end communication and services.

## 🔧 Installation & Setup

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd your-repo-name
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file with your environment variables (e.g., database connection strings, API keys). Example:

   ```
   MYSQL_HOST=localhost
   MYSQL_USER=root
   MYSQL_PASSWORD=yourpassword
   MYSQL_DATABASE=yourdatabase
   MONGODB_URI=mongodb://localhost:27017/yourdb
   ```

5. **Run the database (MySQL/MongoDB):**

   - **MySQL:** Start your MySQL server and ensure the necessary database/schema is created.
   - **MongoDB:** Start your MongoDB service and set up collections as needed.

6. **Run the application:**

   - For the **Next.js frontend**:

     ```bash
     npm run dev
     ```

   - For the **Backend API (Node.js)**:

     ```bash
     npm run start:api
     ```

7. **Database migrations/seed:**

   - **MySQL:** Run migrations or use SQL scripts in `/database/mysql` to set up the schema.
   - **MongoDB:** Use collections or sample data provided in `/database/mongodb`.

## 🚀 Project Highlights

### Frontend:

- **Next.js:**
  - Server-Side Rendering (SSR)
  - Static Site Generation (SSG)
  - API routes for building full-stack functionality

### Backend:

- **APIs:** Built using Node.js and Express.js.
- **RESTful API Design:** REST principles for structured API design.
- **Database Integrations:**
  - **MySQL:** CRUD operations with MySQL database.
  - **MongoDB:** Document-based data management with MongoDB.

### Databases:

- **MySQL:** 
  - Tables, Relationships, and Joins
  - Transactions and Query Optimization

- **MongoDB:** 
  - Collections, Indexing, and Aggregation Framework

### Key Topics Covered:

- **JavaScript & TypeScript:**
  - Core JS/TS syntax and features
  - Promises, async/await, and advanced data handling
  - TypeScript types, interfaces, generics

- **Fullstack Concepts:**
  - Connecting frontend to backend using API calls
  - State management with React (Next.js)
  - Authentication and Authorization

## 🧪 Running Tests

You can run unit and integration tests using the following command:

```bash
npm test
```

Tests are located in the `/tests` folder and cover both frontend and backend functionality.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
