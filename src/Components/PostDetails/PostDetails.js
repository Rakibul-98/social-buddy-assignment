import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cmnts from '../Cmnts/Cmnts';


const PostDetails = () => {

    const commentStyle={
        marginLeft:'60px',
        padding:'10px'
    }
    const {postId} = useParams();

    const [postDetails , setPostDetails] = useState({});
    useEffect(()=>{
        const postUrl=`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(postUrl)
        .then(res=>res.json())
        .then(data=>setPostDetails(data))
    } ,[])

    return (
        <div style={commentStyle}>
           <div>
                <h1>This is post details of : <span className="text-danger">{postId}</span> </h1>
                <br/>
                <h2><span className="text-success">Post title</span> : {postDetails.title} </h2>
                <br/>
                <h4><span className="font-weight-bold text-primary">Post body</span> : {postDetails.body} </h4>
                <br/>
            </div>
                <h2 className="text-danger">Comments</h2>
            <Cmnts/>
        </div>
    );
};

export default PostDetails;