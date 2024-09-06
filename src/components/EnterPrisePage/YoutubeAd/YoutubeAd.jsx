import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const YoutubeAd = () => {
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
            p="80px 0px"
            bg="lightgray"
        >
            <Box
                w={width}
                m="auto auto"
                display="flex"
                flexDir="column"
                gap="40px"
            >
                <Box>
                    <Text align="center" fontSize={{ base: '40px', lg: '50px' }} fontFamily="'Inter' , serif">The Creative Platform</Text>
                    <Text align="center" fontSize={{ base: '40px', lg: '50px' }} fontFamily="'Inter' , serif">Built For Commerce</Text>
                </Box>
                <Text align="center">make, manage, and measure creative with confidence.</Text>

                <Box
                    p={3}
                    bg="white"
                    borderRadius="10px"
                    w={{ base: '90%', lg: '60%' }}
                    display="flex"
                    justifyContent="center"
                    m="auto auto"
                >
                    <Box
                        as="iframe"
                        width='860px'
                        height={{ base: '360', md: '460', lg: '460', xl: '560' }} 
                        src="https://www.youtube.com/embed/1GrwtlpgGIE?si=CCaA4fjL4c1KCeVV"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default YoutubeAd