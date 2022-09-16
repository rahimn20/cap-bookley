import {
  Button,
  Heading,
  Stack,
  Text,
  Flex,
  Container,
  Image,
} from '@chakra-ui/react';
import React from 'react';
// import stand from '../../../assets/stand.png';
import { stand } from '../../../assets/index';
import './Hero.css';
import { FaShippingFast, FaLock, FaRedoAlt, FaHeadset } from 'react-icons/fa';
import IconCard from './IconCard';

const iconSet = [
  {
    icon: FaShippingFast,
    title: 'Free Delivery',
    description: 'Order over PKR 1200',
  },
  {
    icon: FaLock,
    title: 'Secure Payment',
    description: '100% SSL Secure Payment',
  },
  {
    icon: FaRedoAlt,
    title: 'Easy Return',
    description: '10 Days Return',
  },
  {
    icon: FaHeadset,
    title: '24/7 Support',
    description: 'Call us Anytime',
  },
];

function Hero() {
  return (
    <>
      {/*Hero*/}
      <div className="wrapper">
        <Container maxW="8xl">
          <Flex align={'center'}>
            <Stack
              align={'center'}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
              direction={{ base: 'column', md: 'row' }}
            >
              <Stack w="full" maxW="md" spacing={4} p={6}>
                <Heading fontSize="64px" fontWeight="700" color="#0D2725">
                  READ MORE FOR LESS
                </Heading>
                <Text fontSize="2xl" color="#0D2725">
                  Save upto 40% off
                </Text>
                <Button w={100} bg="#0D2725" colorScheme="green">
                  Shop Now
                </Button>
              </Stack>

              <Container maxW="full">
                <Image src={stand} class="stand" alt="" mb="-300px" />
              </Container>

              {/* <Image objectFit="cover" h="full" src={stand} /> */}
            </Stack>
          </Flex>
        </Container>
      </div>

      {/*Icons*/}
      <Container maxW="8xl" py="40px">
        <Flex alignItems="center" justifyContent="center" gap="160px">
          {iconSet.map(info => (
            <IconCard
              icon={info.icon}
              title={info.title}
              description={info.description}
            />
          ))}
        </Flex>
      </Container>
    </>
  );
}

export default Hero;
