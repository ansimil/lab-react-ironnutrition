import './App.css';
import foods from './foods.json';
import { useState } from "react";
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm"
import Search from "./components/Search"
import { Button } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods)
  const [hideForm, setHideForm] = useState(true)

  const addFood = (food) => {
    const foodListCopy = [...foodList]
    foodListCopy.push(food)
    setFoodList(foodListCopy)
  }

  const findFood = (search) => {
    console.log(search)
    console.log('from the other side')
    let filteredFood;
    const foodListCopyCopy = [...foodList]
    filteredFood = foodListCopyCopy.filter((food) => {
      return food.name.toUpperCase().includes(search)
  })

  setFoodList(filteredFood)
  }

  const deleteFood = (foodToDelete) => {
    console.log('Delete')
    const foodListDelete = [...foodList];
    const updateFoodList = foodListDelete.filter( food => food.name !== foodToDelete)
    setFoodList(updateFoodList);

  }

  const hideFormFunc = () => {
    setHideForm(!hideForm)
  }

  return (
    <div className="App">

        <Search findFood={findFood}/> 

        {hideForm && <AddFoodForm addFood={addFood}/>}
        
        <Button type="primary" htmlType="submit" onClick={hideFormFunc}>{hideForm ? 'Hide form' : 'Show form'}</Button>

        <div className="foodBoxContainer">
        {foodList.map(food => {
          return(
            <FoodBox food={food} deleteFood={deleteFood}/>
          )  
        })}
        </div>
        <h3>{foodList.length === 0 ? 'No food left' : ''}</h3>
    </div>
  )
}
export default App;

