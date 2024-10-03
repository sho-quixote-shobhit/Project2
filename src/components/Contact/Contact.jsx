import { Box, Input, InputGroup, InputLeftAddon, Text, InputRightAddon, Button } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
    return (
        <Box
            p="100px 0px"
        >
            <Box
                w={{ base: '100%', lg: '80%' }}
                m="auto auto"
                h="80vh"
                display="flex"
                justifyContent="center"
                alignItems='center'
            >
                <Box
                    display="flex"
                    flexDir="column"
                    w={{ base: '90%', md: '70%', lg: '60%' }}
                    gap="20px"
                    p={10}
                    borderRadius="20px"
                    boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
                >
                    <Box>
                        <Text fontSize="25px" fontWeight="bold" fontFamily="'Inter', serif">Connect with lorem</Text>
                    </Box>

                    <Box>
                        <Text mb='8px' fontSize="18px" fontWeight="bold" fontFamily="'Inter', serif">First Name</Text>
                        <Input
                            isInvalid
                            placeholder='' border="1px solid black"
                            w="100%"
                            p={2}
                            borderRadius="10px"
                            borderColor="gray"
                            focusBorderColor="transparent"
                            outline="none"
                            boxShadow="none"
                        />
                    </Box>

                    <Box>
                        <Text mb='8px' fontSize="18px" fontWeight="bold" fontFamily="'Inter', serif">Last Name</Text>
                        <Input
                            isInvalid
                            errorBorderColor='red.300'
                            placeholder='' border="1px solid black"
                            w="100%"
                            p={2}
                            borderRadius="10px"
                            borderColor="gray"
                            focusBorderColor="transparent"
                            outline="none"
                            boxShadow="none"
                        />
                    </Box>

                    <Box>
                        <Text mb='8px' fontSize="18px" fontWeight="bold" fontFamily="'Inter', serif">Email</Text>
                        <Input
                            isInvalid
                            errorBorderColor='red.300'
                            placeholder='' border="1px solid black"
                            w="100%"
                            p={2}
                            borderRadius="10px"
                            borderColor="gray"
                            focusBorderColor="transparent"
                            outline="none"
                            boxShadow="none"
                        />
                    </Box>

                    <Box>
                        <Text fontSize="18px" fontWeight="bold" fontFamily="'Inter', serif">Phone Number</Text>
                        <InputGroup border="1px solid black"
                            p={2}
                            borderRadius="10px"
                            borderColor="gray"
                        >
                            <InputLeftAddon>+91</InputLeftAddon>
                            <Input type='tel' placeholder='phone number'
                                focusBorderColor="transparent"
                                outline="none"
                                boxShadow="none"
                                w="100%"
                            />

                        </InputGroup>
                    </Box>

                    <Box>
                        <Text fontSize="18px" fontWeight="bold" fontFamily="'Inter', serif">Business Website</Text>
                        <InputGroup
                            border="1px solid black"
                            p={2}
                            borderRadius="10px"
                            borderColor="gray"
                        >
                            <Input
                                placeholder='mysite'
                                w="100%"
                                focusBorderColor="transparent"
                                outline="none"
                                boxShadow="none"
                            />
                            <InputRightAddon>.com</InputRightAddon>
                        </InputGroup>
                    </Box>

                    <Button
                        mt={2}
                        w={{ base: '30%', md: '25%', lg: '20%' }}
                        py={2}
                        px={1}
                        bg='#cc3c28'
                        color="white"
                        fontWeight="bold"

                        borderRadius="10px"
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact