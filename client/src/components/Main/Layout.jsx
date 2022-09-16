import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Landing from '../Landing/Landing';
import theme from '../theme/index';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Shop from '../Pages/Shop/Shop';
import ProductPage from '../Pages/Product/ProductPage';
import Cart from '../Pages/Cart/Cart';
import MyAccount from '../MyAccount/MyAccount';

function Layout() {
  return (
    <>
      <ChakraProvider theme={theme}>
        {/* <ColorModeSwitcher
          justifySelf="flex-end"
          position="absolute"
          top={4}
          right={3}
        /> */}
        <Router>
          <Routes>
            {/* <Route exact path="/" element={<FirstPage />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Landing />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/my-account" element={<MyAccount />} />
            {/* <Route element={<Error />} /> */}
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default Layout;
