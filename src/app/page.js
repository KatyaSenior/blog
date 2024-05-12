import { sql } from "@vercel/postgres";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

export default async function Home() {
  const blogPosts = await sql`SELECT*FROM blogPosts`;
  const postComments = await sql`SELECT*FROM postComments`;
  console.log({ blogPosts });
  return (
    <div>
      <h1>Blog Posts</h1>
      {blogPosts.rows.map((blogPost) => {
        return (
          <div key={blogPost.id}>
            <h3>{blogPost.title}</h3>
            <p>{blogPost.content}</p>
            <div key={postComments.id}></div>
            <Link href={`/posts/${encodeURIComponent(blogPost.id)}`}>
              See comments
            </Link>
          </div>
        );
      })}
    </div>
  );
}
