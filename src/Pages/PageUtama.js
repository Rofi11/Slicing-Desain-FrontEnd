import React, { Component } from 'react';
import {Box,Stack} from '@mui/material'
import Navbar from '../Components/Navbar';
import PathHitamAtas from '../Assets/Images/Path-Hitam-Atas.png';
import PathBiruAtas from '../Assets/Images/Path-Biru-Atas.png';
import bitmap from '../Assets/Images/Bitmap.png';
import PathAtasPink from '../Assets/Images/Path-atas-pink.png'
import '../App.scss';

function PageUtama(){
    return (
        <>
          {/* bagian navbar */}
          <Navbar />
          {/* bagian Hero/Jumbotron */}
          <Box
          className= "path"
            sx={{
              width : '100%',
              height : '900px',
              backgroundColor : {xs: '#EEBECE', md: 'blue',lg : 'red' ,xl:'#EEBECE'},
              zIndex : 2
            }}
          >
            <Box className='path-atas-tulisan'>
              <Box className='weekend'> WEEKEND FROM HOME</Box>
              <Box className='stay'>Stay active with a little workout.</Box>
            </Box>
            <Box className='path-atas-hitam'>
              <img src={PathHitamAtas}/>
            </Box>
            <Box className='path-atas-biru'>
              <img src={PathBiruAtas}/>
            </Box>
            <Box className='path-lingkaran-biru'></Box>
              <Box className='path-bitmap-utama'>
                <Box >
                  <img src={bitmap}/>
                  <Box className='letsgo'>
                    Let's Go
                  </Box>
              </Box>
              </Box>
            <Box className='path-atas-pink'>
              <img src={PathAtasPink}/>
            </Box>
          </Box>

          {/* bagian tulisan utama */}
          <Box
              className= "section-word"
              display={'flex'}
              justifyContent= {'center'}
              alignItems={'center'}
            sx={{
              backgroundColor : '#EEBECE',
              width : '100%',
              height : '591px',
              border : '1px solid blue',
            }}
          >
            {/* kata - kata */}
            <Box 
              className= "box-name"
              sx={{
                width : '619px',
                height : '160px',
                border : '1px solid red'
              }}
            >
              <Stack direction={'row'} justifyContent="flex-end">
              <Box className='definition'>Deffinition; </Box>
              <Box>
                a practice or exercice to test or improve one's
              </Box>
              </Stack>
               fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange achieve by resolving difficulties.
            </Box>
          </Box>

        </>
    )
}

export default PageUtama