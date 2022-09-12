import React, {useState} from 'react';
//import Axios from 'axios';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { claim } from '../../actions/claim';

const Claim = () => {
  const [claimData, setClaimData] = useState({
    firstName: '', lastName: '', email: '', amount: '', bankName: '', accountNumber: '', typeOfAccount: ''
  });
const dispatch = useDispatch();
const history = useHistory();

 const Submit = (e) => {
    e.preventDefault();
      dispatch(claim(claimData));
};

  return (
    <Paper elevation={6} >
      <Typography variant='h6' >Claiming form</Typography>

      <form autoComplete='off' onSubmit={Submit} >
      <TextField 
        name="fistName" 
        variant="outlined" 
        label="First Name" 
        fullWidth 
       value={claimData.firstName} 
       onChange={(e) => setClaimData({...claimData, firstName:e.target.value})}
         />

      <TextField 
        name="lastName" 
        variant="outlined" 
        label="Last Name" 
        fullWidth 
        value={claimData.lastName} 
        onChange={(e) => setClaimData({...claimData, lastName:e.target.value})}
         />
      
       <TextField 
        name="email" 
        variant="outlined" 
        label="Email" 
        fullWidth 
        value={claimData.email} 
       onChange={(e) => setClaimData({...claimData, email:e.target.value})}
         />

         <TextField 
        name="amount" 
        variant="outlined" 
        label="Amount" 
        fullWidth 
        value={claimData.amount} 
        onChange={(e) => setClaimData({...claimData, amount:e.target.value})}
         />
         <TextField 
        name="bankName" 
        variant="outlined" 
        label="Name of the bank" 
        fullWidth 
        value={claimData.bankName} 
       onChange={(e) => setClaimData({...claimData, bankName:e.target.value})}
         />
         <TextField 
        name="accountNumber" 
        variant="outlined" 
        label="Account Number" 
        fullWidth 
        value={claimData.accountNumber} 
        onChange={(e) => setClaimData({...claimData, accountNumber:e.target.value})}
         />
    <TextField 
        name="typeOfAccount" 
        variant="outlined" 
        label="Type of Account" 
        fullWidth 
        value={claimData.typeOfAccount} 
        onChange={(e) => setClaimData({...claimData, typeOfAccount:e.target.value})}
         />
       <Button type="submit">Submit</Button>
      </form>
    </Paper>
  )
}

export default Claim