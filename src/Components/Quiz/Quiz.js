import React,{useState} from 'react'
import Trivia from '../Trivia/Trivia';
import "./quiz.css";
import qna from '../../data/questions';


function Quiz() {

    const [questionNumber , setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);

    const rewardPyramid = [
        {id:1, amount:"💰 100"},
        {id:2, amount:"💰 200"},
        {id:3, amount:"💰 300"},
        {id:4, amount:"💰 500"},
        {id:5, amount:"💰 700"},
        {id:6, amount:"💰 900"},
        {id:7, amount:"💰 1100"},
        {id:8, amount:"💰 1300"},
        {id:9, amount:"💰 1500"},
        {id:10, amount:"💰 1600"},
        {id:11, amount:"💰 1700"},
        {id:12, amount:"💰 1900"},
        {id:13, amount:"💰 2000"},
        {id:14, amount:"💰 2200"},
        {id:15, amount:"💰 2500"},
       
    ].reverse();

    return (
        <div className="quiz">
            <div className="main">
                <div className="top">
                    <div className="timer">30</div>
                </div>
                <div className="bottom">
                   <Trivia data={qna} 
                            setStop= {setStop} 
                            questionNumber={questionNumber}
                            setQuestionNumber={setQuestionNumber} />
                </div>

            </div>
            <div className="pyramid">
                <ul className="rewardList">
                    {rewardPyramid.map(m => (
                    <li className={questionNumber === m.id? "rewardListItem active":"rewardListItem"}>
                    <span className="rewardListItemNumber">{m.id}</span>
                    <span className="rewardListItemAmount">{m.amount}</span>                       
                    </li>
           ))}
                   
                              
               </ul>     
            </div>     
        </div>
    )
}

export default Quiz
