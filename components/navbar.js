import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'

function Item ({ children }) {
  return (
    <Box as='li' mr={10}>
      {children}
    </Box>
  )
}

const Navbar = () => (
  <nav>
    <Box as='ul' sx={{ listStyle: 'none', display: 'flex' }}>
      <Item>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </Item>
      <Item>
        <Link href='/posts'>
          <a>Posts</a>
        </Link>
      </Item>
      <Item>
        <Link href='/users'>
          <a>Users</a>
        </Link>
      </Item>
    </Box>
  </nav>
)

export default Navbar
