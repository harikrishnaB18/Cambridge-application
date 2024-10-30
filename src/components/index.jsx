import React from 'react';
import useToggle from './useToggle.js';
import BackToTop from './BackToTop.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import AboutHomeTwo from './AboutHomeTwo.jsx';
import CounterArea from './CounterArea.jsx';
import FAqSection from './FAqSection.jsx';
import FeaturesHomeTwo from './FeaturesHomeTwo.jsx';
import FooterHomeTwo from './FooterHomeTwo.jsx';
import HeaderHomeTwo from './HeaderHomeTwo.jsx';
// import HeroHomeTwo from './HeroHomeTwo.jsx';
// import PricingHomeTwo from './PricingHomeTwo.jsx';
import ServicesHomeTwo from './ServicesHomeTwo.jsx';
// import SponserHomeTwo from './SponserHomeTwo.jsx';
import HelpingSection from './HelpingSection.jsx';
// import VideoPlayerHomeTwo from './VideoPlayerHomeTwo.jsx';

function HomeTwo() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeTwo action={drawerAction.toggle} />
            <ServicesHomeTwo />
            <AboutHomeTwo />
            <FeaturesHomeTwo />
            <CounterArea />
            <HelpingSection /> 
            <FAqSection /> 
            <FooterHomeTwo />
            <BackToTop className="back-to-top-2" />
        </>
    );
}

export default HomeTwo;
