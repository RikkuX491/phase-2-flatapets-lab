import PetList from "./PetList";
import Search from './Search';
import NewPetForm from "./NewPetForm";

import { useState, useEffect } from "react";

function PetPage(){

    const [pets, setPets] = useState([])
    const [searchText, setSearchText] = useState("")
    
    const filteredPets = pets.filter(pet => {
        if(searchText === ""){
            return true
        }
        else{
            return (pet.name.toUpperCase().includes(searchText.toUpperCase())) || (pet.animal_type.toUpperCase().includes(searchText.toUpperCase()))
        }
    })

    useEffect(() => {
        fetch("http://localhost:4000/pets")
        .then(response => response.json())
        .then(petsData => {
            setPets(petsData)
        })
    }, [])

    function addPet(newPet){
        setPets([...pets, newPet])
    }

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    return (
        <main>
            <NewPetForm addPet={addPet}/>
            <Search updateSearchText={updateSearchText} searchText={searchText}/>
            <PetList pets={filteredPets}/>
        </main>
    );
}

export default PetPage;