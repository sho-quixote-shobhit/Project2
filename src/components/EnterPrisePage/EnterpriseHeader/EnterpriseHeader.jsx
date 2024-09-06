import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const EnterpriseHeader = () => {
    const [width, setWidth] = useState(calculateWidth());

    useEffect(() => {
        const handleResize = () => {
            setWidth(calculateWidth());
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function calculateWidth() {
        const windowWidth = window.innerWidth;

        if (windowWidth > 1900) {
            return '80%';
        } else if (windowWidth > 1800) {
            return '80%';
        } else if (windowWidth > 1600) {
            return '85%'
        } else {
            return '90%'
        }
    }

    return (
        <Box
            w="100%"
            p="180px 0px 100px 0px"
        >
            <Box
                w={width}
                m="auto auto"
                display="flex"
                flexDir={{ base: 'column', lg: 'row' }}
                gap = {{base : '50px' , lg  : "0px"}}
            >

                {/* left heading */}
                <Box
                    display="flex"
                    flexDir="column"
                    w={{ base: '100%', lg: '60%' }}
                    gap="20px"
                    alignItems={{base : 'center' , lg : 'flex-start'}}
                >
                    <Text align={{base : 'center' , lg : 'left'}} fontSize={{ base: '40px', lg: '48px' }} fontFamily="'Inter', serif">SOONA FOR ENTERPRISE</Text>
                    <Text align="center">built for large brands that demand photo, video and UGC at scale.</Text>
                    <Box py={3} px={1} color="white" fontWeight="bold" bg="#cc3c28" w={{ base: '90%', md : '60%' , lg: '60%' }} borderRadius="10px" cursor="pointer">
                        <Text align='center' fontFamily="'Inter', serif">CONNECT WITH AN ENTERPRISE EXPERT</Text>
                    </Box>
                </Box>


                {/* brands */}
                <Box
                    display="flex"
                    w={{ base: '100%', lg: '40%' }}
                    justifyContent="space-evenly"
                >
                    <Box
                        display="flex"
                        flexDir="column"
                        justifyContent="space-evenly"
                        fontSize={{base : '20px' , lg : '25px'}}
                        gap = "50px"
                        fontFamily="'Inter' , serif"
                    >
                        <Text>crocs</Text>
                        <Text>subset</Text>
                        <Text>TB12</Text>
                    </Box>

                    <Box
                        display="flex"
                        flexDir="column"
                        justifyContent="space-evenly"
                        fontSize={{base : '20px' , lg : '25px'}}
                        gap = "50px"
                        fontFamily="'Inter' , serif"
                    >
                        <Text>The Sill</Text>
                        <Text>Each&Every</Text>
                        <Text>human</Text>
                    </Box>

                    <Box
                        display="flex"
                        flexDir="column"
                        justifyContent="space-evenly"
                        fontSize={{base : '20px' , lg : '25px'}}
                        gap = "50px"
                        fontFamily="'Inter' , serif"
                    >
                        <Text>Wild Earth</Text>
                        <Text>BirchBox</Text>
                        <Text>Sony</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default EnterpriseHeader