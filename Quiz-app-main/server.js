import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Pepper"],
    correctAnswer: "Avocado",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "South Korea"],
    correctAnswer: "Japan",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswer: "Diamond",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra",
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
    correctAnswer: "Hydrogen",
  },
  {
    question: "What is the largest continent on Earth?",
    options: ["Africa", "Asia", "North America", "Antarctica"],
    correctAnswer: "Asia",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the freezing point of water?",
    options: ["0°C", "32°F", "100°C", "212°F"],
    correctAnswer: "0°C",
  },
  {
    question: "Which planet is known for its rings?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Saturn",
  },
  {
    question: "What is the capital of Italy?",
    options: ["Rome", "Venice", "Florence", "Milan"],
    correctAnswer: "Rome",
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
    correctAnswer: "Antarctic",
  },
  {
    question: "What is the main language spoken in Brazil?",
    options: ["Spanish", "Portuguese", "English", "French"],
    correctAnswer: "Portuguese",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Won", "Dollar", "Euro"],
    correctAnswer: "Yen",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
    correctAnswer: "Mount Everest"
  }
];

app.get("/quiz", (req, res) => {
  const formattedQuestions = questions.map(q => ({
    description: q.question,
    options: q.options.map(option => ({
      description: option,
      is_correct: option === q.correctAnswer
    }))
  }));
  res.json({ title: "General Knowledge Quiz", questions: formattedQuestions });
});

app.listen(5000, () => console.log("Server running on port 5000"));
