// src/pages/Blog.jsx
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Blog = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/blog/first-post.md")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Failed to load markdown:", err));
  }, []);

  return (
    <div className="prose mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Post</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Blog;
