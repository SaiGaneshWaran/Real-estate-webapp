# 🏠 Estate Agent Client-Side Web Application

This is a responsive **Multi Page Application ** for searching and viewing properties, inspired by **Rightmove.co.uk**. Users can search properties, view details, and save their favorites interactively.

---

## 🌟 Features

- **🔍 Search Properties**:
  - Filter by **type** (house, flat, any).
  - Specify **price range** (min and max).
  - Select **bedrooms** (min and max).
 
- **📋 Property Listing**:
  - Displays property image, short description, and price.
  - Each listing links to a detailed view.

- **💖 Favorites Management**:
  - Save properties to favorites via **drag-and-drop** or a "favorite" button.
  - Remove properties by dragging them out or clicking a **delete button**.
  - **Clear all** favorites at once.

- **📱 Responsive Design**:
  - Optimized for **desktop** and **mobile** layouts.
  - Hand-crafted **media queries** for screen adaptability.

- **⚡ Interactive UI**:
  - Powered by **React.js** with smooth UI components.
  - Includes features like tabs, image carousels, and Google Maps integration.

- **🔒 Data Security**:
  - Implements **Content Security Policy (CSP)** and HTML encoding to prevent vulnerabilities.

---

## 🛠️ Project Structure

src/ ├── components/ │ ├── SearchForm.jsx # Form for search filters │ ├── PropertyList.jsx # Displays search results │ ├── PropertyDetails.jsx # Detailed property view │ ├── Favorites.jsx # Manages favorite properties │ └── ResponsiveLayout.jsx # Handles layout responsiveness ├── data/ │ └── properties.json # Property data file ├── utils/ │ └── helpers.js # Utility functions └── App.jsx # Main application entry point

yaml
Copy code

---

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd estate-agent-app
Install dependencies:


npm install
Run the application:


npm start
Open the application in your browser:


http://localhost:3000
📚 Usage Instructions
Use the search form to filter properties by type, price, bedrooms, date, or postcode.
View property details by clicking on individual listings.
Save properties to your favorites list for easy access.
Manage your favorites by removing or clearing the list as needed.
💻 Technologies Used
React.js: Frontend framework for building the application.
HTML5 & CSS3: Markup and styling.
Flexbox & Grid: For responsive layout design.
JSON: Stores property data.
Media Queries: For device responsiveness.
🤝 Contribution
This project was developed as part of the Advanced Client-Side Web Development coursework. Contributions for improvement and feature enhancements are welcome!

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh