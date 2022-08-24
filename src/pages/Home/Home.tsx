import React from "react";
// import { Flex} from "@chakra-ui/react";

// import { TopMenu } from "./components/TopMenu/TopMenu";
import { IntroductionCard } from "./components/IntroductionCard/IntroductionCard";
import { Title } from "./components/Title/Title";

export const Home = () => {
    return (
        <React.Fragment>
            <Title />
            <IntroductionCard />
            {/* <Flex
            marginTop={'30px'}
            justifyContent={'center'}>
                <TopMenu />
            </Flex> */}
        </React.Fragment>
    );
}