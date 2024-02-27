import Pet from "./Pet";

function PetList({pets, updatePet, deletePet}){
    return (
        <ul className="pet-list">
            {pets.map(pet => {
                return <Pet key={pet.id} pet={pet} updatePet={updatePet} deletePet={deletePet}/>
            })}
        </ul>
    );
}

export default PetList;