import React from "react";
import "../style/Blog.css"

function Blog({ blog}) {
    const formattedDate = new Date(blog.created_at).toLocaleDateString("en-US")

    return (
        <div className="blog-container">
          <p className="blog-title">{blog.title}</p>
          <p className="blog-content">{blog.content}</p>
          <p className="blog-date">{formattedDate}</p>
        </div>
    );
}

export default Blog;