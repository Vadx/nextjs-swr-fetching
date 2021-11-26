// import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import useSWR from 'swr'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Users () {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)

  if (error) {
    console.log(error)
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Users</title>
        <meta name='description' content='All posts' />
      </Head>
      <Box>
        {data.map((user) => (
          <Box
            key={user.id}
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            mb='20px'
            px={5}
            py={3}
            shadow='md'
          >
            <Box
              mt='1'
              mb='2'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              {user.name}
            </Box>
            <Box color='gray.600' fontSize='sm'>
              <EmailIcon w={3} h={3} /> {user.email}
            </Box>
            <Box color='gray.600' fontSize='sm' mb={2}>
              <PhoneIcon w={3} h={3} /> {user.phone}
            </Box>
            <Box color='gray.600' fontSize='sm'>
              Adress: {user.address.city} {', '} {user.address.suite}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )
}
