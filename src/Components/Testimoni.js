import React from 'react';
import {Box,Card,Paper} from '@mui/material'

function Testimoni(props) {
    // console.log(props.props);
    const {by ,testimony} = props.props
    // console.log(by);
    return (
        <Paper
            sx={{
                width : '247px',
                height : '140px',
                backgroundColor: 'white',
                // border : '1px solid red',
                margin : '5px',
                position : 'relative',
                left : {xs : '75px', xl : '642px'}
            }}
            
        >
            {/* bagian nama */}
            <Box
                sx={{
                    color : '#000',
                    fontWeight : '900',
                    fontSize : '32px',
                    lineHeight : '38px',
                    textAlign : 'left',
                    // margin : '10px 0 10px 5px'
                    paddingLeft : '20px',
                    paddingTop : '10px'
                }}
            >
                {by}
            </Box>

            {/* bagian testimoni */}
            <Box
                sx={{
                    fontSize : '12px',
                    padding : '10px 20px 20px 20px',
                }}
            >
                {testimony}
            </Box>
        </Paper>
    )
}

export default Testimoni