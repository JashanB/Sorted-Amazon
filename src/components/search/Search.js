import React, { useEffect, useState } from 'react'
import axios from 'axios'

const handleSubmit = (event) => {
  event.preventDefault();
}

async function searchItems (array) {
  try {
    const searchTerms = array.join('+');
    const placesArray = [];
    const searchData = await axios.get(`https://www.amazon.com/s?k=${searchTerms}`)
    console.log('search data', searchData.data)
  } catch (error) {
    console.error(error)
  }
}

async function fetchData() {
  try {
    const placesArray = [];
    const placesData = await axios.get(`http://localhost:3001/users/${id}`)
    for (let place of placesData.data.places) {
      const placeObject = {
        name: place.name,
        id: place.id,
        latitude: parseFloat(place.latitude),
        longitude: parseFloat(place.longitude)
      }
      placesArray.push(placeObject)
    }
    setAllPlaces(state => ({
      places: [...allPlaces.places, ...placesArray]
    }))
    setOnRender(state => ({
      places: [...allPlaces.places, ...placesArray]
    }))
  } catch (error) {
    console.error(error)
  }
}

export default function Search(props) {
  //search form that splits input by spaces and makes axios call 
  //https://www.amazon.com/s?k=hand+cream&page=3&qid=1586824474&ref=sr_pg_3
  //https://www.amazon.com/s?k=hand+cream&page=3 works too - only need this information 
  //can set this to go to like 50 but only function if data returned 
  const [error, setError] = useState("")
  return (
    <div>
      <form onSubmit={handleSubmit}>
    <input 
    type="text"
     name="name" 
     placeholder="Search here"
     onChange={(event) => {
      setSearch(event.target.value)
      setError('')}
    }
    value={props.search}
     />
      </form>
    </div>
  )
}