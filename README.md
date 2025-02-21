# React Project: Simple Navbar, Hero Section & Footer

## Live Demo
[Click here to view the live demo]( https://saad0132-ctrl.github.io/React-Tasks/)

## Project Overview
This is a simple React project featuring a responsive Navbar, a Hero Section with dynamically rendered cards, and a Footer. The card data is stored in `App.jsx` and passed down as props to the `HeroSection` and `Card` components.

## Features
* **Navbar** with a logo, three navigation links, and a call-to-action button.
* **Hero Section** displaying three dynamically rendered cards.
* **Footer** with basic information.
* **Component-based architecture** for better readability and maintainability.

## Tech Stack
* **React.js** (Frontend Framework)
* **CSS / Tailwind CSS** (For styling)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Saad0132-ctrl/React-Tasks
   ```
2. Navigate to the project folder:
   ```sh
   cd react-navbar-hero-footer
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Component Breakdown
### `App.jsx`
* Stores the card data as an array and passes it to `HeroSection`.

### `Navbar.jsx`
* Contains a logo, three navigation links, and a CTA button.

### `HeroSection.jsx`
* Receives data from `App.jsx` and maps it to `Card` components.

### `Card.jsx`
* Displays title, description, and image received via props.

### `Footer.jsx`
* A simple footer section with copyright information.
