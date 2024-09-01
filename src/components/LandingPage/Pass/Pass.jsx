import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import data from './data'

const Pass = () => {
    return (
        <Box
            w='100%'
            p="30px 0px"
            bg='#E8ECE9'
        >
            <Box
                w={{ base: '90%', lg: '80%' }}
                display='flex'
                flexDir='column'
                alignItems='center'
                gap={{ base: '20px', lg: '20px' }}
                m='auto auto'
            >
                <Box

                >
                    <Text
                        fontSize={{base : '30px' , lg : '48px'}}
                        align='center'
                        fontFamily="'Inter', serif"
                    >
                        Content creation designed for scale.
                    </Text>
                </Box>

                <Box
                    display='flex'
                    flexDir='column'
                    alignItems='center'
                    fontSize='20px'
                >
                    <Text>Making content creation easy for the</Text>
                    <Text>soloprenuer - all the way to enterprise.</Text>
                </Box>

                <Box
                    display='flex'
                    flexWrap='wrap'
                    justifyContent='center' 
                    gap='30px'
                    mt={7}
                >
                    {data.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <Box
                                key={index}  
                                display='flex'
                                flexDir='column'
                                justifyContent='space-between'
                                p="20px"
                                w={{ base: '85%', md: 'calc(50% - 30px)', lg: 'calc(25% - 30px)' }}
                                bg="white"
                                borderRadius='20px'
                                boxShadow="md"  
                                gap='30px'
                            >
                                <Box
                                    display='flex'
                                    mb="15px" 
                                >
                                    <Box
                                        w="70%"
                                    >
                                        <Text
                                            fontWeight="bold"
                                            mb="10px"
                                            fontSize={{base : '20px' , lg : '24px'}}
                                            color={item.heading === 'Standard' ? 'purple' : 'black'}
                                        >
                                            {item.heading}
                                        </Text>
                                        <Text>
                                            {item.text}
                                        </Text>
                                    </Box>

                                    <Box
                                        w="30%"
                                        display='flex'
                                        justifyContent='flex-end'
                                    >
                                        <IconComponent boxSize={10} bg='purple' color='white' p={1} borderRadius='50%' />
                                    </Box>
                                </Box>

                                <Box
                                    p="10px 15px"
                                    bg='grey'
                                    borderRadius="5px"
                                    textAlign="center" 
                                    color='white'
                                    fontWeight='600'
                                    cursor='pointer'
                                >
                                    <Text>{item.butonText}</Text>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default Pass
