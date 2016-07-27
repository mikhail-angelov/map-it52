import React from 'react'
import './balloon.css'

export default ({marker, onDetails, onClose}) => (<div className='balloon'>
    <img className='icon' src = { marker.logo['90']}/>
    <div className='balloon-name'>{marker.name}</div>
    <button className='balloon-details'onClick={onDetails}>Посмотреть</button>
    <button className='balloon-close'onClick={onClose}></button>
</div>)