// import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import useSWR from 'swr'

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
          >
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {user.name}
            </Box>
            <Box color="gray.600" fontSize="sm">
              {user.email}
            </Box>
            <Box color="gray.600" fontSize="sm">
              Adress: {user.address.city} {', '} {user.address.suite}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )
}
