import React from 'react'
import ReactDOM from 'react-dom/client'


export default function Header({ heading }) {
    return (
        <h1 className='header'>{heading}</h1>
    );
}