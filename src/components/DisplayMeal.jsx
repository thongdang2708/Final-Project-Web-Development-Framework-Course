import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import SingleIngre from './SingleItem/SingleIngre';
import SingleMeasure from './SingleItem/SingleMeasure';

function DisplayMeal({text}) {

    let [mealInfo, setMealInfo] = useState({});
    
    const fetchRandomMeal = async () => {
        let response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");

        let data = response.data;
        let singleMeal = data.drinks[0];
        setMealInfo(singleMeal);

    }  

    const fetchInformation = async (text) => {
        let response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + text);

        let data = response.data;

        let singleMeal = data.drinks[0];

        setMealInfo(singleMeal);
    }
 

    useEffect(() => {
        if (text === "") {
            fetchRandomMeal();
        } 
        
    },[text]);

    useEffect(() => {
        if (text !== "") {
            fetchInformation(text);
        }
    },[text]); 

    let arrayIngredients = Object.entries(mealInfo);



    let newArray = [];
    let measureArray = [];
    for (let i=0; i<arrayIngredients.length; i++) {
        if (arrayIngredients[i][0].includes("strIngredient")) {
            newArray.push(arrayIngredients[i][1]);
        }
    }

    for (let i=0; i<arrayIngredients.length; i++) {
        if (arrayIngredients[i][0].includes("strMeasure")) {
            measureArray.push(arrayIngredients[i][1]);
        }
    }


    let filterArray = newArray.filter(x => x != null);
    let filterMeasureArray = measureArray.filter(x => x != null);
  

  return (
    <div className='mt-10'>
       <h1 className='font-bold text-3xl text-sky-500'> {mealInfo.strDrink} - ({mealInfo.strAlcoholic})</h1>

        <div className='mt-10 flex justify-between'>
        <h1 className='font-bold text-2xl text-sky-500'> Glass Type: </h1>
        <h3 className='text-xl text-black font-bold'> {mealInfo.strGlass}</h3>
        </div>

        <div className='instruction '>
            <h1 className='mt-10 text-sky-500 text-2xl font-bold'> Instructions: </h1>

            <p className='mt-8 text-black font-bold text-lg'> {mealInfo.strInstructions}</p>
            
            <ul>
            {filterMeasureArray.map((measure) => {
                return <SingleMeasure measure={measure}/>
            })}
            </ul>
        </div>

        <div className='mt-10'>
        <h1 className='mt-10 text-sky-500 text-2xl font-bold'> List of Ingredients: </h1>
    
        </div>

        <ul>
            {filterArray.map((item) => {
                return <SingleIngre item={item} key={item}/>
            })}
        </ul>
        
    </div>
  )
}

export default DisplayMeal