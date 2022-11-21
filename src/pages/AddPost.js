import { useState } from "react"

export default function AddPost() {
   const [form, setForm] = useState({})


   const submitPost = (e) => {
      e.preventDefault()
      fetch(`http://localhost:4040`, {
         method: "POST",
         headers: {
        'content-type': 'application/json',
         }, 
         body: JSON.stringify(form),

      })
   }

   const handleForm = (e) => {
      setForm({...form, [e.target.name]: e.target.value})
   }

  return(
 

    <div className="container">
      <h1>Add Post</h1>
      <form action="submit"n>
        <label htmlFor="">Author</label>
        <input  name='author'type="text" onChange={handleForm} />
        <label htmlFor="">Text</label>
        <input name='text 'type="text" onChange={handleForm}/>
        <label htmlFor="">Date</label>
        <input name='date' type="date" onChange={handleForm} />
       
        <button type="submit" onClick={submitPost}>Submit</button>

      </form>
    </div>
  )
}