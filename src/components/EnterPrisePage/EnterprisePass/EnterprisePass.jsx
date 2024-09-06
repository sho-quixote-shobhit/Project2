import { Box, Grid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import data from './data'

const EnterprisePass = () => {
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
            p="80px 0px"
        >
            <Box
                w={width}
                m="auto auto"
                display="flex"
                flexDir="column"
                color="blue"
                alignItems="center"
                gap="40px"
            >
                <Text align = "center" fontSize={{base : '35px' , lg : '40px'}} fontFamily="'Inter' , serif">make soona your ghost studio</Text>
                <Text align = "center">fully integrate soona with your team to make our crew - your crew.</Text>
                <Grid
                    templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }} 
                    gap={6} 
                >
                    {data.map((item, index) => (
                        <Box
                            key={index}
                            p={10}
                            shadow="md"
                            borderWidth="1px"
                            borderRadius="10px"
                        >
                            <Text fontSize="2xl" fontWeight="bold">{item.heading}</Text>
                            <Text mt={4}>{item.text}</Text>
                        </Box>
                    ))}
                </Grid>
                <Box
                    p = {3}
                    color = "white"
                    bg = "#cc3c28"
                    borderRadius="10px"
                    fontWeight="bold"
                    cursor="pointer"
                >
                    <Text align = "center">CONNECT WITH AN ENTERPRISE EXPERT</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default EnterprisePass