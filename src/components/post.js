
import React, { useState } from 'react'
import './post.css'
import { LikeTwoTone, DislikeTwoTone, MessageTwoTone, FireTwoTone } from '@ant-design/icons'
import { Space, Typography } from 'antd';
const { Text} = Typography;

const Post = (props) => {


    const [likes, setLikes] = useState(props.likes);
    const [dislike, setDislike] = useState(props.dislike);
    const [comments, setComments] = useState(props.comments);
    const [reposts, setReposts] = useState(props.reposts);
    
   return (
       <div className='postStyle'>
           <div className='headerStyle'>
               <p style={{color : "lightgrey"}}>{props.author.name}</p>
               <p>{props.author.nickname}</p>
           </div>
           <h3>
                {props.title}
           </h3>
           <div className='contentStyle'>
               <img
                   alt=''
                   src={props.image}
               ></img>
               <p>
                   {props.content}
               </p>
           </div>
           <Space direction='horizontal' size={'large'}>
               <Text type="success">
                   {props.date}
               </Text>
               <p style={{color : "#FFFFFF"}} > {likes} <LikeTwoTone onClick = {() => setLikes( (likes === props.likes? props.likes + 1:props.likes) )} /></p>
               <p style={{color : "#EDEFFF"}} > {dislike} <DislikeTwoTone onClick = {() => setDislike( (dislike === props.dislike? props.dislike + 1:props.dislike) )} /></p>
               <p style={{color : "#DEE1FF"}} > {comments} <FireTwoTone onClick={() => setComments( (comments === props.comments?props.comments + 1:props.comments) ) }/></p>
               <p style={{color : "#CDD2FF"}} > {reposts} <MessageTwoTone onClick={() => setReposts( (reposts === props.reposts? props.reposts + 1: props.reposts) ) }/></p>
               </Space>
       </div>
   );
}


export default Post;