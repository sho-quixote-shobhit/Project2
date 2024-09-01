import { Box, Image, Grid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { data1 } from './data';
import { BiCamera } from 'react-icons/bi';

const Images = () => {
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
            bg="#E8ECE9"
            p="80px 0px"
        >
            <Box
                w={{ base: '90%', lg: width }}
                m="auto"
            >
                <Grid
                    templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
                    gap={6}
                    gridAutoRows="1fr"
                >
                    {data1.map((img, index) => (
                        <Box
                            key={index}
                            position='relative'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            cursor='pointer'
                            borderRadius='20px'
                            overflow="hidden"
                            _hover={{
                                bg: "rgba(0, 0, 0, 0.6)", 
                                opacity: 0.8, 
                                transition: "all 0.3s ease", 
                            }}
                            role="group" 
                        >
                            <Image
                                src={img.img}
                                objectFit="cover"
                                w="100%"
                                h="100%"
                                gridRow={img.large ? "span 2" : "span 1"}
                                transition="all 0.3s ease"
                            />

                            <Box
                                position='absolute'
                                p={2}
                                bg="white"
                                borderRadius='20px'
                                opacity={0}  
                                _groupHover={{ opacity: 1 }} 
                                transition="opacity 0.3s ease"
                                zIndex={2}
                            >
                                <Text
                                    color='black'
                                    fontSize='20px'
                                    fontWeight='bold'
                                    align='center'
                                >
                                    MAKE THIS CONTENT
                                </Text>
                            </Box>

                            <Box
                                position='absolute'
                                bottom='20px'
                                p="3"
                                bg="white"
                                display='flex'
                                gap='5px'
                                alignItems='center'
                                borderRadius="20px"
                                right='10px'
                            >
                                <Text>AI</Text>
                                <BiCamera size={30} />
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Images;
