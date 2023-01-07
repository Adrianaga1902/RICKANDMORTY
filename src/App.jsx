
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorFetch from './components/ErrorFetch'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {
  const [location, setLocation] = useState()
  const randomIdLocation = Math.floor(Math.random() * 126 + 1)
  const [locationInput, setLocationInput] = useState()
  const [hasError, sethasError] = useState(false)

  useEffect(() => {

    let URL

    if (locationInput) {
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`
    } else {
      const randomIdLocation = Math.floor(Math.random() * 126 + 1)
      URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
    }

    axios.get(URL)
      .then(res => {
        setLocation(res.data)
        sethasError(false)
      })
      .catch(err => {
        sethasError(true)
        console.log(err)
      })
  }, [locationInput])


  const handleSubmit = e => {
    e.preventDefault()
    setLocationInput(e.target.inputSearch.value)
  }

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input id='inputSearch' type="text" />
        <button>Search</button>
      </form>
      {
        hasError ?
          <ErrorFetch/>
        :

          <>
            < LocationInfo location={location} />
            <div className='container_resident'>
              {
                location?.residents.map(url => (
                  <ResidentCard key={url} url={url} />
                ))
              }
            </div>
          </>
      }

    </div>
  )
}

export default App
