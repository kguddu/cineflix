import {Box, Typography} from '@mui/material';


const Footer =()=>{
    return(
        <Box pb={4} style={{backgroundColor:"black",height:"200px"}}>
        <Typography variant='h6' align='center' p={5}>Developed by Guddu Kumar</Typography>
        <Typography variant='h6' align='center'>
          <a href="https://github.com/kguddu/cineflix" target="_blank" rel="noreferrer" mt={2}>
            Github Source Code
          </a>
        </Typography>
      </Box>
    )
}


export default Footer;