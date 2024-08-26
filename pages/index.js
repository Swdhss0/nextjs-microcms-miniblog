
import styles from '../styles/Home.module.scss'
import {useState} from 'react';
import {client} from '../libs/client';
import Link from 'next/link';

//ssg
export const getStaticProps = async() => {
  const data = await client.get({endpoint: "blogs"});

  return {
    props: {
      blogs: data.contents,
    },
  }
};

export default function Home({blogs}) {

  return (
    <div>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            {blog.title}
          </Link>
        </li>
      ))}
    </div>
  )
}
