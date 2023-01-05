import { useState } from 'react';
import WindowEvent from './WindowEvent';
import './ToggleWindowEvent.css';


const ToggleWindowEvent = () => {
    const [windowEvent, setWindowEvent] = useState(false);

    return (
        <div className='toggle-window-event'>
            <button
                onClick={() => setWindowEvent(prevState => !prevState)}
            >
                Toggle Window Event
            </button>
            {windowEvent && <WindowEvent />}
        </div>
    );
};


export default ToggleWindowEvent;
