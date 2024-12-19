import {useState} from "react"

function NewPetForm({addPet}) {

  /* Our original approach for the name, image, animal_type, and fromPetShop data that uses 4 different states */
  // const [name, setName] = useState("")
  // const [image, setImage] = useState("")
  // const [animal_type, setAnimal_Type] = useState("")
  // const [fromPetShop, setFromPetShop] = useState("true")

  /* The optimized approach that uses just 1 state to store the name, image, animal_type, and fromPetShop data */
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    animal_type: "",
    fromPetShop: "true"
  })

  function handleSubmit(event){
    event.preventDefault()

    const newPet = {
      ...formData,
      fromPetShop: (formData.fromPetShop === "true" ? true : false)
    }

    // if(newPet.fromPetShop === "true"){
    //   newPet.fromPetShop = true
    // }
    // else{
    //   newPet.fromPetShop = false
    // }

    fetch("http://localhost:4000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPet)
    })
    .then(response => response.json())
    .then(newPet => addPet(newPet))
  }

  // function updateName(event){
  //   setName(event.target.value)
  // }

  // function updateImage(event){
  //   setImage(event.target.value)
  // }

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name}/>
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