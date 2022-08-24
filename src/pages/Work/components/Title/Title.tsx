import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export const Title = () => {
    const { width, height } = useWindowSize();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true);
        }, 500);
    }, [setIsOpen]);
    return (
        <React.Fragment>
            <Box
                zIndex={-1}
                position={'relative'}
                _before={{
                    width: '100%',
                    height: '300px',
                    backgroundImage:
                        'linear-gradient(to bottom right, transparent 50%, #9f79ea 50%)',
                    bottom: '0',
                    content: '""',
                    position: 'absolute',
                    zIndex: 2,
                }}
            >
                <Box
                    width={'100%'}
                    height={'100%'}
                    zIndex={1}
                    position={'fixed'}
                    top={0}
                    left={0}
                    bgGradient={[
                        'linear(to-tr, teal.300, yellow.400)',
                        'linear(to-t, blue.200, teal.500)',
                        'linear(to-b, orange.100, purple.300)',
                    ]}
                >
                    <Box width={'60%'} margin={'0 auto'}>
                        <Confetti
                            width={width}
                            height={height}
                            recycle={true}
                        />
                        <Text
                            marginTop={'20%'}
                            fontSize={{
                                base: 'sm',
                                sm: 'md',
                                md: '3xl',
                                lg: '4xl',
                                xl: '5xl',
                            }}
                            fontWeight='extrabold'
                            bgGradient='linear(to-l, #7928CA, #FF0080)'
                            bgClip='text'
                            transition={'0.8s'}
                            opacity={isOpen ? 1 : 0}
                            transform={
                                isOpen ? 'translateX(0)' : 'translateX(40px)'
                            }
                        >
                            My past Works
                        </Text>
                        <Text
                            fontSize={'2xl'}
                            position={'fixed'}
                            bottom={'5%'}
                            color={'gray.300'}
                            right={'5%'}
                        >
                            &copy;Kumachen
                        </Text>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
};
