import React from 'react'
import icon from '../../assets/placemark.png'
import './placemark.css'

export default ({marker, onClick, $hover}) => (
    <div className='placemark' onClick={onClick} style={{zIndex:$hover?2:1}}>
    <img className='icon' src={ icon }/>
    {$hover ? <div className='hint'> { marker.name } </div> : null}
</div>)
