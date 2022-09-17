import React, { useContext } from 'react';
import {
  Box,
  Flex,
  HStack,
  Input,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  InputGroup,
  InputRightElement,
  useDisclosure,
  // useColorModeValue,
  Stack,
  Icon,
  Link,
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, Search2Icon } from '@chakra-ui/icons';
import { FaHeart, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import SearchResults from './SearchResults';
import BookContext from '../context/books';

const navLinks = ['Home', 'Featured', 'Top Selling', 'Recent', 'Shop'];

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);
  const { books, getBooks } = useContext(BookContext);

  React.useEffect(() => {
    const fetchBook = async () => {
      await getBooks();
    };
    fetchBook();
  }, [getBooks]);

  const onChangeHandler = text => {
    let matches = [];
    if (text.length > 0) {
      matches = books.filter(bk => {
        const regEx = new RegExp(`${text}`, 'gi');
        return bk.title.match(regEx);
      });
    }
    console.log({ matches });
    setSuggestions(matches);
    setText(text);
  };

  return (
    <>
      <Box bg="#0D2725" px={4}>
        <Container maxW="8xl">
          <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box fontWeight={700} fontSize="4xl" color="#FFFFFF">
                Bookley
              </Box>
            </HStack>
            <HStack
              as={'nav'}
              spacing={4}
              // minWidth="730px"
              width="730px"
              display={{ base: 'none', md: 'flex' }}
            >
              <Flex
                pos={'relative'}
                flexDirection={'column'}
                width={'full'}
                alignItems="center"
              >
                <InputGroup>
                  <Input
                    //   focusBorderColor="#0D2725"
                    // width="730px"
                    bg="#FFFFFF"
                    // autoComplete="off"
                    placeholder="Search by Title"
                    size="md"
                    value={text}
                    onChange={e => onChangeHandler(e.target.value)}
                  />
                  <InputRightElement
                    children={<Search2Icon color="gray.300" />}
                  />
                </InputGroup>

                {suggestions.length > 0 && (
                  <Box
                    maxH="70vh"
                    p="0"
                    overflowY="auto"
                    zIndex={1}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 16px)',
                      backgroundColor: '#ccc',
                      borderRadius: '0px 0px 15px 15px',
                      shadow: 'lg',
                    }}
                  >
                    <Box px={4}>
                      <Box as="ul" pt={2} pb={4}>
                        <SearchResults suggestions={suggestions} />
                      </Box>
                    </Box>
                  </Box>
                )}
              </Flex>
            </HStack>
            <Flex alignItems={'center'} gap="30px">
              <Menu>
                <Icon
                  as={FaHeart}
                  h={7}
                  w={7}
                  alignSelf="center"
                  color="#FFFFFF"
                ></Icon>
                <Icon
                  as={FaShoppingCart}
                  h={7}
                  w={7}
                  alignSelf="center"
                  color="#FFFFFF"
                ></Icon>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Icon
                    as={FaUserAlt}
                    h={7}
                    w={7}
                    alignSelf="center"
                    color="#FFFFFF"
                  ></Icon>
                </MenuButton>
                <MenuList>
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Order History</MenuItem>
                  <MenuDivider />
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                <InputGroup>
                  <Input
                    //   focusBorderColor="#0D2725"
                    //   width="730px"
                    bg="#FFFFFF"
                    autoComplete="off"
                    placeholder="Search by Title"
                    size="md"
                  />
                  <InputRightElement
                    children={<Search2Icon color="gray.300" />}
                  />
                </InputGroup>
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>

      <Stack
        direction={'row'}
        align={'center'}
        justifyContent={'center'}
        gap={10}
        bg="#ffeed6"
        py={'10px'}
      >
        {navLinks.map(navL => (
          <Link key={navL} href={'#'} fontSize="20px" fontWeight={400}>
            {navL}
          </Link>
        ))}
      </Stack>
    </>
  );
}

export default Navbar;
