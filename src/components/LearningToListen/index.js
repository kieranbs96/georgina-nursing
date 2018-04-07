import React from 'react';
import Link from 'gatsby-link';
import ScarletFeverImage from '../../img/scarlet-fever__1.png';

const LearningToListen = () => (
  <div className="blog__article-preview blog__aotm">
    <div className="blog__preview-content">
      <div className="blog__preview-left">
        <h2 className="blog__article-title">Article of the Month - Learning to Listen</h2>
        <h3 className="blog__article-date tertiary">28th March 2018</h3>
        <p>
          Whilst hearing is one of our five senses, listening is not an integral skill that most of us possess. I can be guilty of this myself. Therefore, in this month’s AOTM I will be discussing the two article series in the Nursing Times about how to listen and reflect on this in relation to practice.
  
        </p>
        <Link to="/blog/learning-to-listen/" className="button secondary">
          See the full article
        </Link>
      </div>
      <div className="blog__preview-right">

      </div>
    </div>
  </div>
);

export default LearningToListen;
