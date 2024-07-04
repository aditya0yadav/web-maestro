import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import Page from "../components/Page";
import LoadingSpinner from "../components/Loading";
import "../style/Page.css";

function BlogPage() {
    const [blog, setBlog] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getBlog = async () => {
            try {
                const response = await api.get(`/api/blogs/${id}`);
                setBlog(response.data);
            } catch (error) {
                alert("Failed to fetch blog post.");
            }
        };

        getBlog();
    }, [id]);

    return (
        <div className="page_wrapper">
            {blog ? (
                <Page key={blog.id} blog={blog} />
            ) : (
                <LoadingSpinner/>
            )}

            
        </div>
    );
}

export default BlogPage;
