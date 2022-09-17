import React, { useContext } from 'react';
import { Heading, Stack, Flex, Container, Link } from '@chakra-ui/react';
import BookCard from '../Featured/BookCard';
import { useNavigate } from 'react-router-dom';
import BookContext from '../../context/books';

function Featured() {
  const { books } = useContext(BookContext);

  const navigate = useNavigate();

  const handleClick = bks => {
    navigate(`/product/${bks}`);
  };
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
            {books.slice(4, 8).map(info => (
              <Link
                px={15}
                pb={5}
                _hover={{
                  shadow: 'xl',
                  transform: 'scale(1.1)',
                  borderRadius: '0.5rem',
                  transition: 'transform .3s',
                }}
                onClick={() => handleClick(`${info._id}`)}
              >
                <BookCard
                  key={info.id}
                  img={info.imageUrl}
                  title={info.title}
                  author={info.author}
                  price={info.price}
                />
              </Link>
            ))}
          </Stack>
        </Flex>
      </Container>
    </>
  );
}

export default Featured;
