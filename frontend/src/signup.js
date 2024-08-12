import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, CardBody, FormControl, Input, FormLabel, FormHelperText, Text } from "@chakra-ui/react";

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        try {
            const response = await axios.post('http://localhost:9000/signup', {
                Email: email,
                FirstName: firstName,
                LastName: lastName,
                Password: password
            });
    
            if (response.data) {
                alert('Signup successful');
                navigate('/SignIn');
            } else {
                setError(response.data.message || 'Something went wrong');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            console.error(error);
        }
    };

    return (
        <Card sx={{ maxWidth: 400, margin: 'auto', backgroundColor: 'white', textAlign: 'center' }}>
            <CardBody>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel>Email Address</FormLabel>
                        <Input
                            type='email'
                            placeholder='Enter your email (e.g., john.doe@example.com)'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input
                            type='text'
                            placeholder='Enter your first name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                            type='text'
                            placeholder='Enter your last name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type='password'
                            placeholder='Enter your password (min. 8 characters)'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <FormHelperText>Please enter a strong password.</FormHelperText>
                    </FormControl>

                    {error && <Text color='red.500'>{error}</Text>}

                    <Button
                        type='submit'
                        variant='solid'
                        colorScheme='blue'
                        sx={{ marginTop: 4 }}
                    >
                        Sign Up
                    </Button>
                </form>
                <Button
                    type='button'
                    variant='link'
                    colorScheme='blue'
                    onClick={() => navigate('/signin')}
                >
                    Already have an account? Sign In
                </Button>
            </CardBody>
        </Card>
    );
};