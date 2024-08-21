// import  { useState,React } from 'react';
  //import styles from './pro.css';

//  export const Pro=() =>{
//   const [formData, setFormData] = useState({
//     age: '',
//     weight: '',
//     height: '',
//     activityLevel: 'sedentary',
//     goal: 'lose-weight'
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form data:', formData);
//   };

//   return (
//     <div classname="{styles.container}">
//       <header>
//         <h1>Sports Nutrition and Meal Planning</h1>
//         <nav>
//           <ul>
//             <li><a href="#calculator">Calorie Calculator</a></li>
//             <li><a href="#recipes">Meal Recipes</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         <section id="calculator">
//           <h2>Calorie & Macronutrient Calculator</h2>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="age">Age:</label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               value={formData.age}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="weight">Weight (kg):</label>
//             <input
//               type="number"
//               id="weight"
//               name="weight"
//               value={formData.weight}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="height">Height (cm):</label>
//             <input
//               type="number"
//               id="height"
//               name="height"
//               value={formData.height}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="activity-level">Activity Level:</label>
//             <select
//               id="activity-level"
//               name="activityLevel"
//               value={formData.activityLevel}
//               onChange={handleChange}
//             >
//               <option value="sedentary">Sedentary</option>
//               <option value="light">Lightly active</option>
//               <option value="moderate">Moderately active</option>
//               <option value="active">Very active</option>
//               <option value="extra-active">Extra active</option>
//             </select>

//             <label htmlFor="goal">Goal:</label>
//             <select
//               id="goal"
//               name="goal"
//               value={formData.goal}
//               onChange={handleChange}
//             >
//               <option value="lose-weight">Lose Weight</option>
//               <option value="maintain-weight">Maintain Weight</option>
//               <option value="gain-muscle">Gain Muscle</option>
//             </select>

//             <button type="submit">Calculate</button>
//           </form>
//         </section>

//         <section id="recipes">
//           <h2>Personalised Meal Recipes</h2>
//           <p>Get meal ideas that match your nutrition goals.</p>
//           <button type="button">Generate Recipes</button>
//         </section>
//       </main>

//       <footer id="contact">
//         <h2>Contact Us</h2>
//         <p>Email: support@sportsnutrition.com</p>
//         <p>Phone: +123-456-7890</p>
//       </footer>
//     </div>
//   );
// }

// export default Pro;
//import React, { useState } from 'react';



import './pro.css';
// export const Pro = () => {
//   const [formData, setFormData] = useState({
//     age: '',
//     weight: '',
//     height: '',
//     activityLevel: 'sedentary',
//     goal: 'lose-weight'
//   });
//   setResult({
//     age: ageInYears,
//     bmr: Math.round(bmr),
//     tdee: Math.round(tdee)
//   });
  

//   const [result, setResult] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Calculate BMR (using Mifflin-St Jeor Equation)
//     const { age, weight, height, activityLevel } = formData;
//     const weightInKg = parseFloat(weight);
//     const heightInCm = parseFloat(height);
//     const ageInYears = parseInt(age);

//     // Assuming the gender is male for this example
//     const bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5;

//     // Calculate TDEE based on activity level
//     const activityMultiplier = {
//       sedentary: 1.2,
//       light: 1.375,
//       moderate: 1.55,
//       active: 1.725,
//       'extra-active': 1.9
//     };

//     const tdee = bmr * activityMultiplier[activityLevel];

//     // Store the result to display it
//     setResult({
//       bmr: Math.round(bmr),
//       tdee: Math.round(tdee)
//     });
//   };

//   return (
//     <div>
//       <header>
//         <h1>Sports Nutrition and Meal Planning</h1>
//         <nav>
//           <ul>
//             <li><a href="#calculator">Calorie Calculator</a></li>
//             <li><a href="#recipes">Meal Recipes</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         <section id="calculator">
//           <h2>Calorie & Macronutrient Calculator</h2>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="age">Age:</label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               value={formData.age}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="weight">Weight (kg):</label>
//             <input
//               type="number"
//               id="weight"
//               name="weight"
//               value={formData.weight}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="height">Height (cm):</label>
//             <input
//               type="number"
//               id="height"
//               name="height"
//               value={formData.height}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="activity-level">Activity Level:</label>
//             <select
//               id="activity-level"
//               name="activityLevel"
//               value={formData.activityLevel}
//               onChange={handleChange}
//             >
//               <option value="sedentary">Sedentary</option>
//               <option value="light">Lightly active</option>
//               <option value="moderate">Moderately active</option>
//               <option value="active">Very active</option>
//               <option value="extra-active">Extra active</option>
//             </select>

