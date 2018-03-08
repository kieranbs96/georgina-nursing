import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

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
      if (currentSlide === 5) currentSlide = 0;
      this.setState({ currentSlide });
    }, 3000);
  }

  render() {
    return (
      <div>
        <div className="home">
          <div className="home__sidebar">
            <div className="home__sidebar-box">
              <h3 className="home__sidebar-box-heading">Overview</h3>

              <div className="home__sidebar-box-info-box">
                <h4 className="home__sidebar-box-subheading">Education</h4>
                <p>King's College London</p>
              </div>

              <div className="home__sidebar-box-info-box">
                <h4 className="home__sidebar-box-subheading">Work Experience</h4>
                <p>Evelina London Children's Hospital</p>
                <p>University Hospital Lewisham</p>
              </div>

              <div className="home__sidebar-box-info-box">
                <h4 className="home__sidebar-box-subheading">Location</h4>
                <p>London, GB</p>
              </div>
            </div>
            <div className="home__sidebar-box">
              <h2 className="home__sidebar-box-main-heading">Skills</h2>
              <ul className="home__sidebar-box-skill-list">
                <li className="home__sidebar-box-skill-item">Patient Care</li>
                <li className="home__sidebar-box-skill-item">Professionalism</li>
                <li className="home__sidebar-box-skill-item">Evidence Based Practice</li>
                <li className="home__sidebar-box-skill-item">Critical Thinking</li>
                <li className="home__sidebar-box-skill-item">Teamwork</li>
                <li className="home__sidebar-box-skill-item">a</li>
                <li className="home__sidebar-box-skill-item">b</li>
                <li className="home__sidebar-box-skill-item">c</li>
                <li className="home__sidebar-box-skill-item">d</li>
                <li className="home__sidebar-box-skill-item">e</li>
              </ul>
            </div>
          </div>
          <div className="home__main-area">
            <h1>About Me</h1>
            <p>
              Hello, my name is Georgina and I am a third year nursing student. This e-Portfolio is designed to keep my
              reflective pieces together, track progress such as CPD and obviously prepare me for the daunting NMC
              revalidation in three years' time.
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
                <Slide index={2}>
                  <img src={Slide3} alt="Georgina Cross" />
                </Slide>
                <Slide index={3}>
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
