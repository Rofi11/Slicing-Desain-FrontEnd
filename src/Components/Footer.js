import React from 'react';
import {Box} from '@mui/material'

function Footer(){
    return (
        <Box
            sx={{
                backgroundColor : '#0B24FB',
                width : '100%',
                height : '67px',
                color : '#fff',
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'space-around',
            }}
        >
            <Box
                sx={{
                    display : 'flex'
                }}
            >
                <Box
                    sx={{
                        fontWeight : '700'
                    }}
                >wknd@</Box>
                <Box>2020</Box>
            </Box>
            <Box
                sx={{
                    width : '126px',
                    height : '24px',
                    border : '1px solid #fff',
                    textAlign : 'center',
                    lineHeight : '24px',
                    borderRadius : '12px',
                    opacity : '0.7'
                }}
            >alpha verion 01</Box>
        
        </Box>
    )
}

export default Footer