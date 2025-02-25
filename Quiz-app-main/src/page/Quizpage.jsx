import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Fisher-Yates shuffle algorithm to randomize an array.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} - The shuffled array.
 */
function shuffleArray(array) {
  const arr = [...array]; // Clone the array to avoid mutating the original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
}

function QuizPage() {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0); // Track correct answers in a row
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [animationClass, setAnimationClass] = useState(""); // Animation for right/wrong selection
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const timerRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadQuiz() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:5000/quiz");
        if (!response.ok) throw new Error("Failed to fetch quiz data");
        const data = await response.json();
        
        if (!data || !data.questions) {
          setError("Failed to load quiz data.");
        } else {
          setQuizData({ ...data, questions: shuffleArray(data.questions) });
          // Start the timer
          timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
              if (prev === 0) {
                clearInterval(timerRef.current);
                navigate("/result", { state: { finalScore: score } });
                return 0;
              }
              return prev - 1;
            });
          }, 1000);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadQuiz();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  /**
   * Handles user selection of an answer option.
   * Updates score, highlights the correct/incorrect answer, and moves to the next question.
   * @param {Object} option - The selected answer option.
   */
  const handleOptionClick = (option) => {
    if (selectedOption) return; // Prevent multiple selections

    setSelectedOption(option);

    if (option.is_correct) {
      setScore((prevScore) => prevScore + 1);
      setStreak((prevStreak) => prevStreak + 1); // Increase streak
      setAnimationClass("animate-correct"); // Trigger animation
    } else {
      setStreak(0); // Reset streak on wrong answer
      setAnimationClass("animate-wrong"); // Trigger animation
    }

    setTimeout(() => {
      if (currentQuestionIndex + 1 < quizData.questions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(null);
        setAnimationClass(""); // Reset animation
      } else {
        navigate("/result", { state: { finalScore: score + (option.is_correct ? 1 : 0) } });
      }
    }, 1000);
  };

  if (loading) return <h2>Loading quiz...</h2>;
  if (error) return <h2 className="text-red-500">{error}</h2>;
  if (!quizData) return <h2>No quiz available</h2>;

  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <div className={`max-w-xl mx-auto p-4 ${animationClass}`}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">{quizData.title}</h1>
        <div className="bg-blue-600 text-white px-3 py-1 rounded-full">
          Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
        </div>
      </div>

      {/* Streak Counter */}
      <p className="text-green-600 font-semibold">🔥 Streak: {streak}</p>

      {/* Display the current question */}
      <div className="p-4 border rounded-lg shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">{currentQuestion.description}</h2>

        {/* Render answer options with conditional styling */}
        <div className="space-y-2">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`w-full px-4 py-2 text-left rounded font-semibold transition-all duration-300
                ${
                  selectedOption
                    ? option.is_correct
                      ? "bg-green-600 text-white"
                      : selectedOption === option
                      ? "bg-red-600 text-white"
                      : "bg-gray-300"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              disabled={!!selectedOption}
            >
              {option.description}
            </button>
          ))}
        </div>

        {/* Display current question progress */}
        <p className="mt-4 text-sm">
          Question {currentQuestionIndex + 1} of {quizData.questions.length}
        </p>
      </div>
    </div>
  );
}

export default QuizPage;
