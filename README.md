# CV Application (The Odin Project)

A clean, responsive, and interactive React CV Application built as part of **The Odin Project** curriculum. This project allows users to dynamically input their general information, educational history, and professional experience, toggle between an editing interface and a formatted resume preview, and export their resume to PDF.

## ✨ Features

* **Modular Component Architecture:** Split into logical components (`GeneralInfo`, `Education`, `Experience`, and `CVPreview`).
* **Dynamic CRUD Operations:** Manage multiple education and work experience entries with full add, edit, and delete functionality.
* **Controlled Forms & State Lifting:** Uses React state (`useState`) and props to seamlessly synchronize data between input forms and the final preview.
* **Print / PDF Export Support:** Features custom print stylesheets that hide editing UI and optimize formatting for native browser printing or saving as a PDF.
* **Modern UI/UX:** Clean card-based design with custom CSS styling and input placeholders.

## 🛠️ Built With

* **React** (v18+)
* **Vite** (for fast bundling and development)
* **CSS3** (Custom stylesheets with responsive flex/grid layouts)
* **HTML5**

## 📚 What I Learned

Through building this project, I strengthened my understanding of:
* React functional components and hooks (`useState`).
* Lifting state up from child forms to parent containers.
* Handling arrays of objects immutably (`.map()`, `.filter()`).
* Conditional rendering between edit mode and preview mode.
* Writing modular CSS and print media queries.