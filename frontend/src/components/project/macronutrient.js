// src/NutritionCalculator.js
import React, { useState } from 'react';
import './NutritionCalculator.css';

export const NutritionCalculator = () => {
  const [goal, setGoal] = useState('');
  const [age, setAge] = useState(''); // New state for age
  const [weight, setWeight] = useState(''); // New state for weight
  const [macros, setMacros] = useState('');
  // const [hydration, setHydration] = useState('');

  const calculateNutrition = () => {
    if (!age || !weight) {
      alert('Please enter both age and weight.');
      return;
    }

    let macroRatio = '';

    // Example logic based on age and weight
    const ageNum = parseInt(age, 10);
    const weightNum = parseFloat(weight);

    if (isNaN(ageNum) || isNaN(weightNum)) {
      alert('Please enter valid numbers for age and weight.');
      return;
    }

    switch (goal) {
      case 'endurance':
        macroRatio = `Carbs: ${60 + ageNum / 100}%, Protein: ${10 + weightNum / 100}%, Fats: ${20 - ageNum / 200}%`;
        break;
      case 'strength':
        macroRatio = `Carbs: ${45 + ageNum / 150}%, Protein: ${25 + weightNum / 150}%, Fats: ${20 - ageNum / 250}%`;
        break;
      case 'fat-loss':
        macroRatio = `Carbs: ${40 + ageNum / 200}%, Protein: ${30 + weightNum / 200}%, Fats: ${20 - ageNum / 300}%`;
        break;
      case 'maintenance':
        macroRatio = `Carbs: ${45 + ageNum / 150}%, Protein: ${15 + weightNum / 150}%, Fats: ${20 + ageNum / 200}%`;
        break;
      default:
        macroRatio = 'Please select a valid goal.';
    }

    setMacros(macroRatio);
  };

  return (
    <div className="nutrition-calculator">
      <h2>Macro-nutrition Calculator</h2>
      <div className="form-group">
        <label>
          Training Goal:
          <select onChange={(e) => setGoal(e.target.value)} value={goal}>
            <option value="">Select</option>
            <option value="endurance">Endurance</option>
            <option value="strength">Strength</option>
            <option value="fat-loss">Fat Loss</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </label>
      </div>
      <button onClick={calculateNutrition} className="calculate-btn">Calculate</button>
      <div className="results">
        <div className="macro-results">
          <h3>Recommended Macronutrient Ratios:</h3>
          <p>{macros}</p>
        </div>
        {/* <div className="hydration-results">
          <h3>Hydration Strategy:</h3>
          <p>{hydration}</p>
        </div> */}
      </div>
    </div>
  );
};

export default NutritionCalculator;
