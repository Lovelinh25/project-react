import { Box, FormControl, FormGroup, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const data = ['haiphong', 'hanoi', 'ho chi minh']
export const FormPrice = () => {
  return (
    <form>
        <Paper sx={{padding: 2, margin: 2, maxWidth: 2000, background: 'rgba(0,0,0,0.05)'}} elevation={4} >
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Box sx={{
                width: 10,
                height: 50,
                bgcolor: "#FFC900",
                marginRight: 2,
                borderRadius: "10px",
              }}/>
              <Typography variant='h6'>Giá bán thiết bị của bạn</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', paddingTop: 2}}> 
            <Typography >giá bán</Typography>
            <Typography sx={{width:300}}>loại tiền</Typography>
            </Box>
           
        <FormControl fullWidth>
          <FormGroup row sx={{justifyContent: 'space-around'}}>
            <Box>
              <TextField
                sx={{width: 965, marginBottom: 2}}
                label=""
              />
              <InputLabel 
              sx={{left: 'auto'}}
              >Nhập giá bán</InputLabel>
            </Box>
            
            <TextField sx={{width: 300}} label={'VND'}
            
            />
          </FormGroup>
          
        </FormControl>    
        
        </Paper> 
    </form>
  )
}
