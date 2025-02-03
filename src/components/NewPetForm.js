import { useState } from "react"

function NewPetForm({addPet}) {

  const [nameInput, setNameInput] = useState("")
  const [imageInput, setImageInput] = useState("")
  const [animalInput, setAnimalInput] = useState("")
  const [fromPetShop, setFromPetShop] = useState("true")

  function handleSubmit(event){
    event.preventDefault()

    const newPet = {
      name: nameInput,
      image: imageInput,
      animal_type: animalInput,
      fromPetShop: (fromPetShop === "true" ? true : false)
    }

    fetch("http://localhost:4000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPet)
    })
    .then(response => {
      if(response.ok){
        response.json().then(newPetData => addPet(newPetData))
      }
      else{
        alert("Error: Unable to add new pet!")
      }
    })
  }

  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setNameInput(e.target.value)} type="text" name="name" placeholder="Pet name" value={nameInput} />
        <input onChange={(e) => setImageInput(e.target.value)} type="text" name="image" placeholder="Image URL" value={imageInput} />
        <input onChange={(e) => setAnimalInput(e.target.value)} type="text" name="animal_type" placeholder="Animal type" value={animalInput} />
        <select onChange={(e) => setFromPetShop(e.target.value)} name="fromPetShop" value={fromPetShop}>
          <option value="true">From a Pet Shop</option>
          <option value="false">From the wild</option>
        </select>
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
  export default NewPetForm;