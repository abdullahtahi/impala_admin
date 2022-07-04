import React, { useState } from 'react'
import { Grid, Box, TextField, Button, Paper } from "@mui/material"
import "./Setting.css"
export default function Setting() {
    const [address, setAddress] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [alternatePhone, setalternatePhone] = useState()
    const [deliveryCharge, setdeliveryCharge] = useState()
    const [phoneerror, setphoneerror] = useState();
    const [erroralternatePhone,seterroralternatePhone]=useState();
    const [emailerror,setemailerror]=useState();
    const validation = (name, value) => {
        if (name == "phone") {
            const res = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
            if (!res.test(value)) {
                setphoneerror("Not a valid Phone number")
            }
        }
        if(name=="alternatephone")
        {
            const res=/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/
        if(!res.test(value)){
            seterroralternatePhone("The alternate number is not valid")
        }
        }
        if(name=="email")
        {
            const res=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        if(!res.test(value))
        {
            setemailerror("the email is not correct")
        }
        }
    }

    const postFormData = () => {
        validation();
        const postFormData = {
            address: address,
            email: email,
            phone: phone,
            alternatePhone: alternatePhone,
            deliveryCharge: deliveryCharge
        }
    }
    console.log(address, email, phone, alternatePhone, deliveryCharge)

    return (
        <Grid className="dataContainer">
            <Paper style={{
                padding: "10px",
                background: "#1f1d61",
                color: "white",
                marginBottom: "30px"
            }} elevation={3}>Setting</Paper>
            <Grid className="contactform">
                <Paper className="contactformdata" elevation={3}>
                    <Box style={{
                        color: "#1f1d61",
                        fontWeight: "900",
                        fontSize: "20px"
                    }}>Contact Us</Box>
                    <Box className="settingInput">
                        <TextField varient="outlined"
                            name="address"
                            onChange={(e) => setAddress(e.target.value)}

                            style={{ width: '30rem' }}
                            label="Add address"
                            value={address} />
                    </Box>
                    <Box className="settingInput">
                        <TextField varient="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={()=>validation("email",email)}
                            label="Email" style={{ width: '30rem' }} />
                    </Box>
                    <Box className="error">{emailerror}</Box>
                    <Box className="settingInput">
                        <TextField varient="outlined"

                            onChange={(e) => setPhone(e.target.value)}
                            onBlur={()=>validation("phone",phone)}
                            label="Phone Number" style={{ width: '30rem' }} />
                    </Box>
                    <Box>{phoneerror}</Box>
                    <Box className="settingInput">
                        <TextField varient="outlined"
                            onChange={(e) => setalternatePhone(e.target.value)}
                            onBlur={()=>validation("alternatephone",alternatePhone)}
                            label="Alternate Phone Number" style={{ width: '30rem' }} />
                    </Box>
                    <Box>{erroralternatePhone}</Box>
                    <Box style={{
                        color: "#1f1d61",
                        fontWeight: "900",
                        fontSize: "20px"
                    }}>Setting</Box>
                    <Box className="settingInput">
                        <TextField varient="outlined"
                            onChange={(e) => setdeliveryCharge(e.target.value)}


                            label="Delivery Charges" style={{ width: '30rem' }} />
                    </Box>
                    <Button variant="outlined"
                        onClick={postFormData}
                        style={{
                            color: "green", border: "1px solid green", cursor: "pointer",
                            width: "20rem", marginLeft: "19px"
                        }}

                        disabled={address && email && phone && alternatePhone && deliveryCharge > 0 ? false : true}
                    >Submit</Button>
                </Paper>
            </Grid>

        </Grid >
    )
}
