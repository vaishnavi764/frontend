
// import { Card, CardBody, FormControl, Input, Flex, FormLabel, FormHelperText, Button } from "@chakra-ui/react"
// import axios from 'axios'
// import { useState } from "react"

//import { useNavigate } from "react-router-dom"
//export const Signin = () => {
//     const [email, setMail] = useState()
//     const [password, setPassword] = useState()
//     const handleSignIn = async () => {
//         try {
//             const res = await axios.post(api + "/signin", { email, password });
//             if (res.data) {
//                 alert("signin success");
//             } else {
//                 alert("User not found");
//                 // window.location.href = "/signin";
//             }
//         } catch (e) {
//             console.error(e);  // Log the error
//         }
//     }};



//     export const Signup = () => {
//         const [Firstname, setFirstname] = useState('')
//         const [Lastname, setLastname] = useState('')
//         const [Email, setEmail] = useState('')
//         const [Password, setPassword] = useState('')
//         const navigate=useNavigate();
//         const handleSignup = async () => {
//             try {
//                 const res = await axios.post(api + "/signup", { Firstname,Lastname,Email, Password });
//                 if (res.data) {
//                     alert("signup success");
//                 } else {
//                     alert("User not found");
//                     // window.location.href = "/signin";
//                 }
//             } catch (e) {
//                 console.error(e);  // Log the error
//             }
//         };
    
//     return (
//         <Flex height="100vh" alignItems="center" justifyContent="center">
//             <Card maxW="400px width=100%">


//                 <CardBody>
//                     <FormControl>
//                         <FormLabel>Email address</FormLabel>
//                         <Input type='email' onChange={(e) => setEmail(e.target.value)} />
//                         <FormHelperText>We'll never share your email.</FormHelperText>
//                     </FormControl>
//                     <FormControl>

//                         <FormLabel>password</FormLabel>
//                         <Input type='password' onChange={(e) => setPassword(e.target.value)} />
//                         <FormHelperText>We'll never share your email.</FormHelperText>
//                     </FormControl>
//                     <Button
//                         type='button'
//                         variant='contained'
//                         color='primary'
//                         sx={{ border: '1px solid black', borderadius: 4, padding: '8px 16px', width: '200px' }}
//                         onClick={handleSignup}
//                     >signup</Button>


//                 </CardBody>
//             </Card>

//         </Flex>

//     )
// }
import React, { useState } from "react";
import axios from 'axios';
import { api } from '../actions/api';
import { useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  CardBody,
  FormControl,
  Input,
  VStack,
  FormLabel,
  FormHelperText,
  Box,
  Heading,
} from "@chakra-ui/react";

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post(api + "/signin", { email, password });
      console.log(response.data);
      if (response.data.message) {
        console.log(response.data.values);
        alert("Login successful");
        navigate('/home');
      } else {
        alert("User not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-r, teal.400, blue.500, purple.600)" // Gradient background
      px={100} // Adjust padding if needed
    >
      <Card
        maxW="400px"
        w="full"
        p={6}
        boxShadow="xl"
        borderRadius="md"
        bg="white"
      >
        <CardBody>
          <Heading mb={6} textAlign="center" size="lg" color="teal.600">
            Sign In
          </Heading>
          <VStack spacing={4} align="stretch">
            <FormControl id="email">
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                focusBorderColor="teal.400"
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                focusBorderColor="teal.400"
              />
              <FormHelperText>Please enter your password.</FormHelperText>
            </FormControl>
            <Button
              type="button"
              colorScheme="teal"
              size="lg"
              width="full"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Button
              type="button"
              variant="link"
              colorScheme="teal"
              onClick={() => navigate('/signup')}
            >
              Don't have an account? Sign Up
            </Button>
            <Button
              type="button"
              variant="link"
              colorScheme="teal"
              onClick={() => navigate('/forgot')}
            >
              Forgot Password?
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};
