// src/components/project/recipes.js
// src/components/project/Recipes.js
import React from 'react';
import RecipesData from './recipesdata'; // Adjust the path if necessary
import './recipesdata.css'; // Ensure this file contains the necessary styles

const Recipes = () => {
  return (
    <div className="recipe-list">
      <h1>Recipe List</h1>
      {RecipesData.map(recipe => (
        <div key={recipe.id} className="recipe-item">
          {recipe.image ? (
            <img src={recipe.image} alt={recipe.title} />
          ) : (
            <div className="no-image">No image available</div>
          )}
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <p>Calories: {recipe.calories}</p>
          <p>Type: {recipe.type}</p>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
