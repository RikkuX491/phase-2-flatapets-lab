import PetList from "./PetList";
import Search from './Search';
import NewPetForm from "./NewPetForm";

import {useState, useEffect} from "react";

function PetPage(){

    const [pets, setPets] = useState([]);
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetch("http://localhost:4000/pets")
        .then(response => response.json())
        .then(petsData => setPets(petsData))
    }, [])

    const filteredPets = pets.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase()) || pet.animal_type.toUpperCase().includes(searchText.toUpperCase())
    })

    function addPet(newPet){
        fetch("http://localhost:4000/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPet)
        })
        .then(response => response.json())
        .then(newPetData => setPets([...pets, newPetData]))
    }

    return (
        <main>
            <NewPetForm addPet={addPet}/>
            <Search searchText={searchText} setSearchText={setSearchText}/>
            <PetList pets={filteredPets}/>
        </main>
    );
}

export default PetPage;