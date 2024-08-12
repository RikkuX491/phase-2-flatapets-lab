import {useState} from "react";

function NewPetForm({addPet}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    animal_type: "",
    fromPetShop: true
  })

  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()

    const newPet = {
      ...formData,
      fromPetShop: (formData.fromPetShop === "true" ? true : false)
    }

    addPet(newPet)

    setFormData({
      name: "",
      image: "",
      animal_type: "",
      fromPetShop: "true"
    })
  }

  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Pet name" value={formData.name} />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" value={formData.image} />
        <input onChange={handleChange} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} />
        <select onChange={handleChange} name="fromPetShop" value={formData.fromPetShop}>
          <option value="true">From a Pet Shop</option>
          <option value="false">From the wild</option>
        </select>
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
  export default NewPetForm;