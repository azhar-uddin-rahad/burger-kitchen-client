import React from 'react';
import PageTittle from '../../../sherd/PageTittle/PageTittle';
import Banner from '../Banner/Banner';
import BannerStyle from '../BannerStyle/BannerStyle';
import ExtraSection1 from '../ExtraSection/ExtraSection1';

const Home = () => {
    return (
        <div>
            <PageTittle title='Home'></PageTittle>
           <Banner></Banner>
           <BannerStyle></BannerStyle>
           <ExtraSection1></ExtraSection1>
        </div>
    );
};

export default Home;