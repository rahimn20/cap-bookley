import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useContext } from 'react';

import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import { FaTrashAlt } from 'react-icons/fa';
import AuthContext from '../../context/auth';

function Cart() {
  const { cart, checkOut } = useContext(AuthContext);

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
            <BreadcrumbLink href="#">Cart</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <TableContainer py={10}>
          <Table variant="simple">
            <Thead bg="#0D2725">
              <Tr>
                <Th color="#FFFFFF">Image</Th>
                <Th color="#FFFFFF">Details</Th>

                <Th isNumeric color="#FFFFFF">
                  Unit Price
                </Th>

                <Th color="#FFFFFF">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map(book => (
                <Tr>
                  <Td>
                    <Image
                      src={book.imageUrl}
                      fit={'cover'}
                      align={'center'}
                      w={'180px'}
                    />
                  </Td>
                  <Td>
                    <Stack gap={5}>
                      <Heading fontSize="28px" fontWeight="600" color="#0D2725">
                        {book.title}
                      </Heading>
                      <Text fontSize="20px" fontWeight="400" color="#0D2725">
                        By {book.author}
                      </Text>
                    </Stack>
                  </Td>

                  <Td
                    isNumeric
                    fontSize={'20px'}
                    fontWeight="400"
                    color="#0D2725"
                  >
                    {book.price}
                  </Td>
                  <Td>
                    <Stack direction={'row'} align="center">
                      <Icon
                        as={FaTrashAlt}
                        h={5}
                        w={5}
                        alignSelf="center"
                        color="#FF453A"
                      ></Icon>
                      <Text
                        fontSize={'20px'}
                        fontWeight={'500'}
                        color="#FF453A"
                      >
                        Remove
                      </Text>
                    </Stack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <Stack direction={'row'} align={'center'} pb={10} gap={50}>
          <Heading fontSize="24px">Total Payable</Heading>
          <Text fontSize={'20px'} fontWeight={'500'}>
            {cart.reduce((totalPrice, book) => book.price + totalPrice, 0)}
          </Text>
          <Button onClick={() => checkOut()} bg="#0D2725" colorScheme="green">
            Checkout
          </Button>
        </Stack>
      </Container>

      <Footer />
    </>
  );
}

export default Cart;
