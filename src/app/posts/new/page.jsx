import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export default function NewPostsPage() {
  async function handleSavePost(formData) {
    "use server";
    console.log("Saving post to the database...");
    const title = formData.get("title");
    const content = formData.get("content");

    await sql`INSERT INTO blogPosts (title, content) VALUES (${title}, ${content})`;
    console.log("Post saved!");
    revalidatePath("/app");
    console.log("Post saved!");
  }
  return (
    <form action={handleSavePost}>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" />
      <button type="submit">Save</button>
    </form>
  );
}
