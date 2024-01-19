import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  return (
    <>
    <div>
        <section className = "puppy-container">
        {
          puppies.map((puppy) => {
            return <section onClick={() => {setFeatPupId(puppy.id)}} className = "puppy" key={puppy.id}>
                <p>{puppy.name}</p>
              </section>
          })
        }
      </section>
      {featPupId && (
        <div className = "featured-pup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
    </>
  )
}

export default App
