import React,{useState} from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import "./Login.css"
import { Grid, Box,Paper,TextField, Button} from "@mui/material"
import { Link } from 'react-router-dom';
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
        if(name=="password"){
            const res=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
            if(!res.test(value))
            {
                setpassworderror("Minimum eight characters, at least one uppercase letter, one lowercase letter and one number")
            }
    
            }
        }
    
    const postlogin=()=>{
     validation();
        const postCredential={
email:email,
password:password}

    }
    
    return (
        <Grid  className="alllogindata"style={{display:"flex"}}>
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
            // ref='password'
            type="password"
            onBlur={()=>validation("password",password)}
            onChange={(e)=>setpassword(e.target.value)}
            varient="outlined" label='Please Enter a password'
            value={password} />
            </Box>
<Box style={{color:"red"}}>{passworderror}</Box>
           
        <Link to="/impalaadmin/forgetpassword"><Box>ForgetPassword</Box></Link>   
            <Box>
                <Button
                disabled={email && password ? false:true}
                onClick={postlogin}varient="outlined" style={{marginTop:"10px",border:"1px solid green",color:"green"}}>Login</Button>
            </Box>
            </Paper>
            <Grid className='backgroundLogin'>
            {/* <LocalShippingIcon className='impalaadmin' style={{ color: "white",
            margin:"0 auto",
           
    fontSize:" 20rem",
    marginLeft: "237px"
} }/> */}
        <Box className="logintitle">Welcome To 
        </Box>
        <Box className="logintitle"> Impala Admin</Box>
                    </Grid>
        </Grid>
    )
}
