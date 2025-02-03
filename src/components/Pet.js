import { useState } from "react"

function Pet({pet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function handleClick(){
        setDisplayAnimalType(!displayAnimalType)
    }

    return (
        <li className="pet">
            <img onClick={handleClick} src={pet.image} alt={pet.name}/>
            <h4>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            <p>
                {
                    pet['fromPetShop'] ? "From a Pet Shop" : "From the wild"
                }
            </p>
            <button className="adopt-button">Adopt</button>
        </li>
    );
}

export default Pet;