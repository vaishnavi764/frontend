import React from 'react';
import { Box, Button, Flex, Heading, VStack, Image, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import './NutritionistPage.css';

const NutritionistPage = () => {
  return (
    <Box className="nutritionist-page">
      <VStack spacing={6} className="content-container">
        <Heading as="h1" size="2xl" className="welcome-heading">
          Welcome to Your Personalized Nutrition Plan
        </Heading>
        <Image src="/assets/logo.png" alt="Nutritionist Logo" className="logo-image" />

        <Text className="description">
          Discover the best meals and plans tailored to your needs. Achieve your health goals with expert guidance.
        </Text>

        <Flex className="button-container">
          <Button as={RouterLink} to="/signin" className="sign-in-button">
            Sign In
          </Button>
          <Button as={RouterLink} to="/signup" className="sign-up-button">
            Sign Up
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default NutritionistPage;

// import React from 'react';
// import { Box, Button, Flex, Heading, VStack } from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';
// import './logo.css'; 

// const NutritionistPage = () => {
//   return (
//     <Box
//       bgGradient="linear(to-r, teal.400, green.200)"
//       minHeight="100vh"
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Flex
//         as="header"
//         width="100%"
//         px={8}
//         py={4}
//         justifyContent="space-between"
//         alignItems="center"
//         bg="whiteAlpha.800"
//         boxShadow="md"
//       >
//         <img src="/assets/logo.png" alt="Nutritionist Logo" style={{ width: '150px', height: 'auto' }} />

//         <Flex>
//           <Button as={RouterLink} to="/signin" colorScheme="teal" variant="outline" mr={4}>
//             Sign In
//           </Button>
//           <Button as={RouterLink} to="/signup" colorScheme="teal" variant="solid">
//             Sign Up
//           </Button>
//         </Flex>
//       </Flex>

//       <VStack spacing={8} textAlign="center" mt={12}>
//         <Heading as="h2" size="xl" color="white">
//           Welcome to Your Personalized Nutrition Plan
//         </Heading>
//         <Box color="whiteAlpha.900" fontSize="lg">
//           Discover the best meals and plans tailored to your needs.
//         </Box>
//       </VStack>
//     </Box>
//   );
// };

// export default NutritionistPage;
