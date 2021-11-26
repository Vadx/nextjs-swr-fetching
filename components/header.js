import Navbar from './navbar'
import { Container, Box, Text } from '@chakra-ui/react'

export default function Header ({ children }) {
  return (
    <>
      <Box bg='tomato' w='100%' p={4} mb={5} color='white'>
        <Container maxW='container.md' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text fontSize='2xl' fontWeight='700'>Next+SWR+Chanka</Text>
          <Navbar />
        </Container>
      </Box>
    </>
  )
}
