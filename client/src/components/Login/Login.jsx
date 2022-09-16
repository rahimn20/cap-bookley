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
  Checkbox,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import React from 'react';
import { library } from '../../assets/index';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    // e.preventDefault();
    const user = { email, password };
    console.log({ user });
    try {
      fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then(res => res.json())
        .then(data => {
          console.log({ data });
          navigate('/');
        });
    } catch (error) {
      console.error('Error signing in user', error);
    }
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
              Welcome
            </Heading>

            {/* Sub heading */}
            <Text fontSize="2xl" color="#6E7D7C" pb="20px">
              Please enter your details to sign in.
            </Text>

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

            {/* Remember and forget password */}
            <Stack
              spacing={2}
              direction="row"
              align="start"
              justify="space-between"
              pb="20px"
            >
              <Checkbox>Remember Me</Checkbox>
              <Link fontSize="lg" color="#0D2725">
                Forgot Password?
              </Link>
            </Stack>

            {/* Sign in button */}
            <Button
              bg="#0D2725"
              colorScheme="green"
              onClick={() => {
                handleSubmit();
              }}
            >
              Sign in
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
                Don't have an account?
              </Text>
              <Link to="/register" fontSize="lg" color="#0D2725">
                <strong>Sign up now</strong>
              </Link>
            </Stack>
          </Stack>
        </Flex>
      </HStack>
    </>
  );
}

export default Register;
