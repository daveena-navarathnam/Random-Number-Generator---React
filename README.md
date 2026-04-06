# Random Number Generator (React State & Conditional Rendering Project)

## 📘 Project Overview

The **Random Number Generator** is a beginner-friendly React project developed to demonstrate the use of the **`useState` hook**, button event handling, and **conditional rendering** in functional components. The application generates a random number within a fixed range and updates the user interface instantly whenever the button is clicked.

This academic mini project helps students strengthen their understanding of:

* React functional components
* State management using hooks
* Event handling with buttons
* Conditional rendering
* Dynamic UI updates
* Basic inline styling

---

## 🎯 Objective

The objective of this project is to build an interactive application that generates a **random number between 1 and 100** whenever the user clicks a button.

It also demonstrates how React can display a placeholder message before any value is generated.

---

## ⚙️ Features

* Generates a random number from **1 to 100**
* Updates the displayed number instantly
* Shows **"No number generated yet"** before the first click
* Clean card-style beginner-friendly UI
* Styled button and centered layout
* Uses React state for dynamic rendering

---

## 🌐 Live Demo

The project is deployed and can be accessed using the following live link:

**Live Application:** https://counter-application-react-9uyr.vercel.app/

---

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6)**
* **JSX**
* **HTML5**
* **Inline CSS Styling**

---

## 📂 Project Structure

```bash
src/
│── Generator.js
│── index.js
public/
│── index.html
package.json
```

---

## 💻 Implementation Logic

The application stores the generated number using the `useState` hook.

```javascript
const [randomNumber, setRandomNumber] = useState(null);
```

When the button is clicked, a random number is generated:

```javascript
let random = Math.floor(Math.random() * 100) + 1;
setRandomNumber(random);
```

The UI uses conditional rendering to show a placeholder before the first click.

---

## 🖥️ Expected Output

* Before clicking the button, the UI shows:
  **No number generated yet**
* Clicking the button generates a random number.
* Every click updates the displayed number instantly.
* The generated number is always between **1 and 100**.

---

## 🎓 Learning Outcomes

By completing this project, students will be able to:

* Understand React state updates
* Use `useState` in real mini projects
* Handle click events
* Apply conditional rendering
* Generate random values using JavaScript
* Build simple styled React interfaces

---

## ✅ Conclusion

This Random Number Generator project is an excellent beginner-level React exercise that demonstrates **state updates, event-driven programming, and conditional UI rendering**.

It is highly suitable for students who are learning React fundamentals and building confidence with mini projects.

---

## 👨‍🎓 Academic Note

This project was developed as part of **React.js beginner practice exercises** focusing on hooks, events, and dynamic rendering.
