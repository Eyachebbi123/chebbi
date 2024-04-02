import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import FsLightbox from 'fslightbox-react';
import galleryone from '../../assets/images/resource/testt.png'
import gallerytwo from '../../assets/images/resource/testt.png'
import gallerythree from '../../assets/images/resource/testt.png'
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

function Sliderabout() {
    const options = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }

    const [images, setImages] = useState([
        galleryone,
        gallerytwo,
        gallerythree,
        galleryone,
        gallerytwo,
        gallerythree,
    ])

    const [img, setImg] = useState()
    const [img1, setImg1] = useState()
    const [img2, setImg2] = useState()
    const [img3, setImg3] = useState()
    const [img4, setImg4] = useState()
    const [img5, setImg5] = useState()

    const [toggler, setToggler] = useState(false);

    const [activeImage, setActiveImage] = useState(1)

    return (
        <>
            <section className="image-gallery">
                <div className="carousel-box">
                    <Swiper {...options} loop={true} slidesPerView={1.5} centeredSlides={true} spaceBetween={30}
                        grabCursor={true} modules={[]} className="mySwiper">
                            
                        <SwiperSlide className="gallery-block">
                            <div className="image">
                                <Link to="#" onClick={() => setImg(true)} className="lightbox-image" data-fancybox="gallery">
                                    <figure className="gallery-image" onClick={() => {
                                        setToggler(!toggler)
                                        setActiveImage(1)
                                    }}>

                                        <img src={galleryone} alt="" />
                                    </figure>
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="gallery-block item">
                            <div className="image">
                                <Link to="#" onClick={() => setImg1(true)} className="lightbox-image" data-fancybox="gallery">

                                    <figure className="gallery-image" onClick={() => {
                                        setToggler(!toggler)
                                        setActiveImage(2)
                                    }}>

                                        <img src={gallerytwo} alt="" />
                                    </figure>
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="gallery-block item">
                            <div className="image">
                                <Link to="#" onClick={() => setImg2(true)} className="lightbox-image" data-fancybox="gallery">


                                    <figure className="gallery-image" onClick={() => {
                                        setToggler(!toggler)
                                        setActiveImage(3)
                                    }}>

                                        <img src={gallerythree} alt="" />
                                    </figure>

                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="gallery-block item">
                            <div className="image">

                                <Link to="#" onClick={() => setImg3(true)} className="lightbox-image" data-fancybox="gallery">
                                    <figure className="gallery-image" onClick={() => {
                                        setToggler(!toggler)
                                        setActiveImage(4)
                                    }}>

                                        <img src={galleryone} alt="" />
                                    </figure>

                                </Link>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="gallery-block item">
                            <div className="image">
                                <Link to="#" onClick={() => setImg4(true)} className="lightbox-image" data-fancybox="gallery">
                                    <figure className="gallery-image" onClick={() => {
                                        setToggler(!toggler)
                                        setActiveImage(5)
                                    }}>

                                        <img src={gallerytwo} alt="" />
                                    </figure>

                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="gallery-block item">
                            <div className="image">
                                <Link to="#" onClick={() => setImg5(true)} className="lightbox-image" data-fancybox="gallery">

                                    <figure className="gallery-image" onClick={() => {
                                        setToggler(!toggler)
                                        setActiveImage(6)
                                    }}>

                                        <img src={gallerythree} alt="" />
                                    </figure>
                                </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </section>
            <FsLightbox toggler={toggler} sources={images} slide={activeImage} />
        </>
    );
}

export default Sliderabout