//             <label htmlFor="goal">Goal:</label>
//             <select
//               id="goal"
//               name="goal"
//               value={formData.goal}
//               onChange={handleChange}
//             >
//               <option value="lose-weight">Lose Weight</option>
//               <option value="maintain-weight">Maintain Weight</option>
//               <option value="gain-muscle">Gain Muscle</option>
//             </select>

//             <button type="submit">Calculate</button>
//           </form>

//           {result && (
//             <div>
//               <h3>Results:</h3>
//               <p>BMR (Basal Metabolic Rate): {result.bmr} calories/day</p>
//               <p>TDEE (Total Daily Energy Expenditure): {result.tdee} calories/day</p>
//             </div>
//           )}
//         </section>

//         <section id="recipes">
//           <h2>Personalised Meal Recipes</h2>
//           <p>Get meal ideas that match your nutrition goals.</p>
//           <button type="button">Generate Recipes</button>
//         </section>
//       </main>

//       <footer id="contact">
//         <h2>Contact Us</h2>
//         <p>Email: support@sportsnutrition.com</p>
//         <p>Phone: +123-456-7890</p>
//       </footer>
//     </div>
//   );
// };

// export default Pro;
// import React, { useState } from 'react';

// export const Pro = () => {
//   const [formData, setFormData] = useState({
//     age: '',
//     weight: '',
//     height: '',
//     activityLevel: 'sedentary',
//     goal: 'lose-weight'
//   });

//   const [result, setResult] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Calculate BMR (using Mifflin-St Jeor Equation)
//     const { age, weight, height, activityLevel } = formData;
//     const weightInKg = parseFloat(weight);
//     const heightInCm = parseFloat(height);
//     const ageInYears = parseInt(age);

//     // Assuming the gender is male for this example
//     const bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5;

//     // Calculate TDEE based on activity level
//     const activityMultiplier = {
//       sedentary: 1.2,
//       light: 1.375,
//       moderate: 1.55,
//       active: 1.725,
//       'extra-active': 1.9
//     };

//     const tdee = bmr * activityMultiplier[activityLevel];

//     // Store the result to display it
//     setResult({
//       age: ageInYears,
//       bmr: Math.round(bmr),
//       tdee: Math.round(tdee)
//     });
//   };

//   return (
//     <div>
//       <header>
//         <h1>Sports Nutrition and Meal Planning</h1>
//         <nav>
//           <ul>
//             <li><a href="#calculator">Calorie Calculator</a></li>
//             <li><a href="#recipes">Meal Recipes</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         <section id="calculator">
//           <h2>Calorie & Macronutrient Calculator</h2>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="age">Age:</label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               value={formData.age}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="weight">Weight (kg):</label>
//             <input
//               type="number"
//               id="weight"
//               name="weight"
//               value={formData.weight}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="height">Height (cm):</label>
//             <input
//               type="number"
//               id="height"
//               name="height"
//               value={formData.height}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="activity-level">Activity Level:</label>
//             <select
//               id="activity-level"
//               name="activityLevel"
//               value={formData.activityLevel}
//               onChange={handleChange}
//             >
//               <option value="sedentary">Sedentary</option>
//               <option value="light">Lightly active</option>
//               <option value="moderate">Moderately active</option>
//               <option value="active">Very active</option>
//               <option value="extra-active">Extra active</option>
//             </select>

//             <label htmlFor="goal">Goal:</label>
//             <select
//               id="goal"
//               name="goal"
//               value={formData.goal}
//               onChange={handleChange}
//             >
//               <option value="lose-weight">Lose Weight</option>
//               <option value="maintain-weight">Maintain Weight</option>
//               <option value="gain-muscle">Gain Muscle</option>
//             </select>

//             <button type="submit">Calculate</button>
//           </form>

//           {result && (
//             <div>
//               <h3>Results:</h3>
//               <p>Age: {result.age} years</p>
//               <p>BMR (Basal Metabolic Rate): {result.bmr} calories/day</p>
//               <p>TDEE (Total Daily Energy Expenditure): {result.tdee} calories/day</p>
//             </div>
//           )}
//         </section>

//         <section id="recipes">
//           <h2>Personalised Meal Recipes</h2>
//           <p>Get meal ideas that match your nutrition goals.</p>
//           <button type="button">Generate Recipes</button>
//         </section>
//       </main>

//       <footer id="contact">
//         <h2>Contact Us</h2>
//         <p>Email: support@sportsnutrition.com</p>
//         <p>Phone: +123-456-7890</p>
//       </footer>
//     </div>
//   );
// };

// export default Pro;
// import React, { useState } from 'react';

