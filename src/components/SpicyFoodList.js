import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray=[...foods,newFood];
    setFoods(newFoodArray);
    //console.log(newFood);
  }
  const newFoodArray=[...foods, newFood];

function handleclick(id){
const newFoodArray=foods.filter((food)=>food.id !==id)
setFoods(newFoodArray);
}
oo
  const foodList = foods.map((food) => (
    <li key={food.id} onclick={()=>handleclick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
