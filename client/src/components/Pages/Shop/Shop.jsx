import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
// import {
//   book,
//   book1,
//   book2,
//   book3,
//   book4,
//   book5,
//   book6,
//   book7,
//   book8,
//   book9,
//   book10,
//   book11,
// } from '../../../assets/index';
import BookCard from '../../Landing/Featured/BookCard';
import BookContext from '../../context/books';

const catCheck = [
  { label: 'Arts and Crafts', checked: false },
  { label: 'Business and Management', checked: false },
  { label: 'Fiction', checked: false },
  { label: 'Non Fiction', checked: false },
  { label: 'History', checked: false },
];

const sort = ['Newest', 'Featured', 'Top Selling'];

// const shopSet = [
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
//   {
//     img: book4,
//     title: 'King of Scars',
//     author: 'Leigh Bardugo',
//     price: '3,600 ',
//   },
//   {
//     img: book5,
//     title: 'The Hobbit',
//     author: 'J.R.R Tolkien',
//     price: '1,300 ',
//   },
//   {
//     img: book6,
//     title: 'Children of Blood and Bone',
//     author: 'Tomi Adeyemi',
//     price: '2,600',
//   },
//   {
//     img: book7,
//     title: 'Caraval',
//     author: 'Stephanie Garber',
//     price: '1,900',
//   },
//   {
//     img: book8,
//     title: 'The Da Vinci Code',
//     author: 'Angels & Demons',
//     price: '2,600 ',
//   },
//   {
//     img: book9,
//     title: 'The Shining',
//     author: 'Stephen King',
//     price: '1,500',
//   },
//   {
//     img: book10,
//     title: 'Frost Blood',
//     author: 'Elly Blake',
//     price: '2,400',
//   },
//   {
//     img: book11,
//     title: 'To Kill a Mocking Bird',
//     author: 'Harper Lee',
//     price: '1,900',
//   },
// ];

function Shop() {
  // const [data, setData] = React.useState([]);
  const { books, getBooks } = useContext(BookContext);

  React.useEffect(() => {
    const fetchBook = async () => {
      await getBooks();
    };
    fetchBook();
  }, [getBooks]);

  // const filterResult = catItem => {
  //   const result = data.category.filter(curData => {
  //     return curData.category === catItem;
  //   });
  //   setData(result);
  // };

  return (
    <>
      <Navbar />

      {/*Shop Conent*/}
      <Container maxW={'8xl'}>
        <Breadcrumb
          pt={75}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Books</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex
          flexDirection={'row'}
          align={'center'}
          justifyContent="space-between"
        >
          <Heading fontSize="64px" fontWeight="700" color="#0D2725">
            Browse Books
          </Heading>

          <Stack direction={'row'} align={'center'}>
            <Text
              fontSize="20px"
              fontWeight="400"
              w={250}
              color="#0D2725"
              mr={-65}
            >
              Sort By
            </Text>
            <Select placeholder="Select option">
              {sort.map(s => (
                <option key={s} value="option">
                  {s}
                </option>
              ))}
            </Select>
          </Stack>
        </Flex>

        {/*Categories Filter*/}
        <Flex>
          <Stack>
            <Stack py={30}>
              <Heading fontSize="24px" fontWeight="700" color="#0D2725" pb={5}>
                Category
              </Heading>
              {catCheck.map(cat => (
                <Checkbox
                  key={cat.label}
                  fontSize="16px"
                  fontWeight={500}
                  color="#0D2725"
                >
                  {cat.label}
                </Checkbox>
              ))}
            </Stack>
            {/*Price Filter*/}
            <Stack py={30}>
              <Heading fontSize="24px" fontWeight="700" color="#0D2725" pb={5}>
                Price
              </Heading>
              <Slider
                aria-label="slider-ex-1"
                defaultValue={30}
                w="250px"
                colorScheme={'green'}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                  <Box color="#0D2725" as={FaDollarSign} />
                </SliderThumb>
              </Slider>
              <Stack spacing={3} direction={'row'}>
                <Input
                  variant="outline"
                  placeholder="100"
                  focusBorderColor="#0D2725"
                />
                <Input
                  variant="outline"
                  placeholder="1,500"
                  focusBorderColor="#0D2725"
                />
              </Stack>
            </Stack>
          </Stack>

          {/*books*/}
          <Grid templateColumns="repeat(3, 1fr)" gap={10} pl={40} py={100}>
            {books.map(info => (
              <BookCard
                key={info.id}
                img={info.imageUrl}
                title={info.title}
                author={info.author}
                price={info.price}
              />
            ))}
          </Grid>
        </Flex>
      </Container>

      <Footer />
    </>
  );
}

export default Shop;
