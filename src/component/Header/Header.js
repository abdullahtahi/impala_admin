import { Grid, Divider } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles"
import "./Header.css"
import {Link} from "react-router-dom"
import PersonIcon from '@mui/icons-material/Person';
const style = makeStyles({
    headerstyle: {
        boxShadow: " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        marginLeft: "250px",
        // transform: `translateY(1px)`,
        marginTop: "-38px",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between"

    }
})
export default function Header() {
    const classes = style()
    return (
        <Grid className={classes.headerstyle}>
            <Grid item>
                SuperAdmin
            </Grid>
            <Grid item className="dropdown">
                <PersonIcon className="dropbtn"/>
                <Grid className="dropdown-content">
                    <Link to="" >username</Link>
                <Divider/>
                    <Link to="/impalaadmin/changepassword" >ChangePassword</Link>
                    <Divider/>
                    <Link to="" >LogOut</Link>
                </Grid>
            </Grid>
        </Grid>

    )
}
