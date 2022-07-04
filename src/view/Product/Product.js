import React,{useState} from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import { TextField,Grid,Paper } from '@mui/material'
import ProductSearch from '../../component/ProductSearch/ProductSearch'
import { data } from '../../component/data'
export default function Product() {
  const [Search,setSearch]=useState("")
  const keys = ["id", "first_name", "last_name"]
  const searchQuery = (val) => {
      return val.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(Search)));
    }
  return (

    <Grid  className="dataContainer">
    <Paper style={{
        padding:"10px",
        background:"#1f1d61",
        color:"white"
  
      }} elevation={3}>Products</Paper>
      <TextField label="Please Search element " onChange={(e) => setSearch(e.target.value)} />
      <ProductSearch datasearch={searchQuery(data)}/>
    </Grid>
  )
}
