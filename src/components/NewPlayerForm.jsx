import { useState } from "react";

export default function NewPlayerForm() {
    const [newform, setnewForm] = useState('')

    const createPlayer = (event) => {
        setnewForm(event.target.value);
    };

return (
    <form id="form"> 
      
  <lable for = "name">Name</lable>
  <input type = "text" id = 'name' name='name' placeholder='name'/>

  <lable for = "breed">Breed</lable>
  <input type = "text" id = 'breed' name='breed' placeholder='breed'/>

  <lable for = "status">Status</lable>
  <input type = "text" id = 'status' name='status' placeholder='status'/>

  <label for = 'image.url'>Image URL </label>
  <input type = 'text' id="image_url" name="image_url" placeholder="Image URL"/>

  <button type ="submit">Create</button>

 </form>
)
};
