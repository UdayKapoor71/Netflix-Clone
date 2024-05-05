import { useState, useEffect } from "react"

export default function QuesTimer ({timeout, onTimeOut, mode}) {
    const [remainingTime , setRemainingTime] = useState(timeout) // so that the progressbar id rerender after the some interval
        
        useEffect(()=>{
            // console.log('Timeout');
            const timer = setTimeout(
                onTimeOut
            ,timeout) //this code is a side effect but at a moment not effecting anything so no required for use Effect

            return ()=>{
                clearTimeout(timer);
            }

        },[timeout, onTimeOut])

        useEffect(()=>{
            // console.log('Interval');
            const interval = setInterval(()=>{
                setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
            }, 100);

            return ()=>{
                clearInterval(interval);
            }

        },[]);  


    return (
        <>
            <progress id="question-time" max={timeout} value={remainingTime} className={mode}/>
        </>
    )
}