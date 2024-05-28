import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Card from './Card';

function App() {

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get("https://api.sampleapis.com/beers/ale");
      setApiData(response.data);

    }
    fetchData();
  }, [])

  return (
    <>
      <h1 className='text-white text-6xl font-bold text-center m-5'>Beer Store 🍺</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {apiData.map((data) => {
          return <Card data={data} />
        })}
      </div>
    </>
  )
}

export default App
