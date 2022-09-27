import React from 'react';
import './Food.css'
const Food = ({food, detailsHandler}) => {
    const {strMeal, strMealThumb, strArea, strInstructions} = food
    return (
        <div className='food-content'>
            <img src={strMealThumb} alt="" />
            <div className="food-subContent">
            <h3>{strMeal}</h3>
            <p>Area : {strArea}</p>
            <p>Instructions : {strInstructions.slice(0, 80)}</p>
            </div>
            <button className='details-btn' onClick={() => detailsHandler(food)}>Details Now</button>
        </div>
    );
};

export default Food;