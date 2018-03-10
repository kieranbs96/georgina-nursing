import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Subfooter from '../components/Subfooter';

import faviconApple from '../img/apple-touch-icon.png';
import favicon32 from '../img/favicon-32x32.png';
import favicon16 from '../img/favicon-16x16.png';
import faviconMask from '../img/safari-pinned-tab.svg';
import faviconIco from '../img/favicon.ico';

import './css/normalize.css';
import './scss/main.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Georgina Cross - Registered Nurse - UK"
      meta={[
        {
          name: 'description',
          content:
            'Georgina Cross is a Nurse registered with the Royal College of Nursing and graduated from Kings College London',
        },
        {
          name: 'keywords',
          content: 'Georgina Cross, Royal College of Nursing, RCN, Nurse, Nursing, KCL, Kings College London',
        },
      ]}
    >
      <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="mask-icon" href={faviconMask} color="#5bbad5" />
      <link rel="shortcut icon" href={faviconIco} />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <Header />
    <hr className="decoration" />
    <section className="content h-padding h-center">{children()}</section>
    <hr className="decoration bottom" />
    <Footer />
    <Subfooter />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
