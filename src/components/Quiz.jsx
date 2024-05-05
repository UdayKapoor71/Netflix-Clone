import { useState, useCallback, useRef } from "react";
//useCallback is used to ensure the functions donot get recreated unless they need becoz their dependencies changed
import QUESTIONS from '../questions.js';

import Questions from "./Question.jsx";

import Summary from "./Summary.jsx";

export default function Quiz(){
    // const[answerState, setAnswerState] =  useState(''); //for current answer state
    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0); //state for currently active question ...and currently active question could be managed by its Index 

    const [userAnswer, setUserAnswer] = useState([]); //for answer registered by the users, that could also be an array, where we add answer by answer through this array

    //derieved state (a computed value to this component)
    const activeQuestionIndex = userAnswer.length;
    

    //FOR LETTING US NOT BREAK THE QUIZ
    const quizIsComplete = activeQuestionIndex ===QUESTIONS.length;
    
   

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        // setAnswerState('answered');
        //setUserAnswer is an array and we dont want to loose the previous answers therefore we update this statewith this function form where er pass the function to this state..as we wanna updte the state based on the previous version of this state
        setUserAnswer((prevUserAnswer)=>{
            return[...prevUserAnswer, selectedAnswer]
        });

        // setTimeout(()=>{
        //     if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
        //         setAnswerState('correct');
        //     }else{
        //         setAnswerState('wrong');
        //     }
        //     setTimeout(
        //         ()=>{
        //             setAnswerState(''); //makes sure the answer get reset
        //         },2000
        //     );
        // },1000);

    },[]);

    const handleSkipAnswer = useCallback(
        ()=> handleSelectAnswer(null),[handleSelectAnswer]
    );

    if(quizIsComplete){
        return <>
           <Summary userAnswer={userAnswer}/>
        </>
    };

    

    return (
        <>
            <div id="quiz">
                <Questions 
                key={activeQuestionIndex} 
                quesIndex={activeQuestionIndex}
                onSelectAns={handleSelectAnswer} 
                onSkipAns={handleSkipAnswer}
                />
            </div>
        </>
    )
}