"use server";

import z from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const schema = z.object({
  id: z.number(),
  authorId: z.number(),
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
});

export default async function createPost(formData: FormData) {
  const { id, authorId, title, content, published } = schema.parse(
    Object.fromEntries(formData),
  );

  const { rows } = await sql`
    INSERT INTO posts (id, author_id, title, content, published, publish_date)
    VALUES (${id}, ${authorId}, ${title}, ${content}, ${published})
    RETURNING *;
  `;

  revalidatePath(`/posts/${rows[0].id}`);
}
