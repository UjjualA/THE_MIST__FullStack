import {
  Box,
  Flex,
  Heading,
  Input,
  Stack,
  Button,
  FormControl,
  FormLabel,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  ChakraProvider,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Select,
  extendTheme,
} from '@chakra-ui/react';

// Define your custom theme
const theme = extendTheme({
  colors: {
    // Customize your colors if needed
  },
});

const ResponsiveForm = () => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Fill The Details in this form</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="name" >
              <FormLabel>First Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="name" >
              <FormLabel>Last Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" >
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="phone" >
              <FormLabel>Phone Number</FormLabel>
              <Input type="number"/>
            </FormControl>
            <FormControl id="date">
              <FormLabel>Date of Birth</FormLabel>
              <Input type="date" />
            </FormControl>
            <FormControl id="slider">
              <FormLabel>Price </FormLabel>
              <Slider defaultValue={50}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>
            <FormControl id="country">
              <FormLabel>Events</FormLabel>
              <Select placeholder="Select Events">
                <option>Birthday Party</option>
                <option></option>
                <option>UK</option>
                {/* Add more options as needed */}
              </Select>
            </FormControl>
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
                  Sign up
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
      <ResponsiveForm />
    </ChakraProvider>
  );
};

export default App;
