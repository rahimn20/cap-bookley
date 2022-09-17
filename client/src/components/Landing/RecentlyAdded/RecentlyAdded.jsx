import React from 'react';
import { Heading, Flex, Container, Link, Grid } from '@chakra-ui/react';
import BookCard from '../Featured/BookCard';
import { useContext } from 'react';
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
            Recently Added
          </Heading>
          <Grid
            templateColumns="repeat(4, 1fr)"
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
            gap="120"
          >
            {books.slice(6, 10).map(bks => (
              <Link
                px={15}
                pb={5}
                _hover={{
                  shadow: 'xl',
                  transform: 'scale(1.1)',
                  borderRadius: '0.5rem',
                  transition: 'transform .3s',
                }}
                onClick={() => handleClick(`${bks._id}`)}
              >
                <BookCard
                  key={bks.id}
                  img={bks.imageUrl}
                  title={bks.title}
                  author={bks.author}
                  price={bks.price}
                />
              </Link>
            ))}
          </Grid>
        </Flex>
      </Container>
    </>
  );
}

export default Featured;
