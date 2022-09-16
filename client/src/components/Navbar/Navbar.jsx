import React from 'react';
// import { ReactNode } from 'react';
import {
  Box,
  Flex,
  // Avatar,
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

const navLinks = ['Home', 'Featured', 'Top Selling', 'Recent', 'Shop'];
//   const NavLink = ({ children }: { children: ReactNode }) => (
//     <Link
//       px={2}
//       py={1}
//       rounded={'md'}
//       _hover={{
//         textDecoration: 'none',
//         bg: useColorModeValue('gray.200', 'gray.700'),
//       }}
//       href={'#'}>
//       {children}
//     </Link>
//   );

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              <InputGroup>
                <Input
                  //   focusBorderColor="#0D2725"
                  // width="730px"
                  bg="#FFFFFF"
                  autoComplete="off"
                  placeholder="Search by Title"
                  size="md"
                />
                <InputRightElement
                  children={<Search2Icon color="gray.300" />}
                />
              </InputGroup>
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
                  {/* <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                /> */}
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
        {navLinks.map(l => (
          <Link href={'#'} fontSize="20px" fontWeight={400}>
            {l}
          </Link>
        ))}
      </Stack>
    </>
  );
}

export default Navbar;
