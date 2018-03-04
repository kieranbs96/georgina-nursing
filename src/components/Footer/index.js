import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <footer className="footer">
    <div className="container h-padding h-center">
      <h3>Georgina Cross</h3>
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
    </div>
  </footer>
);

export default Footer;
