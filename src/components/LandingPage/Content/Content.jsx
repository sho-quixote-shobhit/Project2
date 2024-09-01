import { Box, Text, Image, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BiCart, BiRightArrowCircle, BiUpload } from 'react-icons/bi';
import { FaAmazon } from 'react-icons/fa';
import { SiCanvas } from 'react-icons/si';

const Content = () => {
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
                display='flex'
                flexDir='column'
                m='auto auto'
                alignItems='center'
                gap="20px"
                p={{ base: '0px 0px', lg: '0px 10px' }}
            >
                <Text
                    fontSize={{ base: '28px', lg: '40px' }}
                    fontWeight='600'
                    align='center'
                    fontFamily="'Inter', serif"
                >
                    We believe in quality content for all.
                </Text>

                <Text
                    w={{ base: '300px', lg: '400px' }}
                    align='center'
                >
                    Affordable, fast and with lots of things you can do for absolutely FREE.
                </Text>

                <Box
                    display='flex'
                    flexDir={{ base: 'column', lg: 'row' }}
                    gap="10px"
                    w='100%'
                >

                    {/* left image */}
                    <Box
                        w={{ base: '100%', lg: '40%' }}
                        h="auto"
                        position="relative"
                        cursor="pointer"
                        overflow="hidden"
                        borderRadius="20px"
                        border = "1px solid blue"
                    >
                        <Image
                            src="https://cdn.prod.website-files.com/622327bc87949d02598242bf/6647aa2f23e0b549c3d97f6b_ugc.webp"
                            w="100%"
                            h="100%"
                            objectFit="cover"
                        />
                        <Text
                            position="absolute"
                            top="10px"
                            left="10px"
                            p="5px 10px"
                            borderRadius="5px"
                            fontWeight="bold"
                            color="white"

                            fontSize={{ base: '25px', lg: '35px' }}
                            fontFamily="'Inter', serif"
                        >
                            Build UGC Campaign
                        </Text>
                        <Box
                            position='absolute'
                            bottom='10px'
                            right='20px'
                        >
                            <BiRightArrowCircle size={30} color="black" />
                        </Box>
                    </Box>


                    {/* right box */}
                    <Box
                        display="flex"
                        flexDir='column'
                        w={{ base: '100%', lg: '60%' }}
                        gap="10px"
                    >

                        {/* right top box */}
                        <Box
                            display="flex"
                            flexDir={{ base: 'column', lg: 'row' }}
                            bg="#fbd1c6"
                            borderRadius='20px'
                            border='1px solid orange'
                            p="10px"
                            h="100%"
                            cursor='pointer'
                            _hover={{
                                '& img:first-of-type': {
                                    transform: 'rotate(-20deg)',
                                },
                                '& img:last-of-type': {
                                    transform: 'rotate(20deg)',
                                }
                            }}
                        >
                            <Box
                                display='flex'
                                flexDir='column'
                                w={{ base: '100%', lg: '50%' }}
                                color='#6f1801'
                                justifyContent='flex-end'
                                gap="10px"
                                textAlign={{ base: 'center', lg: 'left' }}
                                p={3}
                            >
                                <Text fontSize='15px'>AI TOOLS</Text>
                                <Text fontSize="25px">Generate AI product photography</Text>
                                <Text>Professional product photos, instantly. From a single product image.</Text>
                            </Box>

                            <Box
                                w={{ base: '100%', lg: '50%' }}
                                position='relative'
                                height={{ base: '200px', lg: 'auto' }}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Image
                                    src="https://cdn.prod.website-files.com/622327bc87949d02598242bf/664bef01fd01d98c1b6f7627_mokker-1-p-500.webp"
                                    w={{ base: '', lg: '70%' }}
                                    h="80%"
                                    position='absolute'
                                    top={{ base: '', lg: '0%' }}
                                    left={{ base: '30%', lg: '0%' }}
                                    borderRadius='20px'
                                    transform="rotate(-15deg)"
                                    transition="transform 0.3s ease"
                                />
                                <Image
                                    src="https://cdn.prod.website-files.com/622327bc87949d02598242bf/664bef01fd01d98c1b6f7627_mokker-1-p-500.webp"
                                    w={{ base: '', lg: '70%' }}
                                    h="80%"
                                    position='absolute'
                                    top={{ base: '', lg: '0%' }}
                                    left={{ base: '45%', lg: '20%' }}
                                    borderRadius='20px'
                                    transform="rotate(15deg)"
                                    transition="transform 0.3s ease"
                                />
                            </Box>
                        </Box>


                        {/* right bottom box */}
                        <Box
                            display='flex'
                            flexDir={{ base: 'column', lg: 'row' }}
                            h="100%"
                            gap="10px"
                        >
                            {/* Placeholder for upload boxes */}
                            <Box
                                w="100%"
                                bg="#c9d0fc"
                                border='1px solid blue'
                                borderRadius="10px"
                                display='flex'
                                flexDir='column'
                                p="30px"
                                justifyContent='space-between'
                            >
                                <Box
                                    w="80%"
                                    color='blue'
                                >
                                    <Text
                                        fontSize='15px'
                                    >AI TOOLS</Text>
                                    <Text
                                        fontSize='25px'
                                        fontWeight='600'
                                    >try media editor</Text>
                                    <Text mt={2}>AI powered creative tools built for everywhere you post + sell.</Text>
                                </Box>
                                <label>
                                    <Input
                                        type="file"
                                        accept='.jpg,.jpeg,.png'
                                        style={{ display: 'none' }}
                                    />
                                    <Box
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='center'
                                        p="60px"
                                        borderRadius='20px'
                                        border='1px dashed blue'
                                        cursor='pointer'
                                        bg="gray.100"
                                        _hover={{
                                            bg: "lightgray",
                                        }}
                                    >
                                        <Text
                                            display='flex'
                                            alignItems='center'
                                            color='blue'
                                            fontSize='20px'
                                            justifyContent='center'
                                        >
                                            <BiUpload />
                                            <span style={{ marginLeft: '8px' }}>Choose an image</span>
                                        </Text>
                                    </Box>
                                </label>
                            </Box>

                            {/* Placeholder for camera */}
                            <Box
                                w="100%"
                                h="auto"
                                borderRadius="10px"
                                overflow="hidden"
                                position='relative'
                                border='1px solid yellow'
                                cursor='pointer'
                                _hover={{
                                    '& img': {
                                        transform: 'scale(1.1)', // Zoom in the image on hover
                                    }
                                }}
                            >
                                <Image
                                    src='https://cdn.prod.website-files.com/622327bc87949d02598242bf/664cecdf8da9b440aca301cf_free-photo-thumbnail-p-500.webp'
                                    w="100%"
                                    h="100%"
                                    objectFit='cover'
                                    transition='transform 0.3s ease' // Smooth transition for the zoom effect
                                />
                                <Box
                                    display='flex'
                                    flexDir='column'
                                    position='absolute'
                                    bottom='20px'
                                    w="100%"
                                    p={3}
                                    color='white'
                                    bg="rgba(0, 0, 0, 0.1)"
                                >
                                    <Text fontSize={{ base: '12px', lg: '16px' }}>STUDIO</Text>
                                    <Text
                                        fontSize={{ base: '16px', lg: '25px' }}
                                        fontWeight='600'
                                    >
                                        Get your first product photo FREE on a studio shoot
                                    </Text>
                                    <Box
                                        position='absolute'
                                        bottom='10px'
                                        right='20px'
                                    >
                                        <BiRightArrowCircle size={30} color="white" />
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Box>


                {/* two boxes below */}

                <Box
                    display='flex'
                    flexDir={{ base: 'column', lg: 'row' }}
                    gap="10px"
                    w='100%'
                >

                    {/* amazon icons */}
                    <Box
                        w={{ base: '100%', lg: '50%' }}
                        bg="#fdf0fe"
                        display='flex'
                        flexDir='column'
                        gap="10px"
                        borderRadius="10px"
                        border="1px solid red"
                        p={10}
                        position='relative'
                        cursor='pointer'
                    >
                        <Box
                            display='flex'
                            gap='30px'
                        >
                            <Box
                                w="100px"
                                h="100px"
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                bg="lightblue"
                                borderRadius='20px'
                                _hover={{
                                    transform: 'scale(1.2)',
                                    transition: 'transform 0.3s ease-in-out',
                                }}
                            >
                                <SiCanvas size={35} />
                            </Box>

                            <Box
                                w="100px"
                                h="100px"
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                bg="lightpink"
                                borderRadius='20px'
                                _hover={{
                                    transform: 'scale(1.2)',
                                    transition: 'transform 0.3s ease-in-out',
                                }}
                            >
                                <BiCart size={35} />
                            </Box>

                            <Box
                                w="100px"
                                h="100px"
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                bg="lightgray"
                                borderRadius='20px'
                                _hover={{
                                    transform: 'scale(1.2)',
                                    transition: 'transform 0.3s ease-in-out',
                                }}
                            >
                                <FaAmazon size={35} />
                            </Box>
                        </Box>


                        <Text
                            fontSize='10px'
                            fontWeight='600'
                            mt={2}
                        >
                            INTEGRATIONS
                        </Text>

                        <Text
                            fontWeight='600'
                            fontSize='30px'
                        >
                            install our apps
                        </Text>

                        <Text
                            w="90%"
                        >
                            speed up your creative workflow and unlock product level insights with soona apps for Amazon and Shopify.
                        </Text>

                        <Box
                            position='absolute'
                            bottom='30px'
                            right='20px'
                        >
                            <BiRightArrowCircle size={30} color="black" />
                        </Box>

                    </Box>


                    {/* analysis */}
                    <Box
                        display='flex'
                        flexDir={{base : 'column' , lg : 'row'}}
                        gap='10px'
                        p={7}
                        w={{ base: '100%', lg: '50%' }}
                        borderRadius='10px'
                        border='1px solid gray'
                        cursor='pointer'
                        position='relative'
                    >
                        <Box
                            w = {{base : '100%' , lg : '50%'}}
                            display='flex'
                            alignItems='center'
                            justifyContent={{base : 'flex-start' , lg : 'center'}}
                        >
                            <Image
                                src='https://cdn.prod.website-files.com/622327bc87949d02598242bf/653c41bb301655b0a3d2be0e_step-2.webp'
                                w="80%"
                                h="80%"
                            />
                        </Box>


                        <Box
                            w = {{base : '100%' , lg : '50%'}}
                            display='flex'
                            flexDir='column'
                            justifyContent='center'
                        >
                            <Text
                                fontSize='12px'
                                fontWeight='600'
                            >AI TOOLS</Text>
                            <Text
                                fontSize='35px'
                                fontWeight='bold'
                            >request a competitor analysis</Text>

                            <Box
                                position='absolute'
                                bottom='30px'
                                right='20px'
                            >
                                <BiRightArrowCircle size={30} color="black" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Content;
