// import React from 'react'
import Head from 'next/head'
// import { Box } from "@chakra-ui/react"
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
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}
