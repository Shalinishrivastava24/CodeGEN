
import React from 'react';
import {Box, blue, styled} from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';



const Eiditor = () => {
  return (
    <Box>
        <Box>
            <Box>
                <Box component="span"
                 style={{
                  background: 'red',
                  height: 20,
                  width: 20,
                  display : 'flex',
                  placeContent:'center',
                  borderRadius:5,
                  marginRight: 5,
                  paddingBottom:2,
                 }}
                ></Box>
                home
                <CloseFullscreenIcon/>
            </Box>

        </Box>
        
        <Box>

        </Box>
        
        <Box>

        </Box>
    </Box>

    
  )
}

export default Eiditor;
