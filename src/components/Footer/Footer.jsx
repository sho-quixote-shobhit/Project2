import { Box , Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Box
            w = "100%"
            bg = "#3f434b"
            p = "100px 0px"
        >
            <Box
                w = {{base : '90%' , lg : '80%'}}
                display='flex'
                alignItems='center'
                justifyContent='center'
                m = "auto auto"
            >
                <Text
                    fontSize={{base : '40px' , lg : '60px'}}
                    color='white'
                >Footer</Text>
            </Box>
        </Box>
    )
}

export default Footer