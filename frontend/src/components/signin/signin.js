
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
import axios from 'axios';
import React, { useState } from "react";
import { api } from "../actions/api"
import { useNavigate } from "react-router-dom";
import { Card, Button, CardBody, FormControl, Input, FormLabel, FormHelperText } from "@chakra-ui/react";
export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        
const nav=useNavigate()
    const handleSignIn = async () => {
        try {
            const response = await axios.post(api + "/signin", { email, password });
            console.log(response.data);
            if (response.data.message) {
                console.log(response.data.values);
                alert("signin success");
            } else {
                alert("User not found");
                nav('/signup')
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Card sx={{ maxWidth: 400, margin: 'auto', backgroundColor: 'white', textAlign: 'center' }}>
                <CardBody>
                    <FormControl>
                        <FormLabel>Email Address</FormLabel>
                        <Input
                            type='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type='password'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormHelperText>Please enter your password.</FormHelperText>
                    </FormControl>
                    
                    <Button
                        type='button'
                        variant='contained'
                        color='primary'
                        sx={{ border: '1px solid black', borderRadius: 4, padding: '8px 16px', backgroundColor: 'lightblue', width: '200px' }}
                        onClick={handleSignIn}
                    >
                        Sign In
                    </Button>
                    <Button
                    type='button'
                    variant='link'
                    color='blue'
                    onClick={() =>nav('/signup')}
                >
                    Don't have an account? Sign Up
                </Button>
                    
                </CardBody>
            </Card>
        </>
    );
};