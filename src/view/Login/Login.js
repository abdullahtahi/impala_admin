import React,{useState} from 'react'

import "./Login.css"
import { Grid, Box,Paper,TextField, Button} from "@mui/material"
export default function Login() {
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
    const [emailerror,setemailerror]=useState();
    const [passworderror,setpassworderror]=useState();



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
    const postlogin=()=>{
     validation();
        const postCredential={
email:email,
password:password
}
    }
    console.log(email,password)
    return (
        <Grid>
        <Paper className="loginform" md={3}elevation={3}>
            <Box>
                <h2>Login</h2>
            </Box>
            <Box className="Email">
                <TextField  
                style={{marginBottom:"10px"}}
                varient="outlined"
                onBlur={()=>validation("email",email)}
                onChange={(e)=>setEmail(e.target.value)}
                label='Please Enter a email' />
            </Box>
<Box style={{color:"red",marginTop:"-10px"}}>{emailerror}</Box>
            <Box className="password">
            <TextField  
            style={{marginTop:"20px"}}
            onBlur={()=>validation("password",password)}
            onChange={(e)=>setpassword(e.target.value)}
            varient="outlined" label='Please Enter a password' />
            </Box>
{/* <Box>{emailerror}</Box> */}
            <Box>
                <Button
                disabled={email && password ? false:true}
                onClick={postlogin}varient="outlined" style={{marginTop:"10px",border:"1px solid green",color:"green"}}>Login</Button>
            </Box>
            </Paper>
        </Grid>
    )
}
