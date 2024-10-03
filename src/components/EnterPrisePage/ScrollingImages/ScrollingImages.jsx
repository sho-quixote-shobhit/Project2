import { Box, Image } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

const ScrollingImages = () => {
    const containerRef = useRef(null)
    const [scrollPos, setScrollPos] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Box
            ref={containerRef}
            display="flex"
            flexDirection="row"
            position="relative"
            overflow="hidden"
            whiteSpace="nowrap"
            w="100vw"
            h="300px"
        >
            <Box
                display="flex"
                position="absolute"
                top="0"
                left={`-${scrollPos}px`}
                transition="left 0.1s ease-out"
            >
                {/* Image List */}
                <Image
                    src="https://cdn.prod.website-files.com/622327bc87949d02598242bf/656915df74fd2379e6b95871_web_AMOREPACIFIC%20US_r1_9326-p-500.webp"
                    alt="Image 1"
                    h="100%"
                    w = "400px"
                    mx={2}
                    borderRadius="10px"
                />
                <Image
                    src="https://cdn.prod.website-files.com/622327bc87949d02598242bf/656915df6083c1ab9d0a8302_web_Pourri_r1_8447.webp"
                    alt="Image 2"
                    h="100%"
                    w = "400px"
                    mx={2}
                    borderRadius="10px"
                />
                <Image
                    src="https://cdn.prod.website-files.com/622327bc87949d02598242bf/656915df74fd2379e6b95871_web_AMOREPACIFIC%20US_r1_9326-p-500.webp"
                    alt="Image 3"
                    h="100%"
                    w = "400px"
                    mx={2}
                    borderRadius="10px"
                />
                <Image
                    src="https://cdn.prod.website-files.com/622327bc87949d02598242bf/65691737405eec86f2e3b421_web_Life360%20and%20Tile_r2_03C_0152-p-500.webp"
                    alt="Image 4"
                    h="100%"
                    w = "400px"
                    mx={2}
                    borderRadius="10px"
                />
                <Image
                    src="https://cdn.prod.website-files.com/622327bc87949d02598242bf/656915df74fd2379e6b95871_web_AMOREPACIFIC%20US_r1_9326-p-500.webp"
                    alt="Image 5"
                    h="100%"
                    w = "400px"
                    mx={2}
                    borderRadius="10px"
                />
            </Box>
        </Box>
    )
}

export default ScrollingImages
