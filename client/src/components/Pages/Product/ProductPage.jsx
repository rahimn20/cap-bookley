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
import RecentlyAdded from '../../Landing/RecentlyAdded/RecentlyAdded';
import { MdLocalShipping } from 'react-icons/md';
import { useContext } from 'react';
import BookContext from '../../context/books';
import { useParams } from 'react-router-dom';
import AuthContext from '../../context/auth';

function ProductPage() {
  const { book, getBookById } = useContext(BookContext);
  const { addToCart } = useContext(AuthContext);
  const { id } = useParams();

  React.useEffect(() => {
    const fetchBook = async () => {
      await getBookById(id);
    };
    fetchBook();
    console.log('fetchBook');
  }, [getBookById, id]);

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
            <BreadcrumbLink href="/home">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">Books</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{book.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex gap={100} py={30}>
          <Image
            src={book.imageUrl}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />

          <Stack>
            <Heading fontSize="64px" fontWeight="700" color="#0D2725">
              {book.title}
            </Heading>
            <Heading fontSize="32px" fontWeight="500" color="#0D2725">
              By {book.author}
            </Heading>
            <Heading fontSize="38px" fontWeight="700" color="#0D2725" pb={5}>
              PKR {book.price}
            </Heading>
            <Text fontSize="20px" fontWeight="500" color="#0D2725">
              {book.description}
            </Text>

            <Heading
              fontSize="32px"
              fontWeight="600"
              color={book.available ? 'green' : 'red'}
              py={15}
            >
              {book.available ? 'In Stock' : 'Out of Stock'}
            </Heading>

            <Stack direction={'row'} align="center" gap={5} pb={30}>
              <NumberInput size="md" maxW={32} defaultValue={1} min={1}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <Button
                disabled={!book.available}
                bg="#0D2725"
                colorScheme="green"
                onClick={() => addToCart(book)}
              >
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
