import React from "react";
import "../style/Page.css";
import Footer from "./Footer"
import Comment from "./Comment";

function Page({ blog }) {
    return (
        <>
        
        <div className="head">
            <h1>Weblog</h1>
        </div>
        <div className="blog-container-a">
            
            <div className="upper-part">
                <div className="left-part-a">
                    
                    <div className="blog-title-a">
                        <h1>{blog.title}</h1>
                    </div>
                    <div className="blog-overview">
                        <p>{blog.overview}</p>

                    </div>
                    <p className="at">Created at: {blog.created_at.slice(0,10)}</p>

                   
                </div>
                <div className="right-part">
                    <div className="image-border">
                        <div className="blog-image">
                            <img src={blog.image} alt="blog" />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="lower-part">
                <div className="blog-content-a">
                    <p>{blog.content}</p>
                    <p>{blog.content_2}</p>
                    <p>{blog.content_3}</p>
                </div>
            </div>
            <div className="comment-section">
                <Comment route={"/api/comments/"} blog={blog.id} />
            </div>
        </div>
        
        </>
    );
}

export default Page;
