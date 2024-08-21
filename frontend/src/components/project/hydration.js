// import React, { useState, useEffect } from 'react';

//  export const  Hydration=()=> {
//   // State variables for user input
//   const [weight, setWeight] = useState('');
//   const [activityLevel, setActivityLevel] = useState('low');
//   const [hydrationGoal, setHydrationGoal] = useState(0);
//   const [waterIntake, setWaterIntake] = useState(0);

//   // Hydration needs calculation based on user weight and activity level
//   useEffect(() => {
//     if (weight) {
//       const baseHydration = weight * 35; // 35 ml per kg
//       let activityMultiplier;

//       switch (activityLevel) {
//         case 'moderate':
//           activityMultiplier = 1.2;
//           break;
//         case 'high':
//           activityMultiplier = 1.4;
//           break;
//         default:
//           activityMultiplier = 1;
//       }

//       const totalHydration = baseHydration * activityMultiplier;
//       setHydrationGoal(totalHydration);
//     }
//   }, [weight, activityLevel]);

//   // Handle water intake updates
//   const handleAddWater = (amount) => {
//     setWaterIntake((prev) => prev + amount);
//   };

//   // Reset daily intake
//   const handleReset = () => {
//     setWaterIntake(0);
//   };

//   return (
//     <div className="hydration-tracker">
//       <h2>Hydration Tracker</h2>

//       <div className="input-section">
//         <label>
//           Weight (kg):
//           <input
//             type="number"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//             placeholder="Enter your weight"
//           />
//         </label>

//         <label>
//           Activity Level:
//           <select
//             value={activityLevel}
//             onChange={(e) => setActivityLevel(e.target.value)}
//           >
//             <option value="low">Low</option>
//             <option value="moderate">Moderate</option>
//             <option value="high">High</option>
//           </select>
//         </label>
//       </div>

//       <div className="hydration-summary">
//         <h3>Your Hydration Goal: {hydrationGoal.toFixed(2)} ml/day</h3>
//         <h3>Water Intake: {waterIntake} ml</h3>
//         <progress value={waterIntake} max={hydrationGoal}></progress>
//       </div>

//       <div className="actions">
//         <button onClick={() => handleAddWater(250)}>Add 250ml</button>
//         <button onClick={() => handleAddWater(500)}>Add 500ml</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//     </div>
//   );
// };

// export default Hydration;
// import React, { useState, useEffect } from 'react';

import React, { useState, useEffect } from 'react';
import './hstyle.css'; // Import the CSS file

export const Hydration = () => {
  // const [Age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('low');
  const [hydrationGoal, setHydrationGoal] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);
  <h1 className="main-heading">Hydration Tracker</h1>
  useEffect(() => {
    if (weight) {
      const baseHydration = weight * 35; // 35 ml per kg
      let activityMultiplier;

      switch (activityLevel) {
        case 'moderate':
          activityMultiplier = 1.2;
          break;
        case 'high':
          activityMultiplier = 1.4;
          break;
        default:
          activityMultiplier = 1;
      }

      const totalHydration = baseHydration * activityMultiplier;
      setHydrationGoal(totalHydration);
    }
  }, [weight, activityLevel]);

  const handleAddWater = (amount) => {
    setWaterIntake((prev) => prev + amount);
  };

  const handleReset = () => {
    setWaterIntake(0);
  };

  return (
    // <div>
    //   <h1 className="main-heading">Hydration Tracker</h1>
    <div className="hydration-tracker">
      <h2>Hydration Tracker</h2>

      <div className="input-section">
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </label>

        <label>
          Activity Level:
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>

      <div className="hydration-summary">
        <h3>Your Hydration Goal: {hydrationGoal.toFixed(2)} ml/day</h3>
        <h3>Water Intake: {waterIntake} ml</h3>
        <progress value={waterIntake} max={hydrationGoal}></progress>
      </div>

      <div className="actions">
        <button onClick={() => handleAddWater(250)}>Add 250ml</button>
        <button onClick={() => handleAddWater(500)}>Add 500ml</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
    // </div>
  );
};

export default Hydration;
