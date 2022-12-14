import React from 'react';

import { IntroductionCard } from './components/IntroductionCard/IntroductionCard';
import { Title } from './components/Title/Title';

export const Home = () => {
    return (
        <React.Fragment>
            <Title />
            <IntroductionCard />
        </React.Fragment>
    );
};
