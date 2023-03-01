import { Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADD_POST } from './constants';
import TestPostsList from './mock-PostsList';

import './post.css'


const curID = crypto.randomUUID();

const curDate = new Date().toUTCString();

const FormEdit = () => {
    const arrNames = TestPostsList.map(element => element.author.name);
    const arrAuthors = TestPostsList.map(element => element.author);

    const dispatch = useDispatch();

    const [authorname, setAuthorName] = useState(arrNames[0]);
    const [title, setTitle] = useState('');
    const [picturelink, setPictureLink] = useState('');
    const [content, setContect] = useState('');
    const [curAuthor, setcurAuthor] = useState(arrAuthors[0]);

    const navigate = useNavigate();

    const options = arrNames.map((text, index) => {
        return <option key={index} value={index}>{text}</option>;
    });

    return (
        <div>
            <section>
                <div style={{
                    height: 'auto',
                    textalign: 'center'

                }} className='postStyle'>
                    <select value={authorname} onChange={(event) => {
                        setAuthorName(event.target.value);
                        setcurAuthor(arrAuthors[event.target.value])
                    }}>
                        {options}
                    </select>
                    <p style={{ color: '#eeeff5' }}>Author: {curAuthor.name} {curAuthor.nickname}</p>
                    <div>
                        <label >Title</label>
                        <input key="title" value={title} onChange={(event) => setTitle(event.target.value)}></input>
                    </div>
                    <div>
                        <label >Choose a picture:</label>
                        <input type="url" onInput={(event) => setPictureLink(event.target.value)}></input>
                        <img src={picturelink} alt=''></img>
                    </div>
                    <div>
                        <label >Content</label>
                        <textarea value={content} onChange={(event) => setContect(event.target.value)}></textarea>
                    </div>
                    <div>
                        <label className='labelinfo'> Date: {curDate} </label>
                    </div>

                    <div>
                        <label className='labelinfo'>ID : {curID} </label>
                    </div>

                </div>
            </section>
            <div style={{ margin: '15px', display: 'flex'}}>
                <Button style={{background : '#8fbbf7'}} onClick={() => {
                    dispatch(
                        {
                            type: ADD_POST,
                            payload: {
                                id: curID,
                                title: title,
                                author: curAuthor,
                                content: content,
                                pisture: picturelink,
                                date: curDate,
                                likes: 0,
                                dislike: 0,
                                comments: 0,
                                reposts: 0
                            }
                        }
                    );
                    navigate('/posts');
                }

                }> Save </Button>
            </div>
        </div>
    )
}

export default FormEdit;