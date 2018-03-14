import React from 'react';
import Link from 'gatsby-link';
import ScarletFeverImage from '../../img/scarlet-fever__1.png';

const BlogPreviewOne = () => (
  <div className="blog__article-preview blog__aotm">
    <div className="blog__preview-content">
      <div className="blog__preview-left">
        <h2 className="blog__article-title">Article of the Month - Scarlet Fever resurgence</h2>
        <h3 className="blog__article-date tertiary">28th February 2018</h3>
        <p>
          Scarlet Fever, an infectious disease presenting with rash, red cheeks, sore throat, swollen or strawberry
          looking tongue and a fever typically &gt; 39.C <sup>[2]</sup> . It is prominent in nurseries and schools but
          what happens when a child with scarlet fever presents to paediatric ED? The AOTM explores what I found out
          about scarlet fever on a recent placement, and what I mistook symptoms for.
        </p>
        <Link to="/blog/scarlet-fever-resurgence/" className="button secondary">
          See the full article
        </Link>
      </div>
      <div className="blog__preview-right">
        <picture>
          <img src={ScarletFeverImage} alt="Child with Scarlet Fever Symptoms" className="blog__preview-image" />
          <span className="blog__preview-image-caption tertiary">
            Figure 1 Scarlet Fever <sup>[1]</sup> https://en.wikipedia.org/wiki/Scarlet_fever
          </span>
        </picture>
      </div>
    </div>
  </div>
);

export default BlogPreviewOne;
