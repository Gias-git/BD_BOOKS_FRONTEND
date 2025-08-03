# 📚 Minimal Library Management System – Frontend

A clean and functional **frontend** for a Library Management System built using **React**, **TypeScript**, **Redux Toolkit**, and **RTK Query**. This project allows users to view, add, edit, delete, and borrow books through interaction with a RESTful backend API.

---

## 🚀 Features

### ✅ Public Routes (No Authentication)
- All features are available without logging in.
- Simple, open-access design for quick testing and prototyping.

### 📖 Book Management
- **Book List Table**:
  - Columns: Title, Author, Genre, ISBN, Copies, Availability, Actions
  - Actions:
    - ✏️ Edit Book
    - ❌ Delete Book (with confirmation)
    - 📥 Borrow Book
- **Add Book**:
  - Title, Author, Genre, ISBN, Description, Copies, Available (optional)
  - Instant UI update after creation

### 📥 Borrow Book
- Form with:
  - **Quantity**: Validated to not exceed available copies
  - **Due Date**
- If copies reach 0, the book is marked unavailable
- Displays toast/success message and redirects to `/borrow-summary`

### 📊 Borrow Summary
- Displays total quantity borrowed per book
- Fields: Book Title, ISBN, Total Quantity Borrowed
- Pulled via aggregation API endpoint



## 🛠️ Tech Stack

| Layer            | Tech                        |
|------------------|-----------------------------|
| Frontend         | React + TypeScript          |
| State Management | Redux Toolkit + RTK Query   |
| Styling          | Tailwind CSS or plain CSS   |
| Backend (required) | Node.js + Express.js      |
| Database (required) | MongoDB + Mongoose       |


