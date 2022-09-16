import React from 'react';
import { Heading, Stack, Flex, Container } from '@chakra-ui/react';
import BookCard from './BookCard';
import { book, book1, book2, book3 } from '../../../assets/index';

const bookSet = [
  {
    img: book,
    title: 'Dongri to Dubai',
    author: 'Hussain Zaidi',
    price: '1,200',
  },
  {
    img: book1,
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    price: '1,500',
  },
  {
    img: book2,
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    price: '2,200',
  },
  {
    img: book3,
    title: 'War Storm',
    author: 'Victoria Aveyard',
    price: '1,200',
  },
];

function Featured() {
  const [data, setData] = React.useState([]);

  const getUser = () => {
    fetch('/api/books')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(data => {
        // console.log(data);
        setData(data);
        // rows = setRows(data);
      })
      .catch(error => {
        console.error(
          'Error fetching data, Please turn on Port address',
          error
        );
      });
  };

  React.useEffect(() => {
    getUser();
  }, []);

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
            {/* {bookSet.map(info => (
              <BookCard
                img={info.img}
                title={info.title}
                author={info.author}
                price={info.price}
              />
            ))} */}

            {data.map(info => (
              <BookCard
                img={info.imageUrl}
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
