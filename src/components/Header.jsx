import QUIZPIC from "../assets/quiz-logo.png"
export default function Headers(){
    return( 
        <header>
        <img src={QUIZPIC} alt="Quiz pic" />
        <h1>REACT QUIZ</h1>
        </header>
    );
};