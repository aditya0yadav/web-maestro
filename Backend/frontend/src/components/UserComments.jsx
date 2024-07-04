import React, { useState, useEffect } from 'react';
import api from "../api";
import "../style/Comment.css"; // Assuming you have a separate CSS file for UserComment

function UserComment({ blogID, newComments, service }) {
    const [userComments, setUserComments] = useState([]);
    const [visibleComments, setVisibleComments] = useState(3);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const commentsResponse = await api.get(`/api/blogs/${blogID}/get_comments/`);
                setUserComments(commentsResponse.data.reverse()); // Reverse to show latest comments first
            } catch (error) {
                alert(error.message);
            }
        };

        fetchData();
    }, [blogID, service]);

    useEffect(() => {
        if (newComments.length > 0) {
            setUserComments(prevComments => [...newComments.reverse(), ...prevComments]);
        }
    }, [newComments]);

    const handleShowMore = () => {
        setVisibleComments(prevVisibleComments => prevVisibleComments + 10);
    };

    return (
        <div className="user-comment-container">
            <h1>Review</h1>
            {userComments.slice(0, visibleComments).map(comment => (
                <div key={comment.id} className="user-comment">
                    <a href="/profile"><h2>{comment.user.charAt(0).toUpperCase()}</h2></a>
                    <p>{comment.content}</p>
                </div>
            ))}
            {visibleComments < userComments.length && (
                <button className="show-more-button" onClick={handleShowMore}>Show More</button>
            )}
        </div>
    );
}

export default UserComment;
