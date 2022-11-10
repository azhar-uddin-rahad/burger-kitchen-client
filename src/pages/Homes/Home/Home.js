import React from 'react';
import PageTittle from '../../../sherd/PageTittle/PageTittle';
import Banner from '../Banner/Banner';
import BannerStyle from '../BannerStyle/BannerStyle';
import ExtraSection1 from '../ExtraSection/ExtraSection1';
import ExtraSection2 from '../ExtraSection/ExtraSection2';
import Serviced from '../Serviced/Serviced';

const Home = () => {
    return (
        <div>
            <PageTittle title='Home'></PageTittle>
           <Banner></Banner>
           <BannerStyle></BannerStyle>
           <Serviced></Serviced>
           <ExtraSection1></ExtraSection1>
           <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;