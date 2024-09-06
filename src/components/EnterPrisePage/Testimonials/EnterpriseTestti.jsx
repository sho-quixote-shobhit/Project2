import { Box, Text, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from './data'

const EnterpriseTestti = () => {
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

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Box
            w="100%"
            p="80px 0px"
        >
            <Box
                w={width}
                display="flex"
                flexDir="column"
                m="auto auto"
                gap="30px"
            >
                <Text align="center" fontSize={{ base: '40px', lg: '50px' }}>20k brands ❤️ us</Text>

                <Slider {...settings}>
                    {data.map((item) => {
                        return (
                            <Box my={4} key={item.id} cursor="grab">
                                <Box
                                    display="flex"
                                    flexDir={{ base: 'column', lg: 'row' }}
                                    gap="20px"
                                    w={{ base: '', lg: '60%' }}
                                    justifyContent="center"
                                    alignItems="center"
                                    m="auto"
                                    py = "50px"
                                    px = {4}
                                    boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
                                    
                                >
                                    <Box
                                        display="flex"
                                        flexDir={{ base: 'row', lg: 'column' }}
                                        w={{ base: '100%', lg: '40%' }}
                                        gap="20px"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Image
                                            w="150px" 
                                            h="150px" 
                                            objectFit="cover" 
                                            borderRadius="10px"
                                            src={item.img1}
                                        />
                                        <Image
                                            w="150px" 
                                            h="150px" 
                                            objectFit="cover" 
                                            borderRadius="10px"
                                            src={item.img2}
                                        />
                                    </Box>

                                    <Box display="flex" flexDir="column" w={{ base: '100%', lg: '60%' }} gap = "10px">
                                        <Text fontWeight="bold" fontSize="25px">{item.heading} </Text>
                                        <Text>{item.text}</Text>
                                        <Text fontWeight="bold" fontStyle="italic">{item.name}</Text>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    })}
                </Slider>

            </Box>
        </Box>
    )
}

export default EnterpriseTestti