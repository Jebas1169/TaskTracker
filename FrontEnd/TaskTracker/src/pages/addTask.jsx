import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import '../css/addTask.css'

export const AddTask = () => {
  console.log('inside add task')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    console.log('in handle submit')
    e.preventDefault()

    const task = {title, content}

    const response = await fetch('http://localhost:4000/api/tasks/', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setError(null)
      console.log('new Task added', json)
      setTitle('')
      setContent('')
      setError(null)
    }
  }
console.log('before return')




  return (
    <>
    <Header />
    <div className="addTask_bdy">
      <form className='createTask' onSubmit={handleSubmit}></form>
      <h2>Add new Task</h2>

      
      <input
      type="text"
      name='title'
      placeholder='Task Title'
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      />
      
      

    
      <pre>
        <textarea 
      type="text"
      name='content'
      placeholder='Task Content'
      cols="30" 
      rows="10"
      onChange={(e) => setContent(e.target.value)}
      value={content} >
        </textarea>
      </pre>
      
      
      <input className='submitButton' type="submit" value="submit" onClick={handleSubmit}/>
      {error && <div className='error'>{error}</div>}

    </div>
    <Footer />
    </>
  )
}