// export const Pro = () => {
//   const [formData, setFormData] = useState({
//     age: '',
//     weight: '',
//     height: '',
//     activityLevel: 'sedentary',
//     goal: 'lose-weight'
//   });

//   const [result, setResult] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { age, weight, height, activityLevel } = formData;
//     const weightInKg = parseFloat(weight);
//     const heightInCm = parseFloat(height);
//     const ageInYears = parseInt(age);

//     const bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5;

//     const activityMultiplier = {
//       sedentary: 1.2,
//       light: 1.375,
//       moderate: 1.55,
//       active: 1.725,
//       'extra-active': 1.9
//     };

//     const tdee = bmr * activityMultiplier[activityLevel];

//     setResult({
//       age: ageInYears,
//       bmr: Math.round(bmr),
//       tdee: Math.round(tdee)
//     });
//   };

//   return (
//     <div>
//       <header>
//         <h1>Sports Nutrition and Meal Planning</h1>
//         <nav>
//           <ul>
//             <li><a href="#calculator">Calorie Calculator</a></li>
//             <li><a href="#recipes">Meal Recipes</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         <section id="calculator">
//           <h2>Calorie & Macronutrient Calculator</h2>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="age">Age:</label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               value={formData.age}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="weight">Weight (kg):</label>
//             <input
//               type="number"
//               id="weight"
//               name="weight"
//               value={formData.weight}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="height">Height (cm):</label>
//             <input
//               type="number"
//               id="height"
//               name="height"
//               value={formData.height}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="activity-level">Activity Level:</label>
//             <select
//               id="activity-level"
//               name="activityLevel"
//               value={formData.activityLevel}
//               onChange={handleChange}
//             >
//               <option value="sedentary">Sedentary</option>
//               <option value="light">Lightly active</option>
//               <option value="moderate">Moderately active</option>
//               <option value="active">Very active</option>
//               <option value="extra-active">Extra active</option>
//             </select>

//             <label htmlFor="goal">Goal:</label>
//             <select
//               id="goal"
//               name="goal"
//               value={formData.goal}
//               onChange={handleChange}
//             >
//               <option value="lose-weight">Lose Weight</option>
//               <option value="maintain-weight">Maintain Weight</option>
//               <option value="gain-muscle">Gain Muscle</option>
//             </select>

//             <button type="submit">Calculate</button>
//           </form>

//           {result && (
//             <div>
//               <h3>Results:</h3>
//               <p>Age: {result.age} years</p>
//               <p>BMR (Basal Metabolic Rate): {result.bmr} calories/day</p>
//               <p>TDEE (Total Daily Energy Expenditure): {result.tdee} calories/day</p>
//             </div>
//           )}
//         </section>

//         <section id="recipes">
//           <h2>Personalized Meal Recipes</h2>
//           <p>Get meal ideas that match your nutrition goals.</p>
//           <button type="button">Generate Recipes</button>
//         </section>
//       </main>

//       <footer id="contact">
//         <h2>Contact Us</h2>
//         <p>Email: support@sportsnutrition.com</p>
//         <p>Phone: +123-456-7890</p>
//       </footer>
//     </div>
//   );
// };

