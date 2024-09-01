import { Box, Button, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const Ad = () => {
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
            return '65%';
        } else if (windowWidth > 1800){
            return '70%';
        }else if (windowWidth > 1600){
            return '75%'
        }else{
            return '80%'
        }
    }

    return (
        <Box
            w="100%"
            p="80px 0px"
            bg="#f0562e"
        >
            <Box
                w={{ base: '90%', lg: width }}
                display='flex'
                flexDir={{ base: 'column', lg: 'row' }}
                justifyContent='space-between'
                m='auto auto'
                gap="20px"
            >
                <Box
                    display='flex'
                    flexDir={{ base: 'column', lg: 'row' }}
                    w={{ base: '100%', lg: '70%' }}
                    justifyContent='space-between'
                    alignItems='center'
                    gap="20px"
                >
                    <Box
                        display='flex'
                        fontFamily="'Inter', serif"
                    >
                        <Text
                            fontSize={{ base: '35px', md: '30px', lg: '48px' }}
                            color='white'
                            mx={1}
                        >GET</Text>
                        <Text
                            fontSize={{ base: '35px', md: '30px', lg: '48px' }}
                            color='black'
                            mx={1}
                        >3FREE</Text>
                        <Text
                            fontSize={{ base: '35px', md: '30px', lg: '48px' }}
                            color='white'
                            mx={1}
                        >PHOTOS!</Text>
                    </Box>

                    <Box>
                        <Text
                            color='white'
                            fontSize='18px'
                        >Subscribe to an annual plan today.</Text>
                    </Box>
                </Box>

                <Box
                    w={{ base: '100%', lg: '30%' }}
                    display='flex'
                    justifyContent={{ base: 'center', lg: 'flex-end' }}
                    alignItems='center'
                >
                    <Button
                        bg='white'
                        color='#cc3c28'
                        p="10px 15px"
                        borderRadius='10px'
                    >GET STARTED</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Ad;
