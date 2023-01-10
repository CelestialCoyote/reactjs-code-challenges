import { useEffect, useRef } from "react";
import './FocusInput.css';


const FocusInput = () => {
    const focusedInput = useRef(null);

    useEffect(() => {
        focusedInput.current.focus();
    }, []);

    return (
        <div className='focus-input'>
            <label htmlFor='focused-input'>Focus me on page load!</label>
            <input name='focused-input' ref={focusedInput}></input>
        </div>
    );
};


export default FocusInput;