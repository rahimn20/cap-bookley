import React from 'react';
import { Heading, Stack, Flex, Container, Link } from '@chakra-ui/react';
import BookCard from './BookCard';
// import { book, book1, book2, book3 } from '../../../assets/index';
import BookContext from '../../context/books';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// const bookSet = [
//   {
//     img: book,
//     title: 'Dongri to Dubai',
//     author: 'Hussain Zaidi',
//     price: '1,200',
//   },
//   {
//     img: book1,
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     price: '1,500',
//   },
//   {
//     img: book2,
//     title: 'Rich Dad Poor Dad',
//     author: 'Robert T. Kiyosaki',
//     price: '2,200',
//   },
//   {
//     img: book3,
//     title: 'War Storm',
//     author: 'Victoria Aveyard',
//     price: '1,200',
//   },
// ];

function Featured() {
  const { books, getBooks } = useContext(BookContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchBook = async () => {
      await getBooks();
    };
    fetchBook();
  }, [getBooks]);

  const handleClick = bks => {
    // console.log(books._id);
    navigate(`/product/${bks}`);
  };

  return (
    <>
      <Container maxW={'8xl'} mt={50}>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontSize="64px" fontWeight="700" color="#0D2725">
            Featured Books
          </Heading>
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
            gap="120"
          >
            {books.map(bks => (
              <Link onClick={() => handleClick(`${bks._id}`)}>
                <BookCard
                  key={bks.id}
                  img={bks.imageUrl}
                  title={bks.title}
                  author={bks.author}
                  price={bks.price}
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
