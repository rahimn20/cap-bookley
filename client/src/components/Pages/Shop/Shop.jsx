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
  Select,
  Stack,
  Text,
  Link,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Button,
} from '@chakra-ui/react';
import React, { useCallback, useContext } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import BookCard from '../../Landing/Featured/BookCard';
import BookContext from '../../context/books';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const catCheck = {
  'Arts and Crafts': false,
  'Business and Management': false,
  Fiction: false,
  'Non Fiction': false,
  History: false,
};

const sortOptions = [
  { text: 'Recent', value: 'recent' },
  { text: 'Name A-Z', value: 'aToZ' },
  { text: 'Name Z-A', value: 'zToA' },
];

function Shop() {
  const { books, getBooks } = useContext(BookContext);
  const [range, setRange] = useState([0, 5000]);
  const [sort, setSort] = useState('recent');
  const [categories, setCategories] = useState(catCheck);

  const filterHandler = useCallback(async () => {
    const filters = { min: range[0], max: range[1] };
    await getBooks({ sort, filters });
  }, [getBooks, range, sort]);

  const sortHandler = async e => {
    setSort(e.target.value);
    filterHandler();
  };

  const categoriesHandler = cat => {
    const updatedCategories = { ...categories };
    updatedCategories[cat] = !updatedCategories[cat];
    setCategories(updatedCategories);
  };

  React.useEffect(() => {
    filterHandler();
  }, [filterHandler]);

  const navigate = useNavigate();

  const handleClick = bks => {
    navigate(`/product/${bks}`);
  };

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
            <BreadcrumbLink href="/home">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/shop">Books</BreadcrumbLink>
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
            <Select onChange={sortHandler} placeholder="Select option">
              {sortOptions.map(s => (
                <option key={s.value} value={s.value}>
                  {s.text}
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
              {Object.keys(catCheck).map(cat => (
                <Checkbox
                  checked={catCheck[cat]}
                  onChange={() => categoriesHandler(cat)}
                  key={cat}
                  fontSize="16px"
                  fontWeight={500}
                  color="#0D2725"
                >
                  {cat}
                </Checkbox>
              ))}
            </Stack>
            {/*Price Filter*/}
            <Stack py={30} mb={5}>
              <Heading fontSize="24px" fontWeight="700" color="#0D2725" pb={5}>
                Price
              </Heading>
              <RangeSlider
                w="250px"
                colorScheme={'green'}
                min={0}
                max={5000}
                onChange={val => setRange(val)}
                defaultValue={[0, 5000]}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0}>
                  <Box color="#0D2725" as={FaDollarSign} />
                </RangeSliderThumb>
                <RangeSliderThumb index={1}>
                  <Box color="#0D2725" as={FaDollarSign} />
                </RangeSliderThumb>
              </RangeSlider>
              <Flex justifyContent={'space-between'}>
                <Text color="#0D2725" as={'span'}>
                  {range[0]}
                </Text>
                <Text color="#0D2725" as={'span'}>
                  {range[1]}
                </Text>
              </Flex>
            </Stack>
            <Button onClick={filterHandler} bg="#0D2725" colorScheme="green">
              Filter
            </Button>
          </Stack>

          {/*books*/}
          <Grid templateColumns="repeat(3, 1fr)" gap={10} pl={40} py={100}>
            {books.map(info => (
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
          </Grid>
        </Flex>
      </Container>

      <Footer />
    </>
  );
}

export default Shop;
