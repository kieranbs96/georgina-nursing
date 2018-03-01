import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
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
        { name: 'keywords', content: 'Georgina Cross, Royal College Nursing, RCN, Nurse, Nursing' },
      ]}
    />
    <Header />
    <hr className="decoration" />
    <section className="content h-center">{children()}</section>
    <hr className="decoration bottom" />
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;