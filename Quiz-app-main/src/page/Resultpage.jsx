import { useLocation, useNavigate } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const finalScore = location.state?.finalScore || 0;
  const totalQuestions = 10; // Set this based on your API or pass it from QuizPage
  const percentage = (finalScore / totalQuestions) * 100; // Calculate score percentage

  return (
    <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
      {/* Display Quiz Completion Message */}
      <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>

      {/* Score Display */}
      <p className="text-lg font-semibold">Your Score: {finalScore} / {totalQuestions}</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-full h-6 mt-4">
        <div
          className="h-6 bg-green-600 rounded-full transition-all duration-700"
          style={{ width: `${percentage}%` }} // Dynamic width based on score
        ></div>
      </div>

      {/* Button to restart the quiz */}
      <button
        className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        onClick={() => navigate("/")}
      >
        Play Again
      </button>
    </div>
  );
};

export default ResultPage;
