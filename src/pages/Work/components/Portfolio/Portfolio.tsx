import React, { useEffect, useState } from 'react';
import { AspectRatio, Box, Text } from '@chakra-ui/react';

export const Portfolio = () => {
    const [scrollY, setScrollY] = useState(0);
    const cardElement1 = document.getElementById('card1');
    const cardElement2 = document.getElementById('card2');
    const [isFade1, setIsFade1] = useState(false);
    const [isFade2, setIsFade2] = useState(false);
    console.log(isFade1);
    const handleScroll = () => {
        setScrollY(window.scrollY);
        if (cardElement1?.getBoundingClientRect().top! < scrollY + 300) {
            setIsFade1(true);
        } else {
            setIsFade1(false);
        }
        if (cardElement2?.getBoundingClientRect().top! < scrollY - 300) {
            setIsFade2(true);
        } else {
            setIsFade2(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });
    return (
        <React.Fragment>
            <Box
                background={'purple.400'}
                width={'100%'}
                paddingBottom={'100px'}
                paddingTop={'100px'}
                marginTop={{ base: '90%', sm: '80%', md: '50%', lg: '50%' }}
                zIndex={2}
            >
                <Box
                    id='card1'
                    transition={'all 0.8s'}
                    opacity={isFade1 ? 1 : 0}
                    transform={isFade1 ? 'translateY(0)' : 'translateY(50px)'}
                    width={'90%'}
                    margin={'0 auto'}
                    border={'1px solid #efd9d1'}
                    borderRadius={'10px'}
                    padding={'5%'}
                    bgGradient='linear(to-bl, green.200, pink.500)'
                >
                    <Text
                        fontSize={{ base: 'md', md: '3xl', lg: '5xl' }}
                        color={'blackAlpha.600'}
                    >
                        TypeScript × React Todo-App
                    </Text>
                    <Text
                        fontSize={{ base: 'sm', md: '2xl', lg: '4xl' }}
                        marginLeft={'20px'}
                        color={'blackAlpha.600'}
                    >
                        Global state: redux
                    </Text>
                    <Text
                        fontSize={{ base: 'sm', md: '2xl', lg: '4xl' }}
                        marginLeft={'20px'}
                        color={'blackAlpha.600'}
                    >
                        UI: chackra ui
                    </Text>

                    <AspectRatio width={'90%'} margin={'0 auto'} ratio={16 / 9}>
                        <iframe
                            id='inlineFrameExample'
                            title='Inline Frame Example'
                            width='300'
                            height='200'
                            src='https://cidkumagai.github.io/ts-todoApp/'
                        ></iframe>
                    </AspectRatio>
                </Box>
                <Box margin={'50px 0'} />
                <Box
                    id='card2'
                    transition={'all 0.8s'}
                    opacity={isFade2 ? 1 : 0}
                    transform={isFade2 ? 'translateY(0)' : 'translateY(50px)'}
                    width={'90%'}
                    margin={'0 auto'}
                    border={'1px solid #efd9d1'}
                    borderRadius={'10px'}
                    padding={'5%'}
                    bgGradient='linear(to-tr, green.200, pink.500)'
                >
                    <Text
                        fontSize={{ base: 'md', md: '3xl', lg: '5xl' }}
                        color={'blackAlpha.600'}
                    >
                        TypeScript × React POPULATION-SPA
                    </Text>
                    <Text
                        fontSize={{ base: 'sm', md: '2xl', lg: '4xl' }}
                        marginLeft={'20px'}
                        color={'blackAlpha.600'}
                    >
                        Use API: RESAS-API
                    </Text>
                    <Text
                        fontSize={{ base: 'sm', md: '2xl', lg: '4xl' }}
                        marginLeft={'20px'}
                        color={'blackAlpha.600'}
                    >
                        Global state: redux
                    </Text>
                    <Text
                        fontSize={{ base: 'sm', md: '2xl', lg: '4xl' }}
                        marginLeft={'20px'}
                        color={'blackAlpha.600'}
                    >
                        UI: chackra ui
                    </Text>
                    <AspectRatio width={'90%'} margin={'0 auto'} ratio={16 / 9}>
                        <iframe
                            id='inlineFrameExample'
                            title='Inline Frame Example'
                            width='300'
                            height='200'
                            src='https://cidkumagai.github.io/ts-spa/'
                        ></iframe>
                    </AspectRatio>
                </Box>
            </Box>
            <Box
                position={'relative'}
                _after={{
                    width: '100%',
                    height: '300px',
                    backgroundImage:
                        'linear-gradient(to left top , transparent 50%, #9f79ea 50%)',
                    top: '0',
                    content: '""',
                    position: 'absolute',
                    zIndex: 2,
                }}
            />
        </React.Fragment>
    );
};
