import React from 'react';
import Link from 'gatsby-link';

import ScarletFeverImage from '../img/scarlet-fever__1.png';

const Blog = () => (
  <div className="blog">
    <h1>Blog</h1>
    <div className="blog__article-list">
      <div className="blog__article-preview">
        <div className="blog__preview-content">
          <div className="blog__preview-left">
            <h2 className="blog__article-title">Article of the Month (AOTM) - Scarlet Fever resurgence</h2>
            <h3 className="blog__article-date">February 2018</h3>
            <p>
              Scarlet Fever, an infectious disease presenting with rash, red cheeks, sore throat, swollen or strawberry
              looking tongue and a fever typically &gt; 39.C <sup>[2]</sup> . It is prominent in nurseries and schools
              but what happens when a child with scarlet fever presents to paediatric ED? The AOTM explores what I found
              out about scarlet fever on a recent placement, and what I mistook symptoms for.
            </p>
            <Link to="/blog/04-03-2018/">Click here to see the full article</Link>
          </div>
          <div className="blog__preview-right">
            <picture>
              <img src={ScarletFeverImage} alt="Child with Scarlet Fever Symptoms" className="blog__preview-image" />
              <caption className="blog__preview-image-caption">
                Figure 1 Scarlet Fever <sup>[1]</sup> https://en.wikipedia.org/wiki/Scarlet_fever
              </caption>
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
