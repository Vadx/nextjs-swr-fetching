// import React from 'react'
import Head from 'next/head'
import { Box, Heading } from "@chakra-ui/react"
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Posts() {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);

  if (error) {
    console.log(error)
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="All posts" />
      </Head>
      <Box>
        {data.map((post) => (
          <Box
            key={post.id}
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            mb='20px'
            px={5}
            py={3}
          >
            <Heading as="h4" size="sm">
              {post.title}
            </Heading>
          </Box>
        ))}
      </Box>
    </>
  )
}
