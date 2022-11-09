import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTittle = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{title}- Food burger kitchen</title>
                
            </Helmet>
        </div>
    );
};

export default PageTittle;