import { useEffect, useState } from 'react';
import './ScoreKeeper.css';


const ScoreKeeper = () => {
    const [score, setScore] = useState(
        parseInt(localStorage.getItem('score') || 0)
    );

    useEffect(() => {
        localStorage.setItem('score', score);
    }, [score]);

    return (
        <div className='score-keeper'>
            <h1>Your score is: {score}</h1>
            <div className='score-keeper-buttons'>
                <button onClick={() => setScore(prevScore => prevScore + 1)}>+</button>
                <button onClick={() => setScore(prevScore => prevScore - 1)}>-</button>
            </div>
        </div>
    );
};


export default ScoreKeeper;