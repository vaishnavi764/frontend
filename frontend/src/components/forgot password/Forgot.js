import axios from 'axios';
import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, VStack, Heading, FormHelperText, Text } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

export const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email || !newPassword || !confirmPassword) {
      setMessage('Please provide all required fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const res = await axios.post('/forget-password', { email, newPassword });
      setMessage(res.data.message || 'Password reset successful.');
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <Box
      p={100}
      maxW="md"
      mx="auto"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-r, #00c6ff, #0072ff)"
      animation="background-animation 10s ease infinite"
    >
      <Box
        p={6}
        w="full"
        maxW="lg"
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        animation="fade-in 1s ease-out"
      >
        <Heading mb={6} textAlign="center" color="#0072ff">
          Reset Your Password
        </Heading>
        <VStack spacing={4} align="stretch">
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl id="newPassword" isRequired>
            <FormLabel>New Password</FormLabel>
            <Input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </FormControl>
          <FormControl id="confirmPassword" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
            />
          </FormControl>
          {message && (
            <Text color="red.500" textAlign="center">{message}</Text>
          )}
          <Button
            colorScheme="blue"
            onClick={handleResetPassword}
            w="full"
          >
            Reset Password
          </Button>
          <Button
            type='button'
            variant='link'
            color='blue.600'
            mt={4}
            onClick={() => navigate('/signin')}
          >
            Now Sign in
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};
