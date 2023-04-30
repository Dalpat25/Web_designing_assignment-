import React, {useState} from "react";
import './homepage.css';

const Homepage = () => {
    const [que1, setQue1] = useState(true)
    const [que2, setQue2] = useState(false)
    const [que3, setQue3] = useState(false)
    const [que4, setQue4] = useState(false)
    const [ans, setAns] = useState(false)
    const [score, setScore] = useState(0);

    const forverQueTwo = () => {
        setQue2(true)
        setQue1(false)
    }
    const forverQueThree = () => {
        setQue3(true)
        setQue2(false)
    }

    const forverQueFour = () => {
        setQue4(true)
        setQue3(false)
    }
    const forwordAns = () => {
        setAns(true)
        setQue4(false)
    }

    const increaseScore = () => {
        setScore((prevScore) => prevScore + 1);
        console.log(score)
    }

    return(
        <div className="main_ctn">
            <div className="que_ctn">
                {que1 && 
                 <div className="que_ctn">
                     <div className="left">
                         <h1>Question 1/<span>4</span></h1>
                         <p>What is the capital of Farance?</p>
                     </div>
                    <div className="right">
                         <button onClick={forverQueTwo}>New York</button>
                         <button onClick={forverQueTwo}>London</button>
                         <button onClick={() => {forverQueTwo();increaseScore();}}>Paris</button>
                         <button onClick={forverQueTwo}>Dublin</button>
                     </div>
                 </div>
                }
                {que2 && 
                <div className="que_ctn">
                    <div className="left">
                        <h1>Question 2/<span>4</span></h1>
                        <p>Who is the CEO of Tesla?</p>
                    </div>
                    <div className="right">
                        <button onClick={forverQueThree}>Jeff Bazos</button>
                        <button onClick={() => {forverQueThree();increaseScore();}}>Elon Musk</button>
                        <button onClick={forverQueThree}>Bill Gates</button>
                        <button onClick={forverQueThree}>Tony Stark</button>
                    </div>
                </div>
                }
                {que3 && 
                <div className="que_ctn">
                    <div className="left">
                        <h1>Question 3/<span>4</span></h1>
                        <p>The iphone was created by which company?</p>
                    </div>
                    <div className="right">
                        <button onClick={() => {forverQueFour();increaseScore();}}>Apple</button>
                        <button onClick={forverQueFour}>Intel</button>
                        <button onClick={forverQueFour}>Amazon</button>
                        <button onClick={forverQueFour}>Microsoft</button>
                    </div>
                </div>
                }
                {que4 && 
                <div className="que_ctn">
                    <div className="left">
                        <h1>Question 4/<span>4</span></h1>
                        <p>How many Harry patter book are there?</p>
                    </div>
                    <div className="right">
                        <button onClick={forwordAns}>1</button>
                        <button onClick={forwordAns}>4</button>
                        <button onClick={forwordAns}>6</button>
                        <button onClick={() => {forwordAns();increaseScore();}}>7</button>
                    </div>
                </div>
                }
                {ans && 
                <div className="que_ctn">
                    <p className="ans_ctn">Your Scored {score} out of 4</p>
                </div>
                }
            </div>
        </div>
        
    )
}

export default Homepage;