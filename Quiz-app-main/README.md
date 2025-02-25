Quiz Application 🎯

A dynamic, web-based quiz application with gamification features, built using React (Vite) and Tailwind CSS. The app fetches quiz data from an API and provides an interactive experience with animations, streak tracking, and a progress bar in results.

🚀 Features

✔️ Fetches quiz questions dynamically from an API.

✔️ Tracks correct answer streaks.

✔️ Animations for correct and incorrect answers.

✔️ Progress bar in results based on score.

✔️ Randomized question order for a unique experience.

✔️ Mobile-responsive UI with Tailwind CSS.


📂 Folder Structure


quiz-app/

│── public/               # Static assets (favicon, logos)

│── src/

│   ├── assets/           # Images, icons, and other assets


│   ├── components/       # Reusable UI components

│   ├── page/             # Main pages (Home, QuizPage, ResultPage)

│   ├── utils/            # Utility functions (API requests, helper functions)

│   ├── App.jsx           # Root component

│   ├── main.jsx          # Entry point

│── index.html            # Main HTML file

│── vite.config.js        # Vite configuration

│── package.json          # Dependencies and scripts

│── README.md             # Project documentation




🔧 Tech Stack

Frontend: React (Vite), Tailwind CSS

State Management: React Hooks

Navigation: React Router

API: Fetching data from "https://api.jsonserve.com/Uw5CrX"

📦 Installation & Setup
Clone the repository:

git clone https://github.com/your-repo.git
cd quiz-app

Install dependencies:

npm install

Start the development server:

npm run dev

Open http://localhost:5173/  in your browser.


📌 Usage

Click "Start Quiz" on the homepage.
Select answers for each question.
Get feedback with animations.
View your final score with a progress bar.
Try again and improve your streak!


📜 License

This project is licensed under the MIT License.
