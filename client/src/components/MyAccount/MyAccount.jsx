import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { FaUserEdit, FaPlus } from 'react-icons/fa';
import NavItem from './NavItem';

function MyAccount() {
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [quantity, setQuantity] = React.useState(0);
  const [price, setPrice] = React.useState('');
  const [available, setIsAvailable] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState('');

  const categories = [
    'Arts and Crafts',
    'Business and Management',
    'Fiction',
    'Non Fiction',
    'History',
  ];

  const LinkItems = [
    { name: 'Edit User', icon: FaUserEdit, href: '/edit-user' },
    { name: 'Add New Book', icon: FaPlus, href: '/add-new' },
    { name: 'Order History', icon: FaPlus, href: '/order-history' },
  ];

  const handleSubmit = async e => {
    // e.preventDefault();
    const books = {
      title,
      author,
      description,
      category,
      quantity,
      price,
      available,
      imageUrl,
    };
    console.log({ books });
    try {
      fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(books),
      }).then(res => res.json());
    } catch (error) {
      console.error('Error adding a new book', error);
    }
  };

  return (
    <>
      <Navbar />

      <Container maxW={'8xl'}>
        <Stack direction={'row'}>
          <Flex py={25}>
            <Stack>
              {LinkItems.map(linkk => (
                <NavItem key={linkk.name} icon={linkk.icon}>
                  {linkk.name}
                </NavItem>
              ))}
            </Stack>
            <Divider orientation="vertical" borderColor="#0D2725" />
          </Flex>

          <Flex flexDirection={'column'} pl={10}>
            <Heading fontSize="48px" fontWeight="700" color="#0D2725" py={25}>
              Add Book
            </Heading>
            <Flex maxW={'full'} flexDirection={'column'} gap={3} pb={30}>
              <FormControl id="title">
                <Input
                  focusBorderColor="#0D2725"
                  autoComplete="off"
                  placeholder="Enter book title"
                  size="md"
                  value={title}
                  onChange={e => {
                    setTitle(e.target.value);
                  }}
                ></Input>
              </FormControl>
              <FormControl id="author">
                <Input
                  focusBorderColor="#0D2725"
                  autoComplete="off"
                  placeholder="Enter author name"
                  size="md"
                  value={author}
                  onChange={e => {
                    setAuthor(e.target.value);
                  }}
                ></Input>
              </FormControl>
              <FormControl id="description">
                <Textarea
                  focusBorderColor="#0D2725"
                  autoComplete="off"
                  placeholder="Enter book description"
                  size="md"
                  value={description}
                  onChange={e => {
                    setDescription(e.target.value);
                  }}
                ></Textarea>
              </FormControl>
              <Select
                value={category}
                onChange={e => setCategory(e.target.value)}
                placeholder="Select category"
              >
                {categories.map(cat => (
                  <option value={cat} key={cat}>
                    {cat}
                  </option>
                ))}
              </Select>
              <FormControl id="quantity">
                <Input
                  focusBorderColor="#0D2725"
                  autoComplete="off"
                  placeholder="Enter book quantity"
                  size="md"
                  value={quantity}
                  onChange={e => {
                    setQuantity(e.target.value);
                  }}
                ></Input>
              </FormControl>
              <FormControl id="price">
                <Input
                  focusBorderColor="#0D2725"
                  autoComplete="off"
                  placeholder="Enter book price"
                  size="md"
                  value={price}
                  onChange={e => {
                    setPrice(e.target.value);
                  }}
                ></Input>
              </FormControl>
              <Checkbox
                checked={available}
                onChange={e => {
                  setIsAvailable(e.target.checked);
                }}
              >
                Is book available?
              </Checkbox>
              <FormControl id="imageUrl">
                {/* <input type='file' name='file' onChange={handleFileChange}></input> */}
                {/* <input
                  type={'file'}
                  name="image"
                  border="none"
                  size="md"
                  //   value={imageUrl}
                  onChange={e => {
                    setImageUrl(e.target.files[0]);
                  }}
                    // onChange={e => {
                    //   setImageUrl(e.target.imageUrl);
                    // }}
                ></input> */}
                <Input
                  focusBorderColor="#0D2725"
                  autoComplete="off"
                  placeholder="Enter image URL"
                  size="md"
                  value={imageUrl}
                  onChange={e => {
                    setImageUrl(e.target.value);
                  }}
                ></Input>
              </FormControl>
              <Button
                bg="#0D2725"
                colorScheme="green"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Add Book
              </Button>
            </Flex>
          </Flex>
        </Stack>
      </Container>

      <Footer />
    </>
  );
}

export default MyAccount;
