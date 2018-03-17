import React, { Component } from 'react';

import ReactCarousel from '../components/Carousel';
import HomeSidebar from '../components/HomeSidebar';

const index = () => (
  <div>
    <div className="home">
      <HomeSidebar />
      <div className="home__main-area">
        <h1>About Me</h1>
        <p>
          Hello, my name is Georgina and I am a third year nursing student. This e-Portfolio is designed to keep my
          reflective pieces together, track progress such as Continuing Professional Development (CPD) and to prepare me
          for the daunting NMC revalidation in three years' time.
        </p>
        <p>
          Spending time in hospital as a child myself I can empathize with those in my care with how scary being in
          unwell can be. Aspiring to be a children's nurse I aim to gain the skill set (My Skills can be found in the
          sidebar) to work with family units to get children back home if they can after illness'.
        </p>
        <p>
          I am due to graduate from King's College London in July 2018 and receive my NMC Pin shortly after, I have
          secured a role at Evelina London Children's Hospital and will be allocated my ward soon. My dissertation
          subject is 'Asthma and Obesity Meta-analysis' and once finished and graded I will post snippets on this
          website.
        </p>
        <p>
          Below is a gallery of pictures of me and pictures from my adventures to keep you entertained amongst enormous
          collection of work on this site.
        </p>
        <ReactCarousel />
      </div>
    </div>
  </div>
);

export default index;
