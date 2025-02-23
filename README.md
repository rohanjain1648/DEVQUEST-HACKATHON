# DEVQUEST-HACKATHON
Application Overview:
My quiz application is designed to provide users with a seamless and intuitive experience. It adheres to the specified requirements, allowing users to take a quiz, navigate through questions, and view their results at the end. The application fetches quiz questions from the provided API, displays them to the user, and evaluates their answers upon submission or when the timer ends.
Approach to the Problem:

Quiz Layout & Flow:
Implemented a start page where users enter their email address. Displayed 15 questions to the user from the API. Included a timer at the top of the page counting down from 30 minutes, auto-submitting the quiz when the timer reaches zero. Navigation:

Enabled users to navigate to specific questions using a navigation panel. Created an overview section displaying visited and attempted questions for user reference.

End of Quiz:
Directed users to a report page after the quiz or when the timer ends. Displayed each question with the user's answer and the correct answer side by side for easy comparison.

Data Source:
Fetched quiz questions from the specified API endpoint and formatted choices as required.

Code Quality and Functionality:
Ensured all functionalities were correctly implemented and thoroughly tested. Wrote clean, well-organized, and bug-free code following best practices and reusability. Used comments judiciously to explain complex or non-intuitive parts of the code, enhancing readability and maintainability.

Extra Features:
Made the application responsive, adapting to different device sizes. Implemented smooth transitions and animations when navigating between questions, enhancing the user experience.

Challenges and Solutions:
One challenge faced was handling the timer countdown accurately across different devices and browsers. I overcame this challenge by using JavaScript's Date object and ensuring consistent time calculation methods. Another challenge was synchronizing user answers with the correct answers for evaluation. I resolved this by carefully structuring the data and using appropriate comparison methods.
