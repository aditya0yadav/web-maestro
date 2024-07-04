import { useState } from 'react';
import api from "../api";
import UserComment from './UserComments';
import "../style/Comment.css";

function Comment({ route, blog }) {
    const [content, setContent] = useState("");
    const maxWord = 500;
    const [userComments, setUserComments] = useState([]);
    const [service, setService] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = localStorage.getItem('loggedInUser');
        const wordCount = content.trim().split(/\s+/).length;
        if (wordCount > maxWord) {
            console.error('Word limit exceeded');
            return;
        }

        try {
            const res = await api.post(route, { user, content, blog });
            const newComment = res.data;
            setUserComments(prevComments => [newComment, ...prevComments]);
            setContent("");
            setService(!service);
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    const handleInputChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <>
            <div className="comment-container">
                <div className="comment-profile">
                    <h2>{localStorage.getItem('loggedInUser').slice(0, 1).toUpperCase()}</h2>
                </div>
                <div className="comment-content">
                    <form onSubmit={handleSubmit} className="comment-form">
                        <textarea
                            className="comment-form-textarea"
                            value={content}
                            onChange={handleInputChange}
                            placeholder="Write your comment..."
                            rows={5}
                            // columns={4} // Initial number of rows
                        />
                        <button className="comment-submit-button" type="submit">
                            Comment
                        </button>
                        <div className="comment-user-panel">
                            <UserComment blogID={blog} newComments={userComments} service={service} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Comment;
