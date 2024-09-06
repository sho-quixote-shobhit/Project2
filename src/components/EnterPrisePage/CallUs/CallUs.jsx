import { Box , Text , Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { SiNike } from 'react-icons/si'

const CallUs = () => {
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
            return '60%';
        } else if (windowWidth > 1800) {
            return '65%';
        } else if (windowWidth > 1600) {
            return '70%'
        } else {
            return '80%'
        }
    }

    return (
        <Box
            w = "100%"
            p = "80px 0px"
        >
            <Box
                w = {width}
                m = "auto auto"
                bg = "#5566ea"
                p = "40px 30px"
                display="flex"
                flexDir={{base : 'column' , lg : 'row'}}
                justifyContent="center"
                gap = "100px"
                borderRadius="20px"
            >
                <Box
                    display="flex"
                    flexDir="column"
                    gap = "20px"
                    justifyContent="center"
                >

                    <Text fontSize="25px" fontWeight="bold" color = "white">GOT A BIG PROJECT?</Text>
                    <Box display="flex" fontWeight="bold" color = "white" alignItems="center" gap = "5px">
                        <SiNike />
                        <Text>interested in preferred?</Text>
                    </Box>
                    <Box display="flex" fontWeight="bold" color = "white" alignItems="center" gap = "5px">
                        <SiNike />
                        <Text>have a large project in mind?</Text>
                    </Box>
                    <Box display="flex" fontWeight="bold" color = "white" alignItems="center" gap = "5px">
                        <SiNike />
                        <Text>need guidance building a custom shoot?</Text>
                    </Box>

                    <Box
                        bg = "#cc3c28"
                        p = {2} 
                        borderRadius="10px"
                        fontSize="15px"
                        color="white"
                        cursor="pointer"
                        fontWeight="bold"
                    >
                        <Text align = "center">CHAT WITH SALES</Text>
                    </Box>
                </Box>

                <Box>
                    <Image borderRadius="20px" src = "https://cdn.prod.website-files.com/622327bc87949d02598242bf/63f52432a47e86ac6b5410ea_web_Liliana%20Noble_r1_2748-p-500.webp" />
                </Box>
            </Box>
        </Box>
    )
}

export default CallUs