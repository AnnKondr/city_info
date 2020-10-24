import React from 'react';
import Regalia from './Regalia';
import About from './About';
import Gallery from './Gallery';



export default function City() {
    return (
        <>
            <h1 className="text-center p-2">Хуст</h1>
            <Regalia></Regalia>
            <About></About>
            <Gallery ></Gallery>
        </>)
}