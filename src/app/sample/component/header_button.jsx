import React from 'react';

export function Button({title, link}){
    return (
        <>
            <a href={link} className="text-white text-lg md:text-xl hover:text-black hover:scale-105 transition-transform duration-300">{title}</a>
        </>
    );
}