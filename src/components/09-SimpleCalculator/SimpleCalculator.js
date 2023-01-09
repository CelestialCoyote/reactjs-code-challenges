import { useReducer } from 'react';
import './SimpleCalculator.css';


const initialState = {
    num1: 0,
    num2: 0,
    result: 'no result'
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_NUM_ONE':
            return { ...state, num1: action.number };
        case 'SET_NUM_TWO':
            return { ...state, num2: action.number };
        case 'ADD':
            return { ...state, result: state.num1 + state.num2 };
        case 'SUBTRACT':
            return { ...state, result: state.num1 - state.num2 };
        case 'CLEAR':
            return { ...state, num1: 0, num2: 0, result: 'no result' };
        default:
            return state;

    }
}

const SimpleCalculator = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div>
            <div>
                <h2>Number 1</h2>
                {numbers.map(number => (
                    <button
                        key={number}
                        className='calculator-button'
                        onClick={() => dispatch({ type: 'SET_NUM_ONE', number })}
                    >
                        {number}
                    </button>))}
            </div>
            <div>
                <h2>Number 2</h2>
                {numbers.map(number => (
                    <button
                        key={number}
                        className='calculator-button'
                        onClick={() => dispatch({ type: 'SET_NUM_TWO', number })}
                    >
                        {number}
                    </button>))}
            </div>
            <div>
                <h2>Actions</h2>
                <button
                    className='calculator-button'
                    onClick={() => dispatch({ type: 'ADD' })}
                >
                    +
                </button>
                <button
                    className='calculator-button'
                    onClick={() => dispatch({ type: 'SUBTRACT' })}
                >
                    -
                </button>
                <button
                    className='calculator-button'
                    onClick={() => dispatch({ type: 'CLEAR' })}
                >
                    c
                </button>
            </div>
            <div><h2>Result: {state.result}</h2></div>
        </div>
    );
};


export default SimpleCalculator;
