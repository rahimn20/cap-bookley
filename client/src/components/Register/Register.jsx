import {
  Button,
  Flex,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  Center,
  Link,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import React from 'react';
import { library } from '../../assets/index';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/auth';
// import {Link} from "react-router-dom"

function Register() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const handleSubmit = async e => {
    // e.preventDefault();
    const user = { firstName, lastName, email, address, phoneNumber, password };
    console.log({ user });
    await register(user);
    navigate('/login');
  };

  return (
    <>
      <HStack w="full" h="100vh">
        <Flex
          w="full"
          h="full"
          borderRightWidth={1}
          display={{ base: 'none', md: 'flex' }}
        >
          <Image objectFit="cover" w="full" h="full" src={library} />
        </Flex>
        <Flex w="full" h="full" alignItems="center" justifyContent="center">
          <Stack w="full" maxW="md" spacing={4} p={6}>
            {/* Heading */}
            <Heading fontSize="64px" fontWeight="700" color="#0D2725">
              Sign Up
            </Heading>

            {/* Sub heading */}
            <Text fontSize="2xl" color="#6E7D7C" pb="30px">
              Please enter your details to sign up.
            </Text>

            {/* First Name input field */}
            <FormControl id="fname">
              <Input
                focusBorderColor="#0D2725"
                autoComplete="off"
                placeholder="Enter your First Name"
                size="md"
                value={firstName}
                onChange={e => {
                  setFirstName(e.target.value);
                }}
              ></Input>
            </FormControl>

            {/* Last Name input field */}
            <FormControl id="lname">
              <Input
                focusBorderColor="#0D2725"
                autoComplete="off"
                placeholder="Enter your Last Name"
                size="md"
                value={lastName}
                onChange={e => {
                  setLastName(e.target.value);
                }}
              ></Input>
            </FormControl>

            {/* Email input field */}
            <FormControl id="email">
              <Input
                focusBorderColor="#0D2725"
                autoComplete="off"
                placeholder="Enter your Email"
                size="md"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
              ></Input>
            </FormControl>

            {/* Address input field */}
            <FormControl id="address">
              <Input
                focusBorderColor="#0D2725"
                autoComplete="off"
                placeholder="Enter your Address"
                size="md"
                value={address}
                onChange={e => {
                  setAddress(e.target.value);
                }}
              ></Input>
            </FormControl>

            {/* Phone Number input field */}
            <FormControl id="address">
              <Input
                focusBorderColor="#0D2725"
                autoComplete="off"
                placeholder="Enter your Phone Number"
                size="md"
                value={phoneNumber}
                onChange={e => {
                  setPhoneNumber(e.target.value);
                }}
              ></Input>
            </FormControl>

            {/* Password input field */}
            <FormControl id="password">
              <Input
                focusBorderColor="#0D2725"
                autoComplete="off"
                placeholder="Enter your Password"
                type="password"
                size="md"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
              ></Input>
            </FormControl>

            {/* Confirm password input field */}
            {/* <FormControl id="confirmPassword" pb="30px">
              <Input
                focusBorderColor="#0D2725"
                autoComplete="off"
                placeholder="Confirm your Password"
                type="password"
                size="md"
              ></Input>
            </FormControl> */}

            {/* Sign up button */}
            <Button
              bg="#0D2725"
              colorScheme="green"
              onClick={() => {
                handleSubmit();
              }}
            >
              Sign Up
            </Button>
            {/* Google */}
            <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>

            {/* Bottom link */}
            <Stack spacing={2} direction="row" align="start" pt="30px">
              <Text fontSize="lg" color="#6E7D7C">
                Already have an account?
              </Text>
              <Link to="/" fontSize="lg" color="#0D2725">
                <strong>Sign in now</strong>
              </Link>
            </Stack>
          </Stack>
        </Flex>
      </HStack>
    </>
  );
}

export default Register;
