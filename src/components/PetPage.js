import PetList from "./PetList";
import Search from './Search';
import NewPetForm from "./NewPetForm";
import {useState, useEffect} from "react";

function PetPage(){

    const [pets, setPets] = useState([])
    const [searchText, setSearchText] = useState("")

    const filteredPets = pets.filter(pet => {
        if(searchText === "") return true
        return pet.name.toUpperCase().includes(searchText.toUpperCase()) || pet.animal_type.toUpperCase().includes(searchText.toUpperCase())
    })

    useEffect(() => {
        fetch('http://localhost:4000/pets')
        .then(response => response.json())
        .then(petsData => setPets(petsData))
    }, [])

    function addPet(newPet){
        fetch('http://localhost:4000/pets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPet)
        })
        .then(response => response.json())
        .then(newPet => setPets([...pets, newPet]))
    }

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    function updatePet(formData, id){
        // setPets(pets => pets.map(pet => {
        //     if(pet.id === id){
        //         return {...pet, name: formData.name}
        //     }
        //     else{
        //         return pet
        //     }
        // }))

        fetch(`http://localhost:4000/pets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(updatedPet => setPets(pets => pets.map(pet => {
            if(pet.id === updatedPet.id){
                return updatedPet
            }
            else{
                return pet
            }
        })))
    }

    function deletePet(id){
        // setPets(pets => pets.filter(pet => {
        //     return pet.id !== id
        // }))

        fetch(`http://localhost:4000/pets/${id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                setPets(pets => pets.filter(pet => {
                    return pet.id !== id
                }))
            }
            else{
                alert("Error: Unable to delete pet!")
            }
        })
    }

    return (
        <main>
            <NewPetForm addPet={addPet}/>
            <Search searchText={searchText} updateSearchText={updateSearchText}/>
            <PetList pets={filteredPets} updatePet={updatePet} deletePet={deletePet}/>
        </main>
    );
}

export default PetPage;