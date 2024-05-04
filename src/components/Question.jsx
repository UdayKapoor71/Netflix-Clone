import QuesTimer from "./QuesTimer";
import Answers from "./Answer";
import { useState } from "react";
import questions from "../questions";

export default function Questions({quesText, answers, onSelectAns, selectedAnswer , answerState, onSkipAns}){
    const[answer, setAnswer] = useState({
        selectedAnswer:'',
        isCorrect: null
    });

    function handleSelectAnswer(answer){
        selectedAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(()=>{
            setAnswer({
                selectedAnswer: answer,
                isCorrect: questions[key].answers[0] === answer
            })
        },1000)
    };



    return (
        <>
        <div id="question">
            <QuesTimer 
                timeout={10000} 
                onTimeOut={onSkipAns}
            />
            <h2>{quesText}</h2>
            <Answers 
            answers={answers} 
            selectedAnswer={selectedAnswer} 
            answerState={answerState} 
            onSelect={handleSelectAnswer}
            />
        </div>
        </>
    )
}