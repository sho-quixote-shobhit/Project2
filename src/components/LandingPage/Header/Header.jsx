import { Box, Text , Image } from '@chakra-ui/react'
import React from 'react'
import Slider from "react-slick";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from './data'
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        slidesToScroll: 1,
        
    };

    const navigate = useNavigate();

    const handleTalktoexpert = () => {
        navigate('/contact')
    }

    return (
        <Box w="100%" p="80px 0px 30px 0px" bg='#E8ECE9' mt = "74px">
            <Box w={{ base: '90%', lg: '80%' }} m="auto auto" gap='10px'>
                <Box
                    display='flex'
                    flexDir='column'
                    alignItems='center'
                    gap="15px"
                >
                    <Text
                        fontSize={{ base: '50px', lg: '70px' }}
                        letterSpacing="-2px"
                        fontFamily="'Inter', serif"
                        align='center'
                        fontWeight='600'
                    >
                        WHAT CONTENT DO YOU NEED?
                    </Text>

                    <Text fontSize="18px">
                        soona is your all-in-one content creation suite.
                    </Text>

                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        p={{base : '5px 10px' , lg : '10px 15px'}}
                        bg='#cc3c28'
                        borderRadius="5px"
                        
                        color='white'
                        fontWeight={{base : '500' , lg : '600'}}
                        cursor='pointer'
                        onClick={handleTalktoexpert}
                    >
                        TALK TO AN EXPERT
                    </Box>
                </Box>

                {/* Slider */}
                <Box mt="40px" w = {{base : '' , lg : '90%'}} m = "auto" p = "70px 0px">
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <Box key={index} p="10px">
                                <Box
                                    mx={3}
                                    w="200px"
                                    h="300px"
                                    position="relative"
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                    bg="white"
                                    boxShadow="md"
                                    borderRadius="10px"
                                    overflow="hidden"
                                    cursor="pointer"
                                    _hover={{
                                        '& img': {
                                            transform: 'scale(1.1)',
                                            filter: 'brightness(50%)'
                                        },
                                        '& .overlay': {
                                            opacity: 1
                                        }
                                    }}
                                    m = "auto auto"
                                >
                                    <Image 
                                        src={item.img} 
                                        alt={item.title} 
                                        style={{ 
                                            width: '200px', 
                                            height: '250px', 
                                            objectFit: 'cover', 
                                            transition: 'all 0.3s ease' 
                                        }} 
                                        p = {2}
                                        borderRadius="20px"
                                    />
                                    <Box
                                        className="overlay"
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        w="100%"
                                        h="100%"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        opacity="0"
                                        transition="all 0.3s ease"
                                    >
                                        <ExternalLinkIcon 
                                            boxSize={8} 
                                            color="white"
                                        />
                                    </Box>
                                    <Text mt="10px" fontWeight="600" textAlign="center">
                                        {item.title}
                                    </Text>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Box>
        </Box>
    )
}

export default Header;
