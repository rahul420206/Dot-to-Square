# Dot-to-Square Drawing Webpage

This project was created as part of the **SDE Intern Assignment: Dot-to-Square Drawing Webpage (React Implementation)**.

## 🎯 Objective

Build an interactive React-based webpage where each mouse click:
- Places a dot at the clicked position.
- Connects the dot to the previous one using a line.
- After four clicks, completes a square by connecting the fourth dot back to the first.

## ✨ Features

- ✅ **Dot Creation:** A light gray dot is placed wherever the user clicks.
- ✅ **Line Drawing:** Lines appear between consecutive dots.
- ✅ **Square Formation:** The fourth dot connects back to the first to complete a square.
- ✅ **Multiple Squares:** You can draw multiple squares, one after another.
- ✅ **Reset Button:** A "Reset" button clears all dots and lines.
- ✅ **User Feedback:** The final dot pulses briefly to indicate square completion.
- ✅ **Responsive Design:** Works on both desktop and mobile screens.

## 🛠️ Tech Stack

- **Frontend Framework:** React (Functional Components & Hooks)
- **Styling:** CSS
- **Drawing Logic:** Regular DOM elements styled with CSS for flexibility and animation

## 📁 Project Structure

dot-to-square/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx              <-- Main logic
│   ├── components/
│   │   ├── Dot.jsx          <-- Dot component
│   │   └── Line.jsx         <-- Line component
│   ├── App.css              <-- Styling
│   └── main.jsx             <-- React entry
├── README.md                <-- Instructions
├── package.json


## Demo
![App Screenshot](Screenshot(113).png)


## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dot-to-square.git
cd dot-to-square
```

### 2. Install Dependencies
npm install

### 3. Run the App
npm start


This will launch the app in your default browser at http://localhost:3000.

## 🧠 4. Application Architecture

App.jsx manages the main logic for state and rendering squares.

Dot.jsx is a simple styled dot rendered at the user's click location.

Line.jsx draws rotated <div>s between two points to simulate lines.

App.css handles styling, animation, responsiveness, and layout.

## 🧪 4. Optional Enhancements

Visual animation when the square completes (a pulsing final dot).

Ability to draw multiple squares.

Reset button to clear the screen without refreshing.

## 🧳 5. About the Assignment
🧳 About the Assignment
This project was completed as part of the SDE Intern Assignment for building an interactive dot-to-square drawing application using React.


