import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiReact, SiSass, SiTypescript, SiMysql } from 'react-icons/si';
import { DiJava, DiJavascript1, DiPhp, DiPython, DiCss3 } from 'react-icons/di';
import {
    Box,
    Flex,
    Img,
    Spacer,
    Tab,
    Table,
    TableContainer,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';

import myPic from '../../../../images/IMG_7421.jpg';
import { Link } from 'react-router-dom';

export const IntroductionCard = () => {
    const [scrollY, setScrollY] = useState(0);
    const cardElement = document.getElementById('card');
    const [isFade, setIsFade] = useState(false);
    const handleScroll = () => {
        setScrollY(window.scrollY);
        if (cardElement?.getBoundingClientRect().top! < scrollY + 300) {
            setIsFade(true);
        } else {
            setIsFade(false);
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
                marginTop={{ base: '90%', sm: '80%', md: '50%', lg: '50%' }}
                zIndex={2}
            >
                <Box width={'60%'} margin={'0 auto'} padding={'50px 0'}>
                    <Text
                        fontSize={{
                            base: 'sm',
                            sm: 'md',
                            md: '3xl',
                            lg: '4xl',
                            xl: '6xl',
                        }}
                        fontWeight={200}
                        color={'gray.100'}
                    >
                        PROFILE
                    </Text>
                </Box>
                <Tabs
                    id='card'
                    isFitted
                    variant='enclosed'
                    width={{ base: '90%', md: '60%' }}
                    border={'2px solid #a0aebe'}
                    borderRadius={'10px'}
                    margin={'0 auto'}
                    backgroundColor={'gray.100'}
                    opacity={isFade ? 1 : 0}
                    transform={isFade ? 'translateY(0)' : 'translateY(50px)'}
                    transition={'all 0.8s'}
                >
                    <TabList mb='1em'>
                        <Tab
                            color={'gray.500'}
                            fontSize={{
                                base: '10px',
                                sm: 'xs',
                                md: '3xl',
                                lg: 'xl',
                                xl: '3xl',
                            }}
                        >
                            Person
                        </Tab>
                        <Tab
                            color={'gray.500'}
                            fontSize={{
                                base: '10px',
                                sm: 'xs',
                                md: '3xl',
                                lg: 'xl',
                                xl: '3xl',
                            }}
                        >
                            Skills
                        </Tab>
                        <Tab
                            color={'gray.500'}
                            fontSize={{
                                base: '10px',
                                sm: 'xs',
                                md: '3xl',
                                lg: 'xl',
                                xl: '3xl',
                            }}
                        >
                            Qualifications
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Flex
                                width={'90%'}
                                margin={'auto auto'}
                                height={'400px'}
                                alignItems={'center'}
                                display={{ md: 'block', lg: 'flex' }}
                            >
                                <Img
                                    src={myPic}
                                    boxSize={{
                                        base: '150px',
                                        sm: '250px',
                                        md: '200px',
                                        lg: '250px',
                                        xl: '300px',
                                    }}
                                    borderRadius={'10px'}
                                    margin={{
                                        base: '0 auto',
                                        sm: '0 auto',
                                        md: '0 auto',
                                    }}
                                />
                                <Box
                                    marginLeft={{ md: '0px', lg: '30px' }}
                                    margin={{ md: '10px auto' }}
                                >
                                    <Text
                                        fontSize={{
                                            base: 'lg',
                                            sm: 'xs',
                                            md: '2xl',
                                            lg: 'xl',
                                            xl: '4xl',
                                        }}
                                        marginTop={{ base: '20px', md: '5px' }}
                                        color={'gray.500'}
                                    >
                                        Name: Kumagai Kazuhiro
                                    </Text>
                                    <Text
                                        fontSize={{
                                            base: 'md',
                                            sm: 'xs',
                                            md: 'lg',
                                            lg: 'md',
                                            xl: 'lg',
                                        }}
                                        marginTop={{ base: '20px', md: '5px' }}
                                        color={'gray.500'}
                                    >
                                        Date of birth: 24th Octber 2001
                                    </Text>
                                    <Text
                                        fontSize={{
                                            base: '12px',
                                            sm: 'xs',
                                            md: 'md',
                                            lg: 'md',
                                            xl: 'lg',
                                        }}
                                        marginTop={{ base: '20px', md: '5px' }}
                                        color={'gray.500'}
                                    >
                                        School: CHUO Institute of Information
                                        and Design
                                    </Text>
                                    <Text
                                        fontSize={{
                                            base: 'md',
                                            sm: 'xs',
                                            md: 'lg',
                                            lg: 'md',
                                            xl: 'lg',
                                        }}
                                        marginTop={{ base: '20px', md: '5px' }}
                                        color={'gray.500'}
                                    >
                                        Part time job: HIRYU KIKAKU co.,
                                    </Text>
                                </Box>
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <Box
                                width={'90%'}
                                margin={'auto auto'}
                                height={'400px'}
                            >
                                <Text
                                    fontSize={{
                                        base: 'xs',
                                        sm: 'xs',
                                        md: '3xl',
                                        lg: 'xl',
                                        xl: '4xl',
                                    }}
                                    color={'gray.500'}
                                >
                                    Langage
                                </Text>
                                <Flex marginTop={'30px'}>
                                    <IconContext.Provider
                                        value={{
                                            size: '45px',
                                            color: '#a0aebe',
                                        }}
                                    >
                                        <SiTypescript />
                                        <Spacer />
                                        <DiPython />
                                        <Spacer />
                                        <DiJavascript1 />
                                        <Spacer />
                                        <DiJava />
                                        <Spacer />
                                        <DiPhp />
                                    </IconContext.Provider>
                                </Flex>
                                <Text
                                    fontSize={{
                                        base: 'xs',
                                        sm: 'xs',
                                        md: '3xl',
                                        lg: 'xl',
                                        xl: '4xl',
                                    }}
                                    color={'gray.500'}
                                    marginTop={'30px'}
                                >
                                    Others
                                </Text>
                                <Flex marginTop={'30px'}>
                                    <IconContext.Provider
                                        value={{
                                            size: '45px',
                                            color: '#a0aebe',
                                        }}
                                    >
                                        <Spacer />
                                        <SiReact />
                                        <Spacer />
                                        <SiSass />
                                        <Spacer />
                                        <SiMysql />
                                        <Spacer />
                                        <AiFillHtml5 />
                                        <Spacer />
                                        <DiCss3 />
                                        <Spacer />
                                    </IconContext.Provider>
                                </Flex>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box
                                width={'90%'}
                                margin={'auto auto'}
                                height={'400px'}
                            >
                                <TableContainer
                                    fontSize={{
                                        base: 'xs',
                                        sm: 'sm',
                                        md: 'md',
                                        lg: 'lg',
                                        xl: 'xl',
                                    }}
                                    color={'gray.500'}
                                >
                                    <Table variant='simple'>
                                        <Thead>
                                            <Tr>
                                                <Th
                                                    fontSize={{
                                                        base: 'md',
                                                        sm: 'lg',
                                                        md: 'xl',
                                                        lg: 'xl',
                                                        xl: '2xl',
                                                    }}
                                                    color={'gray.500'}
                                                >
                                                    Date
                                                </Th>
                                                <Th
                                                    fontSize={{
                                                        base: 'md',
                                                        sm: 'lg',
                                                        md: 'xl',
                                                        lg: 'xl',
                                                        xl: '2xl',
                                                    }}
                                                    color={'gray.500'}
                                                >
                                                    Name
                                                </Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td>2019.7.12</Td>
                                                <Td>ITパスポート</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>2021.1.28</Td>
                                                <Td>
                                                    情報セキュリティマネジメント試験
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td>2021.8.1</Td>
                                                <Td>
                                                    実践プログラミング技術者試験
                                                    Java部門 Gold
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td>2021.8.7</Td>
                                                <Td>
                                                    実践プログラミング技術者試験
                                                    Python部門 Platinum
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td>2021.12.21</Td>
                                                <Td>
                                                    Oracle Certified Java
                                                    Programmer, Gold SE 11
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Link to={'/ts-portfolio/work'}>
                    <Text
                        zIndex={3}
                        fontSize={'xl'}
                        textAlign={'center'}
                        color={'teal.200'}
                        marginTop={'10px'}
                        bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
                        bgClip='text'
                        fontWeight='extrabold'
                        _before={{
                            content: '"＞"',
                        }}
                        _after={{
                            content: '"＜"',
                        }}
                    >
                        Past Work
                    </Text>
                </Link>
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
