import { useState } from 'react';
import './DogPics.css';


const DogPics = () => {
    // API: https://dog.ceo/dog-api/
    const [dog, setDog] = useState('');

    const handleGetDogPic = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(result => {
                //console.log(result);
                setDog(result.message);
                console.log(dog);
            });
    };

    return (
        <div className='dog-pics'>
            <img src={dog} alt="dog pic" />
            <button onClick={handleGetDogPic}>🐶</button>
        </div>
    );
};


export default DogPics;