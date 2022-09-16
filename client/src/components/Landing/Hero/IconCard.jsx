import React from 'react';
import { Heading, Stack, Text, Icon, HStack } from '@chakra-ui/react';

function IconCard({ icon, title, description }) {
  return (
    <>
      <HStack spacing={4}>
        <Icon as={icon} h={35} w={35} alignSelf="center" color="#0D2725"></Icon>
        <Stack spacing={0}>
          <Heading fontSize="28px" fontWeight="600" color="#0D2725">
            {title}
          </Heading>
          <Text fontSize="20px" fontWeight="400" color="#0D2725">
            {description}
          </Text>
        </Stack>
      </HStack>
    </>
  );
}

export default IconCard;
