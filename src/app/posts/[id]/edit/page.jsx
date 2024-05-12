import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function PostPage({ params }) {
  const result = await sql`SELECT * FROM blogPosts WHERE id = ${params.id}`;
  const blogPost = result.rows[0];

  async function editPost(formData) {
    "use server";
    const title = formData.get("title");
    const content = formData.get("content");

    await sql`UPDATE blogPosts SET title=${title}, content=${content} WHERE id = ${params.id}`;

    revalidatePath("/");
    revalidatePath(`/posts/${params.id}`);

    redirect(`/posts/${params.id}`);
  }

  return (
    <div>
      <form action={editPost}>
        <label>Title</label>
        <input name="title" placeholder="Title" defaultValue={blogPost.title} />

        <label>Content</label>
        <textarea
          name="content"
          placeholder="Content"
          defaultValue={blogPost.content}
          rows={5}
        ></textarea>

        <button>Submit Changes</button>
      </form>
    </div>
  );
}
