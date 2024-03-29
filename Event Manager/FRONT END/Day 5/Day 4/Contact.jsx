/* eslint-disable react/no-unescaped-entities */
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

// Define your custom theme
const theme = extendTheme({
  colors: {
    // Customize your colors if needed
  },
});

const ContactPage = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        // Redirect to another page when the arrow back icon is pressed
        navigate('/home'); // Update '/other-page' with the actual path
      };
  return (
    
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
        <ArrowBackIcon onClick={handleGoBack} className='arrow-back' style={{fontSize:'60px'}}/>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Contact Us</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Have questions or need assistance? Feel free to reach out to us.
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <Box>
              <Heading fontSize={'2xl'}>Get in Touch</Heading>
              <Text color={'gray.600'}>We'd love to hear from you!</Text>
            </Box>
            <Box>
              <Text fontWeight={'bold'}>Email:</Text>
              <Link color={'blue.400'} href="mailto:info@example.com">
                ujjual@gmail.com
              </Link>
            </Box>
            <Box>
              <Text fontWeight={'bold'}>Phone:</Text>
              <Text>91+ 9677652212</Text>
            </Box>
            <Box>
              <Text fontWeight={'bold'}>Address:</Text>
              <Text>123 Main St, Hosur, India</Text>
            </Box>
            <Box>
              <Text fontWeight={'bold'}>Business Hours:</Text>
              <Text>Mon-Fri: 9 AM - 5 PM</Text>
            </Box>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Send Message
                </Button>
                <Button
                  variant="outline"
                  color={'blue.400'}
                  _hover={{
                    color: 'blue.500',
                  }}
                >
                  View FAQs
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};


const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ContactPage />
    </ChakraProvider>
  );
};

export default App;
