import { StarIcon } from '@chakra-ui/icons'
import { Box, MenuList, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { BiCrop, BiPencil, BiRightArrow } from 'react-icons/bi'
import { BsInstagram, BsScissors, BsTiktok } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { GiWhiteBook } from 'react-icons/gi'
import { PiCoatHangerThin } from 'react-icons/pi'

const Aitoolsmenu = ({isVisible , setIsVisible}) => {
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
                                    AI TOOLS
                                </Text>
                                <Text>
                                    online tools for marketers and creatives to make, manage, and measure all of their brand’s content.
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
                                            free tools
                                        </Text>
                                        <Text>
                                            good for getting started with soona.
                                        </Text>
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
                                    <Text>Start for free</Text>
                                </Box>
                            </Box>
                        </Box>

                        <hr style={{ margin: '20px 0px' }} />

                        {/* upper left bottom */}
                        <Box
                            display="flex"
                            gap="20px"
                        >
                            {/* w 60% */}
                            <Box
                                display="flex"
                                flexDir="column"
                                w="60%"
                            >
                                <Text mb={5} fontSize="18px" fontWeight="bold">MEDIA EDITOR</Text>
                                <Box
                                    display="flex"
                                >
                                    <Box
                                        display="flex"
                                        flexDir="column"
                                        gap="10px"
                                        w="50%"
                                    >
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            gap="10px"
                                            p={3}
                                            fontWeight="600"
                                            _hover={{
                                                bg: '#fdf0fe'
                                            }}
                                            borderRadius="10px"
                                            cursor="pointer"
                                        >
                                            <BsScissors />
                                            <Text>remove background</Text>
                                        </Box>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            gap="10px"
                                            p={3}
                                            fontWeight="600"
                                            _hover={{
                                                bg: '#fdf0fe'
                                            }}
                                            borderRadius="10px"
                                            cursor="pointer"
                                        >
                                            <PiCoatHangerThin />
                                            <Text>change background color</Text>
                                        </Box>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            gap="10px"
                                            p={3}
                                            fontWeight="600"
                                            _hover={{
                                                bg: '#fdf0fe'
                                            }}
                                            borderRadius="10px"
                                            cursor="pointer"
                                        >
                                            <GiWhiteBook />
                                            <Text>white background</Text>
                                        </Box>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            gap="10px"
                                            p={3}
                                            fontWeight="600"
                                            _hover={{
                                                bg: '#fdf0fe'
                                            }}
                                            borderRadius="10px"
                                            cursor="pointer"
                                        >
                                            <BiCrop />
                                            <Text>image resizer</Text>
                                        </Box>
                                    </Box>

                                    <Box w="50%" display="flex" flexDir="column" gap="10px">
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            gap="10px"
                                            p={3}
                                            fontWeight="600"
                                            _hover={{
                                                bg: '#fdf0fe'
                                            }}
                                            borderRadius="10px"
                                            cursor="pointer"
                                        >
                                            <BsScissors />
                                            <Text>remove background</Text>
                                        </Box>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            gap="10px"
                                            p={3}
                                            fontWeight="600"
                                            _hover={{
                                                bg: '#fdf0fe'
                                            }}
                                            borderRadius="10px"
                                            cursor="pointer"
                                        >
                                            <PiCoatHangerThin />
                                            <Text>change background color</Text>
                                        </Box>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            gap="10px"
                                            p={3}
                                            fontWeight="600"
                                            _hover={{
                                                bg: '#fdf0fe'
                                            }}
                                            borderRadius="10px"
                                            cursor="pointer"
                                        >
                                            <GiWhiteBook />
                                            <Text>white background</Text>
                                        </Box>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            gap="10px"
                                            p={3}
                                            fontWeight="600"
                                            _hover={{
                                                bg: '#fdf0fe'
                                            }}
                                            borderRadius="10px"
                                            cursor="pointer"
                                        >
                                            <BiCrop />
                                            <Text>image resizer</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                            {/* w 40% */}
                            <Box
                                w="40%"
                            >
                                <Text mb={5} fontSize="18px" fontWeight="bold">SOONA SCORE</Text>
                                <Box
                                    display="flex"
                                    flexDir="column"
                                    gap="20px"
                                >
                                    <Box
                                        display="flex"
                                        gap="10px"
                                        alignItems='center'
                                        _hover={{
                                            bg: 'lightyellow'
                                        }}
                                        borderRadius="10px"
                                        p={3}
                                        cursor="pointer"
                                    >
                                        <BiPencil />
                                        <Box
                                            display="flex"
                                            flexDir="column"
                                        >
                                            <Text fontWeight="bold">listing insights</Text>
                                            <Text>our ai powered visual analytics.</Text>
                                        </Box>
                                    </Box>

                                    <Box
                                        display="flex"
                                        gap="10px"
                                        alignItems='center'
                                        _hover={{
                                            bg: 'lightyellow'
                                        }}
                                        borderRadius="10px"
                                        p={3}
                                        cursor="pointer"
                                    >
                                        <BiPencil />
                                        <Box
                                            display="flex"
                                            flexDir="column"
                                        >
                                            <Text fontWeight="bold">competitive analysis</Text>
                                            <Text>compare the competition.</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
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

                                src="https://cdn.prod.website-files.com/622327bc87949d02598242bf/653c5c7b4d9800b8d4933dda_hero-thumnail-no-boarder-p-500.webp"
                            />
                            <Text>START FOR FREE!</Text>
                            <Text fontSize="18px" fontWeight="bold">platform pricing</Text>
                            <Text fontSize="16px"> an all-in-one content platform for commerce.</Text>

                            <Box display="flex" gap="10px" alignItems="center">
                                <Text fontWeight="bold">VIEW PLATFORM PRICING</Text>
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

export default Aitoolsmenu