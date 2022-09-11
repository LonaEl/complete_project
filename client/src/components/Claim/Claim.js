import React from 'react';
//import Axios from 'axios';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { claim } from '../../actions/claim';

const Claim = () => {
const dispatch = useDispatch();
const history = useHistory();

 const Submit = (e) => {
    e.preventDefault();
       dispatch(claim())
};

  return (
    <Paper elevation={6} >
      <Typography variant='h6' >Claiming form</Typography>
      <form onSubmit={Submit} >
      <TextField 
        name="fullName" 
        variant="outlined" 
        label="Full Name" 
        fullWidth 
       // value={postData.title} 
       // onChange={(e) => setPostData({ ...postData, title: e.target.value })}
         />
         <TextField 
        name="email" 
        variant="outlined" 
        label="Email" 
        fullWidth 
        //value={postData.title} 
        //onChange={(e) => setPostData({ ...postData, title: e.target.value })}
         />
         <TextField 
        name="amount" 
        variant="outlined" 
        label="Amount" 
        fullWidth 
     //   value={postData.title} 
      //  onChange={(e) => setPostData({ ...postData, title: e.target.value })}
         />
         <TextField 
        name="bankName" 
        variant="outlined" 
        label="Name of the bank" 
        fullWidth 
       // value={postData.title} 
        //onChange={(e) => setPostData({ ...postData, title: e.target.value })}
         />
         <TextField 
        name="accountNumber" 
        variant="outlined" 
        label="Account Number" 
        fullWidth 
      //  value={postData.title} 
        //onChange={(e) => setPostData({ ...postData, title: e.target.value })}
         />
    <TextField 
        name="typeOfAccount" 
        variant="outlined" 
        label="Type of Account" 
        fullWidth 
       // value={postData.title} 
      //  onChange={(e) => setPostData({ ...postData, title: e.target.value })}
         />
       <Button type="submit">Submit</Button>
      </form>
    </Paper>
  )
}

export default Claim