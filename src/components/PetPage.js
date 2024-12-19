import PetList from "./PetList";
import Search from './Search';
import NewPetForm from "./NewPetForm";

import {useState, useEffect} from "react"

function PetPage(){

    const [pets, setPets] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/pets')
        .then(response => response.json())
        .then(petsData => setPets(petsData))
    }, [])

    function addPet(newPet){
        setPets([...pets, newPet])
    }

    return (
        <main>
            <NewPetForm addPet={addPet}/>
            <Search/>
            <PetList pets={pets}/>
        </main>
    );
}

export default PetPage;