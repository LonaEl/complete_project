import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@mui/material/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ThemeProvider from '@mui/system/ThemeProvider'
import { getPost, getPostsBySearch } from '../../actions/posts';
import CommentSection from './CommentSection';
import Pdf from '../Pdf/Pdf';
import theme from './styles';

const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => navigate(`/posts/${_id}`);

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
      <Paper>
        <CircularProgress size="7em" />
      </Paper>
      </ThemeProvider>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <ThemeProvider theme={theme}>
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div>
        <div>
          <Typography variant="h3" component="h2">{post.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography> 
          <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
          <Typography variant="h6">
            Created by:
            <Link to={`/creators/${post.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` ${post.name}`}
            </Link>
          </Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Divider style={{ margin: '20px 0' }} />
             <CommentSection post={post} />
           <Divider style={{ margin: '20px 0' }} />
        </div>
         <div >
          <img  src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div>
      </div>
     <Pdf />
{!!recommendedPosts.length && (
        <div>
        <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div>
            {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{message}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <img src={selectedFile} alt='' width="200px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
    </ThemeProvider>
  );
};

export default Post;