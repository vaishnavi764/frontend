import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Card,
  Button,
  CardBody,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Text,
  VStack,
  Heading,
} from "@chakra-ui/react";

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:9000/signup', {
                Email: email,
                FirstName: firstName,
                LastName: lastName,
                Password: password
            });
    
            if (response.data) {
                alert('Signup successful');
                navigate('/signin');
            } else {
                setError(response.data.message || 'Something went wrong');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            console.error(error);
        }
    };

    return (
        <Box
            minHeight="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgGradient="linear(to-r, #d7aefb, #fbc2eb)"
            p={100}
        >
            <Card
                maxW="md"
                w="full"
                p={6}
                boxShadow="lg"
                borderRadius="md"
                bg="white"
                textAlign="center"
            >
                <CardBody>
                    <Heading mb={6} size="lg" color="#d7aefb">
                        Sign Up
                    </Heading>
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={4} align="stretch">
                            <FormControl id="email" isRequired>
                                <FormLabel>Email Address</FormLabel>
                                <Input
                                    type='email'
                                    placeholder='Enter your email (e.g., john.doe@example.com)'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <FormHelperText>We'll never share your email.</FormHelperText>
                            </FormControl>
                            <FormControl id="firstName" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input
                                    type='text'
                                    placeholder='Enter your first name'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </FormControl>
                            <FormControl id="lastName" isRequired>
                                <FormLabel>Last Name</FormLabel>
                                <Input
                                    type='text'
                                    placeholder='Enter your last name'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type='password'
                                    placeholder='Enter your password (min. 8 characters)'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <FormHelperText>Please enter a strong password.</FormHelperText>
                            </FormControl>

                            {error && <Text color='red.500'>{error}</Text>}

                            <Button
                                type='submit'
                                variant='solid'
                                colorScheme='pink'
                                size="lg"
                                width="full"
                            >
                                Sign Up
                            </Button>
                        </VStack>
                    </form>
                    <Button
                        type='button'
                        variant='link'
                        color='purple.600'
                        mt={4}
                        onClick={() => navigate('/signin')}
                    >
                        Already have an account? Sign In
                    </Button>
                </CardBody>
            </Card>
        </Box>
    );
};
