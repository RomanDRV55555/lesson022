import React from 'react';

import { useSelector } from 'react-redux';

import Post from '../components/post';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const PostsPage = (props) => {

    const navigate = useNavigate();

    const posts = useSelector((state) => state.posts);

    return (
        <div>
            <div style={{ margin: '15px', display: 'flex'}}>
                <Button style={{ background: '#8fbbf7'}} onClick={() => navigate('/edit')} >New post</Button>
            </div>
            {posts.map((element, i) => {
                return <Post
                    key={i}
                    author={element.author}
                    title={element.title}
                    image={element.pisture}
                    date={element.date}
                    content={element.content}
                    likes={element.likes}
                    dislike={element.dislike}
                    comments={element.comments}
                    reposts={element.reposts}
                >
                </Post>
            })}
        </div>);
};

export default PostsPage;