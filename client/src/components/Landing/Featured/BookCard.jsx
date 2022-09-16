import React from 'react';
import { Heading, Stack, Text, Image } from '@chakra-ui/react';

function BookCard({ img, title, author, price }) {
  return (
    <>
      <Stack w="full" maxW="md" spacing={0}>
        <Image objectFit="cover" h="full" src={img} />
        <Heading fontSize="24px" fontWeight="600" color="#0D2725" pt={5}>
          {title}
        </Heading>
        <Text fontSize="20px" fontWeight="400" color="#0D2725">
          {author}
        </Text>
        <Text fontSize="24px" fontWeight="600" color="#0D2725">
          PKR {price}
        </Text>
      </Stack>
    </>
  );
}

export default BookCard;
