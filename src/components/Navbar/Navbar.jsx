import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import Aitoolsmenu from './Aitoolsmenu'
import Studiomenu from './Studiomenu'
import { useState } from 'react'
import Resourcesmenu from './Resourcesmenu'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const [isVisible1, setIsVisible1] = useState(false)
    const [isVisible2, setIsVisible2] = useState(false)
    const [isVisible3, setIsVisible3] = useState(false)

    const navigate = useNavigate()

    const handleLandingPage = () => {
        console.log('hi')
        navigate('/')
    }

    const handleEnterprise = () =>{
        navigate('/enterprise')
    }

    return (
        <Box
            w="100%"
            position='fixed'
            top="0"
            zIndex='999'
            bg="white"
            boxShadow="sm"
        >
            <Box
                w={{ base: '90%', lg: '80%' }}
                display='flex'
                m='auto'
                gap='15px'
                p="0.8rem 0"
                alignItems='center'
            >
                {/* logo */}
                <Box
                    display='flex'
                    gap={{ base: '10px', lg: '0px' }}
                    alignItems='center'
                    color='#cc3c28'
                    fontWeight='700'
                >
                    <Box
                        display={{ base: 'flex', lg: 'none' }}
                        alignItems='center'
                        p="5px 0px 0px 0px"
                    >
                        <HamburgerIcon />
                    </Box>
                    <Text
                        fontSize={{ base: '25px', lg: '35px' }}
                        fontFamily="'Inter', serif"
                        p={0}
                        cursor='pointer'
                        onClick={handleLandingPage}
                    >
                        soona
                    </Text>
                </Box>

                <Box
                    display='flex'
                    justifyContent={{ base: 'flex-end', lg: 'space-between' }}
                    w="100%"
                    alignItems='center'
                    fontSize='15px'
                    p="5px 0px 0px 0px"
                >
                    {/* left */}
                    <Box
                        display={{ base: 'none', lg: 'flex' }}
                        gap='10px'
                        alignItems='center'
                    >
                        {/* AI TOOLS Dropdown */}
                        <Box onMouseEnter={() => setIsVisible1(true)}
                            onMouseLeave={() => setIsVisible1(false)}>
                            <Text fontWeight='bold' cursor='pointer' color='#cc3c28' >AI TOOLS <ChevronDownIcon /> </Text>
                            <Aitoolsmenu isVisible={isVisible1} setIsVisible={setIsVisible1} />
                        </Box>


                        {/* STUDIO Dropdown */}
                        <Box onMouseEnter={() => setIsVisible2(true)}
                            onMouseLeave={() => setIsVisible2(false)}>
                            <Text fontWeight='bold' cursor='pointer' color='#cc3c28' >STUDIO <ChevronDownIcon /> </Text>
                            <Studiomenu isVisible={isVisible2} setIsVisible={setIsVisible2} />
                        </Box>

                        <Box cursor='pointer' fontWeight='bold'>
                            <Text color='#cc3c28'>UGC</Text>
                        </Box>

                        {/* RESOURCES Dropdown */}
                        <Box onMouseEnter={() => setIsVisible3(true)}
                            onMouseLeave={() => setIsVisible3(false)}>
                            <Text fontWeight='bold' cursor='pointer' color='#cc3c28' >RESOURCES <ChevronDownIcon /> </Text>
                            <Resourcesmenu isVisible={isVisible3} setIsVisible={setIsVisible3} />
                        </Box>

                        <Box onClick={handleEnterprise} fontWeight='bold' cursor='pointer' color='#cc3c28'>
                            <Text>ENTERPRISE</Text>
                        </Box>
                    </Box>

                    {/* Sign in and Build a Shoot */}
                    <Box
                        display='flex'
                        gap='15px'
                        alignItems='center'
                    >
                        <Box cursor='pointer'>
                            <Text>SIGN IN</Text>
                        </Box>

                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            p="10px 15px"
                            bg='#cc3c28'
                            borderRadius="10px"
                            cursor='pointer'
                        >
                            <Text
                                color="white"
                                fontWeight='600'
                            >BUILD A SHOOT</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar;
