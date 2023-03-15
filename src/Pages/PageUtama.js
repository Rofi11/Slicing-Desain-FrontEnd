import React, { useEffect, useState } from 'react';
import {Box,Stack} from '@mui/material'
import Navbar from '../Components/Navbar';
import PathHitamAtas from '../Assets/Images/Path-Hitam-Atas.png';
import PathBiruAtas from '../Assets/Images/Path-Biru-Atas.png';
import bitmap from '../Assets/Images/Bitmap.png';
import PathAtasPink from '../Assets/Images/Path-atas-pink.png'
import PathSampingPink from '../Assets/Images/path-samping-pink.png'
import bitmapSamping from '../Assets/Images/Bitmap-samping.png'
import pathBawahPink from '../Assets/Images/path-bawah-pink.png'
import pathSampingBawahPink from '../Assets/Images/path-samping-bawah-pink.png'
import bitmapTerbalik from '../Assets/Images/Bitmap-terbalik.png'
import '../App.scss';
import axios from 'axios'
import Testimoni from '../Components/Testimoni';
import Carousel from 'react-material-ui-carousel';
import HelpTips from '../Components/HelpTips';
import Footer from '../Components/Footer';

function PageUtama(){
    const [dataTestimoni , setDataTestimoni] = useState([])
    const [dataHelpTips , setDataHelpTips] = useState([])

    // get data for testimony
    const getDataTesti = () => {
        axios.get(`https://challenge.fe.weekendinc.com/testimonial`)
        .then((res) => {
            setDataTestimoni(res.data)
        })
        .catch((err) =>{
            console.error(err)
        })
    }

    // get data for help & tips
    const getDataHelp = () => {
      axios.get(`https://challenge.fe.weekendinc.com/help-tips`)
      .then((res) => {
        setDataHelpTips(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
    }

    useEffect(() => {
      getDataTesti()
      getDataHelp()
    }, [])

    // loop testimoni
    const loopTestimoni = () => {
      return dataTestimoni.map((val) => {
        return (
          <Testimoni props = {val}/>
        )
      })
    }

    //loop help & tips
    const loopHelpTips = () => {
      return dataHelpTips.map((val) => {
        return (
          <HelpTips props = {val}/>
        )
      })
    }


    return (
        <>
          {/* bagian navbar */}
          <Navbar />
          {/* bagian Hero/Jumbotron */}
          <Box
          className= "path"
            sx={{
              width : '100%',
              height : {xs : '600px', xl : '900px'},
              backgroundColor : {xs: '#EEBECE',xl:'#EEBECE'},
              zIndex : 2,
            }}
          >
            <Box className='path-atas-tulisan'>
              <Box className='weekend'> WEEKEND FROM HOME</Box>
              <Box className='stay'>Stay active with a little workout.</Box>
            </Box>
            <Box className='path-atas-hitam'>
              <img src={PathHitamAtas} alt='path-atas-hitam'/>
            </Box>
            <Box className='path-atas-biru'>
              <img src={PathBiruAtas} alt='path-atas-biru'/>
            </Box>
            <Box className='path-lingkaran-biru'></Box>
              <Box className='path-bitmap-utama'>
                <Box >
                  <img src={bitmap} alt='bitmap-utama'/>
                  <Box className='letsgo'>
                    Let's Go
                  </Box>
              </Box>
              </Box>
            <Box className='path-atas-pink'>
              <img src={PathAtasPink} alt='path-ats-pink'/>
            </Box>
          </Box>

          {/* bagian tulisan utama */}
          <Box
              className= "section-word"
              display={'flex'}
              justifyContent= {'center'}
              alignItems={'center'}
              flexDirection={'column'}
            sx={{
              backgroundColor : '#EEBECE',
              width : '100%',
              height : {xs : '530px' , xl : '500px'},
            }}
          >
            {/* gambar samping */}
            <Box 
              sx={{
                border : '1px solid red'
              }}
            >
                <Box className='section-word-path-pink'>
                  <img src={PathSampingPink} alt='path-samping-pink'/>
                </Box>
                <Box className='section-word-bitmap'>
                  <img src={bitmapSamping} alt='bitmap-samping'/>
                </Box>
            </Box>
            <Box 
              className= "box-name"
              sx={{
                width : {xs : '311px' , xl : '619px'},
                height : '160px',
                marginTop : {xs : '130px' , xl : '10px'}
              }}
            >
                <Box sx={{
                  textAlign : 'right',
                  lineHeight : {xs : '24px', xl : '32px'},
                  fontSize : {xs : '16px', xl : '21px'}
                }}>
                  <span className='section-word-definition'>Deffinition; </span>
                  <span>a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something ,such as mine) by working to devise, arrange, or achieve by resolving difficulties.</span>
                  <Box>
                    Merriam-Webster.com Dictionary
                  </Box>
                </Box>
            </Box>
            {/* bagian weekeng team */}
            <Box 
              sx={{
                width : {xs : '311px' , xl : '619px'},
                height : '100px',
              }}
            >
              <Stack direction={'row'} justifyContent={'flex-end'}>
                <Box 
                  sx={{
                    fontSize : {sx : '16px' , xl : '21px'},
                    fontWeight : '700',
                    fontStyle : 'italic',
                    color : '#fff',
                    marginTop : {xs : '40px', xl : '20px'}
                  }}
                >
                  - weekend team
                </Box>
              </Stack>
            </Box>
            <Box className="section-word-lingkaran-biru"></Box>
          </Box>
          {/* bagian couresel */}
          <Box className = 'section-couresel'>
              <Box 
                sx={{
                  fontSize : '32px',
                  color : '#fff',
                  fontWeight : '700',
                  textAlign : {xs : 'none' , xl : 'center'},
                  position : 'relative',
                  left : {xs : '32px', xl : '0'},
                  top : '0',
                  right : {xl : '0'},
                }}
              >
                Testimonial
              </Box>
              <Carousel autoPlay>
                {loopTestimoni()}
              </Carousel>

              {/* bagian POV */}
              <Box
                sx={{
                  width : '100vw',
                  height : 'max-content',
                  display : 'flex',
                  flexDirection : 'column',
                  alignItems : {xs : 'flex-start' , xl : 'center'},
                  color : 'white'
                }}
              >
                <Box
                  sx={{
                    width : '68px',
                    height : '38px',
                    textAlign : {xs : 'left', xl : 'center'},
                    fontSize : '32px',
                    fontWeight : '700',
                    padding : '30px',
                    marginTop : '37px'
                  }}
                >
                  POV
                </Box>
                <Box
                  sx={{
                    width : {xs : '311px', xl : '619px'},
                    height : {xs : '240px' , xl : '135px'},
                    lineHeight : '27px',
                    textAlign : {xs : 'left', xl : 'center'},
                    padding : {xs : '30px', xl : '0'}
                  }}
                >
                  Lorem ipsum dolor sit amet, consecturur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. duis aute irure dolor in rephenderit in voloptate velit esse cillum dolore eu fugiat nulla pariatur
                </Box>
              </Box>

              {/* bagian resource */}
              <Box
                sx={{
                  width : '100vw',
                  height : 'max-content',
                  display : 'flex',
                  flexDirection : 'column',
                  alignItems : {xs : 'flex-start' , xl : 'center'},
                  color : 'white'
                }}
              >
                <Box
                  sx={{
                    width : '149px',
                    height : '38px',
                    textAlign : 'center',
                    lineHeight : '38px',
                    fontSize : '32px',
                    fontWeight : '700',
                    padding : '30px',
                    marginTop : '37px'
                  }}
                >
                  Resource
                </Box>
                <Box
                  sx={{
                    width : {xs : '311px', xl : '619px'},
                    height : {xs : '125px' , xl : '81px'},
                    textAlign : {xs : 'left', xl : 'center'},
                    lineHeight : '27px',
                    padding :  {xs : '30px', xl : '0'}
                  }}
                >
                  These cases are perfectly simple and easy to distinguish. in a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best
                </Box>
              </Box>
            {/* bagian help and tips */}
            <Box
              sx={{
                  width : '100vw',
                  height : 'max-content',
                  display : 'flex',
                  flexDirection : 'column',
                  alignItems : 'center',
                  color : 'white',
                  position : 'relative'
                }}
            >
              <Box
                sx={{
                  fontSize : '32px',
                  width : '179px',
                  height : '38px',
                  marginTop : '100px',
                  marginBottom : '30px'
                }}
              >
                Help & Tips
              </Box>
              <Box
                sx={{
                  display : 'flex',
                  flexDirection : {xs : 'column', xl : 'row'},
                }}
              >
                {loopHelpTips()}
              </Box>
              <Box
                sx={{
                  position : 'absolute',
                  right : '220px',
                  top : '80px',
                  display : {xs : 'none', xl : 'block'}
                }}
              >
                <img src={pathBawahPink} alt='path-bawah-pink'/>
              </Box>
            </Box>

            {/* bagian tulisan terakhir */}
            <Box
              sx={{
                color : '#fff',
                display : 'flex',
                flexDirection : 'column',
                alignItems : {xs : 'flex-start', xl : 'center'},
                marginTop : {xs : '67px', xl : '127px'},
              }}
            >
              {/* bagian tulisan */}
                <Box
                  sx={{
                    width : '218px',
                    height : '38px',
                    lineHeight : '38px',
                    fontSize : '32px',
                    fontWeight : '700',
                    padding : '30px',
                  }}
                >
                  You're all set
                </Box>
                <Box
                  sx={{
                    width : {xs : '311px', xl: '619px'},
                    height : '54px',
                    textAlign : {xs : 'start' , xl : 'center'},
                    padding : {xs : '30px' ,xl : '0'},
                  }}
                >
                  The wise man therefore always holds in these matters to this principle of selection
                </Box>
            </Box>
          </Box>
          {/* bagian image */}
            <Box className = 'section-last-word-image'>
              <Box className = 'path-samping-bawah'>
                <img src={pathSampingBawahPink} alt='path-samping-bawah-pink'/>
              </Box>
              <Box className='bitmap-terbalik'>
                <img src={bitmapTerbalik} alt='bitmap-terbalik'/>
              </Box>
            </Box>
          {/* bagian footer */}
          <Footer
            sx={{
              position : {xs : 'relative'}
            }}
          />
        </>
    )
}

export default PageUtama