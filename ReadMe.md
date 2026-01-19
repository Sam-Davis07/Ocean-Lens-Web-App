```md
# 🛒 Full Stack E-Commerce Website

A fully functional **full-stack e-commerce web application** built using **React.js** for the frontend and **Node.js + Express.js** for the backend.  
This project demonstrates real-world e-commerce features with a clean UI, responsive design, and scalable architecture.

---

## 🚀 Features

### 🖥️ Frontend (React.js)
- Responsive modern UI
- Professional product cards with:
  - Discount badges
  - Ratings & reviews
  - Wishlist icon
  - Stock status
- Product listing & filtering
  - Price filter
  - Category filter
  - Rating filter
  - Stock availability
- Wishlist functionality (add/remove products)
- Cart functionality (add/remove items)
- Search bar (auto-redirects to Shop page)
- Dark / Light mode toggle (persisted with localStorage)
- Pages:
  - Home
  - Shop
  - Wishlist
  - Cart
  - About
- Login / Sign-up dropdown (UI based)
- Mobile & desktop responsive layout

---

### ⚙️ Backend (Node.js + Express)
- RESTful APIs for:
  - Products
  - Cart management
- Local database (JSON / SQLite)
- Clean and modular API structure

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- React Icons
- CSS (No Tailwind)
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- Local Database

---

## 📂 Project Structure

```

e-commerce/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── FilterSidebar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Shop.jsx
│   │   │   ├── Wishlist.jsx
│   │   │   ├── CartPage.jsx
│   │   │   └── About.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── data/
│   └── package.json
│
└── README.md

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/e-commerce.git
cd e-commerce
````

### 2️⃣ Frontend setup

```bash
cd frontend
npm install
npm start
```

Runs on: `http://localhost:3000`

### 3️⃣ Backend setup

```bash
cd backend
npm install
node server.js
```

Runs on: `http://localhost:5000`

---

## 🌙 Dark / Light Mode

* Toggle available in the navbar
* User preference saved in `localStorage`
* Theme persists after page refresh

---

## 🧪 Sample Product Data

```js
{
  id: 1,
  name: "Camera Lens",
  image: "image-url",
  price: 4999,
  oldPrice: 5999,
  discount: 20,
  rating: 4.8,
  reviews: 128,
  inStock: true,
  stockLeft: 3
}
```

---

## 🎯 Future Enhancements

* User authentication (JWT)
* Payment gateway integration
* Order history & checkout flow
* Admin dashboard
* MongoDB integration
* Product details page

---

⭐ If you like this project, give it a star on GitHub!
