import { Container } from '@chakra-ui/react'
import Header from './header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  )
}