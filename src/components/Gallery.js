import React from 'react';
import {useState}  from "react";
import Carousel from 'react-bootstrap/Carousel';



export default function Gallery() {    
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };
        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img src="../img/Sakura.jpg" className="d-block w-100" alt="Sakura" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="../img/casle1.jpg" className="d-block w-100" alt="casle1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="../img/river.JPG" className="d-block w-100" alt="river" />
                </Carousel.Item>
            </Carousel>
        );
    }

