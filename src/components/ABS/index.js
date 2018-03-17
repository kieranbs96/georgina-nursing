import React from 'react';
import Link from 'gatsby-link';
import AmnioticBandImage from '../../img/amniotic-band-syndrome__1.png';

const ABS = () => (
  <div className="blog__article-preview blog__normal">
    <div className="blog__preview-content">
      <div className="blog__preview-left">
        <h2 className="blog__article-title">Amniotic Band Syndrome</h2>
        <h3 className="blog__article-date tertiary">15th March 2018</h3>
        <p>
          The rare condition that develops in utero results in a variety of different deformities in those that have
          ABS. ABS occurs when thick amniotic bands constrict around limbs or extremities, some causing constriction and
          some causing complete amputation.
        </p>
        <Link to="/blog/amniotic-band-syndrome/" className="button secondary">
          See the full article
        </Link>
      </div>
      <div className="blog__preview-right">
        <picture>
          <img src={AmnioticBandImage} alt="Child with Amniotic Band Syndrome" className="blog__preview-image" />
        </picture>
      </div>
    </div>
  </div>
);

export default ABS;
