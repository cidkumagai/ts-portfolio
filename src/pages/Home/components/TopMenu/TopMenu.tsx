import { Box, Flex, Text } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

import { useAppSelector } from '../../../../app/hooks';

export const TopMenu = () => {
    const { topMenu } = useAppSelector((state) => state.portfolio);
    return (
        <Flex>
            {topMenu.map((item, index) => {
                return (
                    <Link to={item.link} key={index}>
                        <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        border={'1px solid black'}
                        width={'100px'}
                        >
                            <IconContext.Provider value={{ size: '20px' }}>
                                <Box
                                as={item.icon} />
                                <Text fontSize={'xl'}>{item.pageName}</Text>
                            </IconContext.Provider>
                        </Flex>
                    </Link>
                )
            })}
        </Flex>
    )
}