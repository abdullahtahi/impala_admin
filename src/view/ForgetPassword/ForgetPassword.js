// import { Box, Button, Paper, TextField } from '@mui/material'
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import  TextField  from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import "./ForgetPassword.css"
// import Paper from "@mui/material/Paper"


import React, { useState } from 'react'

export default function ForgetPassword() {
 
  const [email,setemail]=useState()
  const [emailerror,setemailerror]=useState()
 
 
  const validation = (name, value) => {
    if(name=="email")
    {
        const res=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    if(!res.test(value))
    {
        setemailerror("the email is not correct")
    }
    }
  }
 
 return (
<Grid style={{
  width:"1250px",margin:"0 auto"}}>
  
<Paper style={{
        padding:"10px",
        background:"#1f1d61",
        color:"white",
        marginBottom:"10px"
  
      }} elevation={3}>Welcome to Imapala Admin</Paper>
<Paper style={{
        padding:"10px",
        background:"#1f1d61",
        color:"white"
  
      }} elevation={3}>Forgot Password</Paper>
  <Box className="forgetpasswordContainer">
  <Paper 
  
  className="forgetpassword_form"
  style={{padding:"10px",
    width: "420px",
    margin:" 0 auto",
    marginTop: "54px"}}>
  <Box 
  
    className="forgetpasssword_title"
    >Forgot Password</Box>
  <Box className="forgetpassword_text">Please enter the email address you register your account with. We will send you reset password confirmation to this email.</Box>
  <TextField variant='outlined'
  type="email"
  label="Enter a email"
  onBlur={()=>validation("email",email)}
  onChange={(e)=>setemail(e.target.value)}
className="forgetpasswordInput"  />
  <Box style={{color:"red"}}>{emailerror}</Box>
<Box><Button
varient="outlined"
className="forgetButton"
disabled={email? false: true}
>Submit</Button></Box>
</Paper>
  </Box>

</Grid>
  )
}
