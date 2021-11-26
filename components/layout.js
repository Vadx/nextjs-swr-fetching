import Navbar from './navbar'
import { Container } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container>
        {children}
      </Container>
    </>
  )
}