import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const Post = (props) => {
    const divStyle={
        border:'1px solid black',
        margin:'30px'
    }
    const classes = useStyles();

    const {title,id} = props.post
    return (
        <div style={divStyle}>
            <Card className={classes.root}>
                <CardContent>
                    <h2>Post No : {id} </h2>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Post title : {title}
                        </Typography>
                </CardContent>
                <CardActions>
                <Link to={`/post/${id}`}>
                    <Button variant="contained" color="primary">
                        Show More Details
                    </Button>
                </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;