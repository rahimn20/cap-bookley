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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
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
import React from 'react';
import { book1, book2 } from '../../../assets';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import { FaTrashAlt } from 'react-icons/fa';

function Cart() {
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
                <Th color="#FFFFFF">Quantity</Th>
                <Th isNumeric color="#FFFFFF">
                  Unit Price
                </Th>
                <Th isNumeric color="#FFFFFF">
                  Total Price
                </Th>
                <Th color="#FFFFFF">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Image
                    src={book1}
                    fit={'cover'}
                    align={'center'}
                    w={'180px'}
                  />
                </Td>
                <Td>
                  <Stack gap={5}>
                    <Heading fontSize="28px" fontWeight="600" color="#0D2725">
                      Ego is the Enemy
                    </Heading>
                    <Text fontSize="20px" fontWeight="400" color="#0D2725">
                      By Ryan Holiday
                    </Text>
                  </Stack>
                </Td>
                <Td>
                  <NumberInput size="md" maxW={32} defaultValue={1} min={1}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
                <Td
                  isNumeric
                  fontSize={'20px'}
                  fontWeight="400"
                  color="#0D2725"
                >
                  1,500
                </Td>
                <Td
                  isNumeric
                  fontSize={'20px'}
                  fontWeight="400"
                  color="#0D2725"
                >
                  3,000
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
                    <Text fontSize={'20px'} fontWeight={'500'} color="#FF453A">
                      Remove
                    </Text>
                  </Stack>
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <Image
                    src={book2}
                    fit={'cover'}
                    align={'center'}
                    w={'180px'}
                  />
                </Td>
                <Td>
                  <Stack gap={5}>
                    <Heading fontSize="28px" fontWeight="600" color="#0D2725">
                      Rich Dad Poor Dad
                    </Heading>
                    <Text fontSize="20px" fontWeight="400" color="#0D2725">
                      By Robert T. Kiyosaki
                    </Text>
                  </Stack>
                </Td>
                <Td>
                  <NumberInput size="md" maxW={32} defaultValue={1} min={1}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
                <Td
                  isNumeric
                  fontSize={'20px'}
                  fontWeight="400"
                  color="#0D2725"
                >
                  2,200
                </Td>
                <Td
                  isNumeric
                  fontSize={'20px'}
                  fontWeight="400"
                  color="#0D2725"
                >
                  2,200
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
                    <Text fontSize={'20px'} fontWeight={'500'} color="#FF453A">
                      Remove
                    </Text>
                  </Stack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Stack direction={'row'} align={'center'} pb={10} gap={50}>
          <Heading fontSize="24px">Total Payable</Heading>
          <Text fontSize={'20px'} fontWeight={'500'}>
            PKR 5,200
          </Text>
          <Button bg="#0D2725" colorScheme="green">
            Checkout
          </Button>
        </Stack>
      </Container>

      <Footer />
    </>
  );
}

export default Cart;
