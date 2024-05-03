import { useState } from "react";
import QUESTIONS from '../questions.js';
import Complete from '../assets/quiz-complete.png'

export default function Quiz(){
    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0); //state for currently active question ...and currently active question could be managed by its Index 

    const [userAnswer, setUserAnswer] = useState([]); //for answer registered by the users, that could also be an array, where we add answer by answer through this array

    //derieved state (a computed value to this component)
    const activeQuestionIndex = userAnswer.length;
    

    //FOR LETTING US NOT BREAK THE QUIZ
    const quizIsComplete = activeQuestionIndex ===QUESTIONS.length;

    const handleSelectAnswer = (selectedAnswer) =>{
        //setUserAnswer is an array and we dont want to loose the previous answers therefore we update this statewith this function form where er pass the function to this state..as we wanna updte the state based on the previous version of this state
        setUserAnswer((prevUserAnswer)=>{
            return[...prevUserAnswer, selectedAnswer]
        });
    };

    if(quizIsComplete){
        return <>
            <div id="summary">
                <img src={Complete} alt="Trophy Icon" />
                <h2>Quiz Completed!</h2>
            </div>
        </>
    };

    //this is put below the if condition because as even before we crete quiziscomplete valute we are already try to access the activeQuestionIndex 
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(()=> Math.random()-0.5); //it will donot return a new array but will edit the array so that y we are creating the new array not chging the OG array 
    // shuffledAnswers.sort((a,b)=> -1) SORT will take a function that will always recieve two elements from the array and then if you returning a -ve number those elements will be swapped if you are retuening a +ve number they will stay in the order they are 

    return (
        <>
            <div id="quiz">
                <div id="question">
                    <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                    <ul id="answers">
                        {/* {QUESTIONS[activeQuestionIndex].answers.map( */}
                        {shuffledAnswers.map(
                            (answer)=> 
                            (<li key={answer} className="answer">
                                <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button>
                            </li>)
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}