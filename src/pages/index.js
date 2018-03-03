import React from 'react';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowAltCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowAltCircleLeft';
import faArrowAltCircleRight from '@fortawesome/fontawesome-free-solid/faArrowAltCircleRight';
import Slide1 from '../img/11.jpg';
import Slide2 from '../img/12.jpg';

const index = () => (
  <div>
    <div className="home">
      <h1>About Me</h1>
      <p>
        Hello, my name is Georgina and I am a third year nursing student. This e-Portfolio is designed to keep my
        reflective pieces together, track progress such as CPD and obviously prepare me for the daunting NMC
        revalidation in three years' time.
      </p>
      <p> Below is a gallery to keep you entertained amongst enormous collection of work on this site. </p>
    </div>
    <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3}>
      <Slider>
        <Slide index={0}>
          <img src={Slide1} alt="Georgina Cross" />
        </Slide>
        <Slide index={1}>
          <img src={Slide2} alt="Georgina Cross" />
        </Slide>
        <Slide index={2}>
          <img src="" alt="" />
        </Slide>
      </Slider>
      <div className="carousel__buttons">
        <ButtonBack>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </ButtonBack>
        <ButtonNext>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </ButtonNext>
      </div>
    </CarouselProvider>
  </div>
);

export default index;
