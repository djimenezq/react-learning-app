import {useState} from 'react';

const Statistics = ({feedback}) => {

    const calcPositive = () => {
        return ((feedback.good * 100)/feedback.total).toFixed(2);
    }
    if (feedback.total === 0){
        return (
            <div><h2>No feedback given</h2></div>
        )
    }
    return (
        <div>
            <h2>Statistics</h2>
            <table>
                <tr>
                    <td>Good</td>
                    <td>{feedback.good}</td>
                </tr>
                <tr>
                    <td>Neutral</td>
                    <td>{feedback.neutral}</td>
                </tr>
                <tr>
                    <td>Bad</td>
                    <td>{feedback.bad}</td>
                </tr>
                <tr>
                    <td>All</td>
                    <td>{feedback.total}</td>
                </tr>
                <tr>
                    <td>Positive</td>
                    <td>{calcPositive()}%</td>
                </tr>
            </table>
        </div>
    )
}
const App = () => {
    const [feedback, setFeedback] = useState({
        good: 0, neutral: 0, bad: 0, total: 0
    })

    const handleGood = () => {
        setFeedback({...feedback, good: feedback.good + 1, total: feedback.total + 1})
    }

    const handleNeutral = () => {
        setFeedback({...feedback, neutral: feedback.neutral + 1, total: feedback.total + 1})
    }

    const handleBad = () => {
        setFeedback({...feedback, bad: feedback.bad + 1, total: feedback.total + 1})
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button clickEvent={handleGood} displayText='good'/>
            <Button clickEvent={handleNeutral} displayText='neutral'/>
            <Button clickEvent={handleBad} displayText='bad'/>
            <Statistics feedback={feedback}/>
        </div>
    )
}
// const App = () => {
//     const [counter, setCounter] = useState(0);//Destructuring
//     const increaseByOne = () => setCounter(counter + 1);
//     const decreaseByOne = () => setCounter(counter - 1);
//     const resetCounter = () => setCounter(0);
//     return (
//         <div>
//             <Display counter={counter}/>
//             <Button clickEvent = {increaseByOne} displayText ='+'/>
//             <Button clickEvent = {decreaseByOne} displayText ='-'/>
//             <Button clickEvent = {resetCounter} displayText ='Reset'/>
//
//         </div>
//     )
// }
//
// const Display = ({counter}) => {
//     return(
//         <div>{counter}</div>
//     )
// }
//
const Button = ({clickEvent, displayText}) => {
    return(
        <button onClick={clickEvent}>{displayText}</button>
    )
}

export default App