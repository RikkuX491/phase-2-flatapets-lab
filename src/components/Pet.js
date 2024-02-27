import {useState} from "react"

function Pet({pet, updatePet, deletePet}){

    const [displayName, setDisplayName] = useState(true)
    const [updatedPetName, setUpdatedPetName] = useState("")

    function updateDisplayName(){
        setDisplayName(displayName => !displayName)
    }

    function handleSubmit(event){
        event.preventDefault()
        updatePet({name: updatedPetName}, pet.id)
    }

    function handleChange(event){
        setUpdatedPetName(event.target.value)
    }

    function handleAdoptPet(){
        deletePet(pet.id)
    }

    return (
        <li className="pet">
            <img onClick={updateDisplayName} src={pet.image} alt={pet.name}/>
            <h4>{displayName ? pet.name : pet.animal_type}</h4>
            <p>
                {
                    pet.fromPetShop ? "From a Pet Shop" : "From the wild"
                }
            </p>
            <button onClick={handleAdoptPet} className="adopt-button">Adopt</button>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="name" placeholder="Pet name" value={updatedPetName}/>
                <button type="submit">Update Pet Name</button>
            </form>
        </li>
    );
}

export default Pet;