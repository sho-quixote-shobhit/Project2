import { StarIcon } from '@chakra-ui/icons';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { data1, data2 } from './data';

const Testimonials = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

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

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data2.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box w="100%" bg="#d8dc72" p="30px 0px 80px 0px">
            <Box
                w={{ base: '90%', lg: width }}
                display='flex'
                flexDir='column'
                alignItems='center'
                gap="20px"
                m="auto"
            >
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    gap="10px"
                >
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </Box>
                <Text fontWeight="bold" align='center'>4.5 STARS ACROSS 150+ REVIEWS</Text>
                <Text
                    fontSize={{ base: '35px', lg: '50px' }}
                    align='center'
                    fontWeight="600"
                    fontFamily="'Inter', serif"
                >
                    LOVED BY OVER 20K BRANDS
                </Text>

                <Box
                    display='flex'
                    flexDir='column'
                    bg="white"
                    p={{ base: 5, lg: 10 }}
                    w={{ base: '100%', lg: '85%' }}
                    borderRadius="20px"
                    gap="60px"
                >
                    <Slider {...settings}>
                        {data1.map((item, index) => (
                            <Box>
                                <Box
                                    key={index}
                                    display="flex"
                                    flexDir={['column', 'column', 'row']}
                                    alignItems="center"
                                    gap={6}
                                    sx={{ flexDirection: { base: 'column', lg: 'row !important' } }}
                                    cursor='grab'
                                    p={{ base: '20px', lg: '30px' }}
                                >
                                    <Box w={{ base: '100%', lg: '40%' }}>
                                        <Image src={item.img} alt={item.name} borderRadius="10px" />
                                    </Box>

                                    <Box
                                        w={{ base: '100%', lg: '60%' }}
                                        display='flex'
                                        flexDir='column'
                                        justifyContent="center"
                                    >
                                        <Text fontSize="lg" mb={4}>{item.text}</Text>
                                        <Text fontWeight="bold">{item.name}</Text>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Slider>

                    <Box
                        display='flex'
                        flexDir={{ base: 'column', lg: 'row' }}
                        p={{ base: '20px', lg: '30px' }}
                    >
                        <Box
                            display='flex'
                            flexDir='column'
                            w={{ base: '100%', lg: '50%' }}
                            gap="20px"
                            justifyContent='center'
                        >
                            <Text fontSize={{ base: '35px', lg: '40px' }}>Why top brands use soona.</Text>
                            <Box>
                                <Text fontSize={{ base: '17px', lg: '25px' }} fontWeight='bold'>content delivered 5x faster at 2/3 of the cost</Text>
                                <Text fontSize={{ base: '15px', lg: '20px' }} >24 hour delivery on every asset</Text>
                            </Box>
                            <hr />
                            <Box>
                                <Text fontSize={{ base: '17px', lg: '25px' }} fontWeight='bold'>one seamless platform for content</Text>
                                <Text fontSize={{ base: '15px', lg: '20px' }} >easy for teams to make, manage and measure their content</Text>
                            </Box>
                            <hr />
                            <Box>
                                <Text fontSize={{ base: '17px', lg: '25px' }} fontWeight='bold'>in studio or virtual attendance</Text>
                                <Text fontSize={{ base: '15px', lg: '20px' }} >studios located in Denver, Austin and Minneapolis</Text>
                            </Box>
                            <hr />
                            <Box>
                                <Text fontSize={{ base: '17px', lg: '25px' }} fontWeight='bold'>unlimited usage rights + royalty free models</Text>
                                <Text fontSize={{ base: '15px', lg: '20px' }} >use your photos and video anywhere in perpetuity</Text>
                            </Box>

                            <Button
                                bg="black"
                                color='white'
                                p={3}
                                w={{ base: '50%', lg: '30%' }}
                                borderRadius="10px"
                            >Start for FREE</Button>
                        </Box>

                        <Box
                            w={{ base: '100%', lg: '50%' }}
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Image
                                display={{ base: 'none', lg: 'flex' }}
                                borderRadius="20px"
                                w="80%"
                                h="80%"
                                src={data2[currentIndex]}
                                alt={`Image ${currentIndex + 1}`}
                                objectFit="cover"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Testimonials;
