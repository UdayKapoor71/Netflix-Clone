import QUIZPIC from "../assets/quiz-logo.png"
export default function Headers(){
    return( 
        <header>
        <img src={QUIZPIC} alt="Quiz Logo" />
        <h1>REACT QUIZ</h1>
        </header>
    );
};