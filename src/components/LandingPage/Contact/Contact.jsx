import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
    return (
        <Box
            w="100%"
            bg="white"
            p="80px 0px"
        >
            <Box
                w={{ base: '95%', lg: '85%' }}
                m = "auto auto"
                display='flex'
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                gap = "20px"
                p = "20px 0px"
            >
                <Text
                    fontSize={{base : '30px' , lg : '40px'}}
                    fontWeight='bold'
                    align='center'
                >We want to make you look awesome!</Text>
                <Text
                    fontSize="20px"
                >Here is how we can do it together.</Text>
                <Box
                    display='flex'
                    gap = "15px"
                >
                    <Button
                        bg = "black"
                        color='white'
                        p = {{base : 3 , lg : '3'}}
                        borderRadius= "8px"
                    >
                        START FOR FREE
                    </Button>

                    <Button
                        p = {{base : 3 , lg : '3'}}
                        border= "1px solid black"
                        borderRadius= "8px"
                    >
                        CHAT WITH SALES
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact