import Image from "next/image";
import { sql } from "'vercel/postgres";

export default async function Home() {
  const blogPosts = await sql`SELECT*FROM blogPosts`;
  return (
    <div>
      <h1>blogPosts</h1>
      {blogPosts.rows.map((blogPost) => {
        return (
          <div key={blogPost.id}>
            <h3>{blogPost.title}</h3>
            <p>{blogPost.content}</p>
            <Image
              src={`${blogPost.title}`}
              alt={blogPost.title}
              width={300}
              height={300}
            />
          </div>
        );
      })}
    </div>
  );
}
