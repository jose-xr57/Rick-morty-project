import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import { CardResident } from './components/CardResident'
import LocationInfo from './components/LocationInfo'
function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    let numberLocation;
    if (searchInput === "") {
      numberLocation = Math.floor(Math.random() * (126-1)+1)
    }else{
      numberLocation = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
  }, [searchInput])
  //Busqueda por input

  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }
  
  return (
    <div className="App">
      <div className="container-gif">
        <img src="https://media.giphy.com/media/NGp9QCXJcBPuU/giphy.gif" alt="Rick And Morty-Gif" />
      </div>

      <h1>Rick and Morty</h1>
      <form onSubmit={handleSubmit} className="form">
        <input id="search" type="text" className='search' />
        <button>Search</button>
      </form>
      <LocationInfo location={location}/>
      <div className='container-card'>
        {
          location?.residents.map(url => (
            <CardResident
            key={url}
            url={url}
            />
          ))
        }
      </div>

      <br /><br /><br />
    </div>
  )
}

export default App
