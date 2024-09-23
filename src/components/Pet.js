import {useState} from 'react';

function Pet({pet}){

    const [displayPetName, setDisplayPetName] = useState(true)

    function toggleDisplayPetName(){
        setDisplayPetName(!displayPetName)
    }

    return (
        <li className="pet">
            <img onClick={toggleDisplayPetName} src={pet.image} alt={pet.name}/>
            <h4>{displayPetName ? pet.name : pet.animal_type}</h4>
            <p>
                {
                    pet.fromPetShop === true ? "From a Pet Shop" : "From the wild"
                }
            </p>
            <button className="adopt-button">Adopt</button>
        </li>
    );
}

export default Pet;