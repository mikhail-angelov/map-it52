import React from 'react'
import icon from '../../assets/placemark.png'
import './placemark.css'

export default ({marker, onClick, $hover}) => (<div className='placemark' onClick={onClick}>
    <img className='icon' src={ icon }/>
    {$hover ? <div className='hint'> { marker.name } </div> : null}
</div>)
