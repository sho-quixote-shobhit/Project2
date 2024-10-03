import { StarIcon } from '@chakra-ui/icons'
import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { BiRightArrow } from 'react-icons/bi'
import { BsInstagram, BsScissors, BsTiktok } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import data from './datastudio'

const Studiomenu = ({ isVisible, setIsVisible }) => {
    return (
        <Box visibility={isVisible ? "visible" : "hidden"} onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)} mt={5} bg="white" p={3} borderRadius="20px" w="100%" position='absolute' top="30px" left="0">
            <Box
                bg="white"
                p="30px 20px"
            >

                {/* 1st */}
                <Box
                    display="flex"
                    gap="20px"
                >
                    {/* upper left */}
                    <Box
                        display="flex"
                        flexDir="column"
                        w="75%"
                    >

                        {/* top */}
                        <Box
                            display="flex"
                            gap="40px"
                        >
                            <Box
                                w="50%"
                                display='flex'
                                flexDir='column'
                                gap="10px"
                            >
                                <Text
                                    fontSize="30px"
                                    fontFamily="'Inter', serif"
                                    cursor="pointer"
                                    _hover={{
                                        color: 'purple'
                                    }}
                                >
                                    STUDIO
                                </Text>
                                <Text>
                                    when software only goes so far it’s time to come (virtually) to lorem studios. three state of the art photography studios purpose-built for e-commerce content.
                                </Text>
                            </Box>


                            <Box
                                w="50%"
                                display="flex"
                                justifyContent="space-between"
                                p={3}
                                alignItems='center'
                                bg="#fdf0fe"
                                borderRadius="20px"
                            >
                                <Box
                                    display='flex'
                                    w="50%"
                                    alignItems='center'
                                    gap="15px"
                                >
                                    <Box
                                        p={4}
                                        borderRadius="50%"
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                        bg="pink"
                                    >
                                        <StarIcon color="white" />
                                    </Box>
                                    <Box
                                        display='flex'
                                        flexDir='column'
                                    >
                                        <Text
                                            fontWeight="bold"
                                            fontSize="20px"
                                        >
                                            ready to go?
                                        </Text>
                                        <Box display="flex" flexDir="column">
                                            <Text>
                                                $39/photos &
                                            </Text>
                                            <Text>
                                                $90/videos.
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box
                                    py={2}
                                    px={4}
                                    bg="white"
                                    borderRadius="10px"
                                    border="2px solid black"
                                    fontWeight="bold"
                                    cursor="pointer"
                                >
                                    <Text>BUILD A SHOOT</Text>
                                </Box>
                            </Box>
                        </Box>

                        <hr style={{ margin: '20px 0px' }} />

                        {/* upper left bottom */}
                        <Box
                            display="flex"
                            justifyContent="space-evenly"
                            h="100%"
                        >
                            {data.map((item, index) => (
                                <Box
                                    key={index}
                                    display="flex"
                                    flexDir="column"
                                    p={3}
                                    alignItems="center"
                                    justifyContent="center"
                                    
                                >
                                    <Box position="relative" role="group" cursor='pointer'>
                                        {/* Image and hover effect */}
                                        <Image
                                            borderRadius="20px"
                                            h="200px"
                                            w="200px"
                                            src={item.img}
                                            transition="opacity 0.3s ease"
                                            _groupHover={{ opacity: 0.6 }} 
                                        />
                                        {/* Hover text */}
                                        <Text
                                            align="center"
                                            color="black"
                                            fontWeight="bold"
                                            mx={1}
                                            position="absolute"
                                            top="50%"
                                            left="50%"
                                            transform="translate(-50%, -50%)"
                                            opacity="0" 
                                            transition="opacity 0.3s ease"
                                            _groupHover={{ opacity: 1 }} 
                                        >
                                            {item.hoverText}
                                        </Text>
                                    </Box>
                                    <Text fontWeight="bold" fontSize="18px">{item.text}</Text>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* image box */}
                    <Box
                        w="25%"
                        bg="lightgrey"
                        borderRadius="10px"
                        display="flex"
                        alignItems="center"
                    >
                        <Box
                            p={3}
                            m="50px 20px"
                            display="flex"
                            flexDir="column"
                            gap="10px"
                            bg="white"
                            borderRadius="10px"
                            transition="transform 0.3s ease-in"
                            _hover={{
                                transform: "translateY(-10px)",
                            }}
                            cursor='pointer'
                        >
                            <Image
                                borderRadius="10px"
                                src="https://cdn.prod.website-files.com/622327bc87949d02598242bf/65bbd306350f34f7dd6593af_web-3c-DK%20Tong_r1_9645.webp"
                            />
                            <Text>$39/PHOTO & $90/VIDEO</Text>
                            <Text fontSize="18px" fontWeight="bold">studio pricing</Text>
                            <Text fontSize="16px">photoshoots made simple. only for the assets you love.</Text>

                            <Box display="flex" gap="10px" alignItems="center">
                                <Text fontWeight="bold">VIEW STUDIO PRICING</Text>
                                <BiRightArrow />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <hr style={{ margin: '20px 0px' }} />
                {/* 2nd links */}
                <Box
                    display="flex"
                    justifyContent="space-between"
                >
                    <Box
                        display="flex"
                        gap="20px"
                    >
                        <Text _hover={{ color: 'purple' }} cursor='pointer' color="gray">faqs</Text>
                        <Box border="1px solid gray"></Box>
                        <Text _hover={{ color: 'purple' }} cursor='pointer' color="gray">reviews</Text>
                        <Box border="1px solid gray"></Box>
                        <Text _hover={{ color: 'purple' }} cursor='pointer' color="gray">blog</Text>
                        <Box border="1px solid gray"></Box>
                        <Text _hover={{ color: 'purple' }} cursor='pointer' color="gray">inspiration</Text>
                        <Box border="1px solid gray"></Box>
                        <Text _hover={{ color: 'purple' }} cursor='pointer' color="gray">contact sales</Text>
                    </Box>

                    <Box
                        display="flex"
                        gap="10px"
                        alignItems="center"
                        color="gray"
                    >
                        <BsInstagram cursor="pointer" _hover={{ transform: "scale(2)", transition: "transform 0.3s ease-in" }} />
                        <FaFacebook cursor="pointer" _hover={{ transform: "scale(2)", transition: "transform 0.3s ease-in" }} />
                        <BsTiktok cursor="pointer" _hover={{ transform: "scale(2)", transition: "transform 0.3s ease-in" }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Studiomenu