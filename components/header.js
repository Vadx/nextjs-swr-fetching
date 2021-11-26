import Navbar from './navbar'
import { Container, Box } from '@chakra-ui/react'

export default function Header({ children }) {
  return (
    <>
      <Box bg="tomato" w="100%" p={4} mb={5} color="white">
        <Container>
          <Navbar />
        </Container>
      </Box>
    </>
  )
}