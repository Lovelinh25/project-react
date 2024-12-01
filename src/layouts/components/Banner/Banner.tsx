import { AppBar, Avatar, BottomNavigation, BottomNavigationAction, Box, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import React from 'react';
import img from '../../image/00854acfd0c359ae43e1ff357121b04d.png'
import img2 from '../../image/1334c1c45097384f1646e9e936a8dffe.png'
import img3 from '../../image/3e1ff1654b88af4a5c6c8823987521f9.png'
export const Banner: React.FC = () => {
    
    return (
        <BottomNavigation 
        sx={{ 
            width: '100%', 
            height: 150,
            backgroundColor: '#DCDCDC', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
        }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
            <img src={img2} style={{ width: '200px', height: 'auto' }} />
            <img src={img2} style={{ width: '200px', height: 'auto' }} />
            <img src={img3} style={{ width: '200px', height: 'auto' }} />
            <img src={img} style={{ width: '200px', height: 'auto' }} />
        </div>
    </BottomNavigation>
    
    
    );
}
