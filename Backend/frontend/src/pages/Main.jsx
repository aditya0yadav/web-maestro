import React,{useState,useEffect} from "react";
import Card from "../components/Cards";
import api from "../api";
import "../style/Main.css";

function Main(){
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs =() =>{
        api
        .get("/api/blogs/")
        .then((res) => res.data)
        .then((data) => {
            setBlogs(data);
        })
    }
    return(
        <>
            <div className="blog-container">
                <div class="h1-tag">
                    <h1>Weblog Collections</h1>
                </div>
                <div className="card-wrapper">
                    {blogs.map((blog) => (
                        <Card key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </>
    )

}
export default Main;