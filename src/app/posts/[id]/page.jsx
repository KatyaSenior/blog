import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function PostPage({ params }) {
  const result = await sql`SELECT * FROM blogPosts WHERE id = ${params.id}`;
  const blogPost = result.rows[0];
  const commentResults =
    await sql`SELECT * FROM postComments WHERE blogPostId = ${blogPost.id}`;
  const postComments = commentResults.rows;
  console.log(params);
  console.log(postComments);

  async function handleSavePost(formData) {
    "use server";
    console.log("Saving post to the database...");
    const blogPostId = blogPost.id;
    const content = formData.get("content");

    await sql`INSERT INTO postComments (blogPostId, content) VALUES (${blogPost.id}, ${content})`;
    console.log("Comment saved!");
    revalidatePath(`/posts/${encodeURIComponent(blogPost.id)}`);
    function refreshPage() {
      window.location.reload();
    }
  }

  return (
    <div key={blogPost.id}>
      <h3>{blogPost.title}</h3>
      <p>{blogPost.content}</p>
      {postComments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
        </div>
      ))}
      <form action={handleSavePost}>
        <label htmlFor="content">New Comment</label>
        <textarea id="content" name="content" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
