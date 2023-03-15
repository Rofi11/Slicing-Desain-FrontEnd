import React from 'react';
import {Box} from '@mui/material'
import '../Assets/Style/HelpTips.scss'
// import '../App.scss';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

function HelpTips(props) {
    const {title, image, id} = props.props
    return (
        <Box
            className = 'helptips'
            sx={{
                width : '311px',
                height : '180px',
                marginRight : '10px',
                position : 'relative',
                marginBottom : '10px',
                zIndex : '3'
            }}
        >
            <Box className = 'helptips-image'>
                <img src={image} alt={id}/>
            </Box>
            <Box
                sx={{
                    backgroundColor : '#000',
                    width : '311px',
                    height : '72px',
                    opacity : '0.5',
                    position : 'absolute',
                    bottom : '0',
                    display : 'flex',
                    alignItems : 'center',
                    justifyContent : 'center'
                }}
            >
                <Box
                    sx={{
                        fontWeight : '700',
                        color : '#fff',
                        width : '218px',
                        height : '38px'
                    }}
                >
                    {title}
                </Box>
                <Box
                    sx={{
                        marginLeft : '20px',
                    }}
                >
                    <ArrowCircleRightRoundedIcon/>
                </Box>
            </Box>
        </Box>
    )
}

export default HelpTips