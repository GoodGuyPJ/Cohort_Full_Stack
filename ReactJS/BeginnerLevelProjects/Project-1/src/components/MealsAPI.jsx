import React, { useEffect, useState } from 'react'
import "../index.css";
import axios from "axios";



const MealsAPI = () => {
 const [items, setItems] = useState([])
 useEffect(() => {
  axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((res)=> {
    setItems(res.data.meals);
  }).catch((err) => {
    console.log(err);
  })
 }, [])

 const itemList = 

  return (
    <div>
      
    </div>
  )
}

export default MealsAPI
