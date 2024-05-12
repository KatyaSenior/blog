User Stories
🐿️ As a user, I want to browse a list of posts, sortable by ascending or descending order. First part achieved.
🐿️ As a user, I want to see a list of categories, and click on a category to see a list of posts in that category. Not acheived.
🐿️ As a user, I want to be able to leave a comment sharing my thoughts on each post. ACHEIVED.

Requirements:

🎯 Created using create-next-app. ACHEIVED.

🎯 Design a SQL schema for a posts table, and a comments table that has a post_id column connecting it to the posts table. ACHEIVED but just refered to as id.

🎯 Either create a form where users can add posts OR seed your database with at least 4 posts that comments can be added to. ACHEIVED.

🎯 Add a form to the individual post page to allow creating a new comment, which is saved to the new comments table including the Post ID. ACHEIVED.

🎯 Refresh the /posts route data when adding a new post, and redirect the user to the list of posts. ACHEIVED.

🎯 Refresh the /post/:postId route when adding a new comment, so the new comment is displayed on the page. ACHEIVED.

Acheived Stretch Goals:

🏹 Add a new /posts/:id/edit route that allows editing a post. Populate the form with the post data, and save changes by updating the post in the database with a server action. ACHEIVED.

Bugs:

Problem: Blog Posts not appearing.
Cause: Code written as if there is an image in each post, but as adding an image hasn't been coded in yet, it was causing the entire post to fail.
Status: Resolved.

Problem: Redirect returned an error.
Cause: Something wrong with the redirect import. Researched the issue on StackOverflow and changed the import.
Status: Resolved.

Problem: Instead of the comments' content appearing on an individual post page, the blog post's content is repeated.
Cause: Was not fetching comments appropriately and mapping through them.
Status: Resolved.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# blog
