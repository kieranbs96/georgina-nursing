import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Img from 'gatsby-image';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

import HomeSidebar from '../components/HomeSidebar';

import 'pure-react-carousel/dist/react-carousel.es.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowAltCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowAltCircleLeft';
import faArrowAltCircleRight from '@fortawesome/fontawesome-free-solid/faArrowAltCircleRight';
import Slide1 from '../img/12.jpg';
import Slide2 from '../img/13.jpg';
import Slide3 from '../img/14.jpg';
import Slide4 from '../img/15.jpg';
import Slide5 from '../img/16.jpg';

class index extends Component {
  constructor() {
    super();
    this.state = {
      totalSlides: 3,
      currentSlide: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      let currentSlide = this.state.currentSlide + 1;
      if (currentSlide === 3) currentSlide = 0;
      this.setState({ currentSlide });
    }, 3000);
  }

  render() {
    return (
      <div>
        <div className="home">
          <HomeSidebar />
          <div className="home__main-area">
            <h1>About Me</h1>
            <p>
              Hello, my name is Georgina and I am a third year nursing student. This e-Portfolio is designed to keep my
              reflective pieces together, track progress such as CPD and obviously prepare me for the daunting NMC
              revalidation in three years' time. Spending time in hospital as a child myself I can empathize with those
              in my care with how scary being in unwell can be. Aspiring to be a children's nurse I aim to gain the
              skill set to work with family units to get children back home if they can after illness'.
            </p>
            <p> Below is a gallery to keep you entertained amongst enormous collection of work on this site. </p>

            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={this.state.totalSlides}
              currentSlide={this.state.currentSlide}
            >
              <Slider>
                <Slide className="flex" index={0}>
                  <img src={Slide1} alt="Georgina Cross" />
                  <img src={Slide5} alt="Georgina Cross" />
                  <img src={Slide2} alt="Georgina Cross" />
                </Slide>
                <Slide index={1}>
                  <img src={Slide3} alt="Georgina Cross" />
                </Slide>
                <Slide index={2}>
                  <img src={Slide4} alt="Georgina Cross" />
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
              <DotGroup />
            </CarouselProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
