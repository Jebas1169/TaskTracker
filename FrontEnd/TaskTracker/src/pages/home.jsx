import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import '../css/home.css'
import { Footer } from '../components/footer';

const Home = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        console.log('inside fetchTask');
        const response = await fetch('http://localhost:4000/api/tasks/');
        console.log('fetched')
        const json = await response.json();

        if (response.ok) {
          console.log('FetchTask response ok');
          setTasks(json);
        } else {
          // Handle non-successful response here
          console.error('FetchTask response not ok');
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
        // Handle fetch error here
      }
    };

    console.log('in useEffect');
    fetchTask();
  }, []); // Empty dependency array to run effect only once

  console.log('outside useEffect');


  
  
  // handle Delete req
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/tasks/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // Remove the deleted task from the state
        setTasks(tasks.filter(task => task._id !== id));
      } else {
        console.error('Error deleting task:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }


  // Handle Update req


  return (
      <>
        <Header />
      <div className="bdy">
        {tasks && tasks.map((task) => (
          <div className="card" key={task._id}>
            <div className="card_title">
              {task.title}
            </div>
            <div className="card_content">
              {task.content}
            </div>
            <div className="btns">
              <div className="delete" onClick={ () => handleDelete(task._id)}>Delete</div>
              <div className="update" onClick={ () => handleUpdate(task._id)}>Update</div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      </>
  )
}

export default Home;
