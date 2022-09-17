import React from 'react';
import { Heading, Stack, Flex, Container } from '@chakra-ui/react';
import BookCard from '../Featured/BookCard';
import { book4, book5, book6, book7 } from '../../../assets/index';

const bookSet = [
  {
    img: book4,
    title: 'King of Scars',
    author: 'Leigh Bardugo',
    price: '3,600 ',
  },
  {
    img: book5,
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
    price: '1,300 ',
  },
  {
    img: book6,
    title: 'Children of Blood and Bone',
    author: 'Tomi Adeyemi',
    price: '2,600',
  },
  {
    img: book7,
    title: 'Caraval',
    author: 'Stephanie Garber',
    price: '1,900',
  },
];

function Featured() {
  return (
    <>
      <Container maxW={'8xl'}>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontSize="64px" fontWeight="700" color="#0D2725">
            Top Selling Books
          </Heading>
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
            gap="120"
          >
            {bookSet.map(info => (
              <BookCard
                key={info.id}
                img={info.img}
                title={info.title}
                author={info.author}
                price={info.price}
              />
            ))}
          </Stack>
        </Flex>
      </Container>
    </>
  );
}

export default Featured;
