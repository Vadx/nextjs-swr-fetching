import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <nav>
    <ul className='nav'>
      <li>
        <Link href='/'>
          <a className='nav-link'>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/posts'>
          <a className='nav-link'>Posts</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
