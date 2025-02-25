import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";  // Check the correct folder name
import QuizPage from "./page/Quizpage";
import ResultPage from "./page/Resultpage";

function App() {
  console.log("App component rendered"); // Add this line
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
