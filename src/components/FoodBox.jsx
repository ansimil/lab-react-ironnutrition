import React from 'react'
import { Button } from 'antd';

const FoodBox = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        props.deleteFood(props.food.name) 
    }

  return (
    <div className="indFood">
    
        <div>
        <h3>{props.food.name}</h3>
        </div>
        <div>
            <img src={props.food.image} alt="pic" width="100px" height="100px"/>
            <p>Calories: {props.food.calories}</p>
            <p>Servings: {props.food.servings}</p>
            <p>Total Calories: {props.food.calories * props.food.servings} kcal</p>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>Delete</Button>
        </div>
    </div>

  )
}

export default FoodBox