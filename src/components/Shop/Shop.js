import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Shop.css'
const Shop = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    },[])

    const [fooddt, setFooddt] = useState([])

    const detailsHandler = (food) => {
        console.log(food);
        setFooddt(food)
    }

    return (
        <div className='shop-Container'>
                <div className="food-main">
                {
                    foods.map(food => <Food food = {food} key = {food.idMeal} detailsHandler = {detailsHandler}></Food>)
                }
                </div>
            <div className="foods-details">
                <h4>Food Details</h4>
                <h2>Name : {fooddt.strMeal}</h2>
                <img src={fooddt.strMealThumb} alt="" />
                <p>Instructions : {fooddt.strInstructions}</p>
            </div>
        </div>
    );
};

export default Shop;