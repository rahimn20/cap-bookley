import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import { book1 } from '../../../assets/index';
import RecentlyAdded from '../../Landing/RecentlyAdded/RecentlyAdded';
import { MdLocalShipping } from 'react-icons/md';

function ProductPage() {
  return (
    <>
      <Navbar />

      <Container maxW={'8xl'} pb={50}>
        <Breadcrumb
          pt={75}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Books</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Ego is the Enemy</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex gap={100} py={30}>
          <Image
            src={book1}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />

          <Stack>
            <Heading fontSize="64px" fontWeight="700" color="#0D2725">
              Ego is the Enemy
            </Heading>
            <Heading fontSize="32px" fontWeight="500" color="#0D2725">
              By Ryan Holiday
            </Heading>
            <Heading fontSize="38px" fontWeight="700" color="#0D2725" pb={5}>
              PKR 1,500
            </Heading>
            <Text fontSize="20px" fontWeight="500" color="#0D2725">
              “While the history books are filled with tales of obsessive,
              visionary geniuses who remade the world in their image with sheer,
              almost irrational force, I’ve found that history is also made by
              individuals who fought their egos at every turn, who eschewed the
              spotlight, and who put their higher goals above their desire for
              recognition.” – from the Prologue Many of us insist the main
              impediment to a full, successful life is the outside world. In
              fact, the most common enemy lies within: our ego. Early in our
              careers, it impedes learning and the cultivation of talent. With
              success, it can blind us to our faults and sow future problems. In
              failure, it magnifies each blow and makes recovery more difficult.
              At every stage, ego holds us back. The Ego is the Enemy draws on a
              vast array of stories and examples, from literature to philosophy
              to history. We meet fascinating figures like Howard Hughes,
              Katharine Graham, Bill Belichick, and Eleanor Roosevelt, all of
              whom reached the highest levels of power and success by conquering
              their own egos. Their strategies and tactics can be ours as well.
              But why should we bother fighting ego in an era that glorifies
              social media, reality TV, and other forms of shameless
              self-promotion? Armed with the lessons in this book, as Holiday
              writes, “you will be less invested in the story you tell about
              your own specialness, and as a result, you will be liberated to
              accomplish the world-changing work you've set out to achieve.”
            </Text>

            <Heading fontSize="32px" fontWeight="600" color="green" py={15}>
              In Stock
            </Heading>

            <Stack direction={'row'} align="center" gap={5} pb={30}>
              <NumberInput size="md" maxW={32} defaultValue={1} min={1}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button bg="#0D2725" colorScheme="green">
                Add to Cart
              </Button>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={'center'}
              >
                <MdLocalShipping />
                <Text
                  fontSize="20px"
                  fontWeight={400}
                  color="#0D2725"
                  align={'center'}
                >
                  2-3 business days delivery
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Flex>
        <Divider borderColor="#0D2725" />
      </Container>

      <RecentlyAdded />

      <Footer />
    </>
  );
}

export default ProductPage;
