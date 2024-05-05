import Complete from '../assets/quiz-complete.png';
import questions from '../questions';

export default function Summary({userAnswer}) {
    const skippedAns = userAnswer.filter((answer)=> answer === null);
    const correctAns = userAnswer.filter((answer, index)=> answer === questions[index].answers[0]);

    const skippedAnsPercentage = Math.round((skippedAns.length/ userAnswer.length)*100);
    const correctAnsPercentage = Math.round((correctAns.length/ userAnswer.length)*100);
    const incorrectAnsPercentage = 100 - correctAnsPercentage - skippedAnsPercentage;
    return(
        <>
             <div id="summary">
                <img src={Complete} alt="Trophy Icon" />
                <h2>Quiz Completed!</h2>
                <div id='summary-stats'>
                    <p>
                        <span className="number">{skippedAnsPercentage}%</span>
                        <span className="text">Skipped Answer</span>
                    </p>
                    <p>
                        <span className="number">{correctAnsPercentage}%</span>
                        <span className="text">Answered correctly</span>
                    </p>
                    <p>
                        <span className="number">{incorrectAnsPercentage}%</span>
                        <span className="text">Answered incorrectly</span>
                    </p>
                </div>
                <ol>
                    {userAnswer.map((answer, index) =>{
                        let cssClass = 'user-answer';

                        if(answer === null){
                            cssClass += ' skipped';
                        }else if(answer === questions[index].answers[0]){
                            cssClass += ' correct'
                        }else{
                            cssClass += ' wrong'
                        }

                        return (    
                            <li key={index}>
                                <h3>{index + 1}</h3>
                                <p className="question">{questions[index].text}</p>
                                <p className={cssClass}>{answer ?? 'Skipped'}</p>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </>
    )
}