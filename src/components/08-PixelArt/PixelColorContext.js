import { createContext, useState } from "react";


const PixelColorContext = createContext();

const PixelColorContextProvider = ({ children }) => {
    const [pixelColor, setPixelColor] = useState('LightGey')

    return (
        <PixelColorContext.Provider value={{ pixelColor, setPixelColor }}>{children}</PixelColorContext.Provider>
    );
};


export { PixelColorContext, PixelColorContextProvider }