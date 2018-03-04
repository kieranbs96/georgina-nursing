import React from 'react';
import Link from 'gatsby-link';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedIn';

const Footer = () => (
  <footer className="footer">
    <div className="container h-padding h-center">
      <h3>
        <Link to="/">Georgina Cross</Link>
      </h3>
      <ul className="footer__list">
        <li className="footer__list-item">
          <Link to="/" className="footer__item-link">
            Home
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to="/portfolio" className="footer__item-link">
            Portfolio
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to="/cpd" className="footer__item-link">
            CPD
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to="/reflections" className="footer__item-link">
            Reflections
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to="/blog" className="footer__item-link">
            Blog
          </Link>
        </li>
      </ul>
      <div className="footer__social">
        <div className="footer__social-item">
          <a href="//www.linkedin.com/in/georgina-cross-43aab790/" className="footer__social-link">
            <FontAwesomeIcon icon={faLinkedIn} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
