# 🔗 URL Shortener

A full-stack URL Shortener project built using **Node.js** and **Express.js**. This project converts long URLs into short, easy-to-share links while helping me learn backend development, REST APIs, databases, and full-stack application development.

>  **Project Status:** In Development

---

##  Project Goal

The goal of this project is to build a production-style URL Shortener from scratch while learning backend development step by step.

---

##  Tech Stack

### Backend
- Node.js
- Express.js

### Tools
- Git
- GitHub
- Postman
- VS Code

### Database *(Coming Soon)*
- MongoDB Atlas

### Frontend *(Coming Soon)*
- HTML
- CSS
- JavaScript

---

##  Project Structure

```
URL-Shortener/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── public/
├── routes/
├── utils/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

##  Current Features

- Express server setup
- Basic project structure
- Health check endpoint
- Git & GitHub integration
- Postman setup for API testing

---

##  Development Roadmap

- [x] Initialize Node.js project
- [x] Install Express
- [x] Create project structure
- [x] Setup Git & GitHub
- [ ] Configure Express routing
- [ ] Build URL shortening API
- [ ] Validate URLs
- [ ] Generate unique short codes
- [ ] Connect MongoDB Atlas
- [ ] Store URLs in database
- [ ] Redirect shortened URLs
- [ ] Build frontend
- [ ] Copy shortened URL
- [ ] Click analytics
- [ ] Deploy application

---

##  Installation

Clone the repository:

```bash
git clone https://github.com/kanishkachauhan241/URL-Shortener.git
```

Go to the project directory:

```bash
cd URL-Shortener
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

---

##  API Endpoints

### Home

```
GET /
```

Response:

```
 Welcome to URL Shortener API
```

---

### Health Check

```
GET /health
```

Response:

```json
{
  "status": "OK",
  "message": "Server is running"
}
```

---

##  What I'm Learning

- Node.js
- Express.js
- REST APIs
- Git & GitHub
- Backend Project Structure
- API Testing with Postman

---

##  Contributing

This project is currently a personal learning project. Suggestions and feedback are always welcome.

---

##  Author

**Kanishka Chauhan**

- GitHub: https://github.com/kanishkachauhan241

---

^-^ If you like this project, consider giving it a star on GitHub.
