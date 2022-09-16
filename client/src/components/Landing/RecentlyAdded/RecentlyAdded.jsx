import React from 'react';
import { Heading, Stack, Flex, Container } from '@chakra-ui/react';
import BookCard from '../Featured/BookCard';
import { book8, book9, book10, book11 } from '../../../assets/index';

const bookSet = [
  {
    img: book8,
    title: 'The Da Vinci Code',
    author: 'Angels & Demons',
    price: '2,600 ',
  },
  {
    img: book9,
    title: 'The Shining',
    author: 'Stephen King',
    price: '1,500',
  },
  {
    img: book10,
    title: 'Frost Blood',
    author: 'Elly Blake',
    price: '2,400',
  },
  {
    img: book11,
    title: 'To Kill a Mocking Bird',
    author: 'Harper Lee',
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
            Recently Added
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
