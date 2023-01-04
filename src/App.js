import './App.css';
import {useState, useEffect} from 'react'
import Gallery from './Gallery';
import ButtonBar from './ButtonBar'; 

function App(){
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  

    useEffect(() => {
        document.title = 'Welcome to ArtWorld'
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
        .then(response => response.json())
        .then(resData => setData(resData))
    }, [artId])

    const handleIterate = (e) => {
      setArtId(artId + Number(e.target.value))
    }

    return(
      <div className='App'>
        <h1>Art Gallery</h1>

        <div className='Gallery'>
          <Gallery 
            objectImg={data.primaryImage} 
            artist={data.artistDisplayName} 
            title={data.title} />
        </div>

        <div className='ButtonBar'>
          <ButtonBar handleIterate={handleIterate} />
        </div>
      </div>
    )
}

export default App;