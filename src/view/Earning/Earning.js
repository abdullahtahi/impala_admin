import { Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import { data } from "../../component/data"
import { Grid } from "@mui/material"
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import EarningSearch from '../../component/EarningSearch/EarningSearch';
export default function Earning() {

  const [Search, setSearch] = useState("")
  const keys = ["id", "first_name", "last_name"]
  const searchQuery = (val) => {
    return val.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(Search)));
    
  }

  return (
    //Datacontainer class in a App.css
    <Grid className="dataContainer">
      <Paper style={{
        padding: "10px",
        background: "#1f1d61",
        color: "white",
        marginBottom: "30px"

      }} elevation={3}>Earning</Paper>
      <TextField label="Please Search element " onChange={(e) => setSearch(e.target.value)} />
      <EarningSearch datasearch={searchQuery(data)} />
    </Grid>
  )
}
