import React, { useState, useEffect } from 'react';
import Card from '../components/Cards'; // Correctly import your Card component
import "../style/Home.css";
import api from '../api'; // Make sure to import your API helper or axios instance
import {Link} from "react-router-dom";
function Home() {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    getBlogs();
  }, []);
  

  const getBlogs = () => {
    api
      .get("/api/blogs/")
      .then((res) => res.data)
      .then((data) => {
        setBlogs(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  return (
    <>
        <div className="blog-container">

            <Link to="/" className="header">
              <h2 >Latest Blog</h2>
            </Link>
            <div className="card-wrapper">
                {blogs.map((blog) => (
                    <Card key={blog.id} blog={blog} />
                ))}
            </div>
        </div> 
    </>
);
}

export default Home;
