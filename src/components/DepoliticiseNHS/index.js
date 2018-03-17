import React from 'react';
import Link from 'gatsby-link';
import NHSImage from '../../img/nhs__1-small.png';

const DepoliticiseNHS = () => (
  <div className="blog__article-preview blog__normal">
    <div className="blog__preview-content">
      <div className="blog__preview-left">
        <h2 className="blog__article-title">Should we depoliticise the NHS?</h2>
        <h3 className="blog__article-date tertiary">17th March 2018</h3>
        <p>
          The student-led committee document titled "Futureproof: the NHS in 15 years, a generational shift", stimulates
          many questions. Having attended the launch conference of this paper the main question that arose time and time
          again was, should we depoliticise the NHS? Whilst the NHS is used in forms of fake promises by politicians
          during elections, it is not the right time to depoliticise the NHS?
        </p>
        <Link to="/blog/should-we-depoliticise-the-nhs/" className="button secondary">
          See the full article
        </Link>
      </div>
      <div className="blog__preview-right">
        <picture>
          <img src={NHSImage} alt="Futureproofing the NHS leaflet" className="blog__preview-image" />
        </picture>
      </div>
    </div>
  </div>
);

export default DepoliticiseNHS;
