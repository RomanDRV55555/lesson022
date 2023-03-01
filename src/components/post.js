
import React from 'react'
import './post.css'
import { LikeTwoTone, DislikeTwoTone, MessageTwoTone, FireTwoTone } from '@ant-design/icons'
import { Space, Typography } from 'antd';
const { Text} = Typography;




const Post = (props) => {


   return (
       <div className='postStyle'>
           <div className='headerStyle'>
               <p style={{color : "lightgrey"}}>{props.author.name}</p>
               <p>{props.author.nickname}</p>
           </div>
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
               <p style={{color : "#eeeff5"}} > {props.likes} <LikeTwoTone /></p>
               <p style={{color : "#eeeff5"}}> {props.dislike} <DislikeTwoTone /></p>
               <p style={{color : "#eeeff5"}}> {props.comments} <FireTwoTone /></p>
               <p style={{color : "#eeeff5"}}> {props.reposts} <MessageTwoTone /></p>
               </Space>
       </div>
   );
}


export default Post;