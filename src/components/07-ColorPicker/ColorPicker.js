import { useState } from 'react';
import Color from './Color';
import './ColorPicker.css';


const colors = [
    {
        hex: '#91A6FF',
        name: 'Cornflower Blue'
    },
    {
        hex: '#FF88DC',
        name: 'Persian Pink'
    },
    {
        hex: '#80FF72',
        name: 'Screamin Green'
    },
    {
        hex: '#FF5154',
        name: 'Tart Orange'
    }
];

const ColorPicker = () => {
    const [backgroundColor, setBackgroundColor] = useState('gray');

    return (
        <div className='color-picker' style={{ backgroundColor }}>
            <div className='color-choices'>
                {
                    colors.map(color => (
                        <Color
                            key={color.hex}
                            hex={color.hex}
                            name={color.name}
                            setBackgroundColor={setBackgroundColor}
                        />
                    ))
                }
            </div>
        </div>
    );
};


export default ColorPicker;