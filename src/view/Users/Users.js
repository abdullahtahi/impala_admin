import React,{useState} from 'react'
import { Grid,TextField,Paper } from '@mui/material'
import UserSearch from "../../component/UserSearch/UserSearch"
import { data } from '../../component/data'

export default function Users() {
    const [Search,setSearch]=useState("")
    const keys = ["id", "first_name", "last_name"]
    const searchQuery = (val) => {
        return val.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(Search)));
      }

  return (
    <Grid className="dataContainer">
    <Paper style={{
      padding: "10px",
      background: "#1f1d61",
      color: "white",
      marginBottom: "30px"
    }} elevation={3}>User</Paper>
    <TextField label="Please Search element " onChange={(e) => setSearch(e.target.value)} />
 <UserSearch datasearch={searchQuery(data)}/>
  </Grid>
  )
}
