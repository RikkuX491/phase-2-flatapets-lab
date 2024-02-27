import {useState} from "react"

function NewPetForm({addPet}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    animal_type: "",
    fromPetShop: "true"
  })

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()
    
    if(formData.fromPetShop === "true"){
      addPet({...formData, fromPetShop: true})
    }
    else{
      addPet({...formData, fromPetShop: false})
    }
  }

  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} />
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} />
        <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} />
        <select onChange={updateFormData} name="fromPetShop" value={formData.fromPetShop}>
          <option value="true">From a Pet Shop</option>
          <option value="false">From the wild</option>
        </select>
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
  export default NewPetForm;