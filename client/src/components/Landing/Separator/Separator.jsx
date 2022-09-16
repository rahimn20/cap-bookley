import { Container, Divider, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import explore from '../../../assets/Separator.svg';
// import { separator } from '../../assets/index';

function Separator() {
  return (
    <>
      <Container maxW={'8xl'}>
        <Stack direction={'row'} display="flex" align={'center'}>
          <Divider borderColor="#0D2725" />
          <Image src={explore} px={10} py={10} />
          <Divider borderColor="#0D2725" />
        </Stack>
      </Container>
    </>
  );
}

export default Separator;
