import React, { useContext, useRef } from 'react';

import Slider from 'react-slick';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';
import { certificatesData } from '../../data/certificatesData';

import './Certificates.css';

function Certificates() {
    const { theme } = useContext(ThemeContext);
    const sliderRef = useRef();

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 1,
        loop: true,
        autoplaySpeed: 6000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    };

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <>
            {certificatesData.length > 0 && (
                <div
                    className='certificates'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='certificates--header'>
                        <h1 style={{ color: theme.secondary }}>Certificates</h1>
                    </div>
                    <div className='certificates--body'>
                        <div
                            className='certificates--slider'
                            style={{ backgroundColor: theme.primary }}
                        >
                            <Slider {...settings} ref={sliderRef}>
                                {certificatesData.map((test) => (
                                    <div
                                        className='single--certificate'
                                        key={test.id}
                                    >
                                        <div className='certificates--container'>
                                            <div
                                                className='review--content'
                                                // style={{
                                                //     backgroundColor:
                                                //         theme.secondary,
                                                //     color: theme.tertiary,
                                                // }}
                                            >
                                                <h1>{test.title}</h1>
                                            </div>
                                            <div
                                                className='review--img'
                                                style={{
                                                    backgroundColor:
                                                        theme.secondary,
                                                }}
                                            >
                                                <img
                                                    src={test.image}
                                                    // alt={test.title}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <button
                                className='prevBtn'
                                onClick={gotoPrev}
                                style={{ backgroundColor: theme.secondary }}
                            >
                                <FaArrowLeft
                                    style={{ color: theme.primary }}
                                    aria-label='Previous certificate'
                                />
                            </button>
                            <button
                                className='nextBtn'
                                onClick={gotoNext}
                                style={{ backgroundColor: theme.secondary }}
                            >
                                <FaArrowRight
                                    style={{ color: theme.primary }}
                                    aria-label='Next certificate'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Certificates;