# 🔐 Authentication Module Backend

A production-ready authentication system built using **Node.js, Express, TypeScript, and MongoDB**.
This backend provides secure user authentication, OTP verification, JWT-based authorization, and password management.

---

## 🚀 Features

* ✅ User Registration (Email + Phone)
* ✅ OTP Verification (Expiry + Attempts Limit)
* ✅ Secure Login (JWT आधारित Authentication)
* ✅ Access Token + Refresh Token System
* ✅ Protected Routes
* ✅ Role-Based Authorization (User, Admin, Super Admin)
* ✅ Password Reset (Token-based)
* ✅ Logout (Invalidate Refresh Token)
* ✅ Secure Password Hashing (bcrypt)
* ✅ Input Validation (Zod)
* ✅ Security Middleware (Helmet, CORS)

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js
* **Language:** TypeScript
* **Database:** MongoDB + Mongoose
* **Authentication:** JWT (Access + Refresh Tokens)
* **Security:** bcrypt, Helmet, CORS
* **Validation:** Zod

---

## 📁 Project Structure

```
src/
 ├── config/        # DB connection
 ├── controllers/   # Route handlers
 ├── models/        # Mongoose schemas
 ├── routes/        # API routes
 ├── middleware/    # Auth & error middleware
 ├── utils/         # Helper functions (JWT, OTP)
 ├── types/         # TypeScript types
 └── app.ts         # Entry point
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
OTP_EXPIRY=300
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run the server

```
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 🔐 Authentication

#### ➤ Register

```
POST /auth/register
```

#### ➤ Verify OTP

```
POST /auth/verify-otp
```

#### ➤ Login

```
POST /auth/login
```

#### ➤ Refresh Token

```
POST /auth/refresh-token
```

#### ➤ Logout

```
POST /auth/logout
```

#### ➤ Get Current User

```
GET /auth/me
```

Headers:

```
Authorization: Bearer <accessToken>
```

---

### 🔑 Password Management

#### ➤ Forgot Password

```
POST /auth/forgot-password
```

#### ➤ Reset Password

```
POST /auth/reset-password
```

---

## 🗄️ Database Schema

### 👤 User

* name: string
* email: string (unique)
* phone: string (unique)
* password: string (hashed)
* role: user | admin | super_admin
* isVerified: boolean

---

### 🔢 OTP

* userId: ObjectId
* otp: string
* expiresAt: Date
* attempts: number

---

### 🔄 Refresh Token

* userId: ObjectId
* token: string
* expiresAt: Date

---

## 🧪 Testing

All APIs are tested using **Postman**.

✔ Register → OTP → Verify → Login → Access Protected Route
✔ Refresh Token Flow
✔ Password Reset Flow

---

## 📸 Screenshots

> Add your Postman screenshots here (register, login, /me, etc.)

---

## 🔒 Security Features

* Password hashing using bcrypt
* JWT authentication
* Token expiration & refresh mechanism
* OTP expiry and retry limits
* Secure headers using Helmet
* CORS protection

---

## 💡 Future Improvements

* 📧 Email integration (Nodemailer)
* 🔐 Account lock after failed attempts
* 📊 Login history tracking
* 📱 Device/session management

---
