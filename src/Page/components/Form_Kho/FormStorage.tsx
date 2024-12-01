import { Box, FormControl, FormGroup, IconButton, InputLabel, MenuItem, Paper, Select, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const data = ['haiphong', 'hanoi', 'ho chi minh']
export const FormStorage = () => {
    const [city,setCity]=useState('')
    const [postalCode, setPostalCode] = useState('')
    const [description, setDiscription] = useState('')
    const [errors,setErrors] = useState({city:false, postalCode:false, description:false})

    const handleSubmit = (e: { preventDefault: () => void; }) =>{
      e.preventDefault()
      const newErrors={
        city: !city,
        postalCode: !postalCode,
        description: !description 
      }
      setErrors(newErrors)

      if(!newErrors.city && !newErrors.postalCode && !newErrors.description){
        console.log('form submit with',{city,postalCode, description})
      }
    }
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
              <Typography variant='h6'>Kho bãi để thiết bị</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', paddingTop: 2}}> 
            <Typography >thành phố</Typography>
            <Typography sx={{width:590}}>mã bưu điện</Typography>
            </Box>
           
        <FormControl fullWidth error={errors.city}>
          <FormGroup row sx={{justifyContent: 'space-around'}}>
            <Box>
              <Select
                sx={{width: 670, marginBottom: 2}}
                label="chọn thành phố"
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                MenuProps={{
                  PaperProps: {sx: {maxHeight: 200}}
                }}
              >
                {data.map((dataValue) => {
                  return <MenuItem value={dataValue} key={dataValue}>{dataValue}</MenuItem>
                })}
              </Select>
              <InputLabel 
              sx={{left: 'auto'}}
              >Chọn thành phố</InputLabel>
            </Box>
            
            <TextField sx={{width: 590}} label={'Mã bưu điện'}
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            error={errors.postalCode}
            helperText={errors.postalCode ? 'vui lòng nhập mã bưu điện':''}
            />
          </FormGroup>
          <Typography>Địa chỉ cụ thể</Typography>
          <Box sx={{ justifyContent:'space-between',display:'flex'}}>
            
            <TextField sx={{width: 1050}} label={'hãy nhập mô tả'}
            value={description} 
            onChange={(e) => setDiscription(e.target.value)} error={errors.description} 
            helperText={errors.description ? 'Vui lòng nhập mô tả' : ''}
            />
            <Tooltip title="Open settings" >
              <IconButton  sx={{ width:200, height:50,backgroundColor:'#FFA21A', borderRadius: '10px' }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <FmdGoodIcon/>
                <Typography variant="h6" component='div' sx={{flexGrow: 1}}>
                Chọn bản đồ
            </Typography>
              </IconButton>
            </Tooltip>
          </Box>
        </FormControl>    
        
        </Paper> 
    </form>
  )
}
