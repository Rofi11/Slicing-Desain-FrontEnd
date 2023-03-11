import React, { Component } from 'react';
import {Box, Stack} from '@mui/material'
import bitmapNavbar from '../Assets/Images/bitmap-navbar.png'
import '../App.scss';

function Navbar(){
    return(
        <Box>
        <Stack direction={'row'} className="navbar">
            <Box
                sx={{
                    margin : {xs :'17px 0 17px 24px' ,xl :'17px 0 17px 213px'},
                    zIndex : 4
                }}
            >
                <img src={bitmapNavbar} alt='bitmap-navbar'></img>
            </Box>
            <Stack ml={'13px'} mt={'17px'}>
                <Box
                    sx={{
                        fontSize: '12px',
                        color : '#000',
                    }}
                >
                    Good Morning
                </Box>
                <Box
                    sx={{
                        fontSize: '16px',
                        fontWeight : 'Bold',
                        color : '#000',
                        zIndex: 4
                    }}
                >
                    Fellas
                </Box>
            </Stack>
        </Stack>
        </Box>
    )
}

export default Navbar