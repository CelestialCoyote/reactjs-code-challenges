import { useEffect, useState } from 'react';
import './DogPics.css';


const DogPics = () => {
    // API: https://dog.ceo/dog-api/
    const [dogPic, setDogPic] = useState('');

    const handleGetDogPic = async () => {
        const response = fetch("https://dog.ceo/api/breeds/image/random");
        const dog = await (await response).json();

        return dog.message;
    };

    useEffect(() => {
        handleGetDogPic().then(pic => setDogPic(pic));
    }, []);

    return (
        <div className='dog-pics'>
            <img className='image-container' src={dogPic} alt="dog pic" />
            <button onClick={async e => setDogPic(await handleGetDogPic())}>🐶</button>
        </div>
    );
};


export default DogPics;