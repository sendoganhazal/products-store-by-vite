# Product Store App 🛒

A simple e-commerce frontend built with **Vite & React**, using the Dummy JSON.  
The project focuses on product listing, filtering,  and a basic cart system.
[https://fake-store-app-by-hazal.netlify.app/](https://product-store-by-vite.netlify.app/)
---

## ✨ Features

**1. Architecture & Core Technologies**
**Modern Tech Stack:** Built with React 18 and Vite for lightning-fast development and optimized production builds.

**Type-Safe Development:** Leveraging TypeScript throughout the project to ensure robust code, prevent runtime errors, and provide excellent IDE support.

**Atomic Design Pattern:** Organized into Atoms, Molecules, and Organisms, making the UI components highly reusable and the codebase easy to navigate.

**2. Product Exploration & Discovery**
**Dynamic Category Routing:** Implements a seamless navigation system using react-router-dom that fetches and displays products based on specific categories (e.g., beauty, laptops, fragrances).

**Deep Product Details:** A dedicated Product Detail Page featuring image galleries, detailed specifications (brand, dimensions, warranty), and customer reviews.

**Real-time Search & Filter:** A global search functionality that allows users to find products instantly as they type, integrated directly with the UI state.

**Advanced Sorting Engine:** A professional-grade sorting system using Chakra UI Select components, offering:

**Price:** Ascending & Descending.

**Ratings:** Sorting by customer satisfaction.

**Alphabetical:** A-Z and Z-A ordering.

**Default State:** Capability to reset to the original API sequence.

**3. Shopping Experience**
**Global Cart Management:** A centralized Cart System powered by custom hooks (useCart), allowing users to add products from both the listing and detail pages.

**Inventory Awareness:** Real-time display of stock status, SKU information, and minimum order quantities.

**Dynamic Pricing:** Automatic calculation of discounts and final prices, providing clear value propositions to the user.

**4. UI/UX & Design Excellence**
**Fully Responsive Layout:** Optimized for all screen sizes (Mobile, Tablet, Desktop) using Chakra UI’s Responsive Grid system (base, md, lg breakpoints).

**Modern Component Library:** Styled with Chakra UI (v3), ensuring a consistent, accessible, and high-performance design language.

**Performance Optimization:** Strategic use of useMemo and useEffect to handle heavy data operations (like sorting/filtering) without compromising UI fluidity.

**5. Data & API Integration**
**Live Data Source:** Integrated with the DummyJSON API, simulating a real-world e-commerce backend with high-quality product metadata.

Smart Loading States: Smooth transitions with loading spinners and skeleton-like behavior to keep the user engaged during data fetching.
---

## 🛠 Tech Stack

- **Vite**
- **React**
- **TypeScript**
- **Chakra UI**
- **Context API** (Cart & UI state)
- **Dummy Json API**

---


## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Run development server
npm run dev


The app will be available at:

http://localhost:3000

---


## ⚠️ Notes

- This project is for learning and demonstration purposes

- Fake Store API is a public API and may have availability limitations

- No authentication or payment functionality is included

---

## 📄 License

- This project is open-source and free to use for educational purposes.
