import React from 'react';
import '../style/About.css'; // Assuming your CSS file is in the correct directory
import mine from '../media/mine.jpg'; // Assuming your image path is correct

function About() {
    return (
        <div className="about-main-container">
            <div className="main-container">
                <div class="about-title">
                    <h1>About Aditya Yadav </h1>
                </div>
                <div className="image-about">
                    <img src={mine} alt="Aditya Yadav" />
                </div>
                {/* <div className="name-about">
                    <h1>Aditya Yadav</h1>
                </div> */}
                <div className="about-content">
                    <h1>Hi! I’m Aditya Yadav</h1>
                    <p>A Software Engineer, and if you’ve ever asked yourself:</p>
                    <ul>
                        <li>“How do I master JavaScript and React to build powerful web applications?”</li>
                        <li>“How do I develop robust backends using Django?”</li>
                        <li>“How do I leverage machine learning libraries to create intelligent systems?”</li>
                        <li>“How do I integrate front-end and back-end technologies seamlessly?”</li>
                        <li>“How do I optimize web applications for performance and scalability?”</li>
                    </ul>
                    <p>Or if you’ve just wanted to know more about software development in general and how to become a better developer - then you are in the right place!</p>

                    <h2>Here’s the deal:</h2>

                    <p>I believe to become a better developer you MUST get a deeper understanding of the technologies and frameworks you use daily. This includes mastering JavaScript and React for the front-end, Django for the back-end, and utilizing machine learning libraries for intelligent applications. To get this deeper understanding, you MUST build and integrate these systems yourself.</p>
                    <p>So, to become better, you need to understand better, and to understand better, you must build and experiment with these technologies. And that is exactly what I am going to do on this blog. I am going to show you how to get started and keep going, so you too, can become a better developer and take control of these systems. I also plan to learn a ton with you and from you. You can take a look at my various projects and experiments on GitHub.</p>

                    <h2>My Story</h2>
                    <p>I live in beautiful Delhi, and I’m passionate about continuously learning and improving my skills.</p>
                    <p>I’ve learned that, at least for me, the best way to learn how a technology works is to build projects with it and understand its nuances. So if you are anything like me, then please read my posts, build something you’re interested in, and tell me about your experience.</p>
                    <p>Thanks for dropping by and taking the time to read this. I hope to see you on the blog sometime soon. Cheers!</p>
                </div>
            </div>
        </div>
    );
}

export default About;
