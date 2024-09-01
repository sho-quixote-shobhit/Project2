import { SpinnerIcon } from '@chakra-ui/icons';
import { Box, Text, keyframes } from '@chakra-ui/react';
import React from 'react';

const MovingAd = () => {
    const marquee = keyframes`
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
    `;

    return (
        <Box
            w="100%"
            bg="#3c51f1"
            h={{ base: '150px', lg: '250px' }}
            overflow="hidden"
            display="flex"
            alignItems="center"
            _hover={{
                animationPlayState: 'paused',
            }}
        >
            <Box
                display="inline-flex"
                gap="40px"
                fontSize={{ base: '40px', lg: '60px' }}
                whiteSpace="nowrap"
                animation={`${marquee} 40s linear infinite`}
                fontFamily="'Inter', serif"
                color='white'
                animationPlayState="running"
                sx={{
                    '&:hover': {
                        animationPlayState: 'paused',
                    },
                }}
                alignItems='center'
            >
                <Text>Over 300 Million sales</Text>
                <SpinnerIcon />
                <Text>Best In The World</Text>
                <SpinnerIcon />
                <Text>Current & latest fashion</Text>
                <SpinnerIcon />
                <Text>Over 20 Million assets and counting</Text>
                <SpinnerIcon />
                <Text>Over 300 shoots per week</Text>
                <SpinnerIcon />
                <Text>1K Models</Text>
                <SpinnerIcon />
            </Box>
        </Box>
    );
};

export default MovingAd;
