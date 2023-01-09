import './SimpleCalculator.css';


const initialState = {}

function reducer(state, action) { }

const SimpleCalculator = () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div>
            <div>
                <h2>Number 1</h2>
                {numbers.map(number => (
                    <button
                        key={number}
                        className='calculator-button'
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
                    >
                        {number}
                    </button>))}
            </div>
            <div>
                <h2>Actions</h2>
                <button className='calculator-button'>+</button>
                <button className='calculator-button'>-</button>
                <button className='calculator-button'>c</button>
            </div>
            <div><h2>Result:</h2></div>
        </div>
    );
};


export default SimpleCalculator;