// export default Pro;
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { Box, Button,Container, FormControl, FormLabel, Input, Select,Heading, VStack, HStack, Link, Table, Tbody, Tr, Td, Thead, Th } from '@chakra-ui/react';
import './pro.css'
export const Pro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    goal: 'lose-weight',
    sedentaryHours: '',
    lightActivityHours: '',
    moderateActivityHours: '',
    intenseExerciseDays: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { age, weight, height, sedentaryHours, lightActivityHours, moderateActivityHours, intenseExerciseDays } = formData;
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageInYears = parseInt(age);

    // Validate inputs
    if (isNaN(weightInKg) || isNaN(heightInCm) || isNaN(ageInYears) || weightInKg <= 0 || heightInCm <= 0 || ageInYears <= 0) {
      alert('Please enter valid numbers for age, weight, and height.');
      return;
    }

    // BMR calculation using Mifflin-St Jeor Equation
    const bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5; // BMR for men, modify accordingly for women.

    // Calculate activity score
    const activityScore = (parseFloat(sedentaryHours) || 0) * 1
      + (parseFloat(lightActivityHours) || 0) * 1.2
      + (parseFloat(moderateActivityHours) || 0) * 1.5
      + (parseFloat(intenseExerciseDays) || 0) * 1.8;

    // Determine activity level
    let activityLevel = '';
    if (activityScore <= 2) {
      activityLevel = 'sedentary';
    } else if (activityScore <= 4) {
      activityLevel = 'lightly active';
    } else if (activityScore <= 6) {
      activityLevel = 'moderately active';
    } else if (activityScore <= 8) {
      activityLevel = 'active';
    } else {
      activityLevel = 'extra active';
    }

    // Activity level multipliers
    const activityMultiplier = {
      sedentary: 1.2,
      'lightly active': 1.375,
      'moderately active': 1.55,
      active: 1.725,
      'extra active': 1.9
    };

    // TDEE calculation
    const tdee = bmr * activityMultiplier[activityLevel];

    setResult({
      age: ageInYears,
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      activityLevel
    });
  };

  return (
    <Container maxW="container.lg" p={4}>
      <Box as="header" mb={8}>
        <Heading as="h1" size="xl">Sports Nutrition and Meal Planning</Heading>
        <HStack spacing={4} mt={4}>
          <Link href="#calculator" color="teal.500">Calorie Calculator</Link>
          <Link href="#recipes" color="teal.500">Meal Recipes</Link>
          <Link href="#contact" color="teal.500">Contact</Link>
        </HStack>
      </Box>

      <Box as="main">
        <Box id="calculator" mb={8}>
          <Heading as="h2" size="lg">Calorie Calculator</Heading>
          <Box as="form" mt={4} onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              <FormControl id="age" isRequired>
                <FormLabel>Age</FormLabel>
                <Input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                />
              </FormControl>

              <FormControl id="weight" isRequired>
                <FormLabel>Weight (kg)</FormLabel>
                <Input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="Enter your weight in kg"
                />
              </FormControl>

              <FormControl id="height" isRequired>
                <FormLabel>Height (cm)</FormLabel>
                <Input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="Enter your height in cm"
                />
              </FormControl>

              <FormControl id="goal" isRequired>
                <FormLabel>Goal</FormLabel>
                <Select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                >
                  <option value="lose-weight">Lose Weight</option>
                  <option value="maintain-weight">Maintain Weight</option>
                  <option value="gain-muscle">Gain Muscle</option>
                </Select>
              </FormControl>

              <FormControl id="sedentaryHours" isRequired>
                <FormLabel>Hours Spent Sedentary</FormLabel>
                <Input
                  type="number"
                  name="sedentaryHours"
                  value={formData.sedentaryHours}
                  onChange={handleChange}
                  placeholder="Enter hours (e.g., sitting, watching TV)"
                />
              </FormControl>

              <FormControl id="lightActivityHours">
                <FormLabel>Hours of Light Activity</FormLabel>
                <Input
                  type="number"
                  name="lightActivityHours"
                  value={formData.lightActivityHours}
                  onChange={handleChange}
                  placeholder="Enter hours (e.g., walking, light housework)"
                />
              </FormControl>

              <FormControl id="moderateActivityHours">
                <FormLabel>Hours of Moderate Activity</FormLabel>
                <Input
                  type="number"
                  name="moderateActivityHours"
                  value={formData.moderateActivityHours}
                  onChange={handleChange}
                  placeholder="Enter hours (e.g., brisk walking, swimming)"
                />
              </FormControl>

              <FormControl id="intenseExerciseDays">
                <FormLabel>Days of Intense Exercise</FormLabel>
                <Input
                  type="number"
                  name="intenseExerciseDays"
                  value={formData.intenseExerciseDays}
                  onChange={handleChange}
                  placeholder="Enter days per week(e.g., running, heavy lifting)"
                />
              </FormControl>

              <Button type="submit" colorScheme="teal" size="lg">Calculate</Button>
            </VStack>
          </Box>

          {result && (
            <Box mt={8} p={4} border="2px" borderColor="teal.500" borderRadius="lg" bg="gray.50">
              <Heading as="h3" size="lg" mb={4} color="teal.600">Results</Heading>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Age</Th>
                    <Th>BMR (cal/day)</Th>
                    <Th>TDEE (cal/day)</Th>
                    <Th>Activity Level</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{result.age} years</Td>
                    <Td>{result.bmr}</Td>
                    <Td>{result.tdee}</Td>
                    <Td>{result.activityLevel.replace('_', ' ')}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          )}
        </Box>
        ̌    <Box
        display="flex" 
        justifyContent="center"
        alignItems="center"
        >
          <Button
        type="button"
        variant="solid"
        colorScheme="teal"
        size="lg"
        onClick={() => navigate('/recipes')}
        width="200px"
        height="60px"
        boxShadow="lg"
        // display={flex}
      >
        Generate Recipes
      </Button>
      </Box>
        <Box id="contact" mb={8}>
          <Heading as="h2" size="lg">Contact</Heading>
          {/* Add your contact information content here */}
        </Box>
      </Box>
    </Container>
  );
};
