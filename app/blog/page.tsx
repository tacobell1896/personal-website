import BlogSnippets from "./blog-snippets";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <p>
        Below are some thoughts of mine, ranging from how I worked through a
        tough problem to my thoughts on various books, movies, and video games.
      </p>
      <ul>
        <BlogSnippets />
      </ul>
    </div>
  );
}
