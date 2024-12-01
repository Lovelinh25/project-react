import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const MainCarousel = () => {
  return (
    <AppBar position='static' sx={{backgroundColor:'#FFC900', height:100}}>
        <Toolbar sx={{ justifyContent: 'center', flexDirection: 'column',margin: 'auto' }}> 
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center',color:'#000' }}> 
                Đăng thiết bị đơn giản chỉ với 1 bước 
            </Typography> 
            <Typography variant="body2" component="p" sx={{ flexGrow: 1, textAlign: 'center',color:'#222' }}> 
                Bạn có biết? ComacPro hiện có hơn 100 danh mục thiết bị và hơn 3.000 Danh sách thiết bị 
            </Typography> 
            </Toolbar>
    </AppBar>
  )
}
