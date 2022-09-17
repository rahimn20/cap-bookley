import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Heading,
  Text,
  Link,
  Icon,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'700'} fontSize="24px" mb={2}>
      {children}
    </Text>
  );
};

const footLinks = [
  {
    header: 'Quick Links',
    links: ['Home', 'Featured', 'Top Selling', 'Recent', 'Shop'],
  },
  {
    header: 'Locations',
    links: ['Lahore', 'Islamabad', 'Karachi', 'Faisalabad'],
  },
];

function Footer() {
  return (
    <>
      <Box bg="#0D2725">
        <Container as={Stack} maxW={'8xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}
          >
            <Stack spacing={6} mr={250}>
              <Box>
                <Heading fontSize="84px" fontWeight="700" color="#ffffff">
                  Bookley
                </Heading>
                <Text fontSize="20px" fontWeight="400" color="#ffffff">
                  Where everything you need to know is only an arm's length
                  away!
                </Text>
              </Box>
            </Stack>

            {footLinks.map(link => (
              <Stack key={link.header} color="#FFFFFF" align={'flex-start'}>
                <ListHeader>{link.header}</ListHeader>
                {link.links.map(li => (
                  <Link
                    key={li.name}
                    href={'#'}
                    fontSize="20px"
                    fontWeight={400}
                  >
                    {li}
                  </Link>
                ))}
              </Stack>
            ))}

            <Stack color="#FFFFFF" align={'flex-start'}>
              <ListHeader>Contact</ListHeader>
              <Link href={'#'} fontSize="20px" fontWeight={400}>
                rahim2210@icloud.com
              </Link>
              <Link href={'#'} fontSize="20px" fontWeight={400}>
                +92-337-1461-371
              </Link>
              <Stack direction={'row'} spacing={6} py={5}>
                <Icon
                  as={FaFacebook}
                  h={7}
                  w={7}
                  alignSelf="center"
                  color="#FFFFFF"
                ></Icon>
                <Icon
                  as={FaInstagram}
                  h={7}
                  w={7}
                  alignSelf="center"
                  color="#FFFFFF"
                ></Icon>
                <Icon
                  as={FaGithub}
                  h={7}
                  w={7}
                  alignSelf="center"
                  color="#FFFFFF"
                ></Icon>
              </Stack>
            </Stack>
          </SimpleGrid>
          <Divider py={5} />
          <Text
            fontSize="16px"
            fontWeight={400}
            color="#FFFFFF"
            align={'center'}
          >
            © 2022 bookley.com All rights reserved
          </Text>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
