import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}){
    const shuffledAnswers = useRef();

    if(!shuffledAnswers.current)
        {//this is put below the if condition because as even before we crete quiziscomplete valute we are already try to access the activeQuestionIndex 
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(()=> Math.random()-0.5); //it will donot return a new array but will edit the array so that y we are creating the new array not chging the OG array 
        // shuffledAnswers.sort((a,b)=> -1) SORT will take a function that will always recieve two elements from the array and then if you returning a -ve number those elements will be swapped if you are retuening a +ve number they will stay in the order they are 
        }
    return(
        <>
            <ul id="answers">
                        {/* {QUESTIONS[activeQuestionIndex].answers.map( */}
                        {shuffledAnswers.current.map(
                            (answer)=> 
                            {
                                const isSelected = selectedAnswer === answer;
                                let cssClass = '';
                                    if(answerState==='answered' && isSelected){
                                        cssClass = 'selected';
                                    }

                                    if((answerState==='correct' || answerState==='wrong') && isSelected){
                                        cssClass = answerState;
                                    }
                                
                                return (<li key={answer} className="answer">
                                <button onClick={()=>onSelect(answer)} className={cssClass}>{answer}</button>
                                </li>)
                            
                            
                            }
                            )
                        }
                    </ul>
        </>
    )
}