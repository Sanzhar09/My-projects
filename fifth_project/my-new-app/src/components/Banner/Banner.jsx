import React, { useState,useEffect } from 'react';
import Gucci from '../../images/Gucci.jpg';
import Lv from '../../images/lv.jpg';
import Prada from '../../images/prada.jpg';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Banner.module.scss'


const Banner =() => {

  return (
    <>  
      <Carousel>
        <Carousel.Item>
          <img src={Gucci}
                className={styles.bannerImg}
                />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Lv}
                className={styles.bannerImg}
                alt="gucci"
                />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Prada}
                className={styles.bannerImg}
                alt="gucci"
                />
        </Carousel.Item>
      </Carousel>

    </>
  )
}

export default Banner;