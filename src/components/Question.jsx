import QuesTimer from "./QuesTimer";
import Answers from "./Answer";
import { useState } from "react";
import questions from "../questions";

export default function Questions({ onSelectAns , onSkipAns,  quesIndex}){
    const[answer, setAnswer] = useState({
        selectedAnswer:'',
        isCorrect: null
    });

    let timer = 10000;

    if(answer.selectedAnswer){
        timer = 1000;
    }

    if(answer.isCorrect !== null){
        timer = 2000;
    }

    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(()=>{
            setAnswer({
                selectedAnswer: answer,
                isCorrect: questions[quesIndex].answers[0] === answer
            });

            setTimeout(()=>{
                onSelectAns(answer);
            },2000)
        },1000)
    };

    let answerState = '';

    if(answer.selectedAnswer && answer.isCorrect !== null){
       answerState = answer.isCorrect ? 'correct' : 'wrong';
    }else if (answer.selectedAnswer){
        answerState = 'answered'; 
    }

    return (
        <>
        <div id="question">
            <QuesTimer 
                // timeout={10000} 
                key={timer}
                timeout={timer} 
                onTimeOut={answer.selectedAnswer === '' ? onSkipAns : null}
                mode={answerState}
            />
            <h2>{questions[quesIndex].text}</h2>
            <Answers 
                answers={questions[quesIndex].answers} 
                selectedAnswer={answer.selectedAnswer} 
                answerState={answerState} 
                onSelect={handleSelectAnswer}
            />
        </div>
        </>
    )
}