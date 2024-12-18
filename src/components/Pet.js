import {useState} from "react";

function Pet({pet}){

    const [displayName, setDisplayName] = useState(true)
    console.log(displayName)

    // console.log(pet)

    function handleClick(){
        setDisplayName(!displayName)
    }

    return (
        <li className="pet">
            <img onClick={handleClick} src={pet.image} alt={pet.name}/>
            {/* The <h4> element should CONDITIONALLY RENDER NAME OR ANIMAL TYPE */}
            <h4>{displayName ? pet.name : pet.animal_type}</h4>
            <p>
                {
                    pet.fromPetShop ? "From a Pet Shop" : "From the wild"
                }
            </p>
            <button className="adopt-button">Adopt</button>
        </li>
    );
}

export default Pet;