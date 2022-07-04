import React,{useState} from 'react'
import { TextField,Grid,Paper } from '@mui/material'
import OrderSearch from "../../component/OrderSearch/OrderSearch"
import {data} from "../../component/data"
export default function Order() {
  
  const [Search, setSearch] = useState("")
  const keys = ["id", "first_name", "last_name"]
  console.log(data)
  const searchQuery = (val) => {
    return val.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(Search)));
    
  }
  return (
    <Grid  className="dataContainer">
    <Paper style={{
        padding:"10px",
        background:"#1f1d61",
        color:"white"
  
      }} elevation={3}>Orders</Paper>
      <TextField label="search" onChange={(e)=>setSearch(e.target.value)}/>
      <OrderSearch datasearch={searchQuery(data)}/>
    </Grid>
  )
}
