import { ChevronDownIcon, ChevronUpIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Text, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Navbar = () => {
    const [isAIclicked, setisAIclicked] = useState(false);
    const [isStudioClicked, setisStudioClicked] = useState(false);
    const [isResourcesClicked, setisResourcesClicked] = useState(false);

    const handleClick = (val) => {
        if (val === 1) {
            setisAIclicked(!isAIclicked);
            setisStudioClicked(false);
            setisResourcesClicked(false);
        } else if (val === 2) {
            setisAIclicked(false);
            setisStudioClicked(!isStudioClicked);
            setisResourcesClicked(false);
        } else {
            setisAIclicked(false);
            setisStudioClicked(false);
            setisResourcesClicked(!isResourcesClicked);
        }
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
                    color='#cc3c28'
                    fontWeight="600"
                >
                    {/* left */}
                    <Box
                        display={{ base: 'none', lg: 'flex' }}
                        gap='15px'
                        alignItems='center'
                    >
                        {/* AI TOOLS Dropdown */}
                        <Menu isOpen={isAIclicked}>
                            <MenuButton fontWeight="bold" as={Button} variant="ghost" onClick={() => handleClick(1)} rightIcon={isAIclicked ? <ChevronUpIcon /> : <ChevronDownIcon />}>
                                AI TOOLS
                            </MenuButton>
                            <MenuList bg="white" p = {5} borderRadius="20px">
                                <MenuItem>Tool 1</MenuItem>
                                <MenuItem>Tool 2</MenuItem>
                                <MenuItem>Tool 3</MenuItem>
                            </MenuList>
                        </Menu>

                        {/* STUDIO Dropdown */}
                        <Menu isOpen={isStudioClicked}>
                            <MenuButton fontWeight="bold" as={Button} variant="ghost" onClick={() => handleClick(2)} rightIcon={isStudioClicked ? <ChevronUpIcon /> : <ChevronDownIcon />}>
                                STUDIO
                            </MenuButton>
                            <MenuList bg="white" p = {5} borderRadius="20px">
                                <MenuItem>Studio 1</MenuItem>
                                <MenuItem>Studio 2</MenuItem>
                                <MenuItem>Studio 3</MenuItem>
                            </MenuList>
                        </Menu>

                        <Box>
                            <Text>UGC</Text>
                        </Box>

                        {/* RESOURCES Dropdown */}
                        <Menu isOpen={isResourcesClicked} >
                            <MenuButton fontWeight="bold" as={Button} variant="ghost" onClick={() => handleClick(3)} rightIcon={isResourcesClicked ? <ChevronUpIcon /> : <ChevronDownIcon />}>
                                RESOURCES
                            </MenuButton>
                            <MenuList bg="white" p = {5} borderRadius="20px">
                                <MenuItem>Resource 1</MenuItem>
                                <MenuItem>Resource 2</MenuItem>
                                <MenuItem>Resource 3</MenuItem>
                            </MenuList>
                        </Menu>

                        <Box>
                            <Text>ENTERPRISE</Text>
                        </Box>
                    </Box>

                    {/* Sign in and Build a Shoot */}
                    <Box
                        display='flex'
                        gap='15px'
                        alignItems='center'
                    >
                        <Box>
                            <Text>SIGN IN</Text>
                        </Box>

                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            p="10px 15px"
                            bg='#cc3c28'
                            borderRadius="10px"
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
