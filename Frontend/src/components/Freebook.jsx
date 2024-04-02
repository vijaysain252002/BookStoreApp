import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import list from '../../public/list.json';
import Card from './Card';

function Freebook() {
    const filterData = list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-bold text-2xl pb-2'>Free Offered Course</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, possimus. Deleniti, sint eveniet recusandae, repudiandae omnis corrupti eligendi pariatur possimus nulla distinctio consequuntur. Nisi, laboriosam consectetur magni suscipit ipsa commodi.
                    </p>
                </div>

                <div>
                    <Slider {...settings}>
                        {filterData.map((item) => (
                            <Card item={item} key={item.id} />
                        )
                        )
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook;