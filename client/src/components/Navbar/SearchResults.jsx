import { Box, Grid, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import { nanoid } from 'nanoid';

function SearchResults({ suggestions }) {
  const navigate = useNavigate();

  const handleClick = bks => {
    navigate(`/product/${bks}`);
  };
  
  return (
    // <div>{suggestions.title}</div>
    <Grid gridRowGap={'1rem'}>
      {suggestions.map((suggestion, index) => (
        <Box
          onClick={() => handleClick(`${suggestion._id}`)}
          key={suggestion.id}
          maxW={'full'}
          bg="#FAFAFA"
          color="#0D2725"
          _hover={{
            background: '#0D2725',
            color: '#FFFFFF',
            cursor: 'pointer',
          }}
          p=".5rem 1rem"
        >
          <Grid
            sx={{
              gridTemplateColumns: '50px 1fr',
              gridColumnGap: '1rem',
              height: '70px',
              overflow: 'hidden',
            }}
          >
            <Box>
              <Image
                src={suggestion.imageUrl}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
            <VStack align={'start'}>
              <Text noOfLines={1}>{suggestion.title}</Text>
              <Text noOfLines={1}>{suggestion.description}</Text>
            </VStack>
          </Grid>
        </Box>
      ))}
    </Grid>
  );
}

export default SearchResults;
