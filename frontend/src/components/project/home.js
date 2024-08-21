import React from 'react';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start" // Aligns content to the left
      height="100vh"
      backgroundImage="url('https://images.creativemarket.com/0.1.0/ps/8436213/1820/1214/m1/fpnw/wm1/smfymzyylfogh31jhumnxl4pyitf4kfwofnxxljcwv6jy3wfmepfup0jakedtfgq-.jpg?1590762544&s=abe9505c29be6863aef667707d2ef3f3')"
      backgroundSize="cover"
      textAlign="center" // Aligns text to the left
      px={4} // Add padding for responsiveness
    >
      <Text fontSize="4xl" fontWeight="bold" mb={8} color="light blue">
        Welcome to Your Health Tools
      </Text>
      <Stack direction="column" spacing={7}>
        <Button
          colorScheme="blue"
          onClick={() => navigate('/pro')}
        >
          calories calculator
        </Button>
        <Button
          colorScheme="green"
          onClick={() => navigate('/nutrition')}
        >
          macronutrient calculator
        </Button>
        <Button
          colorScheme="teal"
          onClick={() => navigate('/hydration')}
        >
          Hydration tracker
        </Button>
      </Stack>
    </Box>
  );
};

export default HomePage;
