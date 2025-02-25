import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Quiz</h1>
      <p className="text-gray-600 mb-6">Test your knowledge and challenge yourself!</p>
      <button
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        onClick={() => navigate("/quiz")}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
