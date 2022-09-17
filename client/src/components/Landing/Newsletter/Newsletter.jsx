import {
  Container,
  Heading,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { letterBG } from '../../../assets/index';

function Newsletter() {
  return (
    <>
      <Container
        maxW="full"
        h="600px"
        padding={0}
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems={'center'}
        backgroundImage={letterBG}
        objectFit="cover"
        backgroundPosition={'center'}
        backgroundSize={'cover'}
        backgroundRepeat={'no-repeat'}
        position="relative"
      >
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack spacing={0} m="0 220px">
            <Heading
              fontSize="48px"
              fontWeight="700"
              m="0 0 40px 0"
              color="#FFF2DF"
            >
              Subscribe for latest updates
            </Heading>
            <InputGroup>
              <Input
                bg="#E8F7F6"
                p="30px"
                autoComplete="off"
                placeholder="Email"
                color={'black'}
                fontSize="16px"
                borderRadius="60px"
                opacity="50%"
                focusBorderColor="none"
                border={'none'}
              />
              <InputRightElement w="180px" m={0} p={0}>
                <Button
                  w="180px"
                  h="60px"
                  background="#FFF2DF"
                  mt={5}
                  fontSize="16px"
                  fontWeight="700"
                  borderRadius="0 60px 60px 0"
                >
                  Subscribe
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default Newsletter;
