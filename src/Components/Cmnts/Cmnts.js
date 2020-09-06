import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const Cmnts = () => {
    const classes = useStyles();
    
    const [comments , setComments] = useState([]);
    const {postId} = useParams()
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      fetch(url)
      .then(res=>res.json())
      .then(data=> setComments(data))
    } ,[])

const [users,setUsers] =useState([])
  useEffect(()=>{
    fetch('https://randomuser.me/api?results=1')
    .then(res => res.json())
    .then(data=>setUsers(data.results))
  },[])

    return (
        <div>
            {
             comments.map(comment => 
               <div comment ={comment} >
                <List className={classes.root}>
                    <ListItem alignItems="flex-start">

                    <ListItemAvatar>
                        {
                        users.map(user => <div user ={user} >
                            <img src={user.picture.thumbnail} alt=""/>
                        </div>)
                        }
                    </ListItemAvatar>

                    <ListItemText
                    primary={comment.name}
                    
                    secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                <br/>
                                <h4>{comment.email}</h4>
                            </Typography>
                            <br/>
                            <h6>{comment.body}</h6>
                            </React.Fragment>
                        }
                    />
                    </ListItem>

                <Divider variant="inset" component="li" />
                </List>
              </div>)
            }
        
        </div>
    );
};

export default Cmnts;