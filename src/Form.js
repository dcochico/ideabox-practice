import { useState } from "react"
import "./App.js"
import "./Form.css"

const Form = ({ addIdea }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitIdeas = e => {
    e.preventDefault();
    const newIdea = {
      id: Date.now(),
      title,
      description
    }
    addIdea(newIdea);
    clearInput();
  }

  const clearInput = () => {
    setTitle('');
    setDescription('');
  }

  return (
    <form>
      <input 
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input 
        type='text'
        placeholder='Description'
        name='description'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button onClick={e => submitIdeas(e)}>SUBMIT</button>
    </form>
  )
}

export default Form;