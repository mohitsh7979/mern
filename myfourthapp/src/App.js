import { useState } from 'react';
import './App.css';

function App() {

  const user = [

    {

      id: 1,
      name: 'mohit',
      city: 'jaipur'
    },

    {

      id: 2,
      name: 'rohit',
      city: 'udaipur'
    },

    {

      id: 3,
      name: 'ankit',
      city: 'jodhpur'
    },

  ]

  return (


    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>

        { user.map((item)=>{

          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>

          </tr>
             
  
        })}
    
        </tbody>
      </table>
    </div>


  );
}

export default App;
