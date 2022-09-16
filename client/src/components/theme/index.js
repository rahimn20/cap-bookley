import { extendTheme, theme as base } from '@chakra-ui/react';
import './style.css';
const theme = extendTheme({
  fonts: {
    heading: `Assistant, ${base.fonts?.heading}`,
    body: `Assistant, ${base.fonts?.body}`,
  },
});

export default theme;
