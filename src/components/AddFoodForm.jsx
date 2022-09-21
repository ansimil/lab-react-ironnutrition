import React from 'react'
import { Input, Button } from 'antd';
import { useState } from 'react'

const AddFoodForm = (props) => {
    const [name, setName] = useState(" ")
    const [image, setImage] = useState(" ")
    const [calories, setCalories] = useState(" ")
    const [servings, setServings] = useState(" ")

    const handleSubmit = (event) => {
        event.preventDefault()
        const newFood = {name, image, calories, servings}
        props.addFood(newFood)
        console.log(event)
        setName('')
        setImage('')
        setCalories('')
        setServings('') 
      }

    // const handleHideForm = (event) => {
    //     event.preventDefault()
    //     props.hideFormFunc()
    // }

    const handleNameInput = (event) => setName(event.target.value)
    const handleImageInput = (event) => setImage(event.target.value)
    const handleCaloriesInput = (event) => setCalories(event.target.value)
    const handleServingsInput = (event) => setServings(event.target.value)


  return (
    <div className="formContainer">
    <h2>Add a food to the list!</h2>
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <Input type="text" name="name" value={name} onChange={handleNameInput}/>
        <label>Image Link</label>
        <Input type="text" name="image" value={image} onChange={handleImageInput}/>
        <label>Calories</label>
        <Input type="text" name ="calories" value={calories} onChange={handleCaloriesInput}/>
        <label>Servings</label>
        <Input type="text" name="servings" value={servings} onChange={handleServingsInput}/> 
        <Button type="primary" htmlType="submit">Add a food!</Button>
    </form>
        
    </div>    
  )
}

export default AddFoodForm