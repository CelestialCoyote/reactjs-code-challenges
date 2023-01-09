import { useContext, useState } from 'react';
import { PixelColorContextProvider } from './PixelColorContext';
import { PixelColorContext } from './PixelColorContext';
import './PixelArt.css';


const ColorPicker = () => {
    const { setPixelColor } = useContext(PixelColorContext);
    const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple'];

    return (
        <div>
            <label>Choose a color</label>
            {colors.map(color =>
                <button
                    key={color}
                    className='color-selector'
                    style={{ backgroundColor: color }}
                    onClick={() => setPixelColor(color)}
                />)}
        </div>
    );
};

const Pixel = () => {
    const { pixelColor } = useContext(PixelColorContext);
    const [color, setColor] = useState('LightGrey');

    return (
        <button
            onClick={() => setColor(pixelColor)}
            style={{ height: '20px', width: '20px', backgroundColor: color, margin: '1px' }}
        />
    );
};

const Pixels = () => {
    const pixels = []
    for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
            {pixels}
        </div>
    );
};

const PixelArt = () => {
    const [color, setColor] = useState('LightGrey');
    
    return (
        <PixelColorContextProvider value={{ color, setColor }}>
            <div className='pixel-art'>
                <ColorPicker />
                <Pixels />
            </div>
        </PixelColorContextProvider>
    );
};


export default PixelArt;