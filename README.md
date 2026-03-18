# 📸 Zoomin Photography Website

A modern and responsive photography portfolio website built using **React, Vite, Tailwind CSS, and shadcn/ui**. This project showcases services, portfolio, pricing plans, testimonials, and a contact system with a clean and professional UI.

---
🌐 Live Demo

🚀 https://capturedbyamit.vercel.app/

Deployed on Vercel for fast and reliable performance.

## 🚀 Features

* 🎨 Modern UI with Tailwind CSS & shadcn components
* 📱 Fully responsive design
* 🌙 Light / Dark mode support
* 🖼️ Masonry-style portfolio gallery
* 🔍 Image lightbox preview
* 📊 Animated counter (stats section)
* 💬 Testimonials slider
* 💼 Services section with reusable cards
* 💰 Pricing plans
* 📩 Contact form
* ⚠️ Custom 404 Error page

---

## 🛠️ Tech Stack

* **React (Vite)**
* **Tailwind CSS**
* **shadcn/ui**
* **Lucide Icons**
* **react-countup**
* **react-intersection-observer**
* **react-masonry-css**
* **yet-another-react-lightbox**

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── HeroSection.jsx
│   ├── ServicesCard.jsx
│   ├── PortfolioGallery.jsx
│   ├── CounterSection.jsx
│   ├── ContactForm.jsx
│   └── ui/ (shadcn components)
│
├── data/
│   ├── services.js
│   └── portfolio.js
│
├── pages/
│   ├── Home.jsx
│   ├── Portfolio.jsx
│   ├── Contact.jsx
│   └── Error.jsx
│
└── App.jsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/zoomin-photography.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## ✨ Key Components

### 🔹 HeroSection

Reusable component with:

* Dynamic title & description
* Custom background image
* Adjustable height
* Optional buttons

---

### 🔹 Portfolio Gallery

* Masonry layout
* Hover overlay with icon
* Lightbox preview on click

---

### 🔹 Counter Section

* Parallax background
* Animated stats on scroll

---

### 🔹 Services Card

Reusable card component for services section.

---

### 🔹 Contact Form

Built using shadcn UI components with clean layout.

---

## 🎯 Customization

You can easily customize:

* Images → `data/portfolio.js`
* Services → `data/services.js`
* Text content → props in components
* Theme → Tailwind + Theme Provider

---

## 📌 Future Improvements

* Backend integration (form submission)
* Authentication (admin panel)
* Image upload system
* Blog section

---

## 👨‍💻 Author

Developed with ❤️ using React & Tailwind.

---

## 📄 License

This project is open-source and free to use.

---

⭐ If you like this project, don't forget to give it a star!
