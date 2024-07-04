import "../style/Card.css"
import {Link} from "react-router-dom";

function Card({ blog }) {
    // Function to limit content to first 200 words
    const truncateContent = (content, limit) => {
        const words = content.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + ' ..';
        }
        return content;
    };
    const truncateTitle = (title, limit) => {
        const words = title.split(' ');
        if (words.length > limit){
            return words.slice(0,limit).join(' ') + ' ..';

        }
        return title ;
    }
    
    return (
        <div className="container-one">
            <div className="image">
                    <Link to={`/blog/${blog.id}`}>
                        <img src={blog.image || "download.jpeg"} alt={blog.title} />
                    </Link>
            </div>
            <div className="second">
                <div className="title">
                    <Link to={`/blog/${blog.id}`}>
                    <h2>{truncateTitle(blog.title,6)}</h2>
                    </Link>
                </div>
                <div className="description">
                    <p>{truncateContent(blog.content, 40)}</p>
                </div>
                <div className="date">
                    <p>{new Date(blog.created_at).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;

